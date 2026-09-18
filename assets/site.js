/* =====================================================================
   PhysiHub — mã dùng chung: mức ngôn ngữ, header/footer, thuật ngữ,
   phát âm, tiến độ học (localStorage), tiện ích.
   Thứ tự nạp trong mỗi trang: site.css → data/*.js → site.js → script trang
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
  PH.lang = () => { const v = store.get(KEY.lang, 'vi'); return PH.LANGS.some(l => l.id === v) ? v : 'vi'; };
  PH.langInfo = id => PH.LANGS.find(l => l.id === (id || PH.lang()));
  PH.setLang = id => {
    if (!PH.LANGS.some(l => l.id === id)) return;
    store.set(KEY.lang, id);
    document.documentElement.dataset.lang = id;
    renderLangSwitch();
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
    if (typeof t !== 'object') return PH.esc(t);
    const l = PH.lang();
    const vi = PH.esc(t.vi), en = PH.esc(t.en);
    const enCls = 'en' + (opts.enClass ? ' ' + opts.enClass : '');
    if (l === 'vi' || !en) return `<span class="vi">${vi || en}</span>`;
    if (l === 'en') return `<span class="${enCls}">${en}</span>`;
    return `<span class="bi"><span class="vi">${vi}</span><span class="${enCls}">${en}</span></span>`;
  };

  /* ---------- Tiến độ học (chỉ lưu trên máy này) ---------- */
  const emptyProgress = () => ({ lessons: {}, last: null, terms: {}, games: {}, exams: {} });
  PH.progress = () => Object.assign(emptyProgress(), store.get(KEY.progress, {}));
  PH.save = p => store.set(KEY.progress, p);
  PH.update = fn => { const p = PH.progress(); fn(p); PH.save(p); return p; };
  PH.visitLesson = n => PH.update(p => { p.lessons[n] = Object.assign({ done: false }, p.lessons[n], { visited: Date.now() }); p.last = { lesson: n, at: Date.now() }; });
  PH.finishLesson = (n, score) => PH.update(p => { p.lessons[n] = Object.assign({}, p.lessons[n], { done: true, score, at: Date.now() }); });
  PH.noteTerm = (id, wrong) => PH.update(p => { const t = p.terms[id] || { seen: 0, wrong: 0 }; t.seen++; if (wrong) t.wrong++; p.terms[id] = t; });
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
    s = s || PH.scope();
    if (s.type === 'lesson') { const l = PH.lesson(s.lesson); return l ? `Bài ${l.n} · ${l.vi}` : `Bài ${s.lesson}`; }
    if (s.type === 'chapter') { const c = PH.chapter(s.chapter); return c ? `Chương ${PH.roman(c.n)} · ${c.vi}` : `Chương ${s.chapter}`; }
    if (s.type === 'weak') return 'Ôn điểm yếu của em';
    return `Tất cả ${(PH.LESSONS || []).length || 25} bài`;
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
  PH.icon = (name, cls) => `<svg class="icon${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  /* ---------- Phát âm tiếng Anh (Web Speech API, không cần file âm thanh) ---------- */
  let voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return null;
    const vs = speechSynthesis.getVoices();
    return vs.find(v => /en-GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { voice = pickVoice(); speechSynthesis.onvoiceschanged = () => { voice = pickVoice(); }; }
  PH.speak = text => {
    if (!('speechSynthesis' in window)) { PH.toast('Trình duyệt này không hỗ trợ đọc phát âm.'); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-GB'; u.rate = 0.92; if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  };

  /* ---------- Thông báo nhỏ ---------- */
  let toastEl, toastTimer;
  PH.toast = (msg, ms) => {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'ph-toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms || 2200);
  };

  /* ---------- Header / footer ---------- */
  const NAV = [
    { id: 'lessons', href: 'baihoc.html', label: 'Bài học' },
    { id: 'terms', href: 'thuatngu.html', label: 'Thuật ngữ' },
    { id: 'exams', href: 'luyende.html', label: 'Luyện đề' },
    { id: 'games', href: 'games.html', label: 'Trò chơi' }
  ];
  function renderLangSwitch() {
    document.querySelectorAll('.ph-lang').forEach(box => {
      const cur = PH.lang();
      box.innerHTML = PH.LANGS.map(l => `<button type="button" data-lang="${l.id}" class="${l.id === cur ? 'active' : ''}" title="Mức ${l.level}: ${l.long}"><span class="long">${l.long}</span><span class="short">${l.short}</span></button>`).join('');
    });
  }
  PH.mount = opts => {
    opts = opts || {};
    document.documentElement.dataset.lang = PH.lang();
    const header = document.createElement('header');
    header.className = 'ph-header';
    header.innerHTML = `<div class="wrap">
      <a class="ph-logo" href="index.html" aria-label="PhysiHub – trang chủ"><span class="mark"></span>PhysiHub</a>
      <nav class="ph-nav" aria-label="Điều hướng">${NAV.map(n => `<a href="${n.href}" class="${n.id === opts.active ? 'active' : ''}"${n.id === opts.active ? ' aria-current="page"' : ''}>${n.label}</a>`).join('')}</nav>
      <span class="spacer"></span>
      <div class="ph-lang" role="group" aria-label="Mức ngôn ngữ"></div>
    </div>`;
    document.body.prepend(header);
    header.querySelector('.ph-lang').addEventListener('click', e => {
      const b = e.target.closest('button[data-lang]'); if (b) PH.setLang(b.dataset.lang);
    });
    renderLangSwitch();

    if (!opts.noFooter) {
      const footer = document.createElement('footer');
      footer.className = 'ph-footer';
      footer.innerHTML = `<div class="wrap">
        <div>
          <p>Sản phẩm dự thi Khoa học kĩ thuật · Trường THPT Bùi Hữu Nghĩa, Cần Thơ · Năm học 2026–2027</p>
          <p>Nội dung tham khảo SGK Vật lí 12 (Kết nối tri thức với cuộc sống) và đề minh hoạ của Bộ GD&ĐT, dùng cho mục đích học tập.</p>
        </div>
        <nav aria-label="Liên kết"><a href="lienket.html">Tất cả liên kết</a><a href="index.html#about">Về dự án</a><a href="index.html#sources">Nguồn học liệu</a><a href="https://github.com/vvsuslab/PhysiHub/issues" target="_blank" rel="noopener">Góp ý cho nhóm</a></nav>
      </div>`;
      document.body.appendChild(footer);
    }
  };

  /* ---------- Tô sáng thuật ngữ trong văn bản + popover ---------- */
  let viRe = null, enRe = null;
  function buildRegex() {
    const terms = PH.TERMS || []; if (!terms.length) return;
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const byLen = (a, b) => b.length - a.length;
    const vis = [...new Set(terms.map(t => t.vi).filter(Boolean))].sort(byLen).map(esc);
    const ens = [...new Set(terms.map(t => t.en).filter(Boolean))].sort(byLen).map(esc);
    try {
      viRe = new RegExp(`(?<![\\p{L}\\p{N}])(${vis.join('|')})(?![\\p{L}\\p{N}])`, 'giu');
      enRe = new RegExp(`(?<![\\p{L}\\p{N}])(${ens.join('|')})(?![\\p{L}\\p{N}])`, 'giu');
    } catch (e) { // trình duyệt cũ không có lookbehind
      viRe = new RegExp(`(${vis.join('|')})`, 'gi'); enRe = new RegExp(`(${ens.join('|')})`, 'gi');
    }
  }
  const findTerm = (text, isEn) => { const k = text.toLowerCase(); return (PH.TERMS || []).find(t => (isEn ? t.en : t.vi).toLowerCase() === k); };

  // Tô sáng lần xuất hiện đầu tiên của mỗi thuật ngữ trong từng khối (mỗi phần tử có class "hl")
  PH.highlight = root => {
    if (!viRe) buildRegex(); if (!viRe) return;
    const blocks = root.classList && root.classList.contains('hl') ? [root] : root.querySelectorAll('.hl');
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
          if (!term || seen.has(term.id)) continue;
          seen.add(term.id); changed = true;
          frag.appendChild(document.createTextNode(text.slice(last, m.index)));
          const span = document.createElement('span'); span.className = 'term'; span.dataset.term = term.id; span.textContent = m[1];
          span.setAttribute('role', 'button'); span.tabIndex = 0;
          frag.appendChild(span); last = m.index + m[1].length;
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
    const meta = [t.ipa, t.pos && (l === 'en' ? t.posEn : t.pos), t.unit && ('đơn vị ' + t.unit), t.symbol && ('kí hiệu ' + t.symbol)].filter(Boolean).join(' · ');
    const defs = (l === 'vi' ? [['vi', t.defVi]] : l === 'en' ? [['en', t.defEn]] : [['vi', t.defVi], ['en', t.defEn]]).filter(d => d[1]);
    return `<div class="head"><b>${PH.esc(t.en)}</b><span class="vi-name">· ${PH.esc(t.vi)}</span><button class="speak" type="button" title="Nghe phát âm" data-speak="${PH.esc(t.en)}">${PH.icon('speaker', 'sm')}</button></div>
      <div class="meta">${PH.esc(meta)}</div>
      ${defs.map(d => `<div class="def ${d[0]}">${PH.esc(d[1])}</div>`).join('')}
      <a class="more" href="thuatngu.html?t=${encodeURIComponent(t.id)}">Mở trong ngân hàng thuật ngữ →</a>`;
  };
  PH.showTerm = (idOrTerm, anchor) => {
    const t = typeof idOrTerm === 'string' ? PH.termById(idOrTerm) : idOrTerm; if (!t || !anchor) return;
    if (popAnchor === anchor) { closePop(); return; }
    closePop();
    pop = document.createElement('div'); pop.className = 'ph-pop'; pop.innerHTML = PH.termPopoverHTML(t);
    document.body.appendChild(pop);
    const r = anchor.getBoundingClientRect(); const w = pop.offsetWidth;
    let left = r.left + window.scrollX; if (left + w > window.scrollX + document.documentElement.clientWidth - 12) left = window.scrollX + document.documentElement.clientWidth - w - 12;
    pop.style.left = Math.max(12, left) + 'px'; pop.style.top = (r.bottom + window.scrollY + 8) + 'px';
    anchor.classList.add('open'); popAnchor = anchor;
    PH.noteTerm(t.id, false);
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
  window.addEventListener('resize', closePop);

  /* ---------- Ứng dụng web (PWA): cài lên màn hình chính, dùng offline ---------- */
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }
  let installPrompt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installPrompt = e; document.dispatchEvent(new CustomEvent('ph:installable')); });
  PH.canInstall = () => !!installPrompt;
  PH.install = async () => { if (!installPrompt) return false; installPrompt.prompt(); const r = await installPrompt.userChoice; installPrompt = null; return r.outcome === 'accepted'; };
})(window.PH);
