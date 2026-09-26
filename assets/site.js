/* =====================================================================
   PhysiHub — mã dùng chung: mức ngôn ngữ, header/footer, thuật ngữ,
   phát âm, tiến độ học (localStorage), tiện ích.
   Thứ tự nạp trong mỗi trang: site.css → data/*.js → site.js → script trang
   Bản 2 (23/9/2026): đầu trang hai tầng, menu sổ, tìm kiếm, chữ giao diện ba mức, chống rơi chữ.
   ===================================================================== */
window.PH = window.PH || {};
(function (PH) {
  'use strict';

  const KEY = { lang: 'ph-lang', progress: 'ph-progress' };
  const store = {
    get(k, fallback) {
      try { const v = localStorage.getItem(k); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
    },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* riêng tư / bộ nhớ đầy */ }
    }
  };

  /* ---------- Tiện ích ---------- */
  PH.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* Chỉ số dưới: "E_lk" hiện thành E kèm "lk" nhỏ bên dưới, "A_(Z+1)" thành A kèm "Z+1".
     Chạy trên nút văn bản của trang đã dựng xong nên không đụng tới tên biến trong mã;
     chạy lại nhiều lần cũng không sao vì sau lần đầu trong văn bản không còn dấu gạch dưới. */
  const RE_CHISO = /([A-Za-zΔΦλ])_(?:\(([^()]{1,14})\)|([A-Za-z0-9À-ỹ]{1,8}))/g;
  PH.chiSo = root => {
    root = root || document.body;
    if (!root || !root.nodeType) return;
    const boQua = 'script, style, textarea, input, code, .nochiso';
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.nodeValue.indexOf('_') < 0 || (n.parentElement && n.parentElement.closest(boQua)))
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const ds = []; let n; while ((n = w.nextNode())) ds.push(n);
    ds.forEach(node => {
      const t = node.nodeValue; RE_CHISO.lastIndex = 0;
      if (!RE_CHISO.test(t)) return;
      RE_CHISO.lastIndex = 0;
      const frag = document.createDocumentFragment(); let last = 0, m;
      while ((m = RE_CHISO.exec(t))) {
        frag.appendChild(document.createTextNode(t.slice(last, m.index) + m[1]));
        const s = document.createElement('sub'); s.textContent = m[2] || m[3];
        frag.appendChild(s); last = m.index + m[0].length;
      }
      frag.appendChild(document.createTextNode(t.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  };
  PH.qs = name => new URLSearchParams(location.search).get(name);
  PH.shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  PH.sample = (arr, n) => PH.shuffle(arr).slice(0, n);
  // Chuẩn hoá để tìm kiếm: bỏ dấu, chỉ số trên, khoảng trắng và dấu nhân
  PH.norm = s => String(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[đĐ]/g, 'd').toLowerCase().replace(/[\s.·×*_]/g, '');
  // Số theo cách viết Việt Nam: 2,5 · 126
  PH.num = (x, digits) => {
    if (x == null || isNaN(x)) return '';
    const s = digits == null ? String(+(+x).toFixed(4)) : (+x).toFixed(digits);
    return s.replace('.', ',');
  };
  PH.parseNum = s => parseFloat(String(s || '').trim().replace(',', '.'));
  PH.pad2 = n => String(n).padStart(2, '0');
  PH.mmss = sec => PH.pad2(Math.floor(sec / 60)) + ':' + PH.pad2(sec % 60);
  // Nội dung do JS sinh ra sau khi trang tải, nên trình duyệt không tự cuộn tới #neo.
  // Gọi hàm này sau khi vẽ xong để link dạng baihoc.html#chuong-3 hoạt động.
  PH.applyHash = () => {
    const id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
    const el = document.getElementById(id); if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  /* ---------- Mức ngôn ngữ ---------- */
  PH.LANGS = [
    { id: 'vi', long: 'Tiếng Việt', short: 'VI', level: 1, mult: 1 },
    { id: 'bi', long: 'Song ngữ', short: 'VI+EN', level: 2, mult: 1.5 },
    { id: 'en', long: 'English', short: 'EN', level: 3, mult: 2 }
  ];
  // Nhớ mức ngôn ngữ trong bộ nhớ: PH.lang() được gọi hàng trăm lần mỗi lần vẽ lại,
  // đọc localStorage mỗi lần làm máy yếu bị khựng.
  let langCache = null;
  PH.lang = () => {
    if (langCache === null) { const v = store.get(KEY.lang, 'vi'); langCache = PH.LANGS.some(l => l.id === v) ? v : 'vi'; }
    return langCache;
  };
  window.addEventListener('storage', e => { if (e.key === KEY.lang) langCache = null; });   // đổi ở tab khác
  PH.langInfo = id => PH.LANGS.find(l => l.id === (id || PH.lang()));
  PH.setLang = id => {
    if (!PH.LANGS.some(l => l.id === id)) return;
    store.set(KEY.lang, id); langCache = id;
    document.documentElement.dataset.lang = id;
    document.dispatchEvent(new CustomEvent('ph:lang', { detail: id }));
  };
  PH.onLang = fn => document.addEventListener('ph:lang', e => fn(e.detail));

  // Chuỗi thô theo mức hiện tại (dùng cho title, aria, so sánh)
  PH.T = t => {
    if (t == null) return '';
    if (typeof t !== 'object') return String(t);
    const l = PH.lang();
    if (l === 'en' && t.en) return t.en;
    if (l === 'bi' && t.en) return t.vi + ' — ' + t.en;
    return t.vi || t.en || '';
  };
  // HTML theo mức: t = {vi, en}. Mức 1: Việt · Mức 2: Việt + Anh · Mức 3: Anh (thiếu Anh thì rơi về Việt)
  PH.L = (t, opts) => {
    opts = opts || {};
    if (t == null) return '';
    if (typeof t !== 'object') return PH.esc(PH.dinh(String(t)));
    const l = PH.lang();
    const vi = PH.esc(PH.dinh(t.vi)), en = PH.esc(PH.dinh(t.en));
    const enCls = 'en' + (opts.enClass ? ' ' + opts.enClass : '');
    if (l === 'vi' || !en) return `<span class="vi">${vi || en}</span>`;
    if (l === 'en') return `<span class="${enCls}">${en}</span>`;
    return `<span class="bi"><span class="vi">${vi}</span><span class="${enCls}">${en}</span></span>`;
  };

  /* ---------- Tiến độ học (chỉ lưu trên máy này) ---------- */
  const emptyProgress = () => ({ lessons: {}, last: null, terms: {}, games: {}, exams: {} });
  PH.progress = () => Object.assign(emptyProgress(), store.get(KEY.progress, {}));
  PH.save = p => { store.set(KEY.progress, p); document.dispatchEvent(new CustomEvent('ph:progress')); };
  PH.update = fn => { const p = PH.progress(); fn(p); PH.save(p); return p; };
  PH.visitLesson = n => PH.update(p => { p.lessons[n] = Object.assign({ done: false }, p.lessons[n], { visited: Date.now() }); p.last = { lesson: n, at: Date.now() }; });
  PH.finishLesson = (n, score) => PH.update(p => { p.lessons[n] = Object.assign({}, p.lessons[n], { done: true, score, at: Date.now() }); });
  // noteTerm: CHỈ gọi khi học sinh thật sự trả lời một câu (quiz, trò chơi) — nó quyết định "đã thuộc".
  PH.noteTerm = (id, wrong) => PH.update(p => { const t = p.terms[id] || { seen: 0, wrong: 0 }; t.seen++; if (wrong) t.wrong++; p.terms[id] = t; });
  // lookTerm: chỉ ghi nhận việc MỞ XEM nghĩa, không tính vào "đã thuộc".
  PH.lookTerm = id => PH.update(p => { const t = p.terms[id] || { seen: 0, wrong: 0 }; t.look = (t.look || 0) + 1; p.terms[id] = t; });
  PH.weakTermIds = () => { const t = PH.progress().terms; return Object.keys(t).filter(id => t[id].wrong > 0).sort((a, b) => t[b].wrong - t[a].wrong); };
  PH.chapterProgress = c => {
    const ch = (PH.CHAPTERS || []).find(x => x.n === c); if (!ch) return { total: 0, done: 0 };
    const p = PH.progress();
    return { total: ch.lessons.length, done: ch.lessons.filter(n => p.lessons[n] && p.lessons[n].done).length };
  };
  PH.reset = () => { try { localStorage.removeItem(KEY.progress); } catch (e) {} };

  /* ---------- Dữ liệu ---------- */
  PH.chapter = c => (PH.CHAPTERS || []).find(x => x.n === +c);
  PH.lesson = n => (PH.LESSONS || []).find(x => x.n === +n);
  PH.lessonTitle = n => { const l = PH.lesson(n); return l ? { vi: `Bài ${l.n}. ${l.vi}`, en: `Lesson ${l.n}. ${l.en}` } : { vi: `Bài ${n}`, en: `Lesson ${n}` }; };
  PH.roman = c => ['', 'I', 'II', 'III', 'IV'][c] || c;
  PH.termById = id => (PH.TERMS || []).find(t => t.id === id);
  PH.termByEn = en => { const k = String(en || '').toLowerCase(); return (PH.TERMS || []).find(t => t.en.toLowerCase() === k); };
  PH.termsForLesson = n => (PH.TERMS || []).filter(t => t.lesson === +n);
  PH.termsForChapter = c => (PH.TERMS || []).filter(t => t.chapter === +c);
  PH.hasContent = n => !!(PH.CONTENT && PH.CONTENT[String(n)]);

  /* ---------- Phạm vi ôn (dùng chung cho các trò chơi) ---------- */
  // { type: 'all' | 'chapter' | 'lesson' | 'weak', chapter?, lesson? }
  PH.scope = () => {
    const q = { chapter: PH.qs('chapter'), lesson: PH.qs('lesson'), scope: PH.qs('scope') };
    if (q.lesson) return { type: 'lesson', lesson: +q.lesson };
    if (q.chapter) return { type: 'chapter', chapter: +q.chapter };
    if (q.scope === 'weak') return { type: 'weak' };
    if (q.scope === 'all') return { type: 'all' };
    return Object.assign({ type: 'all' }, store.get('ph-scope', {}));
  };
  PH.setScope = s => store.set('ph-scope', s);
  PH.scopeTerms = s => {
    s = s || PH.scope(); const all = PH.TERMS || [];
    if (s.type === 'lesson') return all.filter(t => t.lesson === s.lesson);
    if (s.type === 'chapter') return all.filter(t => t.chapter === s.chapter);
    if (s.type === 'weak') { const ids = new Set(PH.weakTermIds()); return all.filter(t => ids.has(t.id)); }
    return all;
  };
  PH.scopeLabel = s => {
    s = s || PH.scope(); const en = PH.lang() === 'en';
    if (s.type === 'lesson') { const l = PH.lesson(s.lesson); return l ? `${en ? 'Lesson' : 'Bài'} ${l.n} · ${en ? l.en : l.vi}` : `${en ? 'Lesson' : 'Bài'} ${s.lesson}`; }
    if (s.type === 'chapter') { const c = PH.chapter(s.chapter); return c ? `${en ? 'Chapter' : 'Chương'} ${PH.roman(c.n)} · ${en ? c.en : c.vi}` : `${en ? 'Chapter' : 'Chương'} ${s.chapter}`; }
    if (s.type === 'weak') return en ? 'My weak spots' : 'Ôn điểm yếu của em';
    return en ? 'All terms' : 'Tất cả thuật ngữ';
  };

  /* ---------- Nhật kí trò chơi (kỷ lục, nhiệm vụ trong ngày, chuỗi ngày) ---------- */
  const dayKey = ts => { const d = new Date(ts); return d.getFullYear() + '-' + PH.pad2(d.getMonth() + 1) + '-' + PH.pad2(d.getDate()); };
  PH.logGame = (game, info) => PH.update(p => {
    p.games.log = (p.games.log || []).slice(-200); p.games.log.push(Object.assign({ game, at: Date.now(), lang: PH.lang() }, info));
    const b = p.games[game] || {};
    if (info.score != null) b.best = Math.max(b.best || 0, info.score);
    if (info.flips != null && info.won) b.bestFlips = Math.min(b.bestFlips || Infinity, info.flips);
    if (info.time != null && info.won) b.bestTime = Math.min(b.bestTime || Infinity, info.time);
    b.plays = (b.plays || 0) + 1; p.games[game] = b;
  });
  PH.gamesToday = () => { const k = dayKey(Date.now()); return ((PH.progress().games.log) || []).filter(e => dayKey(e.at) === k); };
  PH.streakDays = () => {
    const days = new Set(((PH.progress().games.log) || []).map(e => dayKey(e.at)));
    let n = 0; const d = new Date();
    while (days.has(dayKey(d.getTime()))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };

  /* ---------- Biểu tượng (SVG nội tuyến, không cần thư viện) ---------- */
  const ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    speaker: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    back: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/><path d="M8 7h7"/>',
    play: '<path d="M7 5v14l11-7z"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16"/><path d="M20 21v-5h-5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    flame: '<path d="M12 3c1 3 4 5 4 9a4 4 0 0 1-8 0c0-2 1-3 1-3s.5 2 2 2c0-4 1-6 1-8z"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    cards: '<rect x="3" y="7" width="12" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
    lang: '<path d="M4 5h9"/><path d="M8.5 3v2"/><path d="M11 5c-.6 4-3 7-7 9"/><path d="M7 9c1 2 3 4 6 5"/><path d="m13 21 4-9 4 9"/><path d="M14.5 17.5h5"/>',
    list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>'
  };
  // Đơn vị hiển thị theo mức ngôn ngữ (vd. MeV/nuclôn ↔ MeV/nucleon)
  PH.unitOf = t => (t && ((PH.lang() === 'en' && t.unitEn) || t.unit)) || '';
  PH.icon = (name, cls) => `<svg class="icon${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  /* ---------- Phát âm tiếng Anh (Web Speech API, không cần file âm thanh) ---------- */
  let voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return null;
    const vs = speechSynthesis.getVoices();
    return vs.find(v => /en-GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { voice = pickVoice(); speechSynthesis.onvoiceschanged = () => { voice = pickVoice(); }; }
  PH.hasVoice = () => ('speechSynthesis' in window) && !!(voice || speechSynthesis.getVoices().some(v => /^en/i.test(v.lang)));
  PH.speak = text => {
    if (!('speechSynthesis' in window)) { PH.toast(PH.ui('noVoice'), 3200); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-GB'; u.rate = 0.92; if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  };

  /* ---------- Thông báo nhỏ ---------- */
  let toastEl, toastTimer;
  PH.toast = (msg, ms) => {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'ph-toast'; toastEl.setAttribute('role', 'status'); toastEl.setAttribute('aria-live', 'polite'); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms || 2200);
  };

  /* ---------- Chữ trên giao diện theo mức ngôn ngữ ----------
     Mức 1 và 2 hiện tiếng Việt (mức 2 có dòng tiếng Anh nhỏ ở menu), mức 3 hiện tiếng Anh. */
  PH.UI = {
    navHome: ['Trang chủ', 'Home'], navLessons: ['Bài học', 'Lessons'], navTerms: ['Thuật ngữ', 'Glossary'],
    navExams: ['Luyện đề', 'Exam practice'], navGames: ['Trò chơi', 'Games'], navLab: ['Thí nghiệm ảo', 'Virtual lab'], navMenu: ['Menu chính', 'Main menu'],
    searchPh: ['Tìm bài học, thuật ngữ…', 'Search lessons and terms…'], search: ['Tìm kiếm', 'Search'], clear: ['Xoá chữ đã gõ', 'Clear search'],
    mastered: ['Thuật ngữ đã thuộc', 'Terms mastered'],
    masteredHint: ['Một thuật ngữ tính là đã thuộc khi em trả lời đúng ít nhất hai lần và chưa sai lần nào.', 'A term counts as mastered once you have answered it correctly at least twice without a mistake.'],
    langLevel: ['Đổi mức ngôn ngữ', 'Change language level'],
    lessonLbl: ['Bài học', 'Lesson'], termLbl: ['Thuật ngữ', 'Term'], chapter: ['Chương', 'Chapter'], lesson: ['Bài', 'Lesson'],
    moreResults: ['Còn {n} kết quả nữa — bấm kính lúp để xem hết', '{n} more results — press the magnifier to see them all'],
    results: ['{n} kết quả', '{n} results'], noMatch: ['Không có kết quả khớp đúng với “{q}”.', 'Nothing matches “{q}” exactly.'],
    didYouMean: ['Có phải em muốn tìm:', 'Did you mean:'], tip: ['Thử gõ tên tiếng Anh, hoặc gõ bớt chữ.', 'Try the English name, or type fewer letters.'],
    openGlossary: ['Mở kho thuật ngữ', 'Open the glossary'],
    lab: ['Có thí nghiệm ảo', 'Virtual lab inside'], labName: ['Thí nghiệm ảo · Từ nước đá đến hơi nước', 'Virtual lab · From ice to steam'],
    labDesc: ['Chương I · Bài 1 — xem nước đá tan, nước sôi và đồ thị nhiệt độ chạy cùng lúc', 'Chapter I · Lesson 1 — watch ice melt, water boil and the temperature graph at the same time'],
    seeAll: ['Xem cả {n} bài mẫu', 'See all {n} sample lessons'], notYet: ['+ {n} bài chưa có nội dung', '+ {n} lessons not written yet'],
    byChapter: ['Theo chương', 'By chapter'], byStatus: ['Ôn theo trạng thái', 'Review by status'], inLesson: ['Trong bài em đang học', 'In your current lesson'],
    notMastered: ['Chưa thuộc', 'Not mastered yet'], masteredS: ['Đã thuộc', 'Mastered'], howChecked: ['Cách nhóm kiểm tra một thuật ngữ', 'How each term is checked'],
    nTerms: ['{n} thuật ngữ', '{n} terms'], symbolUnit: ['kí hiệu {s}', 'symbol {s}'], unit: ['đơn vị {u}', 'unit {u}'],
    tests2025: ['Đề theo cấu trúc 2025', 'Tests in the 2025 format'], practiceBy: ['Luyện theo chương', 'Practise by chapter'],
    questions: ['{n} câu', '{n} questions'], minutes: ['{n} phút', '{n} minutes'], takeTest: ['Làm đề', 'Take a test'],
    threeLevels: ['Đề cũng có ba mức ngôn ngữ', 'Tests come in all three language levels'],
    threeLevelsNote: ['Chọn Tiếng Việt, Song ngữ hoặc English ở góc trên. Điểm luyện đề giữ nguyên, không nhân hệ số như trò chơi.', 'Pick Vietnamese, Bilingual or English at the top. Test scores stay as they are; only games multiply points.'],
    termRushSub: ['Đua với thuật ngữ đang rơi', 'Beat the falling terms'], matchSub: ['Lật thẻ, ghép đúng từng cặp', 'Flip the cards, match the pairs'],
    arenaSub: ['Đấu trường song ngữ · đang phát triển', 'Bilingual arena · in development'],
    rushMeta: ['60 giây · 3 mạng', '60 seconds · 3 lives'], matchMeta: ['90 giây · 12 thẻ', '90 seconds · 12 cards'], arenaMeta: ['10 câu mỗi trận', '10 questions a round'],
    multHead: ['Điểm nhân theo mức ngôn ngữ', 'Points grow with your language level'], badges: ['Huy hiệu chương', 'Chapter badges'], records: ['Kỉ lục của em', 'Your records'],
    vietnamese: ['Tiếng Việt', 'Vietnamese'], bilingual: ['Song ngữ', 'Bilingual'],
    ft1: ['Sản phẩm dự thi Khoa học kĩ thuật · Trường THPT Bùi Hữu Nghĩa, Cần Thơ · Năm học 2026–2027', 'Science and engineering fair project · Bùi Hữu Nghĩa High School, Cần Thơ · School year 2026–2027'],
    ft2: ['Nội dung bám SGK Vật lí 12 (Kết nối tri thức với cuộc sống) và đề minh hoạ của Bộ GD&ĐT, dùng cho mục đích học tập.', 'Content follows the Grade 12 Physics textbook (Kết nối tri thức với cuộc sống series) and the Ministry of Education’s sample exams, for learning purposes only.'],
    ftAll: ['Tất cả liên kết', 'All links'], ftAbout: ['Về dự án', 'About the project'], ftSources: ['Nguồn học liệu', 'Sources'], ftFeedback: ['Góp ý cho nhóm', 'Send feedback'],
    listen: ['Nghe phát âm', 'Play pronunciation'], listenMachine: ['Đọc bằng giọng máy của trình duyệt', 'Read aloud by the browser voice'],
    hearOn: ['Nghe phát âm trên', 'Hear it on'], hearOxford: ['Nghe trên Oxford', 'Hear it on Oxford'], hearCambridge: ['Nghe trên Cambridge', 'Hear it on Cambridge'],
    openInGlossary: ['Mở trong kho thuật ngữ', 'Open in the glossary'], noVoice: ['Máy này chưa có giọng đọc tiếng Anh — em nghe trên Oxford hoặc Cambridge nhé.', 'No English voice on this device — listen on Oxford or Cambridge instead.'],
    awaiting: ['chờ thẩm định', 'awaiting review'], added: ['bổ sung · chờ thẩm định', 'added · awaiting review'], draft: ['bản nháp · chờ giáo viên thẩm định', 'draft · awaiting teacher review'],
    noContent: ['chưa có nội dung', 'no content yet'], done: ['đã học', 'done'], inProgress: ['đang học', 'in progress'],
    of: ['/', '/'], continueBtn: ['Tiếp tục học', 'Continue'], startBtn: ['Bắt đầu học', 'Start learning'],
    inProgressLbl: ['Em đang học dở · Chương {c}', 'Pick up where you left off · Chapter {c}'], startHere: ['Bắt đầu từ đây', 'Start here'],
    read: ['Đã đọc {p} %', '{p} % read'], notStarted: ['Chưa học bài nào — bắt đầu từ Bài 1', 'No lesson started yet — begin with Lesson 1'],
    sampleLessons: ['{n} bài mẫu', '{n} sample lessons'], perChapter: ['4 bài mẫu mỗi chương', '4 sample lessons per chapter'],
    chDone: ['{n} bài mẫu · đã học {d} / {n}', '{n} sample lessons · {d} of {n} done'], chNone: ['{n} bài mẫu · chưa bắt đầu', '{n} sample lessons · not started'],
    fourChapters: ['Bốn chương · {n} bài mẫu', 'Four chapters · {n} sample lessons'], seeAllLessons: ['Xem tất cả bài học', 'See all lessons'],
    entryLessons: ['{n} bài mẫu, 4 bài mỗi chương', '{n} sample lessons, 4 per chapter'], entryTerms: ['{n} thuật ngữ có phiên âm', '{n} terms with IPA'],
    entryExams: ['{n} câu theo cấu trúc 2025', '{n} questions, 2025 format'], entryGames: ['2 trò chơi, nhân điểm tới ×2', '2 games, points up to ×2'], entryLab: ['Từ nước đá đến hơi nước', 'From ice to steam'],
    sameSentence: ['Cùng một câu, ba mức ngôn ngữ', 'One sentence, three language levels'],
    sameSentenceHint: ['Bấm nút ngôn ngữ trên đầu trang — dòng sáng lên là mức em đang chọn.', 'Use the language buttons at the top — the highlighted row is your level.'],
    level: ['Mức', 'Level'], selected: ['đang chọn', 'selected'],
    lv1: ['Mức 1 · Tiếng Việt', 'Level 1 · Vietnamese'], lv2: ['Mức 2 · Song ngữ', 'Level 2 · Bilingual'], lv3: ['Mức 3 · English', 'Level 3 · English'],
    lv1d: ['Chữ Việt, thuật ngữ tiếng Anh hiện kèm', 'Vietnamese text, English terms shown alongside'], lv2d: ['Hai thứ tiếng song song, câu nào cũng có', 'Both languages side by side'], lv3d: ['Chỉ tiếng Anh, chạm vào thuật ngữ để xem nghĩa', 'English only — tap a term to see its meaning'],
    install: ['Cài lên màn hình chính', 'Add to home screen'], installed: ['Đã cài PhysiHub lên màn hình chính.', 'PhysiHub is now on your home screen.'],
    installLater: ['Em có thể cài sau từ menu trình duyệt: “Thêm vào màn hình chính”.', 'You can add it later from the browser menu: “Add to home screen”.'],
    heroEyebrow: ['Vật lí 12 · SGK Kết nối tri thức với cuộc sống', 'Physics 12 · Kết nối tri thức với cuộc sống textbook'],
    heroH1: ['Vật lí 12\nsong ngữ Việt – Anh', 'Bilingual\nPhysics 12'], heroSub: ['Bilingual Physics 12 · Vietnamese – English', 'Vietnamese – English'],
    heroLead: ['Mỗi bài học, mỗi thuật ngữ và mỗi câu hỏi đều có bản tiếng Việt và tiếng Anh. Chọn mức ngôn ngữ vừa sức, rồi nâng dần khi đã quen.', 'Every lesson, term and question comes in both Vietnamese and English. Start at a level you are comfortable with, then move up as you grow confident.'],
    offline: ['Đang ngoại tuyến', 'You are offline'], offlineNote: ['Bài học, thuật ngữ và đề luyện vẫn mở được. Phát âm cần có mạng.', 'Lessons, terms and tests still open. Audio needs a connection.'],
    back: ['Quay lại', 'Back'], prevLesson: ['Bài trước', 'Previous lesson'], nextLesson: ['Bài tiếp theo', 'Next lesson'], keepGoing: ['Học tiếp', 'Keep going'],
    aboutTitle: ['Về dự án', 'About the project'],
    nextUp: ['Bài tiếp theo · Chương {c}', 'Next up · Chapter {c}'], allDone: ['Em đã học xong các bài mẫu · Chương {c}', 'All sample lessons done · Chapter {c}'],
    notStartedShort: ['Chưa bắt đầu', 'Not started'], seeAllShort: ['Tất cả', 'All'], reviewAgain: ['Ôn lại', 'Review again'],
    todayH2: ['Em muốn học gì hôm nay?', 'What would you like to do today?'],
    ch1Alt: ['Ba cốc thuỷ tinh: nước đá, nước đá đang tan và nước đang bốc hơi', 'Three glasses: ice, melting ice and steaming water'],
    ch2Alt: ['Xi lanh có pit-tông chứa phân tử khí, áp kế và đồ thị các đường đẳng nhiệt', 'A cylinder with a piston holding gas molecules, a pressure gauge and a graph of isotherms'],
    ch3Alt: ['Thanh nam châm và đường sức từ hiện lên nhờ mạt sắt', 'A bar magnet with its field lines shown by iron filings'],
    ch4Alt: ['Nơtron bắn vào hạt nhân nặng, hạt nhân vỡ thành hai mảnh và giải phóng ba nơtron', 'A neutron strikes a heavy nucleus, which splits into two fragments and releases three neutrons']
  };
  PH.ui = (key, vars) => {
    const t = PH.UI[key]; if (!t) return key;
    let s = PH.lang() === 'en' ? t[1] : t[0];
    if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  };
  PH.uiBoth = key => { const t = PH.UI[key] || [key, key]; return { vi: t[0], en: t[1] }; };
  PH.uiFmt = (key, vars) => PH.esc(PH.dinh(PH.ui(key, vars)));
  PH.uiRaw = (key, vars) => PH.esc(PH.ui(key, vars));

  /* ---------- Chống "rơi chữ" ----------
     Hai chữ cuối câu và số đi liền đơn vị (1 kg, 60 W, 4 bài) được nối bằng dấu cách không ngắt. */
  PH.dinh = s => {
    if (typeof s !== 'string' || /[<>{}]/.test(s)) return s;
    s = s.replace(/(\d) (?=[\dA-Za-zÀ-ỹ%°ΩΦλ])/g, '$1 ');
    if (s.length < 8) return s;
    const w = s.split(' ');
    if (w.length < 3 || w[w.length - 1].length > 14) return s;
    return s.replace(/ (\S+)$/, ' $1');
  };

  /* ---------- Phạm vi bản mẫu: 16 bài, 4 bài mỗi chương (chốt 22/9/2026) ----------
     Đổi PH.MO_TAT_CA = true để mở mọi bài đã có nội dung. */
  PH.MAU = [1, 2, 3, 4, 8, 9, 10, 11, 14, 15, 16, 17, 21, 22, 23, 24];
  PH.MO_TAT_CA = false;
  PH.isSample = n => PH.MO_TAT_CA ? true : PH.MAU.includes(+n);
  PH.canOpen = n => PH.hasContent(n) && PH.isSample(n);
  PH.sampleLessons = () => (PH.LESSONS || []).filter(l => PH.canOpen(l.n));
  PH.LAB_LESSON = 1;
  // Tiến độ tính trên các bài mẫu mở được của chương
  PH.sampleProgress = c => {
    const ch = PH.chapter(c); if (!ch) return { total: 0, done: 0, pct: 0 };
    const p = PH.progress(); const open = ch.lessons.filter(n => PH.canOpen(n));
    const done = open.filter(n => p.lessons[n] && p.lessons[n].done).length;
    return { total: open.length, done, pct: open.length ? Math.round(done / open.length * 100) : 0 };
  };
  // Bài nên học tiếp: bài đang dở, hoặc bài mẫu đầu tiên chưa xong sau bài vừa học
  PH.nextLesson = () => {
    const p = PH.progress(); const list = PH.sampleLessons().map(l => l.n);
    const last = p.last && PH.canOpen(p.last.lesson) ? p.last.lesson : null;
    if (!last) return { n: list[0] || 1, state: 'new' };
    const rec = p.lessons[last] || {};
    if (!rec.done) return { n: last, state: 'doing', read: rec.read || 0 };
    const after = list.slice(list.indexOf(last) + 1).find(n => !(p.lessons[n] && p.lessons[n].done));
    return after ? { n: after, state: 'next' } : { n: last, state: 'done' };
  };

  /* ---------- Thuật ngữ đã thuộc ---------- */
  const thuoc = r => !!(r && r.seen >= 2 && r.wrong === 0);
  PH.isMastered = id => thuoc(PH.progress().terms[id]);
  // Đọc tiến độ MỘT lần rồi lọc; gọi PH.isMastered trong vòng lặp sẽ đọc và phân tích
  // lại toàn bộ dữ liệu 79 lần cho mỗi lần vẽ con số.
  PH.masteredCount = () => { const t = PH.progress().terms; return (PH.TERMS || []).filter(x => thuoc(t[x.id])).length; };

  /* ---------- Tra từ điển: phát âm chuẩn nghe trên Oxford Learner’s / Cambridge ----------
     Trang không sao chép tệp âm thanh của từ điển; nút mở đúng trang từ điển có nút nghe. */
  PH.dictLinks = t => {
    const en = t.en || '';
    const ox = t.oxford ? 'https://www.oxfordlearnersdictionaries.com/definition/english/' + t.oxford
                        : 'https://www.oxfordlearnersdictionaries.com/search/english/?q=' + encodeURIComponent(en);
    const cam = 'https://dictionary.cambridge.org/search/direct/?datasetsearch=english&q=' + encodeURIComponent(en);
    return [{ id: 'oxford', name: 'Oxford', label: PH.ui('hearOxford'), url: ox }, { id: 'cambridge', name: 'Cambridge', label: PH.ui('hearCambridge'), url: cam }];
  };
  PH.dictHTML = t => `<span class="dict-links"><span class="dl-lb">${PH.uiFmt('hearOn')}</span>${PH.dictLinks(t).map(d => `<a href="${d.url}" target="_blank" rel="noopener" title="${PH.esc(d.label)}" aria-label="${PH.esc(d.label)}">${d.name}</a>`).join('')}</span>`;

  /* ---------- Biểu tượng nét ---------- */
  const ICON2 = {
    home: '<path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5.5h4V20"/>',
    down: '<path d="m6 9 6 6 6-6"/>', right: '<path d="m9 6 6 6-6 6"/>',
    flask: '<path d="M9 3v6.2L4.6 17A2 2 0 0 0 6.3 20h11.4a2 2 0 0 0 1.7-3L15 9.2V3"/><path d="M8 3h8"/><path d="M7.5 14h9"/>',
    book: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/>',
    speaker: '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>',
    exam: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h3"/>',
    game: '<rect x="2" y="6" width="20" height="12" rx="5"/><path d="M7 10v4"/><path d="M5 12h4"/><circle cx="15.5" cy="11" r="1"/><circle cx="18" cy="13.5" r="1"/>',
    fire: '<path d="M12 22c4 0 7-2.7 7-6.8 0-3.2-2-5.6-3.6-7.4-.4 2-1.4 3.2-2.6 3.8.3-3.2-1.1-6.3-4.3-8.6.2 3.4-1.6 5.5-3.2 7.4C4 12.1 5 14 5 15.2 5 19.3 8 22 12 22z"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>', shield: '<path d="M12 3 5 6v5.5c0 4.3 3 8 7 9.5 4-1.5 7-5.2 7-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    cup: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3"/><path d="M7 5H4v2a3 3 0 0 0 3 3"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>', cards2: '<rect x="3" y="5" width="8" height="11" rx="2"/><rect x="13" y="8" width="8" height="11" rx="2"/>',
    vs: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="15" r="3"/><path d="m5 19 14-14"/>',
    clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2"/><path d="M9 2h6"/>', x: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>', arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    thermo: '<path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z"/><path d="M12 9v7"/>',
    gas: '<circle cx="7" cy="8" r="2.4"/><circle cx="16.5" cy="7" r="1.8"/><circle cx="12" cy="14" r="2.8"/><circle cx="18" cy="16.5" r="1.6"/><circle cx="6.5" cy="17.5" r="1.6"/>',
    magnet: '<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 7h4"/><path d="M14 7h4"/><path d="M10 3v8a2 2 0 0 0 4 0V3"/>',
    atom: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.8"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>', lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    wifi: '<path d="M2 8.5a15 15 0 0 1 20 0"/><path d="M5.5 12.2a10 10 0 0 1 13 0"/><path d="M9 15.8a5 5 0 0 1 6 0"/><circle cx="12" cy="19" r="1"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/><path d="m15 9 5-5"/><path d="M17 4h3v3"/>',
    bulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2V17h5v-1.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M9 4v16"/>',
    sigma: '<path d="M18 5H6l6 7-6 7h12"/>'
  };
  Object.assign(ICONS, ICON2);
  PH.CH_ICON = { 1: 'thermo', 2: 'gas', 3: 'magnet', 4: 'atom' };
  // Nhãn mục kiểu slide: huy hiệu tròn có biểu tượng + dải màu. tone: '' (xanh) | 'orange'; size: '' | 'sm'
  PH.label = (icon, text, tone, size) => `<span class="ph-label${tone ? ' ' + tone : ''}${size ? ' ' + size : ''}"><span class="b">${PH.icon(icon)}</span><span class="t">${text}</span></span>`;
  PH.LOGO = '<svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><defs><radialGradient id="ph-logo-g" cx="38%" cy="32%" r="72%"><stop offset="0" stop-color="#1E88E5"/><stop offset="1" stop-color="#0A3483"/></radialGradient></defs><circle cx="20" cy="20" r="19" fill="url(#ph-logo-g)"/><g fill="none" stroke="#5FD3F3" stroke-width="1.5"><ellipse cx="20" cy="20" rx="13" ry="5"/><ellipse cx="20" cy="20" rx="13" ry="5" transform="rotate(60 20 20)"/><ellipse cx="20" cy="20" rx="13" ry="5" transform="rotate(120 20 20)"/></g><circle cx="20" cy="20" r="3.2" fill="#F2C14E"/></svg>';

  /* ---------- Tìm kiếm trên đầu trang: 16 bài mẫu + toàn bộ thuật ngữ, không phân biệt dấu, gợi ý khi gõ sai ---------- */
  const lev = (a, b) => {
    const d = []; for (let i = 0; i <= a.length; i++) d[i] = [i];
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  };
  const slug = s => String(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[đĐ]/g, 'd').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
  PH.search = q => {
    q = slug(q); if (!q) return { hits: [], suggest: [] };
    const en = PH.lang() === 'en', R = PH.roman;
    const hits = [];
    PH.sampleLessons().forEach(l => {
      const key = slug(l.vi) + ' ' + slug(l.en) + ' bai ' + l.n + ' lesson ' + l.n;
      if (key.includes(q)) hits.push({ kind: 'lesson', chapter: l.chapter, main: (en ? 'Lesson ' : 'Bài ') + l.n + '. ' + (en ? l.en : l.vi), sub: l.en, where: PH.ui('chapter') + ' ' + R(l.chapter), href: 'bai.html?n=' + l.n });
    });
    (PH.TERMS || []).forEach(t => {
      const key = slug(t.vi) + ' ' + slug(t.en) + ' ' + slug(t.symbol);
      if (key.includes(q)) hits.push({ kind: 'term', chapter: t.chapter, main: en ? t.en : t.vi, sub: t.en, where: PH.ui('chapter') + ' ' + R(t.chapter) + ' · ' + PH.ui('lesson') + ' ' + t.lesson, href: 'thuatngu.html?t=' + encodeURIComponent(t.id) });
    });
    let suggest = [];
    if (!hits.length) {
      const pool = [];
      (PH.TERMS || []).forEach(t => pool.push({ label: en ? t.en : t.vi, keys: [slug(t.vi), slug(t.en)], href: 'thuatngu.html?t=' + encodeURIComponent(t.id) }));
      PH.sampleLessons().forEach(l => pool.push({ label: (en ? 'Lesson ' : 'Bài ') + l.n + '. ' + (en ? l.en : l.vi), keys: [slug(l.vi), slug(l.en)], href: 'bai.html?n=' + l.n }));
      const lim = Math.max(2, Math.floor(q.length / 3));
      pool.forEach(p => { p.d = Math.min.apply(null, p.keys.map(k => lev(q, k.slice(0, q.length)))); });
      suggest = pool.filter(p => p.d <= lim).sort((a, b) => a.d - b.d).slice(0, 3);
    }
    return { hits, suggest };
  };

  /* ---------- Đầu trang, chân trang ---------- */
  const NAV = [
    { id: 'lessons', href: 'baihoc.html', key: 'navLessons', icon: 'book' },
    { id: 'terms', href: 'thuatngu.html', key: 'navTerms', icon: 'speaker' },
    { id: 'exams', href: 'luyende.html', key: 'navExams', icon: 'exam' },
    { id: 'games', href: 'games.html', key: 'navGames', icon: 'game' }
  ];
  const sub = key => `<span class="ph-bar-sub" lang="en">${PH.esc(PH.UI[key][1])}</span>`;
  const chName = c => PH.lang() === 'en' ? c.en : c.vi;

  function menuLessons() {
    const cols = (PH.CHAPTERS || []).map(ch => {
      const open = ch.lessons.filter(n => PH.canOpen(n));
      const rest = ch.lessons.length - open.length;
      const rows = open.map(n => {
        const l = PH.lesson(n);
        const lab = n === PH.LAB_LESSON ? `<span class="tag" style="margin-top:5px;background:var(--c1-soft);color:var(--c1-ink)">${PH.icon('flask', 'sm')}${PH.uiFmt('lab')}</span>` : '';
        return `<a class="ph-mm-l acc-${ch.n}" href="bai.html?n=${n}"><span class="so">${n}</span><span class="ten"><span>${PH.esc(PH.dinh(PH.lang() === 'en' ? l.en : l.vi))}</span><span class="en" lang="en">${PH.esc(l.en)}</span>${lab}</span></a>`;
      }).join('');
      return `<div class="acc-${ch.n}"><a class="ph-mm-l" href="baihoc.html#chuong-${ch.n}" style="align-items:center;padding:6px 8px"><span class="ic big">${PH.icon(PH.CH_ICON[ch.n])}</span><span class="ten"><span class="cap">${PH.uiFmt('chapter')} ${PH.roman(ch.n)}</span><span class="h big">${PH.esc(chName(ch))}</span></span></a><div class="ph-mm-rule"></div>${rows}${rest ? `<p class="ph-mm-more">${PH.uiFmt('notYet', { n: rest })}</p>` : ''}</div>`;
    }).join('');
    return `<div class="ph-mm-cols c4">${cols}</div>
      <div class="ph-mm-foot"><a class="ph-mm-l acc-1" href="thinghiem.html"><span class="icon-tile tone-1" style="width:40px;height:40px;border-radius:12px">${PH.icon('flask')}</span><span class="ten"><span class="h" style="font-size:14.5px">${PH.uiFmt('labName')}</span><span style="font-size:12.5px;color:var(--ink-3)">${PH.uiFmt('labDesc')}</span></span></a>
      <a class="ph-mm-l" href="baihoc.html" style="flex:none;align-items:center;font-weight:700;color:var(--navy-2);white-space:nowrap">${PH.uiFmt('seeAll', { n: PH.sampleLessons().length })}${PH.icon('arrow', 'sm')}</a></div>`;
  }
  function menuTerms() {
    const terms = PH.TERMS || [];
    const chs = (PH.CHAPTERS || []).map(ch => `<a class="ph-mm-l acc-${ch.n}" href="thuatngu.html?c=${ch.n}" style="align-items:center"><span class="ic">${PH.icon(PH.CH_ICON[ch.n])}</span><span class="h" style="flex:1 1 auto;min-width:0">${PH.uiFmt('chapter')} ${PH.roman(ch.n)} · ${PH.esc(chName(ch))}</span><span class="meta">${PH.uiFmt('nTerms', { n: terms.filter(t => t.chapter === ch.n).length })}</span></a>`).join('');
    const m = PH.masteredCount();
    const p = PH.progress(); const lastN = p.last && PH.canOpen(p.last.lesson) ? p.last.lesson : 1;
    const t0 = PH.termsForLesson(lastN)[0] || terms[0];
    const box = t0 ? `<div class="ph-mm-box"><p class="ph-mm-h">${PH.uiFmt('inLesson')}</p><div style="display:flex;align-items:center;gap:12px">${PH.hasVoice() ? `<button type="button" class="speak-btn" data-speak="${PH.esc(t0.en)}" aria-label="${PH.uiFmt('listenMachine')}" title="${PH.uiFmt('listenMachine')}">${PH.icon('speaker')}</button>` : `<span class="icon-tile sm tone-teal">${PH.icon('speaker')}</span>`}<div style="min-width:0"><div class="word" lang="en">${PH.esc(t0.en)}</div><div class="ipa" lang="en" style="font-size:14px">${PH.esc(t0.ipa)}</div></div></div>
      <p style="margin:10px 0 6px">${PH.lang() === 'en' ? '' : PH.esc(t0.vi) + ' · '}${t0.symbol ? PH.esc(t0.symbol) + ' · ' : ''}${PH.esc(PH.unitOf(t0))}</p>${PH.dictHTML(t0)}<a class="ph-mm-l" href="thuatngu.html?t=${encodeURIComponent(t0.id)}" style="display:inline-flex;align-items:center;font-weight:700;color:var(--gold);padding:6px 10px;margin:6px 0 0 -10px;--accent-soft:#fff;--accent:var(--orange-line)">${PH.uiFmt('openInGlossary')}${PH.icon('arrow', 'sm')}</a></div>` : '';
    return `<div class="ph-mm-cols c3" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1.1fr)">
      <div><p class="ph-mm-h">${PH.uiFmt('byChapter')}</p>${chs}</div>
      <div><p class="ph-mm-h">${PH.uiFmt('byStatus')}</p>
        <a class="ph-mm-l acc-1" href="thuatngu.html?loc=chua" style="align-items:center"><span class="ic">${PH.icon('fire')}</span><span class="h" style="flex:1">${PH.uiFmt('notMastered')}</span><span class="meta">${PH.uiFmt('nTerms', { n: terms.length - m })}</span></a>
        <a class="ph-mm-l acc-4" href="thuatngu.html?loc=thuoc" style="align-items:center"><span class="ic">${PH.icon('check')}</span><span class="h" style="flex:1">${PH.uiFmt('masteredS')}</span><span class="meta">${PH.uiFmt('nTerms', { n: m })}</span></a>
        <a class="ph-mm-l" href="vedan.html#kiem-tra" style="align-items:center"><span class="ic">${PH.icon('shield')}</span><span class="h" style="flex:1">${PH.uiFmt('howChecked')}</span></a>
      </div>${box}</div>`;
  }
  function menuExams() {
    const exams = (PH.EXAMS || []).map(x => { const n = x.parts.reduce((s, pt) => s + pt.items.length, 0); return `<a class="ph-mm-l acc-${x.chapter}" href="luyende.html?exam=${x.id}" style="align-items:center"><span class="ic">${PH.icon('exam')}</span><span class="h" style="flex:1 1 auto;min-width:0">${PH.esc(PH.lang() === 'en' ? x.title.en : x.title.vi)}</span><span class="meta">${PH.uiFmt('questions', { n })} · ${PH.uiFmt('minutes', { n: x.minutes })}</span></a>`; }).join('');
    const chs = (PH.CHAPTERS || []).map(ch => `<a class="ph-mm-l acc-${ch.n}" href="game-termrush.html?chapter=${ch.n}" style="align-items:center"><span class="pill dot" style="min-height:0;padding:0;border:0"><span class="dot"></span></span><span class="h" style="flex:1">${PH.uiFmt('chapter')} ${PH.roman(ch.n)} · ${PH.esc(chName(ch))}</span>${PH.icon('right', 'sm')}</a>`).join('');
    return `<div class="ph-mm-cols c3" style="grid-template-columns:minmax(0,1.25fr) minmax(0,1fr) minmax(0,1fr)">
      <div><p class="ph-mm-h">${PH.uiFmt('tests2025')}</p>${exams || `<p class="ph-mm-more">—</p>`}<a class="btn gold" href="luyende.html" style="margin:10px 0 0 10px;min-height:42px;font-size:14px">${PH.uiFmt('takeTest')}${PH.icon('arrow', 'sm')}</a></div>
      <div><p class="ph-mm-h">${PH.uiFmt('practiceBy')}</p>${chs}</div>
      <div class="ph-mm-box blue"><span class="icon-tile tone-navy" style="width:40px;height:40px;border-radius:12px;margin-bottom:10px">${PH.icon('exam')}</span><p style="font-size:15px;font-weight:700;color:var(--navy);margin-bottom:6px">${PH.uiFmt('threeLevels')}</p><p>${PH.uiFmt('threeLevelsNote')}</p></div></div>`;
  }
  function menuGames() {
    const g = (icon, tone, name, subKey, metaKey, href, dev) => `<a class="ph-mm-l" href="${href}" style="align-items:center;gap:14px;padding:12px 14px;border-color:var(--line);--accent-soft:var(--blue-soft);--accent:var(--blue-line);--accent-ink:var(--ink)${dev ? ';opacity:.85' : ''}"><span class="ic g ${tone}">${PH.icon(icon)}</span><span class="ten"><span class="h" style="font-size:16px;font-weight:800">${PH.esc(name)}${dev ? ` <span class="tag gold" style="vertical-align:middle">${PH.esc(PH.lang() === 'en' ? 'in development' : 'đang phát triển')}</span>` : ''}</span><span style="display:block;font-size:13px;color:var(--ink-2)">${PH.uiFmt(subKey)}</span><span class="tag" style="margin-top:5px">${PH.icon('clock', 'sm')}${PH.uiFmt(metaKey)}</span></span></a>`;
    const mult = PH.LANGS.map(l => `<span class="ph-mm-tag" style="background:${l.id === 'vi' ? 'var(--blue-soft);color:var(--navy)' : l.id === 'bi' ? 'var(--orange-soft);color:var(--gold)' : 'var(--navy);color:#fff'}">${PH.esc(l.id === 'vi' ? PH.ui('vietnamese') : l.id === 'bi' ? PH.ui('bilingual') : 'English')} ×${PH.esc(PH.lang() === 'en' ? String(l.mult) : PH.num(l.mult))}</span>`).join('');
    return `<div class="ph-mm-cols c3" style="align-items:start;gap:24px">
      <div style="display:flex;flex-direction:column;gap:10px">${g('bolt', 'tone-violet', 'Term Rush', 'termRushSub', 'rushMeta', 'game-termrush.html')}${g('vs', 'tone-4', 'Bilingual Arena', 'arenaSub', 'arenaMeta', 'games.html#arena', true)}</div>
      <div>${g('cards2', 'tone-teal', PH.lang() === 'en' ? 'Physics Match Up' : 'Ghép cặp Vật lí', 'matchSub', 'matchMeta', 'game-match.html')}</div>
      <div><p class="ph-mm-h">${PH.uiFmt('multHead')}</p><div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px">${mult}</div>
        <a class="ph-mm-l" href="games.html#huyhieu" style="align-items:center;font-weight:600;--accent-soft:var(--orange-soft);--accent:var(--orange-line)">${PH.icon('star')}<span style="flex:1">${PH.uiFmt('badges')}</span>${PH.icon('right', 'sm')}</a>
        <a class="ph-mm-l" href="games.html#kiluc" style="align-items:center;font-weight:600;--accent-soft:var(--orange-soft);--accent:var(--orange-line)">${PH.icon('cup')}<span style="flex:1">${PH.uiFmt('records')}</span>${PH.icon('right', 'sm')}</a></div></div>`;
  }
  const MENUS = { lessons: menuLessons, terms: menuTerms, exams: menuExams, games: menuGames };

  function langSwitchHTML() {
    const cur = PH.lang();
    return PH.LANGS.map(l => `<button type="button" data-lang="${l.id}" class="${l.id === cur ? 'active' : ''}" aria-pressed="${l.id === cur}" lang="${l.id === 'en' ? 'en' : 'vi'}" title="${PH.esc(PH.ui('level'))} ${l.level}"><span class="long">${PH.esc(l.id === 'vi' ? 'Tiếng Việt' : l.id === 'bi' ? PH.ui('bilingual') : 'English')}</span><span class="short">${l.short}</span></button>`).join('');
  }
  function searchBoxHTML(id) {
    return `<div class="ph-tim" role="search"><input class="ph-tim-o" id="${id}" type="search" placeholder="${PH.uiFmt('searchPh')}" aria-label="${PH.uiFmt('search')}" autocomplete="off">
      <button type="button" class="ph-tim-xoa" hidden aria-label="${PH.uiFmt('clear')}">${PH.icon('x', 'sm')}</button>
      <a class="ph-tim-nut" href="thuatngu.html" aria-label="${PH.uiFmt('search')}">${PH.icon('search')}</a><div class="ph-tim-kq" hidden></div></div>`;
  }
  function metricHTML(cls) {
    const m = PH.masteredCount(), n = (PH.TERMS || []).length, pct = n ? Math.round(m / n * 100) : 0;
    if (cls === 'strip') return `<a class="ph-strip" href="thuatngu.html?loc=thuoc" title="${PH.uiFmt('masteredHint')}">${PH.uiFmt('mastered')}<span class="n"><b>${m}</b> / ${n}</span><span class="bar"><i style="width:${pct}%"></i></span></a>`;
    return `<a class="ph-metric" href="thuatngu.html?loc=thuoc" title="${PH.uiFmt('masteredHint')}"><span class="ic">${PH.icon('book')}</span><span><span class="lbl">${PH.uiFmt('mastered')}</span><span class="num"><span class="n"><b>${m}</b> / ${n}</span><span class="bar"><i style="width:${pct}%"></i></span></span></span></a>`;
  }
  function headerHTML(opts) {
    const on = id => (opts.active === id ? ' ph-bar-on' : '');
    const logo = `<a class="ph-logo" href="index.html" aria-label="PhysiHub">${PH.LOGO}<span class="word">Physi<b>Hub</b></span><span class="kntt">KNTT 12</span></a>`;
    const nav = NAV.map(n => `<div class="ph-mm"><a class="ph-bar-i${on(n.id)}" href="${n.href}"${opts.active === n.id ? ' aria-current="page"' : ''}><span class="lb"><span>${PH.uiFmt(n.key)}</span>${sub(n.key)}</span><span class="ph-mm-v">${PH.icon('down', 'sm')}</span></a><div class="ph-mm-p" data-menu="${n.id}"></div></div>`).join('');
    const cur = PH.langInfo();
    return `<div class="ph-top"><div class="wrap">${logo}${searchBoxHTML('ph-q')}${metricHTML()}<div class="ph-lang" role="group" aria-label="${PH.uiFmt('langLevel')}">${langSwitchHTML()}</div></div></div>
      <nav class="ph-bar" aria-label="${PH.uiFmt('navMenu')}"><div class="wrap"><a class="ph-bar-i${on('home')}" href="index.html" aria-label="${PH.uiFmt('navHome')}" style="padding:0 15px">${PH.icon('home')}</a>${nav}<span class="spacer"></span><a class="ph-bar-i${on('lab')}" href="thinghiem.html"><span class="tn">${PH.icon('flask', 'sm')}</span><span class="lb"><span>${PH.uiFmt('navLab')}</span>${sub('navLab')}</span></a></div></nav>
      <div class="ph-mob"><div class="wrap">${logo}<span class="spacer"></span><button type="button" class="ph-mob-tim" aria-label="${PH.uiFmt('search')}" aria-expanded="false">${PH.icon('search')}</button><button type="button" class="ph-mob-lang" aria-label="${PH.uiFmt('langLevel')}">${PH.esc(cur.id === 'vi' ? 'Tiếng Việt' : cur.id === 'bi' ? PH.ui('bilingual') : 'English')}${PH.icon('arrow', 'sm')}</button></div></div>
      <div class="ph-mob-search">${searchBoxHTML('ph-q-m')}</div>${metricHTML('strip')}`;
  }
  function tabsHTML(opts) {
    return NAV.map(n => `<a href="${n.href}" class="${opts.active === n.id ? 'active' : ''}"><span class="ic">${PH.icon(n.icon)}</span><span>${PH.uiFmt(n.key)}</span>${sub(n.key)}</a>`).join('');
  }
  function footerHTML() {
    return `<div class="wrap"><div><p>${PH.uiFmt('ft1')}</p><p>${PH.uiFmt('ft2')}</p></div>
      <nav aria-label="${PH.uiFmt('ftAll')}"><a href="lienket.html">${PH.uiFmt('ftAll')}</a><a href="vedan.html">${PH.uiFmt('ftAbout')}</a><a href="vedan.html#nguon">${PH.uiFmt('ftSources')}</a><a href="https://github.com/vvsuslab/PhysiHub/issues" target="_blank" rel="noopener">${PH.uiFmt('ftFeedback')}</a></nav></div>`;
  }

  function resultsHTML(q) {
    const { hits, suggest } = PH.search(q);
    if (hits.length) {
      const rows = hits.slice(0, 6).map(h => `<a class="ph-kq acc-${h.chapter}" href="${h.href}"><span class="loai">${PH.uiFmt(h.kind === 'lesson' ? 'lessonLbl' : 'termLbl')}</span><span style="min-width:0"><span class="chinh">${PH.esc(h.main)}</span>${PH.lang() !== 'en' ? `<span class="phu en" lang="en">${PH.esc(h.sub)}</span>` : ''}</span><span class="noi">${PH.esc(h.where)}</span></a>`).join('');
      const con = hits.length - 6;
      return rows + `<p class="ph-kq-dem">${con > 0 ? PH.uiFmt('moreResults', { n: con }) : PH.uiFmt('results', { n: hits.length })}</p>`;
    }
    const chips = suggest.length ? `<p class="goi">${PH.uiFmt('didYouMean')}</p><div class="chips">${suggest.map(s => `<a href="${s.href}">${PH.esc(s.label)}</a>`).join('')}</div>` : `<p class="goi">${PH.uiFmt('tip')}</p>`;
    return `<div class="ph-kq-rong"><p>${PH.uiFmt('noMatch', { q: q.trim() })}</p>${chips}<a href="thuatngu.html" style="font-size:13px;font-weight:600">${PH.uiFmt('openGlossary')}</a></div>`;
  }
  function bindSearch(box) {
    const input = box.querySelector('.ph-tim-o'), kq = box.querySelector('.ph-tim-kq'), xoa = box.querySelector('.ph-tim-xoa'), nut = box.querySelector('.ph-tim-nut');
    const draw = () => {
      const q = input.value; xoa.hidden = !q; nut.href = q ? 'thuatngu.html?q=' + encodeURIComponent(q) : 'thuatngu.html';
      if (!q.trim()) { kq.hidden = true; kq.innerHTML = ''; return; }
      kq.innerHTML = resultsHTML(q); kq.hidden = false;
    };
    input.addEventListener('input', draw);
    input.addEventListener('focus', draw);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); location.href = nut.href; } if (e.key === 'Escape') { input.value = ''; draw(); input.blur(); } });
    xoa.addEventListener('click', () => { input.value = ''; draw(); input.focus(); });
    box.addEventListener('focusin', () => { if (input.value.trim()) kq.hidden = false; });
  }
  // Đóng bảng kết quả khi bấm ra ngoài — gắn MỘT lần cho cả trang.
  // (Trước đây gắn bên trong bindSearch nên mỗi lần dựng lại đầu trang lại thêm 2 listener không bao giờ gỡ.)
  document.addEventListener('click', e => {
    if (e.target.closest('.ph-tim')) return;
    document.querySelectorAll('.ph-tim-kq').forEach(kq => { kq.hidden = true; });
  });
  function bindHeader(header) {
    header.querySelectorAll('.ph-tim').forEach(bindSearch);
    header.querySelectorAll('.ph-lang').forEach(box => box.addEventListener('click', e => { const b = e.target.closest('button[data-lang]'); if (b) PH.setLang(b.dataset.lang); }));
    const mobLang = header.querySelector('.ph-mob-lang');
    if (mobLang) mobLang.addEventListener('click', () => { const ids = PH.LANGS.map(l => l.id); PH.setLang(ids[(ids.indexOf(PH.lang()) + 1) % ids.length]); });
    const mobTim = header.querySelector('.ph-mob-tim'), mobBox = header.querySelector('.ph-mob-search');
    if (mobTim) mobTim.addEventListener('click', () => { const open = !mobBox.classList.contains('open'); mobBox.classList.toggle('open', open); mobTim.setAttribute('aria-expanded', open); if (open) mobBox.querySelector('input').focus(); });
    // Bảng menu dựng khi rê chuột / Tab tới lần đầu (nhẹ cho trang)
    header.querySelectorAll('.ph-mm').forEach(mm => {
      const fill = () => { const p = mm.querySelector('.ph-mm-p'); if (!p.dataset.ok) { p.innerHTML = MENUS[p.dataset.menu](); p.dataset.ok = '1'; } };
      mm.addEventListener('mouseenter', fill); mm.addEventListener('focusin', fill); mm.addEventListener('touchstart', fill, { passive: true });
      // Trên máy tính bảng (không có chuột): chạm lần đầu mở bảng, chạm lần hai mới đi tới trang.
      // Dùng class 'mo' chứ không gán style cứng — gán style cứng thì bảng không bao giờ đóng lại được.
      const nut = mm.querySelector('.ph-bar-i');
      nut.setAttribute('aria-haspopup', 'true'); nut.setAttribute('aria-expanded', 'false');
      nut.addEventListener('click', e => {
        if (!window.matchMedia('(hover: none)').matches) return;   // máy có chuột: giữ cách rê chuột
        if (mm.classList.contains('mo')) return;                   // đang mở: chạm lần hai là đi tới trang
        e.preventDefault(); fill(); dongMenu();
        mm.classList.add('mo'); nut.setAttribute('aria-expanded', 'true');
      });
    });
  }
  // Đóng mọi bảng menu đang mở (gắn một lần cho cả trang)
  function dongMenu() {
    document.querySelectorAll('.ph-mm.mo').forEach(x => {
      x.classList.remove('mo');
      const b = x.querySelector('.ph-bar-i'); if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  document.addEventListener('click', e => { if (!e.target.closest('.ph-mm')) dongMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') dongMenu(); });
  let mountOpts = null;
  function renderHeader() {
    const header = document.querySelector('.ph-header'); if (!header) return;
    const q = (header.querySelector('.ph-tim-o') || {}).value || '';
    header.innerHTML = headerHTML(mountOpts); bindHeader(header);
    const tabs = document.querySelector('.ph-tabs'); if (tabs) tabs.innerHTML = tabsHTML(mountOpts);
    const footer = document.querySelector('.ph-footer'); if (footer) footer.innerHTML = footerHTML();
    if (q) { const i = header.querySelector('.ph-tim-o'); i.value = q; }
  }
  PH.mount = opts => {
    mountOpts = opts = opts || {};
    document.documentElement.dataset.lang = PH.lang();
    const header = document.createElement('header'); header.className = 'ph-header';
    document.body.prepend(header);
    if (!opts.noFooter) { const footer = document.createElement('footer'); footer.className = 'ph-footer'; document.body.appendChild(footer); }
    const tabs = document.createElement('nav'); tabs.className = 'ph-tabs'; tabs.setAttribute('aria-label', PH.ui('navMenu')); document.body.appendChild(tabs);
    renderHeader();
    document.addEventListener('ph:lang', () => { document.documentElement.lang = PH.lang() === 'en' ? 'en' : 'vi'; renderHeader(); if (opts.title) PH.setTitle(opts.title); });
    // Tiến độ đổi rất thường xuyên (mỗi câu trả lời): chỉ sửa đúng con số và độ dài thanh,
    // không dựng lại đầu trang cũng không dựng lại khối HTML — vừa nhanh vừa không mất focus.
    document.addEventListener('ph:progress', () => {
      const m = PH.masteredCount(), n = (PH.TERMS || []).length, pct = n ? Math.round(m / n * 100) : 0;
      document.querySelectorAll('.ph-metric, .ph-strip').forEach(el => {
        const b = el.querySelector('.n b'); if (b && b.textContent !== String(m)) b.textContent = m;
        const bar = el.querySelector('.bar i'); if (bar) bar.style.width = pct + '%';
      });
    });
    if (opts.title) PH.setTitle(opts.title);
    document.documentElement.lang = PH.lang() === 'en' ? 'en' : 'vi';
    // Biểu tượng trong huy hiệu tròn của dải tiêu đề (.page-hero h1::before)
    const HERO_IC = { lessons: 'book', terms: 'speaker', exams: 'exam', games: 'game', lab: 'flask' };
    const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1565C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[opts.heroIcon || HERO_IC[opts.active] || 'book'] || ''}</svg>`;
    document.documentElement.style.setProperty('--hero-ic', `url("data:image/svg+xml,${encodeURIComponent(heroSvg)}")`);
    // Dải "đang ngoại tuyến" nhỏ dưới đầu trang
    const off = document.createElement('div'); off.className = 'ph-offline'; off.hidden = true; off.setAttribute('role', 'status');
    off.style.cssText = 'background:#FFF6EA;color:#0F2548;border-bottom:1px solid #F6C995;font-size:13px;padding:7px 16px;align-items:center;gap:10px;justify-content:center';
    const drawOff = () => { off.hidden = navigator.onLine !== false; off.style.display = off.hidden ? 'none' : 'flex'; off.innerHTML = `${PH.icon('wifi', 'sm')}<b style="white-space:nowrap">${PH.uiFmt('offline')}</b><span style="opacity:.85">${PH.uiFmt('offlineNote')}</span>`; };
    header.after(off); drawOff(); window.addEventListener('online', drawOff); window.addEventListener('offline', drawOff); document.addEventListener('ph:lang', drawOff);
    PH.reveal();
  };
  PH.setTitle = t => { document.title = PH.esc(PH.T(t)).replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>') + ' · PhysiHub'; };
  // Phần tử .reveal hiện dần khi cuộn tới; không bao giờ để nội dung bị ẩn quá 2,5 giây
  PH.reveal = root => {
    const els = [...(root || document).querySelectorAll('.reveal:not(.in)')];
    els.forEach(e => { if (e.getBoundingClientRect().top < window.innerHeight * .95) e.classList.add('in'); });
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    els.forEach(e => { if (!e.classList.contains('in')) io.observe(e); });
    setTimeout(() => { els.forEach(e => e.classList.add('in')); io.disconnect(); }, 2500);
  };
  // Lưới an toàn: nếu một trang nào đó lỗi trước khi kịp gọi PH.reveal, nội dung vẫn phải hiện ra
  // (các khối .reveal mặc định trong suốt — không có lưới này học sinh sẽ thấy trang trắng).
  setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(e => e.classList.add('in')), 3500);

  /* ---------- Tô sáng thuật ngữ trong văn bản + popover ---------- */
  let viRe = null, enRe = null;
  function buildRegex() {
    const terms = PH.TERMS || []; if (!terms.length) return;
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const byLen = (a, b) => b.length - a.length;
    const sp = s => esc(s).replace(/ /g, '[ \\u00a0]');
    const vis = [...new Set(terms.map(t => t.vi).filter(Boolean))].sort(byLen).map(sp);
    const ens = [...new Set(terms.map(t => t.en).filter(Boolean))].sort(byLen).map(sp);
    try {
      viRe = new RegExp(`(?<![\\p{L}\\p{N}])(${vis.join('|')})(?![\\p{L}\\p{N}])`, 'giu');
      enRe = new RegExp(`(?<![\\p{L}\\p{N}])(${ens.join('|')})(?![\\p{L}\\p{N}])`, 'giu');
    } catch (e) { // trình duyệt cũ không có lookbehind
      viRe = new RegExp(`(${vis.join('|')})`, 'gi'); enRe = new RegExp(`(${ens.join('|')})`, 'gi');
    }
  }
  const findTerm = (text, isEn) => { const k = text.replace(/\u00a0/g, ' ').toLowerCase(); return (PH.TERMS || []).find(t => (isEn ? t.en : t.vi).toLowerCase() === k); };

  // Tô sáng lần xuất hiện đầu tiên của mỗi thuật ngữ trong từng khối (mỗi phần tử có class "hl")
  PH.highlight = root => {
    if (!viRe) buildRegex(); if (!viRe) return;
    const blocks = root.classList && root.classList.contains('hl') ? [root] : root.querySelectorAll('.hl');
    const kemSeen = new Set(); // mỗi thuật ngữ chỉ hiện tiếng Anh kèm một lần trong mỗi lần gọi
    blocks.forEach(block => {
      if (block.dataset.hl === '1') return;
      block.dataset.hl = '1';
      const seen = new Set();
      const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest('.term, .nohl, script, style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      const nodes = []; let n; while ((n = walker.nextNode())) nodes.push(n);
      nodes.forEach(node => {
        const isEn = !!node.parentElement.closest('.en');
        const re = isEn ? enRe : viRe; re.lastIndex = 0;
        const text = node.nodeValue; let m, last = 0; const frag = document.createDocumentFragment(); let changed = false;
        while ((m = re.exec(text))) {
          const term = findTerm(m[1], isEn);
          const key = term && term.id + (isEn ? ':en' : ':vi');
          if (!term || seen.has(key)) continue;
          seen.add(key); changed = true;
          frag.appendChild(document.createTextNode(text.slice(last, m.index)));
          const span = document.createElement('span'); span.className = 'term'; span.dataset.term = term.id; span.textContent = m[1];
          span.setAttribute('role', 'button'); span.tabIndex = 0;
          frag.appendChild(span); last = m.index + m[1].length;
          // Mức 1: thuật ngữ tiếng Anh hiện kèm trong ngoặc, ngay sau từ tiếng Việt
          if (!isEn && PH.lang() === 'vi' && !block.classList.contains('nokem') && !kemSeen.has(term.id)) { kemSeen.add(term.id); const k = document.createElement('span'); k.className = 'kem'; k.lang = 'en'; k.textContent = '\u00a0(' + term.en + ')'; frag.appendChild(k); }
        }
        if (changed) { frag.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(frag, node); }
      });
    });
  };

  let pop = null, popAnchor = null;
  function closePop() { if (pop) { pop.remove(); pop = null; } if (popAnchor) { popAnchor.classList.remove('open'); popAnchor = null; } }
  PH.closeTermPopover = closePop;
  PH.termPopoverHTML = t => {
    const l = PH.lang();
    const meta = [t.pos && (l === 'en' ? t.posEn : t.pos), t.unit && PH.ui('unit', { u: PH.unitOf(t) }), t.symbol && PH.ui('symbolUnit', { s: t.symbol })].filter(Boolean).join(' · ');
    const defs = (l === 'vi' ? [['vi', t.defVi]] : l === 'en' ? [['en', t.defEn]] : [['vi', t.defVi], ['en', t.defEn]]).filter(d => d[1]);
    return `<div class="head"><b lang="en">${PH.esc(t.en)}</b>${l !== 'en' ? `<span class="vi-name">· ${PH.esc(t.vi)}</span>` : ''}${PH.hasVoice() ? `<button class="speak" type="button" title="${PH.uiFmt('listenMachine')}" aria-label="${PH.uiFmt('listenMachine')}" data-speak="${PH.esc(t.en)}">${PH.icon('speaker', 'sm')}</button>` : ''}</div>
      <div class="meta"><span class="ipa" lang="en">${PH.esc(t.ipa)}</span>${meta ? ' · ' + PH.esc(meta) : ''}</div>
      ${defs.map(d => `<div class="def ${d[0]}">${PH.esc(d[1])}</div>`).join('')}
      <div class="links">${PH.dictLinks(t).map(d => `<a href="${d.url}" target="_blank" rel="noopener">${PH.esc(d.label)} ↗</a>`).join('')}<a class="more" href="thuatngu.html?t=${encodeURIComponent(t.id)}">${PH.uiFmt('openInGlossary')} →</a></div>`;
  };
  PH.showTerm = (idOrTerm, anchor) => {
    const t = typeof idOrTerm === 'string' ? PH.termById(idOrTerm) : idOrTerm; if (!t || !anchor) return;
    if (popAnchor === anchor) { closePop(); return; }
    closePop();
    pop = document.createElement('div'); pop.className = 'ph-pop'; pop.innerHTML = PH.termPopoverHTML(t); PH.chiSo(pop);
    document.body.appendChild(pop);
    const r = anchor.getBoundingClientRect(); const w = pop.offsetWidth, h = pop.offsetHeight;
    let left = r.left + window.scrollX; if (left + w > window.scrollX + document.documentElement.clientWidth - 12) left = window.scrollX + document.documentElement.clientWidth - w - 12;
    pop.style.left = Math.max(12, left) + 'px';
    // Không đủ chỗ bên dưới thì lật lên trên, để thẻ nghĩa không nằm ngoài màn hình
    const duoi = window.innerHeight - r.bottom, tren = r.top;
    pop.style.top = (duoi < h + 16 && tren > h + 16 ? r.top + window.scrollY - h - 8 : r.bottom + window.scrollY + 8) + 'px';
    anchor.classList.add('open'); popAnchor = anchor;
    PH.lookTerm(t.id);   // chỉ ghi "đã xem", KHÔNG tính là đã thuộc
  };
  document.addEventListener('click', e => {
    const sp = e.target.closest('[data-speak]'); if (sp) { PH.speak(sp.dataset.speak); return; }
    const term = e.target.closest('.term[data-term]'); if (term) { e.preventDefault(); PH.showTerm(term.dataset.term, term); return; }
    if (pop && !e.target.closest('.ph-pop')) closePop();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePop();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('term')) { e.preventDefault(); PH.showTerm(e.target.dataset.term, e.target); }
  });
  // Chỉ đóng khi xoay máy: trên điện thoại, cuộn làm thanh địa chỉ thu lại và sinh 'resize',
  // nếu đóng theo resize thì thẻ nghĩa biến mất ngay lúc học sinh đang đọc.
  window.addEventListener('orientationchange', closePop);

  /* ---------- Ứng dụng web (PWA): cài lên màn hình chính, dùng offline ---------- */
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }
  let installPrompt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; document.dispatchEvent(new CustomEvent('ph:installable')); });
  PH.canInstall = () => !!installPrompt;
  PH.install = async () => { if (!installPrompt) return false; installPrompt.prompt(); const r = await installPrompt.userChoice; installPrompt = null; return r.outcome === 'accepted'; };
  /* Quét chỉ số dưới: một lần khi trang dựng xong, và cho phần nội dung dựng thêm về sau
     (lọc danh sách thuật ngữ, đổi ngôn ngữ, chấm bài…). Gộp 80 ms một lần cho đỡ tốn. */
  (function () {
    let hangCho = [], hen = 0;
    const quet = () => { hen = 0; const ds = hangCho; hangCho = []; ds.forEach(n => { if (n.isConnected) PH.chiSo(n); }); };
    const batDau = () => {
      if (!document.body) return;
      PH.chiSo(document.body);
      new MutationObserver(recs => {
        for (const r of recs) for (const n of r.addedNodes) {
          const el = n.nodeType === 3 ? n.parentElement : (n.nodeType === 1 ? n : null);
          if (el && el.tagName !== 'SUB') hangCho.push(el);
        }
        if (hangCho.length && !hen) hen = setTimeout(quet, 80);
      }).observe(document.body, { childList: true, subtree: true });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', batDau); else batDau();
  })();

})(window.PH);
