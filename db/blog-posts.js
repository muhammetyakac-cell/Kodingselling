// Blog Posts Data - DZY Digital
// Generated: 04 Temmuz 2026

const blogPosts = [
  {
    id: 1,
    slug: 'supabase-rls-politikalari-guvenli-multi-tenant-mimari',
    title: 'Supabase RLS Politikaları: Güvenli Multi-Tenant Mimari Nasıl Kurulur?',
    category: 'Güvenlik',
    date: '04 Temmuz 2026',
    readTime: '25 dk okuma',
    excerpt: 'Supabase Row Level Security (RLS) politikalarını kullanarak çoklu kiracılı uygulamalarda veri güvenliğini nasıl sağlayacağınızı adım adım öğrenin.',
    content: `<h2>Giriş: Multi-Tenant Uygulamalarda Güvenlik Neden Önemli?</h2><p>Modern SaaS uygulamaları genellikle aynı veritabanını paylaşan birden fazla müşteri (tenant) barındırır. Bu mimari, maliyet verimliliği sağlar ancak veri sızıntısı riskini de beraberinde getirir. Supabase, PostgreSQL tabanlı open-source bir backend platformudur ve <strong>Row Level Security (RLS)</strong> özelliği sayesinde veritabanı seviyesinde güvenlik sağlar.</p><p>Bu yazıda, Supabase RLS politikalarını kullanarak güvenli bir multi-tenant mimari kurmayı, gerçek SQL örnekleriyle gösterip, performans optimizasyonları ve sık karşılaşılan hataları ele alacağız.</p><h2>Bölüm 1: RLS Temelleri</h2><h3>1.1 Row Level Security Nedir?</h3><p>Row Level Security, PostgreSQL 9.5'ten bu yana yerleşik olarak bulunan bir özelliktir. Her tabloda ayrı ayrı etkinleştirilebilir.</p><pre><code>-- Bir tabloda RLS'yi etkinleştirme
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;</code></pre><p>RLS etkinleştirildiğinde, varsayılan olarak <strong>hiçbir kullanıcı</strong> o tablodaki verileri göremez. Politikalar ekleyerek belirli koşullar altında erişim izni verirsiniz.</p><h3>1.2 RLS Politikalarının Temel Yapısı</h3><pre><code>-- Temel politika oluşturma sözdizimi
CREATE POLICY policy_name ON table_name
  AS PERMISSIVE | RESTRICTIVE
  FOR SELECT | INSERT | UPDATE | DELETE | ALL
  TO role_name
  USING (condition)
  WITH CHECK (condition);</code></pre><p><strong>Parametreler:</strong></p><ul><li><code>PERMISSIVE</code>: Aynı türdeki birden fazla politika varsa, herhangi birinin koşulu sağlanması yeterlidir.</li><li><code>RESTRICTIVE</code>: Tüm politikaların koşulunun sağlanması gerekir.</li><li><code>USING</code>: Mevcut satırlar üzerinde filtre uygular.</li><li><code>WITH CHECK</code>: Yeni eklenen veya güncellenen satırlar için koşul belirler.</li></ul><h3>1.3 auth() ve JWT Fonksiyonları</h3><pre><code>-- JWT claimlerine erişim
auth.uid()                    -- Kullanıcının UUID'si
auth.role()                   -- Kullanıcının rolü
auth.email()                  -- Kullanıcının e-postası
auth.jwt()                    -- Tüm JWT payload'u
auth.jwt()->>'sub'            -- Subject claim
auth.jwt()->'app_metadata'    -- app_metadata claim</code></pre><pre><code>-- Örnek: Kullanıcının kendi verilerini görmesi
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT TO authenticated
  USING (auth.uid() = id);

-- Örnek: Admin politikası
CREATE POLICY "Admins can view all"
  ON profiles FOR SELECT TO authenticated
  USING (auth.jwt()->'app_metadata'->>'role' = 'admin');</code></pre><h2>Bölüm 2: Multi-Tenant Mimari Tasarımı</h2><h3>2.1 Tenant Identifikasyon Stratejileri</h3><pre><code>-- Tenant tablosu
CREATE TABLE tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Kullanıcı-Tenant ilişkisi
CREATE TABLE user_tenants (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (user_id, tenant_id)
);</code></pre><h3>2.2 Helper Fonksiyonları Oluşturma</h3><pre><code>-- Kullanıcının tenant'ta member olup olmadığını kontrol eden fonksiyon
CREATE OR REPLACE FUNCTION public.user_has_tenant_access(tenant_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_tenants
    WHERE user_id = auth.uid() AND tenant_id = tenant_uuid
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Kullanıcının tenant'taki rolünü döndüren fonksiyon
CREATE OR REPLACE FUNCTION public.get_user_tenant_role(tenant_uuid UUID)
RETURNS TEXT AS $$
DECLARE
  user_role TEXT;
BEGIN
  SELECT role INTO user_role
  FROM user_tenants
  WHERE user_id = auth.uid() AND tenant_id = tenant_uuid;
  RETURN COALESCE(user_role, 'none');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;</code></pre><h2>Bölüm 3: Gerçek Dünya RLS Politikaları</h2><h3>3.1 Proje Yönetimi Uygulaması Örneği</h3><pre><code>-- Tablo oluşturma
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'enterprise')),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE org_members (
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (org_id, user_id)
);

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  visibility TEXT DEFAULT 'private' CHECK (visibility IN ('private', 'internal', 'public')),
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'review', 'done')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  assignee_id UUID REFERENCES auth.users(id),
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);</code></pre><h3>3.2 RLS Politikaları</h3><pre><code>-- RLS'yi etkinleştirme
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE org_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Organizations politikaları
CREATE POLICY "org_select" ON organizations
  FOR SELECT TO authenticated
  USING (id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid()));

CREATE POLICY "org_insert" ON organizations
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "org_update" ON organizations
  FOR UPDATE TO authenticated
  USING (id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid() AND role IN ('owner', 'admin')))
  WITH CHECK (id IN (SELECT org_id FROM org_members WHERE user_id = auth.uid() AND role IN ('owner', 'admin')));

-- Tasks politikaları
CREATE POLICY "tasks_select" ON tasks
  FOR SELECT TO authenticated
  USING (org_id IN (SELECT om.org_id FROM org_members om WHERE om.user_id = auth.uid()));

CREATE POLICY "tasks_insert" ON tasks
  FOR INSERT TO authenticated
  WITH CHECK (org_id IN (SELECT om.org_id FROM org_members om WHERE om.user_id = auth.uid() AND om.role IN ('owner', 'admin', 'member')));

CREATE POLICY "tasks_update" ON tasks
  FOR UPDATE TO authenticated
  USING (
    (assignee_id = auth.uid()) OR
    (created_by = auth.uid()) OR
    (org_id IN (SELECT om.org_id FROM org_members om WHERE om.user_id = auth.uid() AND om.role IN ('owner', 'admin')))
  )
  WITH CHECK (
    (assignee_id = auth.uid()) OR
    (created_by = auth.uid()) OR
    (org_id IN (SELECT om.org_id FROM org_members om WHERE om.user_id = auth.uid() AND om.role IN ('owner', 'admin')))
  );</code></pre><h2>Bölüm 4: Performans Optimizasyonu</h2><h3>4.1 İndeks Stratejisi</h3><pre><code>-- user_id ve tenant/org_id için bileşik indeks
CREATE INDEX idx_user_tenants_user_id ON user_tenants(user_id);
CREATE INDEX idx_user_tenants_org_id ON user_tenants(org_id);
CREATE INDEX idx_user_tenants_composite ON user_tenants(user_id, org_id);

-- Projects tablosu için
CREATE INDEX idx_projects_org_id ON projects(org_id);

-- Tasks tablosu için kritik indeksler
CREATE INDEX idx_tasks_org_id ON tasks(org_id);
CREATE INDEX idx_tasks_project_id ON tasks(project_id);
CREATE INDEX idx_tasks_assignee_id ON tasks(assignee_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_composite ON tasks(org_id, status, priority);</code></pre><h3>4.2 RLS Sorgu Planı Analizi</h3><pre><code>-- Sorgu planını inceleme
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT * FROM tasks WHERE org_id = 'some-org-uuid';

-- RLS politikalarının eklediği filtreleri görmek için
EXPLAIN (ANALYZE, BUFFERS, VERBOSE)
SELECT t.* FROM tasks t WHERE t.status = 'in_progress';</code></pre><h3>4.3 SECURITY DEFINER Fonksiyonların Kullanımı</h3><pre><code>-- Materialized view ile performans artışı
CREATE MATERIALIZED VIEW user_org_access AS
SELECT user_id, org_id, role FROM org_members;

-- Refresh trigger ile
CREATE OR REPLACE FUNCTION refresh_user_org_access()
RETURNS TRIGGER AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY user_org_access;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_refresh_org_access
  AFTER INSERT OR UPDATE OR DELETE ON org_members
  FOR EACH STATEMENT
  EXECUTE FUNCTION refresh_user_org_access();</code></pre><h2>Bölüm 5: Yaygın Hatalar ve Çözümleri</h2><h3>5.1 RLS Etkinleştirilmemiş Tablolar</h3><pre><code>-- Kontrol: Hangi tablolarda RLS etkin?
SELECT schemaname, tablename, rowsecurity
FROM pg_tables WHERE schemaname = 'public' AND rowsecurity = false;

-- Çözüm: Tüm tabloları etkinleştir
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE org_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;</code></pre><h3>5.2 N+1 RLS Problemi</h3><pre><code-- Toplu sorgu ile performans optimizasyonu
const { data, error } = await supabase
  .from('tasks')
  .select(\`
    id, title, status, priority,
    projects!inner (id, name, org_id),
    assignee:auth.users (id, email)
  \`)
  .eq('status', 'in_progress')
  .order('priority', { ascending: false });</code></pre><h2>Sonuç</h2><p>Supabase RLS politikaları, multi-tenant uygulamalarda güçlü bir güvenlik katmanı sunar. Doğru kullanıldığında, veritabanı seviyesinde veri izolasyonu sağlar.</p><ul><li>Her tabloda RLS'yi etkinleştirin</li><li>Helper fonksiyonları ile politikaları basitleştirin</li><li>Doğru indeksler ile performansı koruyun</li><li>Test senaryoları ile politikaları doğrulayın</li><li>EXPLAIN analizi ile sorgu planlarını izleyin</li></ul><p>DZY Digital olarak, müşterilerimizin güvenli ve ölçeklenebilir uygulamalar geliştirmesine yardımcı oluyoruz.</p>`
  },
  {
    id: 2,
    slug: 'websocket-ile-gercek-zamanli-uygulama-gelistirme',
    title: 'WebSocket ile Gerçek Zamanlı Uygulama Geliştirme Rehberi',
    category: 'Teknik',
    date: '04 Temmuz 2026',
    readTime: '22 dk okuma',
    excerpt: 'WebSocket protokolünün temellerinden, Socket.io ve native WebSocket karşılaştırmasına, room yönetiminden ölçeklendirme stratejilerine kadar kapsamlı rehber.',
    content: `<h2>Giriş: Gerçek Zamanlı İletişimin Evrimi</h2><p>Web uygulamalarında gerçek zamanlı iletişim, uzun süre HTTP polling, Long Polling ve Server-Sent Events (SSE) gibi yöntemlerle sağlanmıştır. WebSocket protokolü (RFC 6455), 2011 yılında standardize edilmiştir ve istemci ile sunucu arasında tam duplex (çift yönlü) iletişim kurar.</p><h2>Bölüm 1: WebSocket Temelleri</h2><h3>1.1 WebSocket Handshake</h3><pre><code>-- İstemci tarafı handshake isteği
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

-- Sunucu tarafı yanıt
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=</code></pre><h3>1.2 Native WebSocket Kullanımı</h3><pre><code>// Tarayıcı tarafı (Client)
const socket = new WebSocket('ws://localhost:3000');

socket.onopen = (event) => {
  console.log('Bağlantı kuruldu:', event);
  socket.send(JSON.stringify({ type: 'join', room: 'general' }));
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Mesaj alındı:', data);
};

socket.onclose = (event) => {
  if (event.wasClean) {
    console.log('Bağlantı temiz kapatıldı');
  } else {
    console.log('Bağlantı kesildi - yeniden bağlanılıyor...');
    reconnect();
  }
};

socket.onerror = (error) => {
  console.error('WebSocket hatası:', error);
};

// Yeniden bağlanma mantığı
let reconnectAttempts = 0;
const maxReconnectAttempts = 5;

function reconnect() {
  if (reconnectAttempts < maxReconnectAttempts) {
    const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000);
    setTimeout(() => {
      reconnectAttempts++;
      const newSocket = new WebSocket('ws://localhost:3000');
    }, delay);
  }
}</code></pre><pre><code>// Node.js sunucu tarafı (ws kütüphanesi)
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

// Heartbeat mekanizması
const heartbeatInterval = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('connection', (ws, req) => {
  ws.isAlive = true;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(\`Yeni bağlantı: \${ip}\`);

  ws.on('pong', () => { ws.isAlive = true; });

  ws.on('message', (message, isBinary) => {
    if (isBinary) return;
    const data = JSON.parse(message.toString());
    
    switch (data.type) {
      case 'chat':
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: 'chat', user: data.user,
              message: data.message, timestamp: Date.now()
            }));
          }
        });
        break;
      case 'ping':
        ws.send(JSON.stringify({ type: 'pong' }));
        break;
    }
  });

  ws.on('close', () => console.log('Bağlantı kapatıldı'));
  ws.on('error', (error) => console.error('WebSocket hatası:', error));
});</code></pre><h2>Bölüm 2: Socket.io vs Native WebSocket</h2><h3>2.1 Socket.io Örneği</h3><pre><code>// Sunucu tarafı
import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
  pingTimeout: 60000,
  pingInterval: 25000
});

// Namespace oluşturma
const chatNamespace = io.of('/chat');
const notificationNamespace = io.of('/notifications');

// Middleware
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (verifyToken(token)) {
    socket.userId = decodeToken(token).userId;
    next();
  } else {
    next(new Error('Authentication error'));
  }
});

// Room bazlı bağlantı
chatNamespace.on('connection', (socket) => {
  console.log(\`Kullanıcı bağlandı: \${socket.userId}\`);

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', {
      userId: socket.userId, timestamp: Date.now()
    });
  });

  socket.on('send-message', (data) => {
    const message = {
      id: generateId(), userId: socket.userId,
      content: data.content, room: data.room, timestamp: Date.now()
    };
    socket.to(data.room).emit('new-message', message);
    socket.emit('message-sent', { id: message.id, status: 'delivered' });
  });

  socket.on('typing', (data) => {
    socket.to(data.room).emit('user-typing', {
      userId: socket.userId, isTyping: data.isTyping
    });
  });

  socket.on('disconnect', (reason) => {
    console.log(\`Kullanıcı ayrıldı: \${socket.userId}, Sebep: \${reason}\`);
  });
});</code></pre><pre><code>// Socket.io istemci tarafı
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000/chat', {
  auth: { token: 'user-jwt-token' },
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 10000
});

socket.on('connect', () => console.log('Bağlantı kuruldu:', socket.id));
socket.on('disconnect', (reason) => console.log('Bağlantı kesildi:', reason));
socket.on('connect_error', (error) => console.error('Bağlantı hatası:', error.message));

function joinRoom(roomId) { socket.emit('join-room', roomId); }
function sendMessage(roomId, content) { socket.emit('send-message', { room: roomId, content }); }

socket.on('new-message', (message) => {
  console.log('Yeni mesaj:', message);
  updateChatUI(message);
});

socket.on('user-typing', (data) => showTypingIndicator(data.userId, data.isTyping));</code></pre><h2>Bölüm 3: Room Yönetim Stratejileri</h2><pre><code>// Room veri yapısı
interface Room {
  id: string;
  name: string;
  type: 'public' | 'private' | 'direct';
  members: Map<string, SocketMember>;
  maxMembers: number;
  createdAt: Date;
}

interface SocketMember {
  socketId: string;
  userId: string;
  username: string;
  joinedAt: Date;
  isOnline: boolean;
}

// Room yöneticisi sınıfı
class RoomManager {
  private rooms: Map<string, Room> = new Map();
  private userRooms: Map<string, Set<string>> = new Map();

  createRoom(id: string, name: string, type: Room['type'] = 'public'): Room {
    const room: Room = {
      id, name, type, members: new Map(),
      maxMembers: type === 'direct' ? 2 : 100, createdAt: new Date()
    };
    this.rooms.set(id, room);
    return room;
  }

  joinRoom(roomId: string, member: SocketMember): boolean {
    const room = this.rooms.get(roomId);
    if (!room) return false;
    if (room.members.size >= room.maxMembers) return false;
    room.members.set(member.socketId, member);
    if (!this.userRooms.has(member.userId)) {
      this.userRooms.set(member.userId, new Set());
    }
    this.userRooms.get(member.userId)!.add(roomId);
    return true;
  }

  leaveRoom(roomId: string, socketId: string): void {
    const room = this.rooms.get(roomId);
    if (room) {
      const member = room.members.get(socketId);
      room.members.delete(socketId);
      if (member) {
        const userRoomSet = this.userRooms.get(member.userId);
        if (userRoomSet) {
          userRoomSet.delete(roomId);
          if (userRoomSet.size === 0) this.userRooms.delete(member.userId);
        }
      }
      if (room.members.size === 0) this.rooms.delete(roomId);
    }
  }

  broadcastToRoom(roomId: string, event: string, data: any, excludeSocketId?: string): void {
    const room = this.rooms.get(roomId);
    if (room) {
      room.members.forEach((member, socketId) => {
        if (socketId !== excludeSocketId) {
          const socket = io.sockets.sockets.get(socketId);
          if (socket) socket.emit(event, data);
        }
      });
    }
  }
}</code></pre><h2>Bölüm 4: WebSocket Sunucusunu Ölçeklendirme</h2><h3>4.1 Cluster ile Dikey Ölçeklendirme</h3><pre><code>// Node.js cluster ile dikey ölçeklendirme
import cluster from 'cluster';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { setupMaster, setupWorker } from '@socket.io/sticky';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

const numCPUs = process.env.CPUS || 4;

if (cluster.isPrimary) {
  console.log(\`Primary \${process.pid} çalışıyor\`);
  const httpServer = createServer();
  setupMaster(httpServer, { loadBalancingMethod: 'least-connection' });
  httpServer.listen(3000);

  for (let i = 0; i < numCPUs; i++) cluster.fork();
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} öldü\`);
    cluster.fork();
  });
} else {
  const pubClient = createClient({ url: 'redis://localhost:6379' });
  const subClient = pubClient.duplicate();

  Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
    const httpServer = createServer();
    const io = new Server(httpServer);
    io.adapter(createAdapter(pubClient, subClient));
    setupWorker(io);
    io.on('connection', (socket) => {
      console.log(\`Worker \${process.pid} - Yeni bağlantı: \${socket.id}\`);
    });
  });
}</code></pre><h3>4.2 Redis Pub/Sub ile Yatay Ölçeklendirme</h3><pre><code>// Redis Pub/Sub ile çoklu sunucu iletişimi
class RedisPubSubManager {
  private pubClient: ReturnType<typeof createClient>;
  private subClient: ReturnType<typeof createClient>;
  private serverId: string;

  constructor(redisUrl: string, serverId: string) {
    this.serverId = serverId;
    this.pubClient = createClient({ url: redisUrl });
    this.subClient = this.pubClient.duplicate();
  }

  async initialize(io: Server): Promise<void> {
    await Promise.all([this.pubClient.connect(), this.subClient.connect()]);

    await this.subClient.subscribe('ws:broadcast', (message) => {
      const { event, data, targetRoom, excludeServer } = JSON.parse(message);
      if (excludeServer === this.serverId) return;
      io.to(targetRoom).emit(event, data);
    });

    await this.subClient.subscribe('ws:user', (message) => {
      const { event, data, targetUser, excludeServer } = JSON.parse(message);
      if (excludeServer === this.serverId) return;
      const userSockets = this.getUserSockets(io, targetUser);
      userSockets.forEach(socket => socket.emit(event, data));
    });
  }

  broadcastToRoom(room: string, event: string, data: any): void {
    this.pubClient.publish('ws:broadcast', JSON.stringify({
      event, data, targetRoom: room, excludeServer: this.serverId
    }));
  }

  private getUserSockets(io: Server, userId: string): any[] {
    const sockets: any[] = [];
    io.sockets.sockets.forEach((socket) => {
      if ((socket as any).userId === userId) sockets.push(socket);
    });
    return sockets;
  }
}</code></pre><h3>4.3 Nginx Load Balancer Yapılandırması</h3><pre><code># nginx.conf - WebSocket desteği ile load balancing
upstream websocket_servers {
    ip_hash;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
    server 127.0.0.1:3003;
    server 127.0.0.1:3004;
}

server {
    listen 80;
    server_name ws.example.com;

    location /socket.io/ {
        proxy_pass http://websocket_servers;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}</code></pre><h2>Bölüm 5: Hata Yönetimi ve Dayanıklılık</h2><pre><code>// ConnectionPool sınıfı
class ConnectionPool {
  private connections: Map<string, ConnectionInfo> = new Map();
  private maxConnections: number;

  constructor(maxConnections: number) {
    this.maxConnections = maxConnections;
  }

  addConnection(socketId: string, userId: string): boolean {
    if (this.connections.size >= this.maxConnections) return false;
    this.connections.set(socketId, {
      userId, connectedAt: Date.now(),
      lastActivity: Date.now(), messagesSent: 0, messagesReceived: 0
    });
    return true;
  }

  removeConnection(socketId: string): void {
    this.connections.delete(socketId);
  }

  cleanup(maxInactiveMs: number): string[] {
    const now = Date.now();
    const inactiveIds: string[] = [];
    this.connections.forEach((info, socketId) => {
      if (now - info.lastActivity > maxInactiveMs) inactiveIds.push(socketId);
    });
    inactiveIds.forEach(id => this.removeConnection(id));
    return inactiveIds;
  }
}

// Message Queue ile可靠消息传递
import Queue from 'bull';

class MessageQueue {
  private messageQueue: Queue.Queue;

  constructor(redisConfig: any) {
    this.messageQueue = new Queue('websocket-messages', redisConfig);
    this.setupProcessors();
  }

  private setupProcessors(): void {
    this.messageQueue.process('broadcast', async (job) => {
      const { room, event, data, excludeSocket } = job.data;
      io.to(room).except(excludeSocket).emit(event, data);
    });

    this.messageQueue.on('failed', (job, error) => {
      console.error(\`Job \${job.id} başarısız:\`, error);
    });
  }

  async broadcastToRoom(room: string, event: string, data: any, exclude?: string): Promise<void> {
    await this.messageQueue.add('broadcast', {
      room, event, data, excludeSocket: exclude
    }, { attempts: 3, backoff: { type: 'exponential', delay: 2000 } });
  }
}</code></pre><h2>Sonuç</h2><p>WebSocket, modern web uygulamalarında gerçek zamanlı iletişim için vazgeçilmez bir teknolojidir.</p><ul><li>Uygulamanızın gereksinimlerine göre Socket.io veya native WebSocket seçin</li><li>Room yönetimini doğru tasarlayın</li><li>Redis Pub/Sub ile yatay ölçeklendirme yapın</li><li>Heartbeat ve yeniden bağlanma mantığını uygulayın</li><li>Hata yönetimi ve dayanıklılık mekanizmaları ekleyin</li></ul><p>DZY Digital olarak, gerçek zamanlı uygulamalar konusunda geniş deneyime sahibiz.</p>`
  },
  {
    id: 3,
    slug: 'api-tasarim-en-iyi-uygulamalari-restful-vs-graphql',
    title: 'API Tasarım En İyi Uygulamaları: RESTful vs GraphQL',
    category: 'Teknik',
    date: '04 Temmuz 2026',
    readTime: '28 dk okuma',
    excerpt: 'RESTful API tasarım prensiplerinden GraphQL fundamentallerine, versioning stratejilerinden rate limiting uygulamalarına kadar kapsamlı API tasarım rehberi.',
    content: `<h2>Giriş: API Tasarımı Neden Önemli?</h2><p>API'ler (Application Programming Interfaces), modern yazılım geliştirmenin temel taşlarıdır. İyi tasarlanmış bir API, geliştirici deneyimini artırır, bakım maliyetlerini düşürür ve ölçeklenebilirliği sağlar.</p><h2>Bölüm 1: RESTful API Tasarım Prensipleri</h2><h3>1.1 REST Temelleri (Richardson Maturity Model)</h3><pre><code>-- Level 0: HTTP'yi sadece transport olarak kullanan API
POST /api
Content-Type: application/json
{"action": "getUser", "params": {"id": 123}}

-- Level 1: Kaynak tabanlı URL'ler
POST /users/123
GET /orders/456

-- Level 2: HTTP metodlarını kullanan API (RESTful)
GET    /users          -> Kullanıcı listesi
POST   /users          -> Yeni kullanıcı oluştur
GET    /users/123      -> 123 ID'li kullanıcı
PUT    /users/123      -> 123 ID'li kullanıcıyı güncelle
DELETE /users/123      -> 123 ID'li kullanıcıyı sil

-- Level 3: HATEOAS
GET /users/123
{
  "id": 123, "name": "Ahmet Yılmaz",
  "_links": {
    "self": { "href": "/users/123" },
    "orders": { "href": "/users/123/orders" },
    "avatar": { "href": "/users/123/avatar" }
  }
}</code></pre><h3>1.2 URL Tasarım Kuralları</h3><pre><code>// İYİ ÖRNEKLER
GET  /api/v1/users
GET  /api/v1/users/123
POST /api/v1/users
PUT  /api/v1/users/123
DELETE /api/v1/users/123
GET  /api/v1/users/123/orders
GET  /api/v1/products?category=electronics&sort=-price&page=2&limit=20

// KÖTÜ ÖRNEKLER
GET /api/getUser?id=123
GET /api/user/delete/123
POST /api/users/getAll</code></pre><h3>1.3 HTTP Durum Kodları</h3><pre><code>// 2xx: Başarılı
200 OK                    // Başarılı GET, PUT, PATCH
201 Created              // Başarılı POST
202 Accepted             // İstek kabul edildi (async)
204 No Content           // Başarılı DELETE

// 4xx: İstemci Hataları
400 Bad Request          // Geçersiz JSON
401 Unauthorized         // Kimlik doğrulama başarısız
403 Forbidden            // Yetki yetersiz
404 Not Found            // Kaynak bulunamadı
409 Conflict             // Çakışma
422 Unprocessable Entity // İş mantığı hatası
429 Too Many Requests    // Rate limit aşıldı

// 5xx: Sunucu Hataları
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable</code></pre><h3>1.4 İstek/Yanıt Formatı</h3><pre><code>// Standart API yanıt formatı
interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number; limit: number;
      total: number; totalPages: number;
    };
    timestamp: string;
  };
}

// Başarılı yanıt
{ "data": { "id": 123, "name": "Ahmet" }, "meta": { "timestamp": "2024-01-15T10:30:00Z" } }

// Sayfalı yanıt
{
  "data": [{ "id": 1, "name": "Ahmet" }, { "id": 2, "name": "Mehmet" }],
  "meta": { "pagination": { "page": 1, "limit": 20, "total": 150, "totalPages": 8 } }
}

// Hata yanıt
{ "error": { "code": "VALIDATION_ERROR", "message": "Validation failed", "details": { "email": "Invalid email format" } } }</code></pre><h3>1.5 Filtreleme, Sıralama ve Sayfalama</h3><pre><code>// Query parametreleri ile filtreleme
GET /api/v1/products?category=electronics&minPrice=100&maxPrice=500&sort=-createdAt&page=2&limit=20

// Backend implementasyonu
app.get('/api/v1/products', async (req: Request, res: Response) => {
  const { category, minPrice, maxPrice, sort = '-createdAt', page = 1, limit = 20, search } = req.query;

  const filter: any = {};
  if (category) filter.category = category;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }
  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  const sortOptions: any = {};
  const sortField = sort.startsWith('-') ? sort.slice(1) : sort;
  sortOptions[sortField] = sort.startsWith('-') ? -1 : 1;

  const skip = (Number(page) - 1) * Number(limit);
  const [products, total] = await Promise.all([
    Product.find(filter).sort(sortOptions).skip(skip).limit(Number(limit)),
    Product.countDocuments(filter)
  ]);

  res.json({
    data: products,
    meta: { pagination: { page: Number(page), limit: Number(limit), total, totalPages: Math.ceil(total / Number(limit)) } }
  });
});

// Cursor-based pagination
GET /api/v1/products?cursor=abc123&limit=20

app.get('/api/v1/products', async (req: Request, res: Response) => {
  const { cursor, limit = 20 } = req.query;
  const query: any = {};
  if (cursor) query.createdAt = { $lt: new Date(cursor as string) };

  const products = await Product.find(query).sort({ createdAt: -1 }).limit(Number(limit) + 1);
  const hasMore = products.length > Number(limit);
  const data = hasMore ? products.slice(0, -1) : products;
  const nextCursor = hasMore ? data[data.length - 1].createdAt : null;

  res.json({ data, meta: { nextCursor, hasMore } });
});</code></pre><h2>Bölüm 2: GraphQL Fundamentals</h2><h3>2.1 GraphQL Schema Tasarımı</h3><pre><code>// GraphQL Schema Definition
type Query {
  user(id: ID!): User
  users(filter: UserFilter, pagination: PaginationInput): UserConnection!
  product(id: ID!): Product
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
}

type Subscription {
  orderStatusChanged(orderId: ID!): OrderStatus!
}

type User {
  id: ID!
  email: String!
  name: String!
  avatar: String
  orders: [Order!]!
  createdAt: DateTime!
}

type Order {
  id: ID!
  user: User!
  items: [OrderItem!]!
  total: Float!
  status: OrderStatus!
  createdAt: DateTime!
}

enum OrderStatus { PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED }

input CreateUserInput { email: String!, name: String!, password: String! }
input UpdateUserInput { name: String, email: String, avatar: String }

input UserFilter { search: String, role: UserRole, createdAt: DateRangeInput }
input PaginationInput { first: Int, after: String, last: Int, before: String }

type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type UserEdge { node: User!, cursor: String! }
type PageInfo { hasNextPage: Boolean!, hasPreviousPage: Boolean!, startCursor: String, endCursor: String }

scalar DateTime</code></pre><h3>2.2 Resolver Implementasyonu</h3><pre><code>import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const resolvers = {
  Query: {
    user: async (_, { id }, context) => {
      const { dataSources, user } = context;
      if (!user) throw new AuthenticationError('Not authenticated');
      return dataSources.userAPI.getUser(id);
    },
    users: async (_, { filter, pagination }, context) => {
      if (!context.user) throw new AuthenticationError('Not authenticated');
      return context.dataSources.userAPI.getUsers(filter, pagination);
    }
  },
  Mutation: {
    createUser: async (_, { input }, context) => {
      const errors = validateCreateUserInput(input);
      if (errors.length > 0) throw new UserInputError('Validation failed', { errors });
      const existingUser = await context.dataSources.userAPI.findByEmail(input.email);
      if (existingUser) throw new ConflictError('Email already exists');
      return context.dataSources.userAPI.createUser(input);
    },
    createOrder: async (_, { input }, context) => {
      if (!context.user) throw new AuthenticationError('Not authenticated');
      for (const item of input.items) {
        const product = await context.dataSources.productAPI.getProduct(item.productId);
        if (product.stock < item.quantity) {
          throw new UserInputError(\`Insufficient stock for \${product.name}\`);
        }
      }
      return context.dataSources.orderAPI.createOrder(context.user.id, input);
    }
  },
  User: {
    orders: async (parent, _, context) => context.dataSources.orderAPI.getOrdersByUser(parent.id),
    avatar: (parent) => parent.avatar || \`https://ui-avatars.com/api/?name=\${parent.name}\`
  },
  Order: {
    user: async (parent, _, context) => context.dataSources.userAPI.getUser(parent.userId),
    total: (parent) => parent.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }
};</code></pre><h2>Bölüm 3: N+1 Problemi ve DataLoader</h2><pre><code>// DataLoader çözümü
import DataLoader from 'dataloader';

const createLoaders = () => ({
  userLoader: new DataLoader(async (userIds: string[]) => {
    const users = await User.find({ _id: { $in: userIds } });
    const userMap = new Map(users.map(u => [u.id, u]));
    return userIds.map(id => userMap.get(id) || null);
  }),

  ordersByUserLoader: new DataLoader(async (userIds: string[]) => {
    const orders = await Order.find({ userId: { $in: userIds } });
    const ordersByUser = new Map();
    orders.forEach(order => {
      const userOrders = ordersByUser.get(order.userId) || [];
      userOrders.push(order);
      ordersByUser.set(order.userId, userOrders);
    });
    return userIds.map(id => ordersByUser.get(id) || []);
  })
});

// Resolver'larda DataLoader kullanımı
const resolvers = {
  User: {
    orders: async (parent, _, context) => context.loaders.ordersByUserLoader.load(parent.id)
  }
};</code></pre><h2>Bölüm 4: Versioning Stratejileri</h2><pre><code>// 1. URL-based versioning
GET /api/v1/users
GET /api/v2/users

// 2. Header-based versioning
GET /api/users
Accept: application/vnd.myapi.v2+json

// 3. Query parameter versioning
GET /api/users?version=2

// Backward-compatible API evolution
type UserV1 { id: ID!, name: String!, email: String! }
type UserV2 { id: ID!, name: String!, email: String!, avatar: String, createdAt: DateTime! }

// Deprecation header
res.setHeader('Deprecation', 'true');
res.setHeader('Sunset', '2024-12-31');
res.setHeader('Link', '</api/v2' + req.path + '>; rel="successor-version"');</code></pre><h2>Bölüm 5: OpenAPI ve Rate Limiting</h2><pre><code>// OpenAPI 3.0 Specification
const openapiDocument = {
  openapi: '3.0.0',
  info: { title: 'DZY Digital API', version: '1.0.0' },
  servers: [
    { url: 'https://api.dzydigital.com', description: 'Production' },
    { url: 'http://localhost:3000', description: 'Development' }
  ],
  components: {
    securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } },
    schemas: {
      User: { type: 'object', properties: { id: { type: 'string' }, email: { type: 'string' }, name: { type: 'string' } } }
    }
  },
  paths: {
    '/users': {
      get: { tags: ['Users'], summary: 'Kullanıcı listesi', security: [{ bearerAuth: [] }] },
      post: { tags: ['Users'], summary: 'Yeni kullanıcı oluştur' }
    }
  }
};

// Rate limiting
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.REDIS_URL });

const generalLimiter = rateLimit({
  store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(args) }),
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: { code: 'RATE_LIMIT_EXCEEDED', message: 'Too many requests' } }
});

const dynamicLimiter = rateLimit({
  store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(args) }),
  windowMs: 60 * 1000,
  max: (req) => {
    const user = req.user;
    if (!user) return 10;
    if (user.role === 'admin') return 1000;
    if (user.role === 'pro') return 100;
    return 30;
  },
  keyGenerator: (req) => req.user?.id || req.ip
});

app.use('/api/', generalLimiter);
app.use('/api/v1/', dynamicLimiter);</code></pre><h2>Sonuç</h2><p>API tasarımı, yazılım projelerinin başarısını doğrudan etkiler.</p><ul><li><strong>REST</strong>: Basit, iyi bilinen, güçlü caching desteği</li><li><strong>GraphQL</strong>: Esnek, efficient data fetching, tek endpoint</li><li><strong>Versioning</strong>: Backward compatibility için strateji belirleyin</li><li><strong>Dokümantasyon</strong>: OpenAPI ile otomatik dokümantasyon oluşturun</li><li><strong>Güvenlik</strong>: Rate limiting, authentication ve authorization ekleyin</li></ul><p>DZY Digital olarak, projeleriniz için en uygun API stratejisini belirlemenize yardımcı oluyoruz.</p>`
  },
  {
    id: 4,
    slug: 'nextjs-app-router-rehberi-server-components-server-actions',
    title: 'Next.js App Router Rehberi: Server Components, Server Actions ve Streaming',
    category: 'Teknik',
    date: '04 Temmuz 2026',
    readTime: '30 dk okuma',
    excerpt: 'Next.js 14+ App Router mimarisinde Server Components, Client Components, Server Actions ve Streaming SSR kullanımını kapsamlı örneklerle öğrenin.',
    content: `<h2>Giriş: Next.js App Router Neden Önemli?</h2><p>Next.js 13 ile tanışan App Router, React geliştirmeyi köklü bir şekilde değiştirdi. Pages Router'dan farklı olarak, App Router dosya tabanlı routing, Server Components, Server Actions ve Streaming SSR gibi yenilikçi özellikler sunar.</p><h2>Bölüm 1: App Router Mimarisi</h2><h3>1.1 Dosya Yapısı ve Routing</h3><pre><code>app/
├── layout.tsx              // Root layout
├── page.tsx                // Ana sayfa (/)
├── loading.tsx             // Yükleniyor UI
├── error.tsx               // Hata yakalama
├── not-found.tsx           // 404 sayfası
├── (auth)/                 // Route group
│   ├── layout.tsx
│   ├── login/page.tsx      // /login
│   └── register/page.tsx   // /register
├── (dashboard)/            // Dashboard route group
│   ├── layout.tsx
│   ├── dashboard/page.tsx  // /dashboard
│   └── [id]/page.tsx       // /dashboard/:id
├── api/users/route.ts      // /api/users
└── blog/[slug]/page.tsx    // /blog/:slug</code></pre><h3>1.2 Route Group'lar ve Layout'lar</h3><pre><code>// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">DZY Digital</h1>
          <p className="mt-2 text-gray-600">Hesabınıza giriş yapın</p>
        </div>
        {children}
      </div>
    </div>
  );
}

// app/(dashboard)/layout.tsx
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

// app/layout.tsx - Root layout
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DZY Digital - Yazılım Çözümleri',
  description: 'DZY Digital, modern yazılım çözümleri sunar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}</code></pre><h2>Bölüm 2: Server Components vs Client Components</h2><h3>2.1 Server Components</h3><pre><code>// app/dashboard/page.tsx - Server Component
import { db } from '@/lib/database';
import { formatCurrency } from '@/lib/utils';

async function getDashboardStats() {
  const stats = await db.query(\`
    SELECT COUNT(*) as total_users,
      SUM(CASE WHEN created_at > NOW() - INTERVAL '24 hours' THEN 1 ELSE 0 END) as new_users_today
    FROM users
  \`);
  const revenue = await db.query(\`
    SELECT SUM(amount) as total_revenue
    FROM orders WHERE status = 'completed'
  \`);
  return {
    totalUsers: stats.rows[0].total_users,
    newUsersToday: stats.rows[0].new_users_today,
    totalRevenue: revenue.rows[0].total_revenue
  };
}

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Toplam Kullanıcı" value={stats.totalUsers} />
        <StatCard title="Bugün Yeni" value={stats.newUsersToday} />
        <StatCard title="Aylık Gelir" value={formatCurrency(stats.totalRevenue)} />
      </div>
      <RecentOrders />
    </div>
  );
}

async function RecentOrders() {
  const orders = await db.query(\`
    SELECT o.*, u.name as user_name
    FROM orders o JOIN users u ON o.user_id = u.id
    ORDER BY o.created_at DESC LIMIT 10
  \`);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b"><h2 className="text-xl font-semibold">Son Siparişler</h2></div>
      <div className="divide-y">
        {orders.rows.map((order) => (
          <div key={order.id} className="p-4 flex justify-between">
            <div>
              <p className="font-medium">{order.user_name}</p>
              <p className="text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString('tr-TR')}</p>
            </div>
            <p className="font-semibold">{formatCurrency(order.amount)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}</code></pre><h3>2.2 Client Components</h3><pre><code>// components/InteractiveChart.tsx
"use client";

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData { date: string; value: number; }

export function InteractiveChart({ initialData }: { initialData: ChartData[] }) {
  const [data, setData] = useState<ChartData[]>(initialData);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(\`/api/analytics?range=\${timeRange}\`);
      const newData = await response.json();
      setData(newData);
      setIsLoading(false);
    }
    fetchData();
  }, [timeRange]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Grafik</h3>
        <div className="flex space-x-2">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button key={range} onClick={() => setTimeRange(range)}
              className={\`px-3 py-1 rounded \${timeRange === range ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}\`}>
              {range === '7d' ? '7 Gün' : range === '30d' ? '30 Gün' : '90 Gün'}
            </button>
          ))}
        </div>
      </div>
      {isLoading ? (
        <div className="h-64 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}</code></pre><h2>Bölüm 3: Server Actions</h2><pre><code>// app/actions/user.ts
"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { db } from '@/lib/database';
import { auth } from '@/lib/auth';

const CreateUserSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalı'),
  email: z.string().email('Geçerli bir e-posta adresi girin'),
  role: z.enum(['admin', 'member', 'viewer']).default('member')
});

interface FormState { success: boolean; error?: string; fieldErrors?: Record<string, string[]>; }

export async function createUser(prevState: FormState, formData: FormData): Promise<FormState> {
  const session = await auth();
  if (!session?.user || session.user.role !== 'admin') {
    return { success: false, error: 'Yetkiniz yok' };
  }

  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    role: formData.get('role') as string
  };

  const validatedFields = CreateUserSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return { success: false, fieldErrors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const existingUser = await db.query('SELECT id FROM users WHERE email = $1', [validatedFields.data.email]);
    if (existingUser.rows.length > 0) {
      return { success: false, error: 'Bu e-posta adresi zaten kullanımda' };
    }

    await db.query(
      'INSERT INTO users (name, email, role) VALUES ($1, $2, $3)',
      [validatedFields.data.name, validatedFields.data.email, validatedFields.data.role]
    );

    revalidatePath('/dashboard/users');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Bir hata oluştu' };
  }
}

export async function updateUser(prevState: FormState, formData: FormData): Promise<FormState> {
  const session = await auth();
  if (!session?.user) return { success: false, error: 'Oturum açmanız gerekiyor' };

  const rawData = {
    id: formData.get('id') as string,
    name: formData.get('name') as string || undefined,
    email: formData.get('email') as string || undefined,
    role: formData.get('role') as string || undefined
  };

  const validatedFields = z.object({
    id: z.string().uuid(),
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    role: z.enum(['admin', 'member', 'viewer']).optional()
  }).safeParse(rawData);

  if (!validatedFields.success) {
    return { success: false, fieldErrors: validatedFields.error.flatten().fieldErrors };
  }

  const { id, ...updateData } = validatedFields.data;
  if (session.user.id !== id && session.user.role !== 'admin') {
    return { success: false, error: 'Yetkiniz yok' };
  }

  try {
    const setClauses: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    Object.entries(updateData).forEach(([key, value]) => {
      if (value !== undefined) {
        setClauses.push(\`\${key} = $\${paramIndex}\`);
        values.push(value);
        paramIndex++;
      }
    });

    if (setClauses.length === 0) return { success: false, error: 'Güncellenecek veri yok' };

    values.push(id);
    await db.query(\`UPDATE users SET \${setClauses.join(', ')} WHERE id = $\${paramIndex}\`, values);

    revalidatePath('/dashboard/users');
    revalidatePath(\`/dashboard/users/\${id}\`);
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Güncelleme başarısız' };
  }
}</code></pre><h3>3.2 Form Kullanımı</h3><pre><code>// app/dashboard/users/new/page.tsx
"use client";

import { useActionState } from 'react';
import { createUser } from '@/app/actions/user';

export default function NewUserPage() {
  const [state, formAction, isPending] = useActionState(createUser, { success: false });

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Yeni Kullanıcı</h1>
      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">İsim</label>
          <input type="text" name="name" required className="w-full px-3 py-2 border rounded-lg" />
          {state.fieldErrors?.name && <p className="text-red-500 text-sm mt-1">{state.fieldErrors.name[0]}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">E-posta</label>
          <input type="email" name="email" required className="w-full px-3 py-2 border rounded-lg" />
          {state.fieldErrors?.email && <p className="text-red-500 text-sm mt-1">{state.fieldErrors.email[0]}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Rol</label>
          <select name="role" className="w-full px-3 py-2 border rounded-lg">
            <option value="member">Üye</option>
            <option value="viewer">Görüntüleyici</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {state.error && <div className="bg-red-50 text-red-600 p-3 rounded-lg">{state.error}</div>}
        {state.success && <div className="bg-green-50 text-green-600 p-3 rounded-lg">Kullanıcı başarıyla oluşturuldu!</div>}
        <button type="submit" disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50">
          {isPending ? 'Oluşturuluyor...' : 'Oluştur'}
        </button>
      </form>
    </div>
  );
}</code></pre><h2>Bölüm 4: Streaming SSR</h2><pre><code>// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// app/dashboard/error.tsx
"use client";
import { useEffect } from 'react';

export default function DashboardError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('Dashboard error:', error); }, [error]);
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bir hata oluştu</h2>
        <p className="text-gray-600 mb-4">{error.message || 'Beklenmeyen bir hata oluştu'}</p>
        <button onClick={reset} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}

// Streaming ile sayfa
import { Suspense } from 'react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Suspense fallback={<StatsLoading />}>
        <StatsSection />
      </Suspense>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<ChartLoading />}>
          <AnalyticsChart />
        </Suspense>
        <Suspense fallback={<TableLoading />}>
          <RecentOrders />
        </Suspense>
      </div>
    </div>
  );
}</code></pre><h2>Bölüm 5: Data Fetching Stratejileri</h2><pre><code>// app/lib/api.ts
import { cache } from 'react';

// Cache'li veri çekme (Request Deduplication)
export const getUser = cache(async (id: string) => {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    next: { revalidate: 3600 }
  });
  if (!response.ok) throw new Error('Kullanıcı yüklenemedi');
  return response.json();
});

// ISR (Incremental Static Regeneration)
export async function getProducts() {
  const response = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 }
  });
  return response.json();
}

// Dynamic rendering (her istekte çalışır)
export async function getRealTimeData() {
  const response = await fetch('https://api.example.com/realtime', {
    cache: 'no-store'
  });
  return response.json();
}

// Route segment config
export const dynamic = 'force-static';
export const revalidate = 3600;
export const runtime = 'edge';</code></pre><h2>Sonuç</h2><p>Next.js App Router, modern web geliştirmenin en güçlü araçlarından biridir.</p><ul><li>Varsayılan olarak Server Component kullanın, gerektiğinde "use client" ekleyin</li><li>Server Actions ile formları güvenli ve basit yönetin</li><li>Suspense ile streaming yaparak loading sürelerini optimize edin</li><li>Parallel Routes ile paralel veri yükleme sağlayın</li><li>Doğru fetch stratejileri ile performansı artırın</li></ul><p>DZY Digital olarak, Next.js projelerinizde en iyi uygulamaları uygulamanıza yardımcı oluyoruz.</p>`
  },
  {
    id: 5,
    slug: 'veritabani-optimizasyonu-index-query-scaling',
    title: 'Veritabanı Optimizasyonu: Index, Query ve Scaling Stratejileri',
    category: 'Teknik',
    date: '04 Temmuz 2026',
    readTime: '26 dk okuma',
    excerpt: 'PostgreSQL veritabanı optimizasyonu: indeks stratejileri, sorgu optimizasyonu, connection pooling, read replica, partitioning ve yavaş sorguları izleme.',
    content: `<h2>Giriş: Veritabanı Optimizasyonu Neden Önemli?</h2><p>Veritabanı performansı, modern uygulamaların en kritik bileşenlerinden biridir. Yavaş sorgular, yüksek gecikme süreleri ve kaynak tükenmesi, kullanıcı deneyimini olumsuz etkiler.</p><h2>Bölüm 1: İndeks Stratejileri</h2><h3>1.1 İndeks Türleri</h3><pre><code>-- B-TREE İNDEKS (varsayılan, en yaygın)
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);

-- Bileşik indeks
CREATE INDEX idx_users_name_email ON users(name, email);

-- Kapsamlı indeks (covering index)
CREATE INDEX idx_users_email_name_id ON users(email) INCLUDE (name, id);

-- Kısmi indeks (partial index)
CREATE INDEX idx_users_active ON users(email) WHERE is_active = true;
CREATE INDEX idx_orders_pending ON orders(created_at) WHERE status = 'pending';

-- Sıralı indeks
CREATE INDEX idx_users_created_desc ON users(created_at DESC);

-- NULL değerler için indeks
CREATE INDEX idx_users_last_login ON users(last_login) WHERE last_login IS NOT NULL;

-- HASH İNDEKS (sadece eşitlik sorguları için)
CREATE INDEX idx_users_email_hash ON users USING hash(email);

-- GIN İNDEKS (arrays, JSONB, full-text search için)
CREATE INDEX idx_products_tags ON products USING gin(tags);
CREATE INDEX idx_users_metadata ON users USING gin(metadata);
CREATE INDEX idx_articles_search ON articles USING gin(
  to_tsvector('turkish', title || ' ' || content)
);

-- BRIN İNDEKS (büyük tablolar için, doğal sıralı veriler)
CREATE INDEX idx_logs_created ON logs USING brin(created_at)
  WITH (pages_per_range = 32);</code></pre><h3>1.2 İndeks Performans Analizi</h3><pre><code>-- İndeks kullanımını analiz etme
SELECT schemaname, tablename, indexname,
  idx_scan as index_scans,
  idx_tup_read as tuples_read,
  pg_size_pretty(pg_relation_size(indexrelid)) as index_size
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
ORDER BY idx_scan DESC;

-- Kullanılmayan indeksleri bulma
SELECT schemaname, tablename, indexname,
  pg_size_pretty(pg_relation_size(indexrelid)) as index_size
FROM pg_stat_user_indexes
WHERE idx_scan = 0 AND schemaname = 'public'
ORDER BY pg_relation_size(indexrelid) DESC;

-- Duplicate indeksleri bulma
SELECT
  a.indexname as index1,
  b.indexname as index2,
  a.indexdef as definition
FROM pg_indexes a
JOIN pg_indexes b ON a.tablename = b.tablename
  AND a.indexname < b.indexname
  AND a.indexdef = b.indexdef
WHERE a.schemaname = 'public';</code></pre><h2>Bölüm 2: Sorgu Optimizasyonu</h2><h3>2.1 EXPLAIN ve ANALYZE</h3><pre><code-- Basit EXPLAIN
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- DETAYLI ANALYZE
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.*, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id
ORDER BY u.created_at DESC
LIMIT 20;

-- JSON formatında detaylı plan
EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON)
SELECT * FROM products WHERE category = 'electronics' AND price < 1000;</code></pre><h3>2.2 Yaygın Sorgu Hataları ve Çözümleri</h3><pre><code-- KÖTÜ: SELECT * kullanımı
SELECT * FROM users WHERE status = 'active';

-- İYİ: Gerekli alanları seç
SELECT id, name, email FROM users WHERE status = 'active';

-- KÖTÜ: N+1 sorgusu (uygulama seviyesinde)
-- Her user için ayrı sorgu çalıştırır
SELECT * FROM users;
SELECT * FROM orders WHERE user_id = ?; -- N kez tekrarlanır

-- İYİ: JOIN ile tek sorgu
SELECT u.*, o.*
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- KÖTÜ: OLMayan indeks kullanımı (function wrapping)
SELECT * FROM users WHERE LOWER(email) = 'test@example.com';

-- İYİ: Fonksiyonel indeks
CREATE INDEX idx_users_email_lower ON users(LOWER(email));
SELECT * FROM users WHERE LOWER(email) = 'test@example.com';

-- KÖTÜ: Wildcard başında LIKE
SELECT * FROM users WHERE name LIKE '%ahmet%';

-- İYİ: Full-text search veya trigram indeks
CREATE INDEX idx_users_name_trgm ON users USING gin(name gin_trgm_ops);
SELECT * FROM users WHERE name % 'ahmet'; -- Similarity search

-- KÖTÜ: Alt sorgu ile EXISTS yerine IN
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > 1000);

-- İYİ: JOIN ile EXISTS
SELECT DISTINCT u.*
FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.user_id = u.id AND o.total > 1000
);</code></pre><h3>2.3 Sorgu Optimizasyon Teknikleri</h3><pre><code>-- 1. CTE (Common Table Expression) kullanımı
WITH active_users AS (
  SELECT id, name, email
  FROM users
  WHERE status = 'active' AND created_at > NOW() - INTERVAL '30 days'
),
user_orders AS (
  SELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent
  FROM orders
  WHERE created_at > NOW() - INTERVAL '30 days'
  GROUP BY user_id
)
SELECT au.name, au.email, uo.order_count, uo.total_spent
FROM active_users au
JOIN user_orders uo ON au.id = uo.user_id
ORDER BY uo.total_spent DESC
LIMIT 20;

-- 2. Window Functions
SELECT
  user_id,
  order_date,
  total,
  LAG(total) OVER (PARTITION BY user_id ORDER BY order_date) as prev_order,
  total - LAG(total) OVER (PARTITION BY user_id ORDER BY order_date) as diff,
  RANK() OVER (PARTITION BY user_id ORDER BY total DESC) as rank
FROM orders;

-- 3. Materialized View
CREATE MATERIALIZED VIEW user_stats AS
SELECT
  u.id,
  u.name,
  COUNT(o.id) as order_count,
  COALESCE(SUM(o.total), 0) as total_spent,
  MAX(o.created_at) as last_order_date
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- Refresh
REFRESH MATERIALIZED VIEW CONCURRENTLY user_stats;</code></pre><h2>Bölüm 3: Connection Pooling</h2><pre><code>// PgBouncer yapılandırması (pgbouncer.ini)
[databases]
mydb = host=localhost port=5432 dbname=mydb

[pgbouncer]
listen_addr = 0.0.0.0
listen_port = 6432
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt

; Havuz modu
pool_mode = transaction

; Havuz boyutu
default_pool_size = 20
min_pool_size = 5
reserve_pool_size = 5
reserve_pool_timeout = 3

; Maksimum bağlantı
max_client_conn = 1000
max_db_connections = 100

; Timeout ayarları
server_idle_timeout = 600
client_idle_timeout = 0

// Node.js - pg pool kullanımı
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,              // Maksimum havuz boyutu
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  statement_timeout: 5000,
  query_timeout: 5000
});

// Bağlantı havuzu olayları
pool.on('connect', () => console.log('Yeni bağlantı'));
pool.on('error', (err) => console.error('Havuz hatası:', err));
pool.on('remove', () => console.log('Bağlantı kaldırıldı'));

// Sorgu çalıştırma
async function query(text: string, params?: any[]) {
  const start = Date.now();
  const result = await pool.query(text, params);
  const duration = Date.now() - start;
  if (duration > 1000) console.warn(\`Yavaş sorgu (\${duration}ms):\`, text);
  return result;
}

// Transaction yönetimi
async function transaction<T>(callback: (client: any) => Promise<T>): Promise<T> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}</code></pre><h2>Bölüm 4: Read Replica ve Scaling</h2><pre><code>// Read Replica yapılandırması
const readReplicaConfig = {
  host: process.env.DB_READ_HOST || process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 10
};

// Write pool (primary)
const writePool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20
});

// Read pool (replica)
const readPool = new Pool(readReplicaConfig);

// Router sınıfı
class DatabaseRouter {
  static async read(text: string, params?: any[]) {
    return readPool.query(text, params);
  }

  static async write(text: string, params?: any[]) {
    return writePool.query(text, params);
  }

  static async transaction<T>(callback: (client: any) => Promise<T>): Promise<T> {
    const client = await writePool.connect();
    try {
      await client.query('BEGIN');
      const result = await callback(client);
      await client.query('COMMIT');
      return result;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }
}

// Kullanım
// Read operation -> Read Replica
const users = await DatabaseRouter.read('SELECT * FROM users WHERE active = true');

// Write operation -> Primary
await DatabaseRouter.write('INSERT INTO users (name, email) VALUES ($1, $2)', ['Ahmet', 'ahmet@example.com']);</code></pre><h2>Bölüm 5: Table Partitioning</h2><pre><code>-- Range Partitioning (tarih bazlı)
CREATE TABLE orders (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
) PARTITION BY RANGE (created_at);

-- Aylık partition'lar oluştur
CREATE TABLE orders_2024_01 PARTITION OF orders
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE orders_2024_02 PARTITION OF orders
  FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');

CREATE TABLE orders_2024_03 PARTITION OF orders
  FOR VALUES FROM ('2024-03-01') TO ('2024-04-01');

-- Varsayılan partition (eşleşmeyen veriler için)
CREATE TABLE orders_default PARTITION OF orders DEFAULT;

-- List Partitioning (değer bazlı)
CREATE TABLE user_roles (
  id SERIAL,
  user_id UUID NOT NULL,
  role VARCHAR(20) NOT NULL,
  permissions JSONB
) PARTITION BY LIST (role);

CREATE TABLE user_roles_admin PARTITION OF user_roles
  FOR VALUES IN ('admin');

CREATE TABLE user_roles_member PARTITION OF user_roles
  FOR VALUES IN ('member');

CREATE TABLE user_roles_viewer PARTITION OF user_roles
  FOR VALUES IN ('viewer');

-- Hash Partitioning
CREATE TABLE sessions (
  id UUID NOT NULL,
  user_id UUID NOT NULL,
  token VARCHAR(255) NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL
) PARTITION BY HASH (user_id);

CREATE TABLE sessions_p0 PARTITION OF sessions
  FOR VALUES WITH (MODULUS 4, REMAINDER 0);
CREATE TABLE sessions_p1 PARTITION OF sessions
  FOR VALUES WITH (MODULUS 4, REMAINDER 1);
CREATE TABLE sessions_p2 PARTITION OF sessions
  FOR VALUES WITH (MODULUS 4, REMAINDER 2);
CREATE TABLE sessions_p3 PARTITION OF sessions
  FOR VALUES WITH (MODULUS 4, REMAINDER 3);

-- Otomatik partition oluşturma fonksiyonu
CREATE OR REPLACE FUNCTION create_monthly_partition()
RETURNS void AS $$
DECLARE
  next_month DATE := DATE_TRUNC('month', NOW() + INTERVAL '1 month');
  partition_name TEXT := 'orders_' || TO_CHAR(next_month, 'YYYY_MM');
  start_date TEXT := TO_CHAR(next_month, 'YYYY-MM-DD');
  end_date TEXT := TO_CHAR(next_month + INTERVAL '1 month', 'YYYY-MM-DD');
BEGIN
  EXECUTE FORMAT(
    'CREATE TABLE IF NOT EXISTS %I PARTITION OF orders FOR VALUES FROM (%L) TO (%L)',
    partition_name, start_date, end_date
  );
  RAISE NOTICE 'Partition % created', partition_name;
END;
$$ LANGUAGE plpgsql;

-- Her ay çalışan cron job
SELECT cron.schedule('create-partition', '0 0 1 * *', 'SELECT create_monthly_partition()');</code></pre><h2>Bölüm 6: Yavaş Sorguları İzleme</h2><pre><code>-- pg_stat_statements eklentisi
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- En yavaş sorguları bulma
SELECT
  query,
  calls,
  total_exec_time as total_time,
  mean_exec_time as mean_time,
  rows
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 20;

-- En çok kaynak kullanan sorgular
SELECT
  query,
  calls,
  shared_blks_hit,
  shared_blks_read,
  ROUND(shared_blks_hit::numeric / NULLIF(shared_blks_hit + shared_blks_read, 0) * 100, 2) as cache_hit_ratio
FROM pg_stat_statements
ORDER BY shared_blks_read DESC
LIMIT 20;

-- Tablo bazlı istatistikler
SELECT
  schemaname,
  relname as table_name,
  seq_scan,
  seq_tup_read,
  idx_scan,
  idx_tup_fetch,
  n_tup_ins,
  n_tup_upd,
  n_tup_del,
  pg_size_pretty(pg_total_relation_size(relid)) as total_size
FROM pg_stat_user_tables
ORDER BY seq_scan DESC
LIMIT 20;

-- Aktif sorguları izleme
SELECT
  pid,
  now() - pg_stat_activity.query_start AS duration,
  query,
  state,
  wait_event_type,
  wait_event
FROM pg_stat_activity
WHERE (state = 'active' AND pid != pg_backend_pid())
ORDER BY duration DESC;

-- Lock analizi
SELECT
  l.pid,
  l.locktype,
  l.mode,
  l.granted,
  a.query,
  a.state
FROM pg_locks l
JOIN pg_stat_activity a ON l.pid = a.pid
WHERE NOT l.granted;

-- Veritabanı boyutu
SELECT
  pg_database.datname,
  pg_size_pretty(pg_database_size(pg_database.datname)) as size
FROM pg_database
ORDER BY pg_database_size(pg_database.datname) DESC;

-- Tablo boyutları
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname || '.' || tablename)) as total_size,
  pg_size_pretty(pg_relation_size(schemaname || '.' || tablename)) as table_size,
  pg_size_pretty(pg_indexes_size(schemaname || '.' || tablename::regclass)) as index_size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname || '.' || tablename) DESC;</code></pre><h2>Sonuç</h2><p>Veritabanı optimizasyonu, uygulama performansını doğrudan etkiler.</p><ul><li><strong>İndeksler</strong>: Doğru indeks türünü seçin ve düzenli bakım yapın</li><li><strong>Sorgular</strong>: EXPLAIN ANALYZE ile planları inceleyin</li><li><strong>Connection Pooling</strong>: PgBouncer veya uygulama içi havuz kullanın</li><li><strong>Read Replica</strong>: Okuma-yazma yükünü ayırın</li><li><strong>Partitioning</strong>: Büyük tabloları bölümlendirin</li><li><strong>Monitoring</strong>: pg_stat_statements ile yavaş sorguları izleyin</li></ul><p>DZY Digital olarak, veritabanı optimizasyonu konusunda derin uzmanlığa sahibiz. Projelerinizde performans sorunları yaşıyorsanız, bizimle iletişime geçebilirsiniz.</p>`
  }
];

export default blogPosts;
