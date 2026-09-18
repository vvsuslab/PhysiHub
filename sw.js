/* PhysiHub — service worker: cho phép dùng offline sau lần mở đầu.
   Chiến lược: nội dung cùng nguồn → ưu tiên mạng, mất mạng thì lấy bản đã lưu;
   font Google → lấy bản đã lưu trước, tải lại ngầm.
   Khi thay đổi file, không cần sửa gì: cache tự cập nhật mỗi lần có mạng. */
const CACHE = 'physihub-v1';
const SHELL = [
  './', './index.html', './baihoc.html', './bai.html', './thuatngu.html', './luyende.html',
  './games.html', './game-termrush.html', './game-match.html', './lienket.html',
  './assets/site.css', './assets/lively.css', './assets/site.js', './assets/favicon.svg',
  './assets/icon-192.png', './assets/icon-512.png', './assets/icon-maskable-512.png', './assets/apple-touch-icon.png',
  './data/lessons.js', './data/terms.js', './data/pairs.js', './data/content.js', './data/exams.js',
  './manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // Ưu tiên mạng để luôn có bản mới; mất mạng thì dùng cache (bỏ query ?n=9 khi tra cache trang)
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('./index.html'))));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(url.host)) {
    e.respondWith(caches.match(req).then(hit => {
      const refresh = fetch(req).then(res => { caches.open(CACHE).then(c => c.put(req, res.clone())); return res; }).catch(() => hit);
      return hit || refresh;
    }));
  }
});
