// Kiểm tra nhanh toàn bộ kho PhysiHub trước khi đưa lên mạng.
// Cách chạy (ở thư mục gốc của kho):  node tools/kiem-tra.mjs
// LỖI = phải sửa trước khi đưa lên. CẢNH BÁO = nên sửa, hoặc hỏi giáo viên.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const GOC = join(dirname(fileURLToPath(import.meta.url)), '..');
const MAU = [1, 2, 3, 4, 8, 9, 10, 11, 14, 15, 16, 17, 21, 22, 23, 24]; // 16 bài mẫu đã chốt ngày 22/9/2026
const loi = [], canhBao = [], thongTin = [];
const doc = p => readFileSync(join(GOC, p), 'utf8').replace(/^﻿/, '');
const co = p => existsSync(join(GOC, p));

// ---------- 1. Dữ liệu JSON đọc được và khớp với tệp .js ----------
const DL = {};
for (const ten of ['terms', 'pairs', 'content', 'exams']) {
  const p = `data/${ten}.json`;
  if (!co(p)) { canhBao.push(`${p}: chưa có tệp`); continue; }
  try { DL[ten] = JSON.parse(doc(p)); } catch (e) { loi.push(`${p}: lỗi cú pháp JSON — ${e.message}`); continue; }
  const pjs = `data/${ten}.js`;
  if (!co(pjs)) loi.push(`${pjs}: chưa sinh — chạy: node tools/build-data.mjs`);
  else {
    const ctx = { window: {} }; ctx.window.PH = {}; ctx.PH = ctx.window.PH;
    try {
      vm.runInNewContext(doc(pjs), ctx);
      const key = { terms: 'TERMS', pairs: 'PAIRS', content: 'CONTENT', exams: 'EXAMS' }[ten];
      if (JSON.stringify(ctx.PH[key]) !== JSON.stringify(DL[ten])) loi.push(`${pjs}: cũ hơn ${p} — chạy: node tools/build-data.mjs`);
    } catch (e) { loi.push(`${pjs}: không chạy được — ${e.message}`); }
  }
}
let LESSONS = [];
if (co('data/lessons.js')) {
  const ctx = { window: {} }; ctx.window.PH = {}; ctx.PH = ctx.window.PH;
  try { vm.runInNewContext(doc('data/lessons.js'), ctx); LESSONS = ctx.PH.LESSONS || []; } catch (e) { loi.push(`data/lessons.js: ${e.message}`); }
}

// ---------- 2. Thuật ngữ ----------
if (Array.isArray(DL.terms)) {
  const ids = new Set();
  for (const t of DL.terms) {
    const ten = t.id || JSON.stringify(t).slice(0, 40);
    if (!t.id) loi.push(`thuật ngữ thiếu id: ${ten}`);
    else if (ids.has(t.id)) loi.push(`thuật ngữ trùng id: ${t.id}`); else ids.add(t.id);
    for (const k of ['vi', 'en', 'ipa']) if (!t[k] || !String(t[k]).trim()) loi.push(`thuật ngữ ${ten}: thiếu "${k}"`);
    if (![1, 2, 3, 4].includes(t.chapter)) loi.push(`thuật ngữ ${ten}: chapter phải là 1–4`);
    const ipa = String(t.ipa || '');
    if (ipa && !/^\/.*\/$/.test(ipa)) canhBao.push(`thuật ngữ ${ten}: IPA nên nằm giữa hai dấu / /`);
    if (/\./.test(ipa)) canhBao.push(`thuật ngữ ${ten}: IPA còn dấu chấm tách âm tiết (${ipa}) — xem thiet-ke/noi-dung/ipa-de-xuat.json`);
    if (/ər(?=[\s/])/.test(ipa)) canhBao.push(`thuật ngữ ${ten}: IPA ghi "ər" kiểu Cambridge (${ipa}) — thống nhất "ə(r)" như Oxford`);
  }
  const md = DL.terms.find(t => t.id === 'mass-defect');
  if (md && md.ipa !== '/mæs ˈdiːfekt/') loi.push(`thuật ngữ mass-defect: IPA đang là ${md.ipa}, phải là /mæs ˈdiːfekt/ (danh từ "defect" nhấn âm đầu — Oxford)`);
  const cho = DL.terms.filter(t => t.added).length;
  if (cho) thongTin.push(`${cho}/${DL.terms.length} thuật ngữ đang gắn "added": true (chờ giáo viên thẩm định)`);
}

// ---------- 3. Mọi cặp { vi, en } phải đủ hai thứ tiếng ----------
function duyet(x, duong) {
  if (Array.isArray(x)) x.forEach((y, i) => duyet(y, `${duong}[${i}]`));
  else if (x && typeof x === 'object') {
    if (typeof x.vi === 'string' && x.vi.trim() && (typeof x.en !== 'string' || !x.en.trim())) canhBao.push(`${duong}: có tiếng Việt nhưng thiếu tiếng Anh`);
    if (typeof x.en === 'string' && x.en.trim() && (typeof x.vi !== 'string' || !x.vi.trim()) && 'vi' in x) canhBao.push(`${duong}: có tiếng Anh nhưng thiếu tiếng Việt`);
    for (const [k, v] of Object.entries(x)) duyet(v, `${duong}.${k}`);
  }
}
for (const ten of ['content', 'exams', 'pairs']) if (DL[ten]) duyet(DL[ten], ten);

// ---------- 4. Chính tả và thuật ngữ đã chốt ----------
function tepVanBan(thuMuc = '') {
  const ra = [];
  for (const f of readdirSync(join(GOC, thuMuc))) {
    const p = join(thuMuc, f);
    if (/^(\.git|node_modules|thiet-ke|_luu-tru)$/.test(f)) continue;
    const st = statSync(join(GOC, p));
    if (st.isDirectory()) ra.push(...tepVanBan(p));
    else if (/\.(html|json|js|css|md|webmanifest)$/.test(f) && !/^tools[\\/]/.test(p) && !/^(CLAUDE|NHAT-KI)\.md$/.test(f)) ra.push(p);
  }
  return ra;
}
const TEP = tepVanBan();
const QUY_TAC = [
  // Bỏ qua mã định danh (id, slug, ?t=…, -of-vaporization) và cụm "electromagnetic induction" (đúng)
  [/(?<![-\w"'=\/])vaporization(?![-\w"'])/g, 'dùng chính tả Anh – Anh "vaporisation"'],
  [/(?<!electro)magnetic induction(?! \(|\))/gi, 'thuật ngữ "cảm ứng từ" dùng "magnetic flux density" (đề cương Cambridge 9702)'],
  [/\b(Vật lý|vật lý|Vật Lý|Vật Lí)\b/g, 'viết "Vật lí"'],
  [/\b(kỹ|Kỹ)\b/g, 'viết "kĩ"'],
  [/\b(kỷ|Kỷ)\b/g, 'viết "kỉ"'],
  [/\b(lý|Lý)\b/g, 'viết "lí"'],
];
for (const p of TEP) {
  if (/\.js$/.test(p) && /^data[\\/]/.test(p)) continue; // đã kiểm qua .json
  if (/^(html[\\/]|g12\.html)/.test(p)) continue; // giao diện cũ, không trang nào liên kết tới (xem THÔNG TIN)
  const s = doc(p);
  for (const [re, loiKhuyen] of QUY_TAC) {
    const m = s.match(re);
    if (m) canhBao.push(`${p}: có ${m.length} chỗ "${m[0]}" — ${loiKhuyen}`);
  }
}
for (const l of LESSONS) {
  if (/vaporization/.test(l.en || '')) canhBao.push(`data/lessons.js bài ${l.n}: "vaporization" → "vaporisation"`);
  if (/(?<!electro)magnetic induction/i.test(l.en || '')) canhBao.push(`data/lessons.js bài ${l.n}: "Magnetic induction" → "Magnetic flux density"`);
}

// ---------- 5. Ứng dụng ngoại tuyến (PWA) ----------
if (co('sw.js')) {
  const m = doc('sw.js').match(/SHELL\s*=\s*\[([\s\S]*?)\]/);
  if (m) for (const x of m[1].match(/'[^']+'|"[^"]+"/g) || []) {
    const p = x.slice(1, -1).replace(/^\.\//, '');
    if (p && p !== '' && !co(p)) loi.push(`sw.js: danh sách lưu ngoại tuyến có "${p}" nhưng tệp không tồn tại — trình duyệt sẽ không cài được chế độ ngoại tuyến`);
  }
}
if (co('manifest.webmanifest')) {
  try {
    for (const ic of JSON.parse(doc('manifest.webmanifest')).icons || []) if (!co(ic.src)) loi.push(`manifest.webmanifest: thiếu biểu tượng ${ic.src}`);
  } catch (e) { loi.push(`manifest.webmanifest: ${e.message}`); }
}

// ---------- 6. Liên kết nội bộ trong các trang ----------
for (const p of TEP.filter(f => /\.html$/.test(f))) {
  const s = doc(p);
  for (const m of s.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|data:|javascript:|\/\/)/.test(u) || u.includes('${') || u.includes('{{')) continue;
    const dich = join(dirname(p), u);
    if (!existsSync(join(GOC, dich))) canhBao.push(`${p}: liên kết tới "${u}" nhưng không có tệp này`);
  }
}

// ---------- 7. Phạm vi 16 bài mẫu ----------
if (DL.content) {
  const coNoiDung = Object.keys(DL.content).map(Number);
  const ngoai = coNoiDung.filter(n => !MAU.includes(n));
  if (ngoai.length) thongTin.push(`Có nội dung cho ${coNoiDung.length} bài; ${ngoai.length} bài ngoài 16 bài mẫu (${ngoai.join(', ')}) — giữ dữ liệu nhưng trang web hiện "chưa có nội dung", trừ khi nhóm quyết định khác`);
  const thieu = MAU.filter(n => !coNoiDung.includes(n));
  if (thieu.length) canhBao.push(`Bài mẫu chưa có nội dung: ${thieu.join(', ')}`);
}

// ---------- Báo cáo ----------
const in_ = (tieuDe, ds) => { if (ds.length) { console.log(`\n${tieuDe} (${ds.length})`); for (const x of [...new Set(ds)]) console.log('  - ' + x); } };
in_('LỖI — phải sửa', loi);
in_('CẢNH BÁO — nên sửa', canhBao);
in_('THÔNG TIN', thongTin);
console.log(`\nKết quả: ${loi.length} lỗi, ${new Set(canhBao).size} cảnh báo.`);
process.exit(loi.length ? 1 : 0);
