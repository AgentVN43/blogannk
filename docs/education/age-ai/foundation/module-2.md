---
sidebar_position: 3
slug: /education/age-ai/foundation/module-2
id: age-ai-foundation
title: Module 2
---
# Module 2 — Logic, Flow & Data Thinking
## Xây dựng tư duy chính xác về luồng xử lý và dữ liệu

**Thời lượng:** 1 ngày (chiều ngày 2 + sáng ngày 3)
**Bloom target:** Ghi nhớ → Hiểu → Vận dụng

---

### Tại sao cần học module này?

AI rất giỏi tạo ra flow và xử lý dữ liệu trông có vẻ đúng. Vấn đề là "trông có vẻ đúng" và "thực sự đúng" là hai thứ khác nhau.

Module này trang bị cho bạn khả năng đọc một flow, phát hiện lỗi logic, và đặt câu hỏi về data — ngay cả khi bạn không phải người viết ra nó, và kể cả khi người viết ra nó là AI.

---

### Phần 1 — Flow & Edge Case Thinking

#### Flow là gì?

**Flow** (luồng xử lý) là chuỗi các bước xảy ra theo thứ tự để hoàn thành một nhiệm vụ trong hệ thống.

Ví dụ: Flow đặt hàng online gồm: chọn sản phẩm → thêm vào giỏ → điền địa chỉ → chọn phương thức thanh toán → xác nhận đơn → nhận email xác nhận.

Khi AI generate một flow, nó thường vẽ đúng cho **happy path** — tức là kịch bản mọi thứ diễn ra bình thường. Điều AI hay bỏ qua là những gì xảy ra khi mọi thứ không bình thường.

---

#### Happy Path vs Edge Case

**Happy path** là luồng lý tưởng khi mọi thứ diễn ra đúng như kế hoạch. Đây là thứ AI tạo ra tốt nhất.

**Edge case** là những tình huống ngoài rìa — không phổ biến, nhưng hoàn toàn có thể xảy ra, và nếu hệ thống không xử lý được sẽ gây lỗi, mất dữ liệu, hoặc trải nghiệm tệ cho người dùng.

Ví dụ: Flow đặt hàng có happy path rõ ràng. Nhưng edge case là:
- User đặt hàng rồi đóng trình duyệt giữa chừng — đơn hàng ở trạng thái nào?
- User nhập số lượng âm (ví dụ: -1 sản phẩm) — hệ thống phản ứng thế nào?
- Sản phẩm hết hàng sau khi user đã thêm vào giỏ nhưng chưa thanh toán — ai thông báo và khi nào?
- User dùng thẻ tín dụng hết hạn — flow dừng ở đâu và thông báo gì?

Nguyên tắc quan trọng: **Số lượng edge case luôn nhiều hơn bạn nghĩ.** Một flow có 5 bước có thể có 20–30 edge case. AI thường chỉ cover 30–40% trong số đó nếu không được yêu cầu cụ thể.

---

#### Bốn loại edge case cần kiểm tra mọi lúc

**1. Boundary values (Giá trị biên)**
Những gì xảy ra ở giới hạn của hệ thống? Ví dụ: số lượng tối đa, số tiền tối thiểu, độ dài ký tự giới hạn.

**2. Null/Empty case (Trường hợp rỗng)**
Điều gì xảy ra khi input không có gì? User không điền field bắt buộc, danh sách trống, kết quả tìm kiếm không có gì.

**3. Unexpected input (Input không mong đợi)**
Điều gì xảy ra khi user nhập thứ hệ thống không lường trước? Ký tự đặc biệt, ngôn ngữ khác, định dạng sai.

**4. Permission/Access edge case (Phân quyền)**
Điều gì xảy ra khi người dùng cố truy cập thứ họ không có quyền? Hoặc khi quyền của họ thay đổi giữa chừng một tác vụ?

---

### Phần 2 — Data Thinking

#### Dữ liệu không tự động đúng

Một trong những hiểu lầm phổ biến nhất khi làm việc với AI: "AI đọc data nên kết quả phải đúng."

Sự thật là: kết quả của AI chỉ đúng khi data đầu vào đúng, đầy đủ, và phù hợp. Thuật ngữ trong ngành là **"Garbage in, garbage out"** — đưa dữ liệu rác vào, nhận kết quả rác ra.

---

#### Bốn vấn đề data quality phổ biến nhất

**1. Missing data (Dữ liệu thiếu)**
Không phải tất cả record đều có đủ thông tin. Ví dụ: 30% đơn hàng không có số điện thoại khách hàng. AI sẽ xử lý 70% đơn hàng còn lại và báo cáo kết quả — nhưng 30% kia ở đâu?

**2. Inconsistent format (Định dạng không nhất quán)**
Cùng một loại thông tin nhưng được lưu theo nhiều cách khác nhau. Ví dụ: ngày sinh được lưu vừa dạng "01/01/1990" vừa dạng "1990-01-01" vừa dạng "January 1, 1990" trong cùng một bảng.

**3. Stale data (Dữ liệu lỗi thời)**
Dữ liệu đúng vào thời điểm nhập, nhưng đã thay đổi từ đó đến nay. Ví dụ: địa chỉ khách hàng từ 3 năm trước, giá sản phẩm chưa được cập nhật, trạng thái nhân viên đã nghỉ việc nhưng còn trong hệ thống.

**4. Biased sample (Mẫu dữ liệu lệch)**
Dữ liệu bạn có không đại diện cho toàn bộ thực tế. Ví dụ: bạn chỉ có dữ liệu từ khách hàng ở TP.HCM và Hà Nội, nhưng dùng data đó để ra quyết định cho toàn quốc.

---

#### Câu hỏi cần hỏi về mọi tập dữ liệu trước khi dùng AI phân tích

Trước khi đưa data cho AI xử lý, hãy tự hỏi:
- Data này đến từ đâu và được thu thập như thế nào?
- Có bao nhiêu % record có đủ thông tin cần thiết?
- Data này được cập nhật lần cuối khi nào?
- Có trường hợp nào bị loại khỏi dataset này không? Tại sao?
- Định nghĩa của các cột/trường dữ liệu có rõ ràng và nhất quán không?

Nếu bạn không biết câu trả lời cho những câu hỏi này, kết quả AI đưa ra không thể được dùng để ra quyết định quan trọng.

---

### Bài tập thực hành M2

**Bài tập 1 — Tìm edge case**

Cho user story sau: "Là nhân viên HR, tôi muốn hệ thống tự động gửi email nhắc nhở khi hợp đồng nhân viên sắp hết hạn trong 30 ngày."

Liệt kê tối thiểu 8 edge case có thể xảy ra với tính năng này.

**Bài tập 2 — Đọc flow và tìm lỗi**

Cho flow sau của tính năng "Đặt lại mật khẩu":

> Bước 1: User nhập email → Bước 2: Hệ thống gửi link reset → Bước 3: User click link → Bước 4: User nhập mật khẩu mới → Bước 5: Hệ thống cập nhật mật khẩu → Bước 6: User đăng nhập với mật khẩu mới.

Tìm tối thiểu 5 edge case và lỗi logic trong flow này. (Gợi ý: nghĩ về link hết hạn, email không tồn tại, user click link nhiều lần...)

**Bài tập 3 — Data quality**

Cho bảng dữ liệu sau (mô tả, không cần thực tế):

| ID | Tên KH | Ngày sinh | Điện thoại | Địa chỉ | Giá trị đơn hàng |
|----|--------|-----------|------------|---------|-----------------|
| 001 | Nguyễn Văn A | 01/01/1985 | 0901234567 | HCM | 500,000 |
| 002 | Trần Thị B | 1990-05-15 | null | HN | -200,000 |
| 003 | Lê C | January 3, 1978 | 84901111222 | null | 1,200,000 |
| 004 | null | null | 0912345678 | HCM | 800,000 |

Liệt kê tất cả vấn đề data quality bạn thấy và ảnh hưởng của chúng nếu dùng dataset này để AI phân tích hành vi khách hàng.

---

### Quiz kiểm tra M2

**Câu 1 — Ghi nhớ**
Định nghĩa: Happy path, Edge case, Boundary value, Missing data, Stale data.

**Câu 2 — Hiểu**
Tại sao AI thường tốt ở happy path nhưng hay bỏ sót edge case? Giải thích bằng cách bạn hiểu AI hoạt động.

**Câu 3 — Vận dụng (Scenario)**
> *"Team nhờ AI generate flow cho tính năng chuyển tiền giữa các tài khoản trong app ngân hàng. AI đưa ra flow 6 bước, trông rất hoàn chỉnh. PM approve và chuyển cho dev."*
>
> Trước khi approve, bạn sẽ kiểm tra những edge case nào? Liệt kê tối thiểu 10 trường hợp cụ thể cho tính năng chuyển tiền.

---