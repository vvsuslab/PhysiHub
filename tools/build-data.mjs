import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const goc = join(dirname(fileURLToPath(import.meta.url)), '..', 'data');
const BO = { terms: 'PH.TERMS', pairs: 'PH.PAIRS', content: 'PH.CONTENT', exams: 'PH.EXAMS' };
let loi = 0;

for (const [ten, bien] of Object.entries(BO)) {
  const tep = join(goc, `${ten}.json`);
  if (!existsSync(tep)) { console.log(`bỏ qua ${ten}.json (chưa có)`); continue; }
  let chu = readFileSync(tep, 'utf8').replace(/^﻿/, '');
  try { JSON.parse(chu); } catch (e) { console.error(`LỖI cú pháp trong ${ten}.json: ${e.message}`); loi++; continue; }
  const js = `window.PH = window.PH || {};\n${bien} = ${chu.trim()};\n`;
  writeFileSync(join(goc, `${ten}.js`), js, 'utf8');
  console.log(`${ten}.js OK`);
}
process.exit(loi ? 1 : 0);
