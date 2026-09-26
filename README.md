# PhysiHub — Vật lí 12 song ngữ Việt – Anh

Sản phẩm dự thi Khoa học kĩ thuật · Trường THPT Bùi Hữu Nghĩa, Cần Thơ · Năm học 2026–2027.
Site tĩnh (HTML + CSS + JS thuần), chạy trên GitHub Pages hoặc mở trực tiếp từ thư mục/USB, không cần cài đặt gì.

**Bản 2 (24/9/2026):** giao diện mới theo mockup trong `thiet-ke/`. Quy tắc làm việc của nhóm ở `QUY-TAC-DU-AN.md`; việc còn lại ở `thiet-ke/KE-HOACH.md`.

## Cấu trúc

| Tệp | Vai trò |
|---|---|
| `index.html` | Trang chủ: ba mức ngôn ngữ, một thẻ "Tiếp tục học", 5 ô lối vào, bốn chương |
| `baihoc.html` | Danh sách 25 bài theo SGK Kết nối tri thức (16 bài mẫu mở được) |
| `bai.html?n=4` | Trang một bài học (đọc từ `data/content.js`), thuật ngữ trong bài, tự kiểm tra, in bài |
| `thuatngu.html` | Kho thuật ngữ: lọc, hộp chi tiết, thẻ ghi nhớ, kiểm tra 10 câu, nghe trên Oxford/Cambridge |
| `luyende.html` | Đề ôn theo cấu trúc đề thi 2025 (đọc từ `data/exams.js`) |
| `games.html` | Trò chơi: Term Rush, Ghép cặp Vật lí, Bilingual Arena (đang phát triển); phạm vi ôn, huy hiệu, kỉ lục |
| `game-termrush.html`, `game-match.html` | Hai trò chơi |
| `thinghiem.html` | Thí nghiệm ảo "Từ nước đá đến hơi nước" (Chương I · Bài 1) |
| `vedan.html` | Về dự án, nguồn học liệu, phiên âm và âm thanh, tình trạng thẩm định |
| `lienket.html` | Mục lục **tất cả liên kết**, tự sinh từ dữ liệu |
| `assets/site.css`, `assets/site.js`, `assets/lively.css` | Hệ thiết kế, mã dùng chung (đầu trang, menu sổ, tìm kiếm, mức ngôn ngữ, thẻ nghĩa, tiến độ), hiệu ứng |
| `data/*.json` → `data/*.js` | Dữ liệu: **sửa file `.json`**, rồi chạy `node tools/build-data.mjs` |
| `tools/kiem-tra.mjs` | Kiểm tra toàn kho: `node tools/kiem-tra.mjs` (phải còn 0 lỗi) |
| `thiet-ke/` | Đặc tả thiết kế, 24 trang mẫu, ảnh chụp, bảng đối chiếu IPA |

## Sửa dữ liệu

Mỗi bộ dữ liệu có hai tệp: `terms.json` (để soạn) và `terms.js` (trang web đọc). Sau khi sửa `.json`, tạo lại `.js`:

```
node tools/build-data.mjs
```

(Trên Windows không có Node thì dùng `pwsh -File tools/build-data.ps1`.) `data/lessons.js` (danh sách chương/bài) sửa trực tiếp. Sau đó chạy `node tools/kiem-tra.mjs`.

## Dùng trên điện thoại / cài như ứng dụng

Site là PWA: mở https://vvsuslab.github.io/PhysiHub/ trên điện thoại → menu trình duyệt → **Thêm vào màn hình chính** (Android Chrome hiện sẵn nút "Cài lên màn hình chính" ở trang chủ; iPhone dùng Safari → Chia sẻ → Thêm vào MH chính). Sau lần mở đầu tiên, toàn bộ bài học, thuật ngữ, đề và trò chơi dùng được **không cần mạng**; khi có mạng lại, `sw.js` tự lấy bản mới nhất. Không cần sửa gì khi cập nhật nội dung.

## Liên kết trực tiếp (dùng được trên điện thoại và máy tính)

| Dạng liên kết | Ví dụ |
|---|---|
| Một bài học | `bai.html?n=9` |
| Thí nghiệm ảo | `thinghiem.html` |
| Một chương trong danh sách bài | `baihoc.html#chuong-2` |
| Thuật ngữ theo chương | `thuatngu.html?c=3` |
| Một thuật ngữ cụ thể | `thuatngu.html?t=boyles-law` |
| Tìm sẵn từ khoá | `thuatngu.html?q=flux` |
| Thuật ngữ của một bài / chưa thuộc / đã thuộc | `thuatngu.html?l=4`, `thuatngu.html?loc=chua`, `thuatngu.html?loc=thuoc` |
| Một đề ôn | `luyende.html?exam=c2` |
| Trò chơi theo chương | `game-termrush.html?chapter=2`, `game-match.html?chapter=3` |
| Trò chơi theo bài | `game-termrush.html?lesson=9` |
| Ôn điểm yếu | `game-termrush.html?scope=weak` |

Trang `lienket.html` tự sinh toàn bộ các liên kết này từ dữ liệu, nên thêm bài hay thêm đề là mục lục tự cập nhật.

## Quy ước

- Tiếng Việt = màu mực, tiếng Anh = màu cam đậm (Lora nghiêng); mọi văn bản là cặp `{ "vi": "...", "en": "..." }`.
- Mức ngôn ngữ (`ph-lang`), tiến độ (`ph-progress`), phạm vi ôn (`ph-scope`) lưu trong `localStorage` của trình duyệt — chỉ trên máy đang dùng.
- Kí hiệu SGK KNTT: nguyên lí I viết `ΔU = A + Q`. Số thập phân tiếng Việt dùng dấu phẩy.
- Mục có `"added": true` (thuật ngữ) hoặc `"drafted": true` (bài học) là do nhóm bổ sung, đang chờ giáo viên thẩm định.
- Phiên âm IPA theo Oxford Learner's (trường `oxford` là mục từ trên Oxford); nút nghe mở trang Oxford/Cambridge, trang không sao chép tệp âm thanh của từ điển. Nút loa nhỏ là giọng máy của trình duyệt.
- Chữ trên giao diện nằm trong `PH.UI` dạng `[tiếng Việt, English]`; ở mức English không còn chữ Việt.
