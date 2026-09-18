# PhysiHub — Học Vật lí 12 bằng hai ngôn ngữ

Sản phẩm dự thi Khoa học kĩ thuật · Trường THPT Bùi Hữu Nghĩa, Cần Thơ · Năm học 2026–2027.
Site tĩnh (HTML + CSS + JS thuần), chạy trên GitHub Pages hoặc mở trực tiếp từ thư mục/USB, không cần cài đặt gì.

## Cấu trúc

| Tệp | Vai trò |
|---|---|
| `index.html` | Trang chủ: ba mức ngôn ngữ, tiếp tục học, bốn chương |
| `baihoc.html` | Danh sách 25 bài theo SGK Kết nối tri thức |
| `bai.html?n=9` | Trang một bài học (đọc từ `data/content.js`) |
| `thuatngu.html` | Ngân hàng thuật ngữ, flashcard, kiểm tra 10 câu |
| `luyende.html` | Đề ôn theo cấu trúc đề thi 2025 (đọc từ `data/exams.js`) |
| `lienket.html` | Mục lục **tất cả liên kết**: 25 bài, thuật ngữ theo chương, 4 đề, trò chơi theo phạm vi |
| `games.html` | Hub trò chơi, phạm vi ôn, kỷ lục cá nhân |
| `game-termrush.html`, `game-match.html` | Term Rush và Ghép cặp |
| `assets/site.css`, `assets/site.js` | Hệ thiết kế và mã dùng chung (mức ngôn ngữ, popover thuật ngữ, phát âm, tiến độ) |
| `data/*.json` → `data/*.js` | Dữ liệu: **sửa file `.json`**, rồi tạo lại file `.js` (xem dưới) |

## Sửa dữ liệu

Mỗi bộ dữ liệu có hai tệp: `terms.json` (để soạn) và `terms.js` (trang web đọc). Sau khi sửa `.json`, tạo lại `.js` bằng PowerShell:

```powershell
cd data
foreach ($n in 'terms','pairs','content','exams') {
  $json = Get-Content -Raw -Encoding UTF8 "$n.json"
  $null = $json | ConvertFrom-Json   # kiểm tra cú pháp; lỗi thì dừng ở đây
  $key = @{ terms='PH.TERMS'; pairs='PH.PAIRS'; content='PH.CONTENT'; exams='PH.EXAMS' }[$n]
  "// PhysiHub — sinh từ $n.json. Sửa $n.json rồi chạy lại lệnh này.`nwindow.PH = window.PH || {};`n$key = $json;" | Set-Content -Encoding UTF8 "$n.js"
}
```

`data/lessons.js` (danh sách chương/bài) sửa trực tiếp.

## Dùng trên điện thoại / cài như ứng dụng

Site là PWA: mở https://vvsuslab.github.io/PhysiHub/ trên điện thoại → menu trình duyệt → **Thêm vào màn hình chính** (Android Chrome hiện sẵn nút "Cài lên màn hình chính" ở trang chủ; iPhone dùng Safari → Chia sẻ → Thêm vào MH chính). Sau lần mở đầu tiên, toàn bộ bài học, thuật ngữ, đề và trò chơi dùng được **không cần mạng**; khi có mạng lại, `sw.js` tự lấy bản mới nhất. Không cần sửa gì khi cập nhật nội dung.

## Liên kết trực tiếp (dùng được trên điện thoại và máy tính)

| Dạng liên kết | Ví dụ |
|---|---|
| Một bài học | `bai.html?n=9` |
| Một chương trong danh sách bài | `baihoc.html#chuong-2` |
| Thuật ngữ theo chương | `thuatngu.html?c=3` |
| Một thuật ngữ cụ thể | `thuatngu.html?t=boyles-law` |
| Tìm sẵn từ khoá | `thuatngu.html?q=flux` |
| Một đề ôn | `luyende.html?exam=c2` |
| Trò chơi theo chương | `game-termrush.html?chapter=2`, `game-match.html?chapter=3` |
| Trò chơi theo bài | `game-termrush.html?lesson=9` |
| Ôn điểm yếu | `game-termrush.html?scope=weak` |

Trang `lienket.html` tự sinh toàn bộ các liên kết này từ dữ liệu, nên thêm bài hay thêm đề là mục lục tự cập nhật.

## Quy ước

- Tiếng Việt = màu mực, tiếng Anh = màu vàng đất; mọi văn bản là cặp `{ "vi": "...", "en": "..." }`.
- Mức ngôn ngữ (`ph-lang`), tiến độ (`ph-progress`), phạm vi ôn (`ph-scope`) lưu trong `localStorage` của trình duyệt — chỉ trên máy đang dùng.
- Kí hiệu SGK KNTT: nguyên lí I viết `ΔU = A + Q`. Số thập phân tiếng Việt dùng dấu phẩy.
- Mục có `"added": true` (thuật ngữ) hoặc `"drafted": true` (bài học) là do nhóm bổ sung, đang chờ giáo viên thẩm định.
