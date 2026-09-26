# Kế hoạch PhysiHub — tình trạng 24/9/2026 và việc còn lại

Bản 2 (giao diện mới theo mockup) đã được viết xong **toàn bộ** trong một lần bàn giao ngày 23–24/9/2026, thay cho 13 bước nhỏ dự kiến trước đó. Lí do: học sinh chưa bắt đầu tuần thử nghiệm, nên không cần giữ hai nhánh; cô giáo hướng dẫn quyết định đưa bản mới lên luôn.

Cách dùng tệp này: mỗi việc còn lại là **một buổi làm**. Đọc phần mô tả in nghiêng, thống nhất kế hoạch, sửa, rồi tự kiểm tra theo hướng dẫn kèm theo.

## Đã làm (23–24/9/2026)

| Việc | Tệp | Ghi chú |
|---|---|---|
| Hệ thiết kế mới | `assets/site.css`, `assets/lively.css` | Bảng màu, 3 phông, thành phần chung, in ấn, giảm chuyển động |
| Đầu trang hai tầng, menu sổ, tìm kiếm có gợi ý, thanh thẻ điện thoại, chân trang, chữ giao diện 3 mức, chống rơi chữ | `assets/site.js` (`PH.mount`, `PH.UI`, `PH.search`, `PH.dinh`) | Menu và tìm kiếm lấy từ dữ liệu, không gõ cứng |
| Trang chủ | `index.html` | Một nút "Tiếp tục học" lấy từ `ph-progress`; 5 ô lối vào; 4 thẻ chương có ảnh |
| Bài học | `baihoc.html`, `bai.html` | 16 bài mẫu mở được; bài khác hiện "chưa có nội dung" kèm hai lối đi; mức 1 hiện tiếng Anh trong ngoặc; ghi nhớ "đã đọc … %"; in bài kèm bảng thuật ngữ |
| Kho thuật ngữ | `thuatngu.html` | Lưới 4 cột, lọc theo chương/đã thuộc/chưa thuộc/bài, hộp chi tiết, thẻ ghi nhớ, kiểm tra 10 câu |
| Phát âm | `assets/site.js` (`PH.dictLinks`) | IPA theo Oxford (đã áp dụng `ipa-de-xuat.json`); nút "Nghe phát âm trên Oxford · Cambridge" mở đúng mục từ; loa nhỏ là giọng máy, ẩn khi máy không có giọng |
| Luyện đề | `luyende.html` | Dải đầu, đồng hồ, bản đồ câu hỏi, đánh dấu xem lại, thuật ngữ trong đề, xác nhận nộp không dùng hộp thoại chặn, số thập phân đổi theo ngôn ngữ |
| Trò chơi | `games.html`, `game-termrush.html`, `game-match.html` | 3 thẻ (Bilingual Arena "đang phát triển"); hệ số, phạm vi, nhiệm vụ, huy hiệu, kỉ lục; hai trò chơi có chữ 3 mức; mức English ghép thuật ngữ ↔ kí hiệu · đơn vị |
| Thí nghiệm ảo | `thinghiem.html` | Từ nước đá đến hơi nước: cốc, phân tử, đồ thị, tua, tốc độ |
| Về dự án, mục lục | `vedan.html`, `lienket.html` | Nguồn học liệu, phiên âm và âm thanh, cách kiểm tra, tình trạng thẩm định đếm từ dữ liệu, ghi rõ có dùng AI |
| Dữ liệu | `data/terms.json`, `data/lessons.js` | vaporisation, magnetic flux density, IPA Oxford + trường `oxford`, mass defect |
| Ứng dụng web | `sw.js` (physihub-v2), `manifest.webmanifest`, biểu tượng mới, `assets/og-physihub.jpg` | Ngoại tuyến chạy lại được |
| Kiểm tra | `tools/kiem-tra.mjs` | 0 lỗi; đã chụp 84 ảnh (14 trang × 3 mức × 2 cỡ) và chạy thử tự động các thao tác chính |

## Việc còn lại — theo thứ tự nên làm

### Việc 1 · Đưa bản mới lên GitHub

Nếu nhận dạng tệp ZIP: giải nén, vào kho trên GitHub → **Add file → Upload files**, kéo toàn bộ thư mục vào, ghi lời nhắn "Bản 2: giao diện mới theo mockup 23/9" → **Commit changes**. Khoảng một phút sau mở https://vvsuslab.github.io/PhysiHub/ và nhấn Ctrl+F5.

**Em kiểm tra:** trang chủ có đầu trang hai tầng; rê chuột vào "Bài học" thấy bảng sổ; đổi 3 mức ngôn ngữ; mở trên điện thoại thấy 4 thẻ ở đáy.

### Việc 2 · Giáo viên tiếng Anh xác nhận phiên âm

Mở `thiet-ke/noi-dung/PhysiHub-Doi-chieu-IPA.xlsx`, giáo viên điền cột "GV tiếng Anh xác nhận". Riêng `isochoric process` chưa có trong Oxford/Collins, cần giáo viên nghe và quyết định.

> *Em đã có bảng xác nhận IPA của giáo viên tiếng Anh. Hãy đọc thiet-ke/noi-dung/ipa-de-xuat.json (em đã chép cột gv_xac_nhan vào), so với data/terms.json, và chỉ sửa những dòng giáo viên ghi khác với hiện tại. Liệt kê từng thay đổi cho em trước khi lưu, rồi chạy node tools/build-data.mjs và node tools/kiem-tra.mjs.*

### Việc 3 · Giáo viên Vật lí duyệt nội dung, bỏ nhãn "chờ thẩm định"

Hiện có 33/79 thuật ngữ `"added": true` và 4/16 bài mẫu `"drafted": true`. Chỉ bỏ nhãn khi có biên bản.

> *Giáo viên đã duyệt các thuật ngữ sau: (dán danh sách id). Hãy đổi "added": true thành false đúng những mục này trong data/terms.json, không đổi gì khác, chạy build-data và kiem-tra, rồi cho em xem số mục còn chờ thẩm định.*

### Việc 4 · Ghi nguồn ảnh chương

`vedan.html` hiện ghi "nguồn gốc từng ảnh ghi trong hồ sơ dự án". Khi nhóm có nguồn cụ thể (tự chụp, tự vẽ, hay lấy từ đâu, giấy phép gì):

> *Thêm nguồn của 4 ảnh chương vào mục "Nguồn học liệu" trong vedan.html (khoá src6 trong PH.UI của trang): (dán nguồn từng ảnh, cả tiếng Việt và tiếng Anh).*

### Việc 5 · Cập nhật mockup cho khớp quyết định 23/9 (không bắt buộc)

Mockup trên canvas còn ghi "âm thanh là giọng đọc của trình duyệt" và trang Trò chơi chỉ có 2 thẻ. Trang thật đã đúng; chỉ sửa mockup nếu cần nộp mockup trong hồ sơ.

### Việc 6 · Dọn tệp cũ (khi nhóm đồng ý)

> *Liệt kê những tệp không trang nào dùng tới nữa (g12.html, thư mục html/, assets/logo.png). Chuyển vào thư mục _luu-tru/, không xoá hẳn. Cập nhật sw.js nếu cần, chạy kiem-tra.*

### Việc 7 · Thử nghiệm với học sinh

Khi bắt đầu tuần thử nghiệm có khảo sát: **không đổi giao diện** cho tới khi phát xong phiếu. Sửa lỗi nhỏ thì được; sửa lớn làm trên nhánh riêng và gộp sau.

### Việc 8 · Hướng phát triển (ngoài phạm vi bản mẫu)

Video bài giảng, tài khoản học sinh, bảng theo dõi cho giáo viên, lộ trình học tự điều chỉnh, trò chơi Bilingual Arena. Ghi ở mục 7 của hồ sơ và ở `vedan.html`; chưa làm trên trang.

---

## Khi có lỗi

- Chưa lưu thì hoàn tác thay đổi vừa rồi ngay trong trình soạn thảo.
- Đã lưu lên GitHub: vào **Commits**, mở lần sửa gây lỗi, chọn **Revert** và xác nhận.
- Mọi phiên bản cũ vẫn nằm trong lịch sử của kho, không mất. Bản 1 (trước 23/9) là commit `7c71688`.
