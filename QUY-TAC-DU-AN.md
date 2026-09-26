# PhysiHub — quy tắc làm việc của nhóm

Mọi người đọc tệp này trước khi sửa mã. Nhóm chỉ sửa tệp này khi có quyết định mới của giáo viên hướng dẫn.

## Dự án

PhysiHub là học liệu số song ngữ Việt – Anh cho môn Vật lí 12 (SGK Kết nối tri thức với cuộc sống). Đây là sản phẩm dự thi Khoa học kĩ thuật của học sinh Trường THPT Bùi Hữu Nghĩa, Cần Thơ, năm học 2026–2027. Trang chạy tại https://vvsuslab.github.io/PhysiHub/ (GitHub Pages).

**Tình trạng (23/9/2026):** giao diện mới theo mockup đã viết xong toàn bộ (bản 2). Học sinh chưa bắt đầu thử nghiệm, nên bản 2 đưa thẳng lên `main`. Việc còn lại nằm trong `thiet-ke/KE-HOACH.md`.

## Cách làm việc trong nhóm

Người trực tiếp dùng tài liệu này là học sinh lớp 12, chưa học lập trình.
- Mọi giải thích viết bằng tiếng Việt, câu ngắn, không dùng từ chuyên môn khi chưa giải thích.
- Mỗi lần chỉ làm **một việc nhỏ** trong `thiet-ke/KE-HOACH.md`. Trước khi sửa, phải nói rõ sẽ sửa tệp nào và vì sao, rồi chờ giáo viên hướng dẫn đồng ý.
- Làm xong phải ghi lại **cách tự kiểm tra bằng mắt**: mở trang nào, bấm vào đâu, phải thấy gì.
- Học sinh phải hiểu được thay đổi để trả lời hội đồng. Khi được hỏi "đoạn này làm gì", giải thích từng dòng bằng lời dễ hiểu.

## Kĩ thuật — giữ nguyên cách làm hiện tại

- HTML + CSS + JavaScript thuần. **Không** thêm framework, thư viện ngoài, npm hay bước build nào khác.
- Trang phải chạy được cả khi mở thẳng tệp (`file://`) lẫn trên GitHub Pages.
- Thứ tự nạp trong mỗi trang: `assets/site.css` → `assets/lively.css` → `data/*.js` → `assets/site.js` → mã riêng của trang. Mọi hàm dùng chung nằm trong `window.PH`.
- Đầu trang, menu sổ, ô tìm kiếm, thanh thẻ điện thoại và chân trang do `PH.mount()` trong `assets/site.js` dựng cho mọi trang. Sửa một chỗ là đổi mọi trang.
- **Chữ trên giao diện** để trong `PH.UI` (site.js) và `Object.assign(PH.UI, {...})` ở đầu mỗi trang, mỗi mục là cặp `[tiếng Việt, English]`; đưa ra trang bằng `PH.ui('khoá')` / `PH.uiFmt('khoá')`. Không gõ chữ Việt thẳng vào HTML sinh ra bằng JS.
- Dữ liệu: **chỉ sửa `data/*.json`**, sau đó chạy `node tools/build-data.mjs` để sinh lại `data/*.js` (hoặc `pwsh -File tools/build-data.ps1` trên Windows). Không sửa tay `data/*.js`.
- `data/lessons.js` (danh sách chương, bài) sửa trực tiếp.
- Lưu trên máy người học bằng `localStorage` với các khoá `ph-lang`, `ph-progress`, `ph-scope`. Đọc/ghi luôn bọc trong try/catch.
- Khi thêm, xoá hoặc đổi tên tệp: cập nhật danh sách `SHELL` trong `sw.js` và tăng tên bộ nhớ đệm (`physihub-v2` → `physihub-v3`…). Nếu `SHELL` trỏ tới tệp không tồn tại, chế độ ngoại tuyến sẽ hỏng.
- Phạm vi bài mẫu đặt ở `PH.MAU` (site.js). Muốn mở thêm bài đã có nội dung thì thêm số bài vào đó (hoặc đặt `PH.MO_TAT_CA = true`), không xoá dữ liệu.

## Nhánh làm việc

- Bản 2 (giao diện mới) đã nằm trên `main` từ 23/9/2026 vì học sinh chưa bắt đầu thử nghiệm. Từ nay mọi sửa đổi làm trực tiếp trên `main`, mỗi lần một việc nhỏ, và nói cho học sinh biết tệp nào đổi.
- Khi bắt đầu tuần thử nghiệm có khảo sát: **không đổi giao diện** cho tới khi phát xong phiếu; sửa lớn làm trên nhánh riêng rồi gộp sau.

## Các tệp trong kho

| Tệp | Vai trò |
|---|---|
| `index.html` | Trang chủ: khối mở đầu, một thẻ "Tiếp tục học", 5 ô lối vào, 4 thẻ chương |
| `baihoc.html`, `bai.html?n=…` | Danh sách bài theo chương; trang một bài (đọc `content.json`); bài ngoài 16 bài mẫu hiện "chưa có nội dung" |
| `thuatngu.html` | Kho thuật ngữ: lọc, thẻ ghi nhớ, kiểm tra 10 câu, hộp chi tiết; tham số `?c= ?t= ?q= ?l= ?loc=chua|thuoc` |
| `luyende.html` | Danh sách đề và trang làm đề (`?exam=`); bản đồ câu hỏi, đánh dấu xem lại, tự lưu |
| `games.html`, `game-termrush.html`, `game-match.html` | Trò chơi. Thẻ **Bilingual Arena giữ lại, ghi "đang phát triển"** |
| `thinghiem.html` | Thí nghiệm ảo "Từ nước đá đến hơi nước" (Chương I · Bài 1) |
| `vedan.html` | Về dự án, nguồn học liệu, phiên âm và âm thanh, cách kiểm tra thuật ngữ, tình trạng thẩm định (đếm từ dữ liệu) |
| `lienket.html` | Mục lục mọi liên kết, tự sinh từ dữ liệu |
| `assets/site.css`, `assets/site.js`, `assets/lively.css` | Hệ thiết kế, mã dùng chung, hiệu ứng |
| `assets/img/*.webp`, `assets/icon-*.png`, `assets/favicon.svg`, `assets/og-physihub.jpg` | Ảnh chương, biểu tượng ứng dụng, ảnh xem trước khi chia sẻ |
| `data/*.json` → `data/*.js`, `data/lessons.js` | Dữ liệu |
| `sw.js`, `manifest.webmanifest` | Ứng dụng web, dùng ngoại tuyến |
| `tools/build-data.mjs`, `tools/build-data.ps1`, `tools/kiem-tra.mjs` | Sinh dữ liệu; kiểm tra toàn kho |
| `thiet-ke/` | Đặc tả thiết kế, trang mẫu, ảnh chụp, bảng đối chiếu IPA |
| `NHAT-KI.md` | Nhật kí làm sản phẩm |
| `g12.html`, `html/`, `assets/logo.png` | Giao diện cũ, không trang nào liên kết tới. Chỉ chuyển vào `_luu-tru/` khi nhóm đồng ý |

## Quy tắc nội dung — không được làm trái

1. Kiến thức, tên bài, kí hiệu bám **SGK Vật lí 12 Kết nối tri thức**. Ví dụ nguyên lí I viết `ΔU = A + Q`.
2. Chính tả: **Vật lí, kĩ thuật, kỉ lục, lí thuyết** (dùng i, không dùng y). Số thập phân tiếng Việt dùng dấu phẩy (83,6 kJ); tiếng Anh dùng dấu chấm (83.6 kJ).
3. Tiếng Anh theo **Anh – Anh** và đề cương Cambridge International AS & A Level Physics 9702. Viết "vaporisation"; "cảm ứng từ" là "magnetic flux density", không dùng "magnetic induction" (id thuật ngữ vẫn giữ tên cũ, không đổi).
4. **Phiên âm IPA** theo Oxford Learner's (thuật ngữ không có trong Oxford thì theo Collins; Merriam-Webster chỉ để xác nhận trọng âm). Ngày 23/9/2026 đã áp dụng toàn bộ cột `ipa_de_xuat` trong `thiet-ke/noi-dung/ipa-de-xuat.json` vào `data/terms.json`; trường `oxford` là đường dẫn mục từ trên Oxford. Giáo viên tiếng Anh vẫn phải ghi "Đồng ý" vào bảng Excel; riêng `isochoric process` có ghi chú "cần giáo viên nghe lại". Khi giáo viên sửa khác, làm theo giáo viên.
5. Mục do nhóm tự bổ sung giữ nhãn chờ thẩm định (`"added": true` với thuật ngữ, `"drafted": true` với bài học) cho đến khi có biên bản của giáo viên.
6. **Không bao giờ bịa**: tên người thẩm định, số liệu khảo sát, số người dùng, kết quả thử nghiệm. Chưa có thì ghi rõ là chưa có.
7. **Không thu thập dữ liệu cá nhân** của học sinh: không họ tên, số điện thoại, email, không gửi dữ liệu đi đâu. Tiến độ chỉ lưu trên máy.
8. Điểm luyện đề **không** nhân hệ số theo mức ngôn ngữ. Hệ số ×1 / ×1,5 / ×2 chỉ dùng trong trò chơi.
9. Ở mức English, **không còn chữ tiếng Việt** trên màn hình (trừ nút "Tiếng Việt", tên trường, tên bộ sách, và nghĩa tiếng Việt khi người học chủ động mở).
10. **Phát âm chuẩn nghe trên Oxford / Cambridge:** nút "Nghe phát âm trên Oxford · Cambridge" (`PH.dictHTML`) mở đúng mục từ trên trang từ điển, nơi có bản ghi âm người bản ngữ. Trang **không sao chép tệp âm thanh** của từ điển và không được ghi "âm thanh lấy từ Oxford". Nút loa nhỏ là giọng máy của trình duyệt (`PH.speak`), chỉ hiện khi máy có giọng tiếng Anh (`PH.hasVoice()`).
11. Trang phải nói thật về công cụ: nhóm có dùng công cụ hỗ trợ lập trình bằng AI để hỗ trợ thiết kế, viết mã và soạn bản nháp tiếng Anh; nội dung do nhóm và giáo viên rà soát (đã ghi ở `vedan.html`).

## Phạm vi đã chốt (23/9/2026)

- 16 bài mẫu: Bài 1–4, 8–11, 14–17, 21–24. Các bài còn lại vẫn hiện đúng tên SGK và ghi "chưa có nội dung". **Giữ nguyên dữ liệu** của các bài 5, 6, 12, 18, 19 trong `content.json`, chỉ không mở cho học sinh.
- Một thí nghiệm ảo duy nhất: "Từ nước đá đến hơi nước", đặt trong Chương I · Bài 1.
- Ba trò chơi trên trang: Term Rush, Ghép cặp Vật lí (chơi được) và Bilingual Arena (giữ thẻ, ghi "đang phát triển", **không bỏ**).

## Thiết kế

Nguồn chuẩn là thư mục `thiet-ke/`:
- `thiet-ke/THIET-KE.md`: màu, chữ, thành phần giao diện, quy tắc cho từng trang.
- `thiet-ke/mau/*.html`: trang mẫu tĩnh ở 3 mức ngôn ngữ (vi, song-ngu, en), mở được bằng trình duyệt.
- `thiet-ke/anh-chup/*.jpg`: ảnh chụp để so bằng mắt.
- `thiet-ke/nguon-mockup/*.dc.html`: mã nguồn mockup, chỉ đọc để hiểu logic. Không chép nguyên tệp.

Khi mã hiện tại khác thiết kế thì làm theo thiết kế, trừ khi nhóm nói khác. Hai chỗ mockup đã lỗi thời so với quyết định 23/9: (1) chữ "âm thanh là giọng đọc của trình duyệt" → nay là nghe trên Oxford/Cambridge; (2) trang Trò chơi chỉ vẽ 2 thẻ → trang thật có thêm thẻ Bilingual Arena "đang phát triển".

## Kiểm tra trước khi báo "xong"

1. `node tools/kiem-tra.mjs`: không còn dòng **LỖI**.
2. Mở trang vừa sửa ở cả 3 mức ngôn ngữ; ở mức English không còn chữ Việt.
3. Thu cửa sổ còn khoảng 390px: không có thanh cuộn ngang, chữ không tràn, nút bấm dễ chạm.
4. Dùng phím Tab đi hết trang: thấy rõ viền cam ở ô đang chọn; menu sổ mở được bằng bàn phím.
5. Không có chữ bị "rơi" (một chữ đứng một mình ở dòng cuối), không có số bị tách khỏi đơn vị.

## Nhật kí

Sau mỗi việc, thêm một mục vào `NHAT-KI.md` theo mẫu có sẵn. Ghi: ngày, việc, tệp đã sửa, đã làm gì. Để trống phần "Em đã tự kiểm tra" cho học sinh tự viết. Nhật kí này là minh chứng quá trình làm sản phẩm trong hồ sơ dự thi.

## Không được làm khi chưa hỏi

- Xoá hoặc đổi tên tệp. `g12.html` và thư mục `html/` chỉ được chuyển vào `_luu-tru/` khi nhóm đồng ý.
- Đổi các quyết định trong mục "Phạm vi đã chốt" và "Quy tắc nội dung".
- Sửa đáp án trong `data/exams.json` hay `content.json` mà không có giáo viên xác nhận.
