/* PhysiHub — service worker: cho phép dùng offline sau lần mở đầu.
   Chiến lược: nội dung cùng nguồn → ưu tiên mạng, mất mạng thì lấy bản đã lưu;
   font Google → lấy bản đã lưu trước, tải lại ngầm.
   Khi thay đổi file, không cần sửa gì: cache tự cập nhật mỗi lần có mạng.
   Đổi số phiên bản CACHE khi thêm/bớt tệp trong SHELL (bản 2: giao diện mới 23/9/2026). */
const CACHE = 'physihub-v3-7';   // đổi số này mỗi lần cập nhật để máy đã cài lấy bản mới
const SHELL = [
  './', './index.html', './baihoc.html', './bai.html', './thuatngu.html', './luyende.html',
  './games.html', './game-termrush.html', './game-match.html', './thinghiem.html', './vedan.html', './lienket.html',
  './assets/site.css', './assets/lively.css', './assets/site.js', './assets/favicon.svg',
  './assets/icon-192.png', './assets/icon-512.png', './assets/icon-maskable-512.png', './assets/apple-touch-icon.png',
  './assets/img/chuong1-vat-li-nhiet-600x324.webp', './assets/img/chuong1-vat-li-nhiet-168x96.webp',
  './assets/img/chuong2-khi-li-tuong-600x324.webp', './assets/img/chuong2-khi-li-tuong-168x96.webp',
  './assets/img/chuong3-tu-truong-600x324.webp', './assets/img/chuong3-tu-truong-168x96.webp',
  './assets/img/chuong4-vat-li-hat-nhan-600x324.webp', './assets/img/chuong4-vat-li-hat-nhan-168x96.webp',
  './data/lessons.js', './data/terms.js', './data/pairs.js', './data/content.js', './data/exams.js',
  './manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // Ưu tiên mạng để luôn có bản mới; mất mạng thì dùng bản đã lưu.
    // Khoá cache bỏ phần ?query để bai.html?n=1..25 và thuatngu.html?t=... không lưu 100 bản HTML giống nhau.
    const khoa = url.origin + url.pathname;
    e.respondWith(fetch(req).then(res => {
      // chỉ lưu phản hồi thành công: nếu lưu cả 404/500 thì khi mất mạng học sinh nhận lại đúng trang lỗi đó
      if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(khoa, copy)).catch(() => null); }
      return res;
    }).catch(() => caches.match(khoa).then(hit =>
      // tệp .js/.webp hỏng thì trả lỗi mạng sạch sẽ, không trả trang chủ (trả HTML cho .js gây lỗi cú pháp)
      hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
    )));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(url.host)) {
    e.respondWith(caches.match(req).then(hit => {
      const refresh = fetch(req).then(res => { caches.open(CACHE).then(c => c.put(req, res.clone())); return res; }).catch(() => hit);
      return hit || refresh;
    }));
  }
});
