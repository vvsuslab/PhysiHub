# PhysiHub — đặc tả giao diện (chốt ngày 23/9/2026)

Tài liệu này mô tả giao diện đã được giáo viên hướng dẫn duyệt trên mockup. Trang mẫu tương ứng nằm trong `mau/`, ảnh chụp trong `anh-chup/`.

## 1. Màu (bản 3, 24/9/2026 — theo slide "Bài 5. Nhiệt nóng chảy riêng" cô Trinh gửi)

Bảng màu 23/9 (nền kem, vàng đất, menu xanh đậm) đã được thay. Nguyên tắc lấy từ slide: **nền trắng là chính**; khung nội dung là
**xanh rất nhạt viền xanh** hoặc **cam nhạt viền cam**; xanh đậm chỉ dùng cho **dải tiêu đề mảnh**, **nhãn mục** và **vòng số**; cam là điểm nhấn.
Không dùng khối nền xanh đậm lớn (cô nhận xét 24/9: "nền xanh nhiều quá, đặc biệt trang trò chơi").

| Vai trò | Mã màu | Ghi chú |
|---|---|---|
| Nền trang, nền thẻ | `#FFFFFF` | thẻ có viền `#DCE7F3` 1,5px và bóng rất nhẹ |
| Chữ chính / phụ | `#0F2548` / `#4F5F77` | chữ phụ đạt 4,5:1 trên trắng |
| Xanh đậm (tiêu đề, chữ đậm) | `#0D47A1`, `#1565C0` | |
| Xanh da trời (vòng số) | `#1E88E5` | số trắng, đậm |
| Khung xanh nhạt | nền `#EDF5FD`, viền `#B8D7F3` | `.panel` |
| Khung cam nhạt | nền `#FFF6EA`, viền `#F6C995` | `.panel.orange` ("Trong đó", "Bảng số liệu", "Học tiếp") |
| Cam điểm nhấn | `#F57C00`, `#FFA726` | gạch dưới tiêu đề mục, vạch chéo, viền khi chọn bằng bàn phím |
| Dải tiêu đề | `linear-gradient(90deg, #0D47A1, #1257B5 50%, #1976D2)` | chữ trắng in hoa |
| Nhãn mục xanh | `linear-gradient(90deg, #0D47A1, #1976D2)` | chữ trắng 17px đậm |
| Nhãn mục cam | `linear-gradient(90deg, #D84315, #EF6C00)` | chữ trắng 19px đậm (đạt chuẩn chữ lớn) |
| Nút chính (CTA) | `linear-gradient(135deg, #FFB547, #F57C00)` | chữ `#0F2548` |
| Chữ tiếng Anh | `#A84600` | Lora nghiêng, 5,9:1 trên trắng |
| Thanh menu | nền trắng, chữ `#0D47A1`, vạch đáy xanh 72% + cam 28% | như đường chân slide |

Mỗi chương một màu (thẻ chương, nhãn chương, biểu tượng):

| Chương | Tô/viền | Chữ | Nền nhạt |
|---|---|---|---|
| I · Vật lí nhiệt | `#F57C00` | `#B54D00` | `#FFF3E3` |
| II · Khí lí tưởng | `#1C9A9C` | `#12706F` | `#E0F3F2` |
| III · Từ trường | `#5C6BC0` | `#3949AB` | `#E8EAF6` |
| IV · Vật lí hạt nhân | `#2E9E62` | `#1F7A48` | `#E3F4EA` |

**Thành phần kiểu slide** (trong `assets/site.css`, `assets/site.js`):

- **Dải tiêu đề** `.page-hero h1`: dải xanh mảnh cao ~70px, huy hiệu tròn trắng viền xanh bên trái (biểu tượng theo mục, đặt bằng `--hero-ic` trong `PH.mount`, tuỳ chọn `heroIcon`), vạch cam chéo và phần xanh sáng bên phải có dòng chữ nhỏ (`.eyebrow`). Lời giới thiệu, số liệu nằm **dưới** dải, trên nền trắng. Trang bài học (`.banner .bar`) và trang làm đề (`.strip`) dùng cùng kiểu dải.
- **Nhãn mục** `PH.label(icon, chữ, 'orange'?, 'sm'?)`: huy hiệu tròn + dải màu, đặt đè lên góc trên trái của `.panel.has-label`.
- **Vòng số** `.num-dot`; **tiêu đề mục** `.sec-title` (chữ xanh, gạch cam 3px).
- **Ảnh có nhãn** `.figure .cap` (nhãn xanh nhạt; `.orange` cho ảnh nóng).
- **Trò chơi**: sân chơi nền xanh rất nhạt, thuật ngữ là thẻ trắng viền xanh, thẻ đang hỏi màu cam; mặt sau thẻ ghép cặp xanh nhạt. Riêng "kính hiển vi" phân tử trong thí nghiệm ảo giữ nền xanh tối để thấy màu phân tử.

## 2. Chữ

- Nội dung và tiêu đề: **Be Vietnam Pro** 400–800 (tiêu đề, số lớn 800), cỡ thân bài 15–16px, giãn dòng 1,7.
- **Lora** chỉ dùng cho dòng tiếng Anh (nghiêng) và công thức.
- Phiên âm IPA: **Charis SIL** 400 (lớp `.ipa`), để các kí hiệu ˈ ˌ ː hiện rõ.
- Nạp phông: `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Charis+SIL:wght@400;700&display=swap`
- Không có chữ nào dưới 11px. Nhãn nhỏ viết hoa dùng 11–12px, `letter-spacing` 0,6–1,2px.

## 3. Chống "rơi chữ"

- `h1, h2, h3 { text-wrap: balance; }`, còn `p, li, a, span, button, td { text-wrap-style: pretty; }`.
- Trong JS, trước khi đưa chữ ra trang: nối **hai chữ cuối** của câu bằng dấu cách không ngắt (U+00A0), và nối **số với đơn vị hay danh từ đi sau** (1 kg, 60 W, 4 bài). Hàm mẫu là `dinh(s)` trong `nguon-mockup/Main.dc.html`.
- Nút, nhãn, viên thuốc (pill) có `white-space: nowrap`.
- Tiêu đề trang chủ xuống dòng cố định: "Vật lí 12 / song ngữ Việt – Anh" (dùng `\n` và `white-space: pre-line`).

## 4. Ba mức ngôn ngữ

| Mức | Hiển thị |
|---|---|
| 1 · Tiếng Việt | Chữ Việt; thuật ngữ tiếng Anh hiện kèm trong ngoặc hoặc dòng nhỏ |
| 2 · Song ngữ | Mỗi đoạn tiếng Việt có bản tiếng Anh ngay dưới (Lora nghiêng, màu `#8A5A14`, viền trái mảnh); menu có dòng tiếng Anh nhỏ |
| 3 · English | Chỉ tiếng Anh; chạm vào thuật ngữ để xem nghĩa tiếng Việt |

- Áp dụng cho **mọi** trang, kể cả Luyện đề và Thí nghiệm ảo.
- Gắn `lang="en"` cho phần tử tiếng Anh; gốc trang đổi `lang` theo mức.
- Nút đổi mức có `aria-pressed="true|false"`.

## 5. Đầu trang dùng chung (máy tính, cao 112px)

**Tầng trên (64px, nền trắng):** logo nguyên tử + chữ "Physi**Hub**" (Hub màu `#178AA3`) + nhãn `KNTT 12` · ô tìm kiếm (rộng tối đa 470px) · "Thuật ngữ đã thuộc 47 / 79" kèm thanh tiến độ · ba nút Tiếng Việt / Song ngữ / English.

**Tầng dưới (48px, thanh menu xanh đậm):** nút Trang chủ (biểu tượng ngôi nhà) · Bài học ▾ · Thuật ngữ ▾ · Luyện đề ▾ · Trò chơi ▾ · (bên phải) Thí nghiệm ảo.
- Mục đang ở có nền sáng hơn và gạch vàng `#F2B44A` 3px ở đáy.
- Rê chuột (hoặc Tab tới) mục có ▾ thì bảng menu sổ xuống ngay dưới thanh, rộng gần hết trang, nền trắng, viền trên vàng 3px, bo góc dưới 22px. Mở và đóng bằng CSS `:hover` và `:focus-within`, mờ dần 0,2 giây. Mũi tên ▾ xoay 180°.
- Mỗi dòng trong bảng menu khi rê chuột thì **đổi màu nền và viền theo màu của mục** (biến CSS `--o-nen`, `--o-vien`, `--o-chu`).

Nội dung bảng menu: xem `anh-chup/menu-so-*.jpg`.
- **Bài học:** 4 cột theo chương; mỗi cột có biểu tượng chương, 4 bài mẫu (số bài trong ô màu nhạt), dòng "+ n bài chưa có nội dung". Bài 1 có nhãn "Có thí nghiệm ảo". Dưới cùng là lối vào thí nghiệm ảo và "Xem cả 16 bài mẫu".
- **Thuật ngữ:** cột "Theo chương" (kèm số thuật ngữ), cột "Ôn theo trạng thái" (chưa thuộc / đã thuộc / cách nhóm kiểm tra thuật ngữ), thẻ "Trong bài em đang học" có phiên âm và nút nghe.
- **Luyện đề:** ba phần của đề 2025 (18 câu · 4,5 điểm; 4 câu · 4,0 điểm; 6 câu · 1,5 điểm) và nút "Làm đề tổng hợp · 50 phút"; "Luyện theo chương"; ghi chú "điểm luyện đề không nhân hệ số".
- **Trò chơi:** thẻ Term Rush (60 giây · 3 mạng), thẻ Ghép cặp (90 giây · 12 thẻ), hệ số ×1 / ×1,5 / ×2, lối vào Huy hiệu và Kỉ lục.

### Ô tìm kiếm

- Tìm trong 16 bài mẫu và 79 thuật ngữ, theo cả tên Việt lẫn tên Anh, **không phân biệt dấu** (dùng `PH.norm` đã có).
- Gõ vào là hiện bảng kết quả (rộng 600px) ngay dưới ô: tối đa 6 dòng, mỗi dòng có nhãn loại (Bài học / Thuật ngữ, màu theo chương), tên, dòng tiếng Anh (mức 1 và 2), vị trí "Chương I · Bài 4". Dưới cùng ghi số kết quả còn lại.
- Không có kết quả: ghi "Không có kết quả khớp đúng với …" rồi **gợi ý 2–3 từ gần đúng** (khoảng cách Levenshtein trên chuỗi đã bỏ dấu; ví dụ "nhiet dugn" → nhiệt dung riêng). Kèm liên kết "Mở kho thuật ngữ". Xem `anh-chup/tim-kiem-*.jpg`.
- Có nút × để xoá chữ; nút kính lúp mở `thuatngu.html?q=…`.

## 6. Điện thoại (≤ 720px)

- Đầu trang một hàng: logo · nút kính lúp (44×44, nền `#E0F3F2`) · nút đổi mức ngôn ngữ (bấm để chuyển vòng 1 → 2 → 3).
- Bấm kính lúp: hiện một hàng ô tìm kiếm, kết quả xếp dọc, mỗi dòng có mũi tên ›.
- Dải "Thuật ngữ đã thuộc" dưới đầu trang; thanh 4 thẻ cố định ở đáy (Bài học, Thuật ngữ, Luyện đề, Trò chơi).
- Không có menu sổ trên điện thoại.
- Mẫu: `mau/dien-thoai-*.html`, rộng 390px.

## 7. Thành phần dùng chung

- **Thẻ** (`.ph-the`): nền trắng, bo 18–20px, bóng nhẹ.
- **Ô đổi màu khi rê chuột** (`.ph-o`, `.mc-dv`): nền đổi sang màu nhạt của mục, viền 1,5px đậm lên, nhấc lên 3–4px.
- **Nút chính** (`.ph-cta`): cao tối thiểu 48px, gradient vàng cam, nhấc lên 2px khi rê chuột.
- **Nhãn** (`.ph-nhan`): viên thuốc 11,5px, đậm 600.
- **Vùng bấm** tối thiểu 40×40px trên máy tính, 44×44px trên điện thoại.
- Biểu tượng là SVG nét (stroke), không dùng emoji.
- Ảnh chương dùng `assets/img/*.webp`. Khung ảnh đặt `aspect-ratio: 840 / 454; object-fit: cover`, nên ảnh không bị cắt.

## 8. Từng trang

| Mẫu | Tệp trong kho | Ghi chú chính |
|---|---|---|
| `trang-chu-*` | `index.html` | Khối mở đầu nền xanh gradient: tiêu đề 2 dòng; **một** thẻ "Em đang học dở" có nút "Tiếp tục học" (không có nút thứ hai); khung "Cùng một câu, ba mức ngôn ngữ" sáng lên theo mức đang chọn. Tiếp theo là 5 ô lối vào (Bài học, Thuật ngữ, Luyện đề, Trò chơi, Thí nghiệm ảo), 4 thẻ chương có ảnh (Chương I có nhãn "Có thí nghiệm ảo"), rồi chân trang. |
| `bai-hoc-*` | `bai.html?n=…` (và `baihoc.html` cho danh sách) | Cột trái: bài trong chương; bài ngoài 16 bài mẫu thì mờ, có nhãn "chưa có nội dung". Giữa: tiêu đề, dòng nhắc mức ngôn ngữ, đoạn văn có thuật ngữ gạch chân (chạm để mở thẻ nghĩa), khung "Công thức trong bài" (cỡ 17px), Ví dụ và Lời giải, "Câu hay gặp trong đề"; cuối bài có **một** nút "Tự kiểm tra · 3 câu" và nút "Đánh dấu đã học". Cột phải: "Thuật ngữ trong bài" (IPA, nút nghe, nhãn chờ thẩm định) và thẻ "Học tiếp" (Bài trước, gợi ý tiếp theo, mở thí nghiệm ảo). |
| `thuat-ngu-*` | `thuatngu.html` | **Quyết định 23/9:** nút "Nghe phát âm trên Oxford · Cambridge" mở mục từ trên từ điển (`PH.dictHTML`); loa nhỏ là giọng đọc của trình duyệt (`PH.speak`), ẩn khi máy không có giọng. Khối đầu có 2 nút: Thẻ ghi nhớ, Kiểm tra nhanh · 10 câu. Ô "Lọc trong kho"; ở mức English có nút "Hiện nghĩa tiếng Việt". Hàng chip lọc theo chương và "Từ em chưa thuộc"; dòng "Đang hiện n / 79". Lưới thẻ 4 cột (màu theo chương, IPA, nút nghe, kí hiệu · đơn vị, nhãn trạng thái). Cuối trang là khung "Mỗi thuật ngữ được kiểm tra thế nào" (4 bước). |
| `luyen-de-*` | `luyende.html` | Dải đầu xanh đậm: tên đề, "28 câu · 50 phút · thang điểm 10", đồng hồ, nút Nộp bài. Dòng nhắc: điểm không nhân hệ số, đề thật bằng tiếng Việt. Cột trái: bản đồ câu hỏi theo 3 phần (đã làm / đánh dấu / chưa làm) và "Thuật ngữ xuất hiện trong đề". Câu hỏi hiện theo mức ngôn ngữ; số thập phân đổi theo ngôn ngữ. |
| `tro-choi-*` | `games.html` (giữ logic `game-termrush.html`, `game-match.html`) | Khối đầu tím – xanh có biểu tượng nhún nhảy; 3 ô hệ số ×1 / ×1,5 / ×2; chip phạm vi ôn; 2 thẻ trò chơi lớn có hình động xem trước **và thẻ thứ ba Bilingual Arena ghi "đang phát triển" (quyết định 23/9: giữ, không bỏ)**; Nhiệm vụ hôm nay, Huy hiệu chương (2 cột, "Đã mở / Chưa mở"), Kỉ lục của em (tên trò chơi ở dòng riêng). |
| `thi-nghiem-ao-*` | **tệp mới** `thinghiem.html`, liên kết từ Bài 1 | Nền tối: 3 khung chạy cùng lúc (dụng cụ, phân tử bên trong, đồ thị nhiệt độ theo thời gian). Nút Đun / Tạm dừng, Làm lại, thanh tua, tốc độ ×1 ×2 ×4. Dừng ở 100 °C khi nước đã hoá hơi hết (cốc hở, không đun hơi nước). Các khung "Em thấy gì?", "Thuật ngữ trong thí nghiệm", "Đây là gì" (đồ thị định tính, không đúng tỉ lệ thời gian). Logic có sẵn trong `nguon-mockup/ThiNghiem.dc.html`. |
| `trang-thai-thieu-du-lieu-*` | không phải trang riêng | Sáu quy tắc hiển thị khi thiếu dữ liệu, áp dụng cho mọi trang: lần đầu vào, tìm không ra, bài chưa có nội dung, máy không có giọng đọc tiếng Anh, mất mạng, đang tải. |

## 9. Làm đẹp hơn mockup

Mockup là mức tối thiểu. Khi viết code, thêm những điểm sau.
1. **Ảnh xem trước khi chia sẻ liên kết** (Zalo, Facebook): dùng `assets/og-physihub.jpg` (1200×630). Mỗi trang có thẻ `meta`:
   ```html
   <meta name="description" content="Học liệu số song ngữ Việt – Anh môn Vật lí 12, theo SGK Kết nối tri thức.">
   <meta property="og:title" content="PhysiHub — Vật lí 12 song ngữ Việt – Anh">
   <meta property="og:description" content="Bài học, thuật ngữ có phiên âm, luyện đề và trò chơi.">
   <meta property="og:image" content="https://vvsuslab.github.io/PhysiHub/assets/og-physihub.jpg">
   <meta property="og:type" content="website">
   <meta name="twitter:card" content="summary_large_image">
   <meta name="theme-color" content="#1E3266">
   ```
2. **Tiêu đề thẻ trình duyệt riêng cho từng trang**, ví dụ "Bài 4. Nhiệt dung riêng · PhysiHub", đổi theo mức ngôn ngữ.
3. **In bài học** (`@media print`): ẩn đầu trang, menu, nút, chân trang; khổ A4; giữ song ngữ theo mức đang chọn; in kèm bảng thuật ngữ có IPA cuối bài. Giáo viên sẽ in phát cho lớp.
4. **Chuyển động nhẹ:** các khối hiện dần khi cuộn (lớp `.reveal` có sẵn trong `lively.css`), thẻ nhấc 3–6px khi rê chuột, menu sổ 0,2 giây. Tắt hết khi máy bật "giảm chuyển động" (`prefers-reduced-motion`).
5. **Tải nhanh:** ảnh WebP có sẵn `width` và `height`; `loading="lazy"` cho ảnh không nằm ở đầu trang; phông dùng `display=swap`.
6. **Trạng thái tải:** dùng khung xám đúng hình nội dung sắp hiện, không dùng vòng xoay.

## 10. Trang "Về dự án" (`vedan.html`, trang mới)

Chuyển nguyên văn hai khối "Về dự án" và "Nguồn học liệu" đang có ở `index.html` sang trang này, trình bày theo phong cách chung. Thêm các mục:
- Nguồn ảnh chương I và III.
- Phiên âm đối chiếu từ điển Oxford Learner's, Collins, Merriam-Webster.
- Phiên âm và âm thanh: IPA theo Oxford; nút nghe mở Oxford/Cambridge; loa nhỏ là giọng máy của trình duyệt (quyết định 23/9).
- Tình trạng thẩm định: dùng số mục `added`/`drafted` đếm từ dữ liệu, không gõ tay.

Chân trang của mọi trang liên kết tới `vedan.html` và `vedan.html#nguon`.

## 11. Trước khi coi là xong

Làm theo mục "Kiểm tra trước khi báo xong" trong `CLAUDE.md`, rồi so từng trang với ảnh trong `anh-chup/`.
