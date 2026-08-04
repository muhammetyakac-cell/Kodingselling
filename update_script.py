import re

file_path = r'c:\Users\Deniz\Desktop\Projeler\Kodingselling-vercel-vercel-web-analytics-integrati-1ycm3n\src\App.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. getTabFromPath
content = content.replace(
'''  const getTabFromPath = (path) => {
    if (path.startsWith('/blog/')) return 'blog-post';
    return pathToTab[path] || 'home';
  };''',
'''  const getTabFromPath = (path) => {
    if (path.startsWith('/blog/categorie/')) return 'blog-category';
    if (path.startsWith('/blog/')) return 'blog-post';
    return pathToTab[path] || 'home';
  };'''
)

# 2. currentSlug
content = content.replace(
'''    const [currentSlug, setCurrentSlug] = useState(() => {
      if (window.location.pathname.startsWith('/blog/')) return window.location.pathname.split('/blog/')[1];
      return null;
    });''',
'''    const [currentSlug, setCurrentSlug] = useState(() => {
      if (window.location.pathname.startsWith('/blog/categorie/')) return decodeURIComponent(window.location.pathname.split('/blog/categorie/')[1]);
      if (window.location.pathname.startsWith('/blog/')) return window.location.pathname.split('/blog/')[1];
      return null;
    });'''
)

# 3. nav
content = content.replace(
'''      if (tab === 'blog-post' && slug) {
        setCurrentSlug(slug);
        path = '/blog/' + slug;
      }
      window.history.pushState({}, '', path);''',
'''      if (tab === 'blog-post' && slug) {
        setCurrentSlug(slug);
        path = '/blog/' + slug;
      } else if (tab === 'blog-category' && slug) {
        setCurrentSlug(slug);
        path = '/blog/categorie/' + slug;
      }
      window.history.pushState({}, '', path);'''
)

# 4. onPopState
content = content.replace(
'''      const onPopState = () => {
        const path = window.location.pathname;
        setActiveTab(getTabFromPath(path));
        if (path.startsWith('/blog/')) {
          setCurrentSlug(path.split('/blog/')[1]);
        }
      };''',
'''      const onPopState = () => {
        const path = window.location.pathname;
        setActiveTab(getTabFromPath(path));
        if (path.startsWith('/blog/categorie/')) {
          setCurrentSlug(decodeURIComponent(path.split('/blog/categorie/')[1]));
        } else if (path.startsWith('/blog/')) {
          setCurrentSlug(path.split('/blog/')[1]);
        }
      };'''
)

# 5. renderView
content = content.replace(
'''      if (activeTab === 'blog') return <BlogView nav={nav} />;
      if (activeTab === 'blog-post') return <BlogPostView slug={currentSlug} nav={nav} />;''',
'''      if (activeTab === 'blog') return <BlogView nav={nav} />;
      if (activeTab === 'blog-category') return <BlogCategoryView category={currentSlug} nav={nav} />;
      if (activeTab === 'blog-post') return <BlogPostView slug={currentSlug} nav={nav} />;'''
)

# 6. SEOManager
content = content.replace(
'''          dynamicSeo={activeTab === 'blog-post' ? (() => {''',
'''          dynamicSeo={activeTab === 'blog-category' ? {
              title: `Categorie: ${currentSlug} | DZY Digital`,
              description: `Artikelen en inzichten over ${currentSlug}`,
              keywords: 'software, digitale transformatie, technologieartikel, ' + currentSlug,
              path: '/blog/categorie/' + currentSlug
            } : activeTab === 'blog-post' ? (() => {'''
)

# 7. BlogView badges
content = content.replace(
'''<span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">{post.category}</span>''',
'''<a href={`/blog/categorie/${post.category.toLowerCase().replace(/ /g, '-')}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); nav('blog-category', post.category.toLowerCase().replace(/ /g, '-')); }} className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors z-10 relative cursor-pointer">{post.category}</a>'''
)

# 8. BlogPostView badges
content = content.replace(
'''<span className="text-sm font-bold px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">{post.category}</span>''',
'''<a href={`/blog/categorie/${post.category.toLowerCase().replace(/ /g, '-')}`} onClick={(e) => { e.preventDefault(); nav('blog-category', post.category.toLowerCase().replace(/ /g, '-')); }} className="text-sm font-bold px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full hover:bg-indigo-200 transition-colors inline-block cursor-pointer">{post.category}</a>'''
)

# 9. ContactView map
map_code = '''                </div>
                <div className="mt-8 bg-slate-200 rounded-3xl h-64 flex items-center justify-center relative overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.572390623192!2d4.3953!3d51.2094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f71c4c1143c7%3A0x8f2d5e2e8e3d8c1c!2sMarkgravelei%20145%2C%202018%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-800">'''
content = content.replace(
'''                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-800">''',
map_code)

# 10. BlogCategoryView Component
blog_category_component = '''
function BlogCategoryView({ category, nav }) {
  const filteredPosts = blogPosts.filter(p => p.category.toLowerCase().replace(/ /g, '-') === category.toLowerCase() || p.category === category);
  
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-5xl mx-auto space-y-12">
      <a href="/blog" onClick={(e) => { e.preventDefault(); nav('blog'); }} className="inline-flex items-center text-indigo-600 font-semibold mb-2 hover:text-indigo-800 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" /> Terug naar de Kennisbank
      </a>
      <motion.div variants={fadeUpVariant} className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Categorie: {category}</h1>
        <p className="text-xl text-slate-600">Artikelen en inzichten over {category}</p>
      </motion.div>
      {filteredPosts.length === 0 ? (
        <div className="text-center py-10">Geen artikelen gevonden in deze categorie.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <motion.div variants={fadeUpVariant} whileHover={{ y: -5 }} key={post.slug} className="glass-panel rounded-3xl overflow-hidden flex flex-col group">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <a href={`/blog/categorie/${post.category.toLowerCase().replace(/ /g, '-')}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); nav('blog-category', post.category.toLowerCase().replace(/ /g, '-')); }} className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors z-10 relative cursor-pointer">
                    {post.category}
                  </a>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 mb-6 flex-1 line-clamp-3">{post.description}</p>
                <a href={'/blog/' + post.slug} onClick={(e) => { e.preventDefault(); nav('blog-post', post.slug); }} className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors mt-auto">
                  Lees Artikel <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
'''
if 'BlogCategoryView({' not in content:
    content += blog_category_component

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')
