import re

def main():
    with open('src/App.jsx', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add ArrowRight to imports
    if 'ArrowRight' not in content:
        content = content.replace('ArrowLeft, Building', 'ArrowLeft, ArrowRight, Building')
        
    # 2. getTabFromPath
    target_get_tab = "if (path.startsWith('/blog/')) return 'blog-post';"
    replacement_get_tab = "if (path.startsWith('/blog/')) return 'blog-post';\n    if (path.startsWith('/diensten/')) return 'service-detail';"
    content = content.replace(target_get_tab, replacement_get_tab)
    
    # 3. currentSlug init
    target_slug = "if (window.location.pathname.startsWith('/blog/')) return window.location.pathname.split('/blog/')[1];"
    replacement_slug = "if (window.location.pathname.startsWith('/blog/')) return window.location.pathname.split('/blog/')[1];\n    if (window.location.pathname.startsWith('/diensten/')) return window.location.pathname.split('/diensten/')[1];"
    content = content.replace(target_slug, replacement_slug)
    
    # 4. renderView
    target_render = "if (activeTab === 'blog-post') return <BlogPostView slug={currentSlug} nav={nav} />;"
    replacement_render = "if (activeTab === 'blog-post') return <BlogPostView slug={currentSlug} nav={nav} />;\n    if (activeTab === 'service-detail') return <ServiceDetailView slug={currentSlug} nav={nav} />;"
    content = content.replace(target_render, replacement_render)
    
    # 5. Add ServiceDetailView before ServicesView and change <ServicesView /> to <ServicesView nav={nav} />
    service_detail_view_code = """
function ServiceDetailView({ slug, nav }) {
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return <div className="text-center py-20"><h1 className="text-2xl font-bold">Dienst niet gevonden.</h1><button onClick={() => nav('services')} className="mt-4 text-indigo-600 underline">Terug naar diensten</button></div>;

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
      <a href="/diensten" onClick={(e) => { e.preventDefault(); nav('services'); }} className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Terug naar Diensten
      </a>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl ${service.bg || 'bg-indigo-50 text-indigo-600'}`}>
        {service.icon}
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">{service.title}</h1>
      <p className="text-xl text-slate-600 mb-8">{service.desc}</p>
      <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-indigo-600">
        <p>{service.fullDesc}</p>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200">
        <button onClick={() => nav('contact')} className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors inline-flex items-center">
          Vraag een offerte aan voor deze dienst
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </motion.div>
  );
}
"""
    # Find `function ServicesView() {`
    content = content.replace('function ServicesView() {', service_detail_view_code + '\nfunction ServicesView({ nav }) {')
    content = content.replace('<ServicesView />', '<ServicesView nav={nav} />')
    
    # 6. Update ServicesView Links
    services_view_old = '''        {servicesData.map((service, idx) => (
          <motion.div 
            variants={fadeUpVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            key={idx} 
            onClick={() => setExpandedService(expandedService === idx ? null : idx)} 
            className={cn(
              "glass-panel p-6 rounded-3xl cursor-pointer transition-all duration-500",
              expandedService === idx ? "ring-2 ring-indigo-500/50 bg-white" : "hover:border-white/50"
            )}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-50 rounded-2xl inline-block shadow-sm">{service.icon}</div>
              <motion.div animate={{ rotate: expandedService === idx ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </motion.div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
            <p className={cn("text-sm leading-relaxed", expandedService === idx ? "text-slate-900 font-semibold" : "text-slate-600")}>{service.desc}</p>
            <AnimatePresence>
              {expandedService === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">{service.fullDesc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}'''
        
    services_view_new = '''        {servicesData.map((service, idx) => (
          <motion.a 
            href={'/diensten/' + service.slug}
            onClick={(e) => { e.preventDefault(); nav('service-detail', service.slug); }}
            variants={fadeUpVariant} 
            whileHover={{ y: -5 }} 
            key={idx} 
            className="glass-panel p-8 rounded-3xl flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 block"
          >
            <div className="p-3 bg-indigo-50 rounded-2xl inline-block shadow-sm mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.desc}</p>
          </motion.a>
        ))}'''
        
    content = content.replace(services_view_old, services_view_new)
    
    # 7. Update SEOManager
    # Replace dynamicSeo prop
    seo_old = """        dynamicSeo={activeTab === 'blog-post' ? (() => {
          const post = blogPosts.find(p => p.slug === currentSlug);
          if (!post) return null;
          const siteUrl = 'https://www.dzydigital.com';
          return {
            title: post.title + ' | DZY Digital',
            description: post.description,
            keywords: 'software, digitale transformatie, technologieartikel, ' + post.category.toLowerCase(),
            path: '/blog/' + post.slug,
            schema: [
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.description,
                "datePublished": post.date,
                "author": {
                  "@type": "Organization",
                  "name": "DZY Digital",
                  "url": siteUrl
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DZY Digital",
                  "logo": {
                    "@type": "ImageObject",
                    "url": siteUrl + '/og-image.png'
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": siteUrl + '/blog/' + post.slug
                },
                "image": siteUrl + '/og-image.png'
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl + "/" },
                  { "@type": "ListItem", "position": 2, "name": "Blog", "item": siteUrl + "/blog" },
                  { "@type": "ListItem", "position": 3, "name": post.title, "item": siteUrl + "/blog/" + post.slug }
                ]
              }
            ]
          };
        })() : null}"""
        
    seo_new = """        dynamicSeo={(() => {
          const siteUrl = 'https://www.dzydigital.com';
          if (activeTab === 'blog-post') {
            const post = blogPosts.find(p => p.slug === currentSlug);
            if (!post) return null;
            return {
              title: post.title + ' | DZY Digital',
              description: post.description,
              keywords: 'software, digitale transformatie, technologieartikel, ' + post.category.toLowerCase(),
              path: '/blog/' + post.slug,
              schema: [
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "description": post.description,
                  "datePublished": post.date,
                  "author": {
                    "@type": "Organization",
                    "name": "DZY Digital",
                    "url": siteUrl
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "DZY Digital",
                    "logo": {
                      "@type": "ImageObject",
                      "url": siteUrl + '/og-image.png'
                    }
                  },
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": siteUrl + '/blog/' + post.slug
                  },
                  "image": siteUrl + '/og-image.png'
                },
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl + "/" },
                    { "@type": "ListItem", "position": 2, "name": "Blog", "item": siteUrl + "/blog" },
                    { "@type": "ListItem", "position": 3, "name": post.title, "item": siteUrl + "/blog/" + post.slug }
                  ]
                }
              ]
            };
          }
          if (activeTab === 'service-detail') {
            const service = servicesData.find(s => s.slug === currentSlug);
            if (!service) return null;
            return {
              title: service.title + ' | DZY Digital',
              description: service.desc,
              keywords: 'software, ' + service.title.toLowerCase(),
              path: '/diensten/' + service.slug,
              schema: [
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": service.title,
                  "description": service.desc,
                  "provider": {
                    "@type": "Organization",
                    "name": "DZY Digital",
                    "url": siteUrl
                  }
                },
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl + "/" },
                    { "@type": "ListItem", "position": 2, "name": "Diensten", "item": siteUrl + "/diensten" },
                    { "@type": "ListItem", "position": 3, "name": service.title, "item": siteUrl + "/diensten/" + service.slug }
                  ]
                }
              ]
            };
          }
          return null;
        })()}"""
        
    content = content.replace(seo_old, seo_new)
    
    # Check if we should remove expandedService logic from ServicesView
    content = content.replace('const [expandedService, setExpandedService] = useState(null);\n', '')
    
    with open('src/App.jsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    main()
