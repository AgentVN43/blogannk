---
sidebar_position: 6
slug: /education/age-ai/foundation/study-notes
id: age-ai-foundation-study-notes
title: Study Notes
---

# 📋 Study Notes — Foundation
### Tóm tắt nhanh · Ôn tập · Tra cứu khi cần

> **Dùng tài liệu này như thế nào?**
> Đây không phải tài liệu học lần đầu — mà là tờ giấy bạn giở ra trước buổi họp, trước khi review AI output, hoặc khi cần nhớ lại một khái niệm quan trọng. Mỗi module được tóm tắt trong 1 trang.

---

## 🗺️ Bản đồ toàn chương trình

```
M0 Mental Model     →    M1 Systems Thinking    →    M2 Logic & Data    →    M3 AI Literacy    →    M4 Simulation
Não người hay sai        Nhìn toàn hệ thống           Flow & Edge case        AI hoạt động thế nào     Thực chiến
(0.5 ngày)               (1 ngày)                      (1 ngày)                (1 ngày)                 (0.5 ngày)
```

**Mục tiêu chung của cả 4 module:** Dùng AI để xây dựng hệ thống — có kiểm soát, không bị AI dẫn dắt.

---

---

## Module 0 — Mental Model
### Não người hay sai như thế nào?

---

### 3 Cognitive Bias cần nhớ

| Bias | Nghĩa đơn giản | Dấu hiệu nhận ra |
|------|---------------|-----------------|
| **Confirmation Bias** | Tìm bằng chứng xác nhận điều đã tin, bỏ qua bằng chứng ngược lại | "AI nói đúng ý mình rồi, approve thôi" |
| **Automation Bias** | Tin quá mức vào hệ thống tự động dù có dấu hiệu sai | "AI generate rồi, chắc ổn" |
| **Anchoring Bias** | Bị phụ thuộc vào con số/thông tin đầu tiên nhận được | "AI estimate 2 tuần, mình làm quanh con số đó" |

> 💡 **Nhớ nhanh:** Confirmation = tin điều mình muốn tin. Automation = tin máy hơn tin mắt. Anchoring = bị neo vào con số đầu tiên.

---

### 2 Tư duy cần áp dụng

**First Principles Thinking**
Trước khi hỏi AI → tự hỏi: *"Vấn đề thực sự của mình là gì?"*
Không: *"AI sẽ giải quyết cái này thế nào?"*

**Tư duy câu hỏi**
Người dùng AI giỏi = người hỏi đúng, không phải người hỏi nhiều.
Câu hỏi tốt = không có giả định ngầm, không dẫn dắt AI theo hướng mình muốn.

---

### Checklist M0 — Trước khi dùng AI output

- [ ] Mình có đang tìm cớ để đồng ý với output này không? *(Confirmation bias?)*
- [ ] Mình có đang tin vì "AI nói" thay vì vì "output này đúng"? *(Automation bias?)*
- [ ] Con số/giải pháp AI đưa ra có đang làm mình suy nghĩ quanh nó không? *(Anchoring bias?)*

---

---

## Module 1 — Systems Thinking & Problem Framing
### Nhìn thấy toàn bộ hệ thống trước khi giải quyết bất kỳ phần nào

---

### 3 Khái niệm nền tảng

**Input → Process → Output**
```
Mọi hệ thống đều có thể mô tả theo 3 thành phần này.
Khi nhờ AI xây 1 phần → phải biết input đến từ đâu, output đi đến đâu.
```

**Feedback Loop** — Output quay lại ảnh hưởng Input
```
Ví dụ: Gợi ý sản phẩm → user click → hành vi đó thay đổi gợi ý lần sau
AI không tự nhìn thấy feedback loop → bạn phải chỉ cho nó.
```

**Boundary** — Ranh giới của hệ thống
```
Trong boundary: bạn kiểm soát được
Ngoài boundary: bạn không kiểm soát được
AI hay tự định nghĩa boundary → cần xác định rõ trước khi giao việc cho AI.
```

---

### Symptom vs Root Cause

| | Symptom | Root Cause |
|--|---------|------------|
| **Là gì?** | Thứ bạn nhìn thấy / cảm nhận được | Lý do thực sự gây ra symptom |
| **Ví dụ** | "App chậm" | "Requirement thiếu thông tin về scale dẫn đến thiết kế DB sai" |
| **Nếu giải quyết sai** | Fix xong, vấn đề quay lại | — |

> ⚠️ **AI rất dễ bị dẫn dắt bởi symptom.** Nếu bạn mô tả symptom → AI đề xuất giải pháp cho symptom. Tìm root cause trước, hỏi AI sau.

---

### Công cụ tìm Root Cause: 5 Whys

Hỏi "Tại sao?" liên tục ít nhất 5 lần.

```
Vấn đề → Tại sao? → Tại sao? → Tại sao? → Tại sao? → Tại sao? → Root cause
```

Dừng lại khi câu trả lời là thứ bạn có thể thay đổi được.

---

### Cấu trúc Problem Statement đúng

> *"[Đối tượng] đang gặp khó khăn với [vấn đề cụ thể] dẫn đến [hậu quả đo lường được]."*

❌ Sai: *"Cần xây hệ thống báo cáo tự động"* → đây là giải pháp
✅ Đúng: *"Nhân viên kế toán mất 3 giờ/tuần tổng hợp báo cáo thủ công, dẫn đến trễ deadline và tỷ lệ lỗi 12%"*

**3 tiêu chí của problem statement tốt:**
1. Mô tả vấn đề — không chứa giải pháp
2. Cụ thể và đo lường được
3. Từ góc nhìn của người bị ảnh hưởng

---

### Checklist M1 — Trước khi giao việc cho AI

- [ ] Mình đã xác định Input–Process–Output của hệ thống chưa?
- [ ] Có feedback loop nào AI cần biết không?
- [ ] Boundary của hệ thống này là gì — cái gì trong, cái gì ngoài?
- [ ] Đây là symptom hay root cause mình đang giải quyết?
- [ ] Problem statement của mình có chứa giải pháp không?

---

---

## Module 2 — Logic, Flow & Data Thinking
### Tư duy chính xác về luồng xử lý và dữ liệu

---

### Happy Path vs Edge Case

**Happy path** = mọi thứ diễn ra bình thường → AI tạo tốt
**Edge case** = tình huống ngoài rìa, không phổ biến nhưng hoàn toàn xảy ra → AI hay bỏ sót

> 📌 Một flow có 5 bước có thể có 20–30 edge case. AI thường cover 30–40% nếu không được yêu cầu cụ thể.

---

### 4 Loại Edge Case cần kiểm tra mọi lúc

| Loại | Câu hỏi cần hỏi | Ví dụ |
|------|----------------|-------|
| **Boundary values** | Chuyện gì xảy ra ở giới hạn? | Số lượng âm, số tiền = 0, ký tự vượt giới hạn |
| **Null/Empty** | Chuyện gì xảy ra khi không có gì? | Field bỏ trống, danh sách rỗng, kết quả tìm kiếm = 0 |
| **Unexpected input** | Chuyện gì xảy ra khi input sai định dạng? | Ký tự đặc biệt, ngôn ngữ khác, khoảng trắng thừa |
| **Permission/Access** | Chuyện gì xảy ra khi không có quyền? | Truy cập tài nguyên bị giới hạn, quyền thay đổi giữa chừng |

---

### 4 Vấn đề Data Quality phổ biến

| Vấn đề | Là gì? | Hệ quả khi cho AI xử lý |
|--------|--------|--------------------------|
| **Missing data** | Record thiếu thông tin | AI phân tích 70%, báo cáo như thể 100% |
| **Inconsistent format** | Cùng thông tin, lưu nhiều dạng khác nhau | AI đọc sai hoặc tính trùng |
| **Stale data** | Dữ liệu đúng lúc nhập, lỗi thời từ đó | Quyết định dựa trên thực tế không còn đúng |
| **Biased sample** | Dữ liệu không đại diện cho toàn bộ thực tế | Kết quả đúng với mẫu, sai với thực tế |

---

### 5 Câu hỏi hỏi về data trước khi cho AI xử lý

1. Data này đến từ đâu và được thu thập như thế nào?
2. Bao nhiêu % record có đủ thông tin cần thiết?
3. Data được cập nhật lần cuối khi nào?
4. Có record nào bị loại khỏi dataset không? Tại sao?
5. Định nghĩa các cột/trường có rõ ràng và nhất quán không?

---

### Checklist M2 — Trước khi approve AI-generated flow

- [ ] Flow này có đang chỉ mô tả happy path không?
- [ ] Mình đã kiểm tra 4 loại edge case chưa?
- [ ] Data đầu vào của flow này có vấn đề quality không?
- [ ] Nếu input = null/rỗng, hệ thống xử lý thế nào?
- [ ] Nếu user cố tình nhập sai, hệ thống xử lý thế nào?

---

---

## Module 3 — AI Literacy
### AI thực sự hoạt động thế nào

---

### AI là gì — 1 câu

> AI nhận diện pattern từ dữ liệu đã học và tái tạo pattern đó theo ngữ cảnh của câu hỏi — không phải "hiểu" theo nghĩa con người hiểu.

**Hệ quả:** AI giỏi những gì có nhiều pattern tương tự. AI sẽ sai hoặc bịa với những gì ít/không có trong dữ liệu học, hoặc cần hiểu sâu về context riêng của bạn.

---

### 4 Cách AI hay sai

| Cách sai | Định nghĩa | Nhận ra bằng cách nào |
|----------|-----------|----------------------|
| **Hallucination** | Bịa thông tin nhưng trình bày tự tin như thật | Số liệu cụ thể, tên, trích dẫn pháp lý → luôn verify |
| **Prompt sensitivity** | Hỏi khác nhau → kết quả khác nhau, đôi khi mâu thuẫn | Thử hỏi cùng vấn đề theo 2 hướng, so sánh kết quả |
| **Context collapse** | "Quên" thông tin khi conversation quá dài | AI đề xuất mâu thuẫn với constraint bạn đã nêu trước đó |
| **Out-of-date knowledge** | Không biết thông tin sau thời điểm được train | Pháp luật, chính sách, số liệu thị trường mới nhất |

> ⚠️ **Quan trọng nhất:** Sự tự tin trong câu trả lời của AI KHÔNG liên quan đến độ chính xác. AI không biết mình sai.

---

### Framework: Verify → Challenge → Decide

```
┌─────────────────────────────────────────────────────────────┐
│  VERIFY                                                     │
│  Kiểm tra độc lập: số liệu, tên, logic nghiệp vụ, pháp lý  │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  CHALLENGE                                                  │
│  Hỏi AI: "Output này có vấn đề gì không?"                  │
│  Đổi cách hỏi, xem output có thay đổi không                │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  DECIDE                                                     │
│  Bạn — không phải AI — đưa ra quyết định cuối cùng         │
│  "Tôi có thể giải thích tại sao dùng output này không?"    │
└─────────────────────────────────────────────────────────────┘
```

---

### 4 Nguyên tắc prompt tốt

| Nguyên tắc | Sai | Đúng |
|-----------|-----|------|
| **Cụ thể** | "Viết email cho khách hàng" | "Viết email xin lỗi trễ giao hàng 3 ngày, khách hàng premium, đề xuất voucher 10%" |
| **Cung cấp context** | Hỏi thẳng | Mô tả bối cảnh, đối tượng, ràng buộc trước |
| **Yêu cầu AI tự giới hạn** | Không nói gì | Thêm: "Nếu không chắc điểm nào, hãy nói rõ" |
| **Iterate** | Dùng output đầu tiên | Hỏi tiếp, yêu cầu cải thiện phần cụ thể |

---

### Những thứ LUÔN cần verify — không bao giờ tin thẳng từ AI

- Số liệu cụ thể (tỷ lệ %, con số thị trường, benchmark)
- Tên người, tên tổ chức, tên sản phẩm
- Điều khoản pháp lý, quy định
- Logic nghiệp vụ quan trọng (tính tiền, phân quyền, workflow phê duyệt)
- Thông tin có tính thời sự (chính sách, luật mới, số liệu mới nhất)

---

### Checklist M3 — Khi nhận AI output

- [ ] Output này có chứa số liệu/tên cụ thể nào cần verify không?
- [ ] Mình có đang bị automation bias — tin vì "AI nói" không?
- [ ] Mình đã thử challenge AI về output này chưa?
- [ ] Mình có thể giải thích tại sao dùng output này không?
- [ ] Quyết định cuối cùng là của mình, không phải AI?

---

---

## Module 4 — AI Simulation
### Thực chiến phản biện AI

---

### Mục tiêu duy nhất

> Xây dựng phản xạ: **kiểm tra trước, dùng sau** — thay vì dùng trước, phát hiện lỗi sau.

---

### 3 Tiêu chí đánh giá output tốt

```
Phát hiện lỗi (40%)     →   Tìm được lỗi gì trong output?
Lý giải (40%)           →   Tại sao đây là lỗi? Thuộc loại nào?
Đề xuất (20%)           →   Sửa thế nào hoặc prompt lại thế nào?
```

> 📌 Tìm ít lỗi nhưng giải thích được > Tìm nhiều lỗi nhưng không giải thích được.

---

### Câu hỏi tự kiểm tra sau khi review AI output

1. Tôi tìm được bao nhiêu vấn đề?
2. Tôi giải thích được tại sao đây là vấn đề không?
3. Vấn đề này thuộc loại nào: hallucination / edge case bị bỏ sót / logic sai / data assumption sai?
4. Tôi biết phải làm gì tiếp theo không?

---

---

## 🔑 One-pager: Những thứ quan trọng nhất của cả Tầng 1

### 5 câu hỏi hỏi trước khi dùng BẤT KỲ AI output nào

> 1. Output này có gì cần verify độc lập không?
> 2. Mình đã challenge AI về output này chưa?
> 3. AI có đang bỏ qua edge case quan trọng nào không?
> 4. Root cause thực sự là gì — hay AI đang giải quyết symptom?
> 5. Mình có thể giải thích tại sao dùng output này không?

---

### 5 dấu hiệu cần dừng lại và kiểm tra kỹ hơn

> 1. AI trả lời rất tự tin, rất trôi chảy, rất đầy đủ
> 2. Output của AI khớp chính xác với những gì bạn muốn nghe
> 3. Output chứa số liệu cụ thể, tên, hoặc trích dẫn pháp lý
> 4. Output không đề cập đến bất kỳ rủi ro hoặc edge case nào
> 5. Bạn đang chuẩn bị gửi AI output thẳng cho người khác mà không đọc lại

---

### Thuật ngữ tra cứu nhanh

| Thuật ngữ | Nghĩa ngắn gọn |
|-----------|---------------|
| **Cognitive bias** | Lỗi tư duy có hệ thống của não người |
| **Confirmation bias** | Tin điều mình muốn tin, bỏ qua điều ngược lại |
| **Automation bias** | Tin máy hơn tin phán xét của mình |
| **Anchoring bias** | Bị phụ thuộc vào thông tin đầu tiên nhận được |
| **First principles** | Suy nghĩ từ nền tảng gốc, không copy solution của người khác |
| **System** | Tập hợp thành phần kết nối nhau, cùng tạo ra một kết quả |
| **Feedback loop** | Output của hệ thống quay lại ảnh hưởng input |
| **Boundary** | Ranh giới phân định cái gì trong / ngoài hệ thống |
| **Symptom** | Thứ bạn nhìn thấy — hệ quả của vấn đề thực sự |
| **Root cause** | Lý do thực sự gây ra symptom |
| **Happy path** | Kịch bản mọi thứ diễn ra bình thường |
| **Edge case** | Tình huống ngoài rìa, không phổ biến nhưng hoàn toàn xảy ra |
| **Missing data** | Record thiếu thông tin |
| **Stale data** | Dữ liệu đúng lúc nhập, lỗi thời từ đó đến nay |
| **Hallucination** | AI bịa thông tin nhưng trình bày tự tin như thật |
| **Prompt sensitivity** | AI cho kết quả khác nhau khi cùng vấn đề nhưng hỏi khác nhau |
| **Context collapse** | AI "quên" thông tin khi conversation quá dài |
| **Verify–Challenge–Decide** | Framework 3 bước kiểm soát AI output trước khi dùng |

---

*Study Notes — Foundation · Phiên bản 1.0*
