# Bộ bàn giao thiết kế PhysiHub (23/9/2026)

**Cập nhật 24/9/2026:** giao diện đã viết xong theo bộ này (xem `KE-HOACH.md`). Hai điểm mockup lỗi thời so với quyết định của cô giáo: âm thanh nay là nút nghe trên Oxford/Cambridge (không phải giọng máy như mockup ghi), và trang Trò chơi có thêm thẻ Bilingual Arena "đang phát triển".

Thư mục này là **nguồn chuẩn** về giao diện và nội dung khi viết code. Claude Code đọc nó theo chỉ dẫn trong `CLAUDE.md` ở thư mục gốc.

| Tệp / thư mục | Dùng để |
|---|---|
| `THIET-KE.md` | Đặc tả: màu, chữ, đầu trang, menu sổ, ô tìm kiếm, ba mức ngôn ngữ, từng trang |
| `KE-HOACH.md` | Việc đã làm (24/9) và việc còn lại; mỗi việc có sẵn lời nhắn để dán vào Claude Code |
| `mau/` | 24 trang mẫu tĩnh (8 trang × 3 mức ngôn ngữ: `-vi`, `-song-ngu`, `-en`). Mở bằng trình duyệt; rê chuột vào thanh menu để xem bảng sổ xuống |
| `anh-chup/` | Ảnh chụp các trang, các bảng menu sổ và ô tìm kiếm, để so bằng mắt |
| `nguon-mockup/` | Mã nguồn mockup (định dạng `.dc.html` của công cụ thiết kế). Chỉ đọc để hiểu logic; không chép nguyên tệp |
| `noi-dung/PhysiHub-Doi-chieu-IPA.xlsx` | Đối chiếu phiên âm 79 thuật ngữ với Oxford, Collins, Merriam-Webster. Giáo viên tiếng Anh điền cột "GV tiếng Anh xác nhận" |
| `noi-dung/ipa-de-xuat.json` | Cùng nội dung ở dạng máy đọc được. Chép cột xác nhận từ tệp Excel sang trường `gv_xac_nhan` |

Tệp thêm ngoài thư mục này:
- `CLAUDE.md`: quy tắc cho Claude Code.
- `NHAT-KI.md`: nhật kí làm sản phẩm.
- `tools/build-data.mjs`: sinh `data/*.js` bằng Node.
- `tools/kiem-tra.mjs`: kiểm tra toàn kho.
- `assets/img/*.webp`: 8 ảnh chương đúng cỡ.
- `assets/favicon.svg` và `assets/icon-*.png`, `assets/apple-touch-icon.png`: biểu tượng ứng dụng, thay cho các tệp đã bị xoá ngày 20/9.
- `assets/og-physihub.jpg`: ảnh xem trước khi chia sẻ liên kết qua Zalo, Facebook (1200×630).

Số liệu trong mẫu (tiến độ, kỉ lục, 47/79 đã thuộc…) chỉ là **trạng thái ví dụ**, không phải dữ liệu thật. Trang thật lấy từ `localStorage` của từng máy.
