# Nhật kí làm sản phẩm PhysiHub

Mỗi lần làm việc với Claude Code, thêm một mục mới lên **đầu** danh sách. Claude điền phần "Máy đã làm"; phần "Em đã tự kiểm tra" và "Em học được" do học sinh tự viết bằng lời của mình. Đây là minh chứng quá trình trong hồ sơ dự thi, nên viết trung thực, kể cả khi có lỗi.

---

## Mẫu

**Ngày:** …/…/2026 · **Người làm:** (mã thành viên, ví dụ HS1) · **Bước:** … (theo `thiet-ke/KE-HOACH.md`)

**Em yêu cầu:** (dán lời nhắn đã gửi cho Claude)

**Máy đã làm:**
- Tệp đã sửa: …
- Việc đã làm: …
- Kết quả `node tools/kiem-tra.mjs`: … lỗi, … cảnh báo

**Em đã tự kiểm tra:** (mở trang nào, bấm gì, thấy gì; chỗ nào chưa ổn)

**Quyết định của nhóm:** (đồng ý / sửa lại / hoãn — vì sao)

**Em học được:** (một hai câu: đoạn mã này làm gì, vì sao phải làm như vậy)

---

<!-- Các mục nhật kí bắt đầu từ đây -->

## 24/9/2026 · Bản 3: phối màu toàn trang theo slide "Bài 5. Nhiệt nóng chảy riêng"

**Ngày:** 24/9/2026 · **Người làm:** Claude (Cowork), theo yêu cầu của cô Trinh · **Việc:** đổi bảng màu, chữ, cách trình bày của cả trang web

**Cô giáo yêu cầu:** gửi ảnh slide "Bài 5. Nhiệt nóng chảy riêng" — "Tham khảo cách phối màu sắc, chữ, hình ảnh này" (áp dụng cho toàn bộ trang). Sau bản đầu tiên cô nhận xét: "Dùng nền xanh nhiều quá, đặc biệt trang trò chơi; quan sát kĩ hơn bức ảnh, làm màu sắc hài hoà hơn, giống như ảnh."

**Máy đã làm:**
- Tệp đã sửa: `assets/site.css`, `assets/lively.css`, `assets/site.js`, tất cả trang `.html`, `manifest.webmanifest`, `sw.js` (physihub-v3), `data/terms.json` (+ `terms.js`: thêm `unitEn` "MeV/nucleon"), `thiet-ke/THIET-KE.md`, `README.md`, `CLAUDE.md`.
- Theo đúng tỉ lệ màu của slide: nền trắng; khung xanh rất nhạt viền xanh và khung cam nhạt viền cam; xanh đậm chỉ ở dải tiêu đề mảnh, nhãn mục, vòng số; cam làm điểm nhấn. Bảng mã màu ghi trong `thiet-ke/THIET-KE.md` mục 1.
- Thanh menu đổi sang nền trắng chữ xanh, đáy là vạch xanh – cam như đường chân slide. Khối mở đầu mỗi trang đổi thành một dải tiêu đề mảnh (huy hiệu tròn, chữ in hoa, vạch cam chéo), phần giới thiệu nằm dưới trên nền trắng.
- Trang bài học: đầu bài là dải tiêu đề như slide; nội dung chia khung "Nội dung chính" có vòng số, "Công thức" + khung cam "Trong đó", "Lưu ý", "Bảng số liệu".
- Trang trò chơi và hai trò chơi: bỏ hết nền xanh đậm; sân chơi xanh rất nhạt, thuật ngữ rơi là thẻ trắng viền xanh, thẻ đang hỏi màu cam; thẻ ghép cặp mặt sau xanh nhạt; ô hệ số đang chọn là khung xanh nhạt viền xanh với vòng số.
- Thí nghiệm ảo: ba khung trắng trên nền xanh nhạt, đồ thị và cốc nước vẽ lại cho nền sáng; riêng ô "nhìn vào bên trong" giữ nền tối để thấy màu phân tử.
- Chữ: Be Vietnam Pro cho tiêu đề và số; Lora chỉ còn cho tiếng Anh và công thức.
- Kiểm tra: chụp các trang ở 1280px và 390px, ba mức ngôn ngữ; mức English không còn chữ Việt (trừ kí hiệu SGK như Wđ); `xem/test.py` qua hết; `node tools/kiem-tra.mjs`: 0 lỗi, 1 cảnh báo (tệp cũ `g12.html`).

**Em đã tự kiểm tra:** (học sinh viết)

**Quyết định của nhóm:** (học sinh viết)

**Em học được:** (học sinh viết)

---

## 24/9/2026 · Làm lại trang Trò chơi cho sang và hài hoà hơn

**Ngày:** 24/9/2026 · **Người làm:** Claude (Cowork), theo yêu cầu của cô Trinh · **Việc:** thiết kế và viết lại `games.html`

**Cô giáo yêu cầu:** "Trò chơi nhìn màu sắc và bố cục không sang, hình ảnh như trò chơi em bé. Cần đồ hoạ hấp dẫn nhưng sang trọng, bố cục, màu sắc hài hoà, không loè loẹt. Chỉ thiết kế và viết lại code của trang game."

**Máy đã làm:**
- Tệp đã sửa: `games.html` (chỉ trang này; hai trò chơi và mọi trang khác giữ nguyên).
- Bỏ nền tím – hồng – xanh lá, các ô nút dày "3D", biểu tượng nhún nhảy. Dùng đúng bảng màu của cả trang: xanh đậm, vàng đất, kem; chữ Lora cho tiêu đề và số.
- Khối mở đầu: xanh đậm với hoạ tiết quỹ đạo mảnh xoay rất chậm; hộp "mức ngôn ngữ đang chơi" kiểu kính mờ.
- Ba ô hệ số: thẻ trắng viền kem, ô đang chọn là xanh đậm có vạch vàng trên đầu.
- Thẻ Term Rush: bầu trời đêm xanh đậm, thuật ngữ rơi chậm dạng viên thuốc trắng, viên đang hỏi màu vàng, vạch đứt vàng, bốn ô đáp án kính mờ. Thẻ Ghép cặp: bàn giấy kem, mặt sau thẻ xanh đậm viền vàng có biểu tượng nguyên tử, một thẻ lật chậm, cặp đã ghép viền vàng. Thẻ Bilingual Arena giữ nguyên, nhãn "đang phát triển".
- Huy hiệu chương dạng huy chương tròn viền vàng, chưa mở thì xám; kỉ lục dùng số Lora xanh đậm.
- Đã chụp lại ở 3 mức, 1280px và 390px; mức English không còn chữ Việt.

**Em đã tự kiểm tra:** (học sinh viết)

**Quyết định của nhóm:** (học sinh viết)

**Em học được:** (học sinh viết)

---

## 24/9/2026 · Bản 2: giao diện mới theo mockup

**Ngày:** 23–24/9/2026 · **Người làm:** Claude (Cowork), theo yêu cầu của cô Trinh · **Việc:** viết toàn bộ giao diện mới (xem `thiet-ke/KE-HOACH.md`, mục "Đã làm")

**Cô giáo yêu cầu:** "Học sinh vẫn chưa thực nghiệm nên cứ cập nhật bản mới luôn. Phần phát âm phải lấy từ Oxford/Cambridge; trò chơi thứ 3 giữ nguyên và để đang phát triển, không bỏ."

**Máy đã làm:**
- Tệp đã sửa: `assets/site.css`, `assets/lively.css`, `assets/site.js`, `index.html`, `baihoc.html`, `bai.html`, `thuatngu.html`, `luyende.html`, `games.html`, `game-termrush.html`, `game-match.html`, `lienket.html`, `sw.js`, `manifest.webmanifest`, `data/terms.json` (+ `terms.js`), `data/lessons.js`, `README.md`, `CLAUDE.md`, `tools/kiem-tra.mjs`.
- Tệp mới: `thinghiem.html`, `vedan.html`, `assets/img/*.webp`, `assets/favicon.svg`, `assets/icon-*.png`, `assets/apple-touch-icon.png`, `assets/og-physihub.jpg`, `tools/build-data.mjs`, `thiet-ke/`.
- Việc đã làm: đầu trang hai tầng + menu sổ + tìm kiếm có gợi ý; chữ giao diện ba mức (mức English không còn chữ Việt); trang chủ, bài học, kho thuật ngữ, luyện đề, trò chơi, thí nghiệm ảo, về dự án, mục lục theo đúng mockup; phiên âm theo Oxford và nút nghe mở Oxford/Cambridge; dữ liệu đổi vaporisation, magnetic flux density, mass defect; ngoại tuyến chạy lại (physihub-v2).
- Không đổi: đáp án đề, nội dung bài, id thuật ngữ, cách chấm điểm, cách chơi hai trò chơi.
- Kết quả `node tools/kiem-tra.mjs`: 0 lỗi, 1 cảnh báo (g12.html cũ, không trang nào liên kết tới).
- Đã chụp 84 ảnh (14 trang × 3 mức × 1280px/390px) và chạy thử tự động: đổi mức, menu sổ, tìm "nhiet" và "nhiet dugn", thẻ nghĩa thuật ngữ có liên kết Oxford/Cambridge, tự kiểm tra bài 4, thẻ ghi nhớ, kiểm tra 10 câu, làm và nộp đề C1, Term Rush, Ghép cặp, thí nghiệm ảo.

**Em đã tự kiểm tra:** (học sinh viết)

**Quyết định của nhóm:** (học sinh viết)

**Em học được:** (học sinh viết)

---

