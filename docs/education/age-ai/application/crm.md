---
sidebar_position: 1
slug: /education/age-ai/application/crm
id: age-ai-application-crm
title: Xây dựng hệ thống CRM
---
# Tầng 2 — Application
### Hệ thống CRM / Quản lý Khách hàng · Áp dụng thực chiến theo Role

---

> **Cách dùng tài liệu này**
>
> Mỗi người nhảy thẳng đến phần của mình bằng link bên dưới.
> Đọc **Input nhận được** → suy nghĩ bằng **Checklist Tầng 1** → dùng **Prompt mẫu** để làm việc với AI → tạo ra **Output bàn giao** cho role tiếp theo.
>
> Mọi thứ liên kết với nhau theo đúng luồng thực tế của một dự án.

---

## 🗺️ Luồng dự án & điều hướng nhanh

```
Business Owner  →  PO  →  BA/PM  →  DEV  →  QC
    [Client]      [Client]  [Service] [Service] [Service]
```

| Role | Nhảy đến phần | Nhận Input từ | Bàn giao Output cho |
|------|--------------|---------------|---------------------|
| 🏢 Business Owner | [→ Phần 1](#1-business-owner) | — (khởi đầu) | PO |
| 📋 PO | [→ Phần 2](#2-po--product-owner) | Business Owner | BA/PM |
| 🔍 BA/PM | [→ Phần 3](#3-bapm) | PO | DEV |
| 💻 DEV | [→ Phần 4](#4-dev) | BA/PM | QC |
| ✅ QC | [→ Phần 5](#5-qc) | DEV | Business Owner / PO |

---

> **Bối cảnh dự án xuyên suốt:**
> Một công ty dịch vụ B2B muốn xây dựng hệ thống CRM nội bộ để quản lý khách hàng, lịch sử liên hệ, và cơ hội bán hàng (sales pipeline). Hiện tại team đang dùng Excel và ghi chú rời rạc — dữ liệu không tập trung, dễ thất lạc, không ai nhìn được toàn cảnh.

---
---

## 1. Business Owner

> **Bạn là ai trong dự án này?**
> Bạn là người thuê đội ngũ kỹ thuật xây dựng hệ thống. Bạn biết rõ vấn đề kinh doanh — nhưng không cần biết kỹ thuật. Nhiệm vụ của bạn là diễn đạt đúng và đủ vấn đề đó để PO có thể làm rõ tiếp.

---

### 📥 Input của bạn

Không có input từ role khác. Bạn là người khởi đầu chuỗi.

Input của bạn đến từ thực tế vận hành:
- Những vấn đề bạn quan sát thấy hàng ngày
- Mục tiêu kinh doanh cần đạt
- Ngân sách và thời gian kỳ vọng

---

### 🧠 Checklist tư duy Tầng 1 — áp dụng cho Business Owner

Trước khi nói chuyện với PO hoặc nhờ AI hỗ trợ, hãy tự kiểm tra:

**Từ M0 — Mental Model:**
- [ ] Mình có đang mô tả vấn đề thực sự, hay chỉ đang mô tả giải pháp mình đã nghĩ sẵn trong đầu?
- [ ] Mình có đang bị anchoring vào một con số ngân sách hoặc timeline cụ thể không — và điều đó có đang ảnh hưởng đến cách mình định nghĩa vấn đề không?

**Từ M1 — Systems Thinking:**
- [ ] Vấn đề mình muốn giải quyết là symptom hay root cause?
  - *Ví dụ: "Sales team không cập nhật thông tin khách hàng" là symptom. Root cause có thể là "không có công cụ tập trung, mỗi người lưu một nơi".*
- [ ] Hệ thống mới này sẽ kết nối với những quy trình nào đang có? Boundary của nó là gì — cái gì nằm trong scope, cái gì không?
- [ ] Ai là người bị ảnh hưởng nhiều nhất nếu vấn đề không được giải quyết?

**Từ M3 — AI Literacy:**
- [ ] Nếu dùng AI để phác thảo yêu cầu ban đầu, mình cần verify những gì trong output đó?
- [ ] Mình có đang để AI định nghĩa vấn đề thay cho mình không?

---

### 💬 Prompt mẫu — Business Owner làm việc với AI

**Mục đích:** Dùng AI để giúp bạn diễn đạt vấn đề rõ hơn và chuẩn bị Brief cho PO.

---

**Prompt 1 — Chuyển vấn đề thực tế thành Problem Statement**

```
Tôi là chủ doanh nghiệp dịch vụ B2B, đang gặp vấn đề sau:

[Mô tả vấn đề bằng lời của bạn — không cần chuẩn, cứ kể thực tế]

Ví dụ: "Sales team của tôi có 8 người, mỗi người lưu thông tin khách
hàng theo cách riêng — người dùng Excel, người ghi note trên điện thoại.
Khi có khách hàng cũ gọi lại, không ai biết lịch sử trao đổi trước đó
là gì. Tôi mất deal vì điều này ít nhất 2 lần trong tháng vừa rồi."

Hãy giúp tôi:
1. Viết lại vấn đề này thành Problem Statement đúng chuẩn
   (mô tả vấn đề, không chứa giải pháp, có thể đo lường được)
2. Đặt 3 câu hỏi để làm rõ những gì tôi chưa nói rõ
3. Chỉ ra: đây là symptom hay root cause? Nếu là symptom,
   root cause có thể là gì?

Lưu ý: Chưa đề xuất giải pháp kỹ thuật nào ở bước này.
```

---

**Prompt 2 — Xác định mục tiêu kinh doanh và tiêu chí thành công**

```
Dựa trên Problem Statement vừa xác định, hãy giúp tôi định nghĩa:

1. Mục tiêu kinh doanh cụ thể: Sau khi có hệ thống mới,
   điều gì phải thay đổi đo lường được?
   (Ví dụ: thời gian tìm thông tin khách hàng giảm từ X phút xuống Y phút)

2. Tiêu chí nghiệm thu tối thiểu (minimum acceptance criteria):
   Hệ thống cần làm được ít nhất những gì để tôi chấp nhận bàn giao?

3. Những gì KHÔNG thuộc scope của lần này
   (để tránh phình to dự án)

Context của tôi:
- Quy mô team: [số người dùng hệ thống]
- Ngân sách kỳ vọng: [nếu có]
- Timeline kỳ vọng: [nếu có]
- Hệ thống/công cụ đang dùng: [Excel, email, phần mềm gì...]
```

---

**Prompt 3 — Kiểm tra lại Brief trước khi đưa cho PO**

```
Tôi vừa soạn Brief sau đây để đưa cho Product Owner:

[Dán Brief bạn đã soạn vào đây]

Hãy review Brief này và chỉ ra:
1. Những chỗ còn mơ hồ — PO có thể hiểu nhầm theo nhiều cách
2. Những assumption tôi đang mặc định nhưng chưa viết ra
3. Những câu hỏi mà PO chắc chắn sẽ hỏi lại — mà tôi nên
   trả lời sẵn trong Brief

Đừng viết lại Brief cho tôi. Chỉ cần liệt kê những điểm cần
Business Owner làm rõ thêm.
```

---

### 📤 Output bàn giao cho PO

Sau khi hoàn thành, bạn bàn giao cho PO một **Business Brief** gồm:

```markdown
## Business Brief — Dự án CRM

### 1. Problem Statement
[Vấn đề cụ thể, đo lường được, từ góc nhìn người bị ảnh hưởng]

### 2. Đối tượng sử dụng hệ thống
[Ai sẽ dùng hệ thống này hàng ngày? Bao nhiêu người?]

### 3. Mục tiêu kinh doanh
[Sau khi có hệ thống, điều gì phải thay đổi đo lường được?]

### 4. Tiêu chí nghiệm thu tối thiểu
[Hệ thống cần làm được gì ở mức tối thiểu để được chấp nhận?]

### 5. Ngoài scope lần này
[Những gì KHÔNG làm trong giai đoạn này]

### 6. Ràng buộc
- Ngân sách: ...
- Timeline: ...
- Hệ thống cần tích hợp với: ...

### 7. Câu hỏi Business Owner cần PO làm rõ
[Những điểm bạn chưa chắc, muốn PO xác nhận với từng phòng ban]
```

---
---

## 2. PO — Product Owner

> **Bạn là ai trong dự án này?**
> Bạn đại diện cho phía khách hàng, làm cầu nối giữa Business Owner và đội kỹ thuật. Bạn tiếp nhận Brief từ Business Owner, đi xuống từng phòng ban để làm rõ nhu cầu thực tế, rồi tổng hợp thành tài liệu đủ rõ để BA/PM làm việc tiếp.

---

### 📥 Input của bạn

**Nhận từ Business Owner:** Business Brief (xem template ở Phần 1 → Output)

Trước khi làm gì tiếp theo, hãy đọc Brief và tự hỏi:
- Có điểm nào mơ hồ không?
- Có assumption nào Business Owner viết như sự thật nhưng chưa được xác nhận không?
- Từng phòng ban sẽ có nhu cầu khác nhau như thế nào?

---

### 🧠 Checklist tư duy Tầng 1 — áp dụng cho PO

**Từ M0 — Mental Model:**
- [ ] Mình có đang bị confirmation bias — chỉ hỏi những câu mà mình đã biết câu trả lời không?
- [ ] Mình có đang assume rằng nhu cầu của phòng Sales = nhu cầu của cả công ty không?

**Từ M1 — Systems Thinking:**
- [ ] Hệ thống CRM này sẽ ảnh hưởng đến những quy trình nào đang có của từng phòng ban?
- [ ] Feedback loop nào sẽ xuất hiện? *(Ví dụ: Sales nhập data → Manager xem báo cáo → Manager điều chỉnh KPI → Sales thay đổi cách làm việc)*
- [ ] Boundary rõ ràng chưa? Những phòng ban nào nằm trong scope? Tích hợp với hệ thống nào đang có?

**Từ M1 — Problem Framing:**
- [ ] Nhu cầu mỗi phòng ban thu thập được — đây là symptom hay là nhu cầu thực sự?
  - *Ví dụ: "Tôi cần xem báo cáo realtime" có thể là symptom của "Tôi không tin data cũ vì nó hay sai"*
- [ ] Mình đã hỏi "Tại sao?" đủ lần chưa, hay mới chỉ hỏi "Cần gì?"

**Từ M2 — Data Thinking:**
- [ ] Dữ liệu khách hàng hiện tại đang ở đâu? Format ra sao? Ai sở hữu?
- [ ] Khi migrate data cũ vào hệ thống mới, rủi ro data quality là gì?

---

### 💬 Prompt mẫu — PO làm việc với AI

**Mục đích:** Dùng AI để chuẩn bị câu hỏi phỏng vấn phòng ban, phân tích nhu cầu, và tổng hợp thành Product Requirements.

---

**Prompt 1 — Chuẩn bị câu hỏi phỏng vấn từng phòng ban**

```
Tôi là PO đang thu thập nhu cầu cho hệ thống CRM nội bộ.

Business Brief tôi nhận được:
[Dán Business Brief từ Business Owner vào đây]

Tôi cần phỏng vấn 3 phòng ban: Sales, Marketing, và Ban Giám Đốc.

Với mỗi phòng ban, hãy tạo cho tôi:
1. Danh sách 5-7 câu hỏi để làm rõ nhu cầu thực tế
   (không phải hỏi "bạn muốn tính năng gì" — mà hỏi về
   vấn đề họ đang gặp, quy trình hiện tại, và điều gì
   tốn thời gian nhất)
2. 2-3 câu hỏi "tại sao" để đào sâu hơn khi họ trả lời

Lưu ý: Câu hỏi không được chứa giải pháp kỹ thuật.
Mục tiêu là hiểu vấn đề, không phải confirm giải pháp.
```

---

**Prompt 2 — Phân tích và tổng hợp nhu cầu từ nhiều phòng ban**

```
Tôi vừa phỏng vấn 3 phòng ban và ghi lại nhu cầu sau:

Sales team nói: [tóm tắt những gì Sales nói]
Marketing nói: [tóm tắt những gì Marketing nói]
Ban Giám Đốc nói: [tóm tắt những gì BGĐ nói]

Hãy giúp tôi:
1. Nhóm các nhu cầu theo chủ đề (đừng nhóm theo phòng ban)
2. Xác định những nhu cầu mâu thuẫn nhau giữa các phòng ban
3. Phân biệt: đây là nhu cầu thực sự (need) hay chỉ là
   cách họ muốn giải quyết (want)?
4. Đề xuất thứ tự ưu tiên — cái gì là must-have, cái gì
   là nice-to-have cho version đầu tiên

Chưa đề xuất giải pháp kỹ thuật cụ thể.
```

---

**Prompt 3 — Viết Product Requirements Document (PRD) cơ bản**

```
Dựa trên những nhu cầu đã phân tích, hãy giúp tôi viết
Product Requirements Document (PRD) cho hệ thống CRM.

Nhu cầu đã xác nhận:
[Dán kết quả phân tích từ Prompt 2]

PRD cần có cấu trúc:
1. Mục tiêu sản phẩm (liên kết với mục tiêu kinh doanh)
2. Đối tượng người dùng và nhu cầu chính của từng nhóm
3. Danh sách tính năng theo thứ tự ưu tiên (Must / Should / Could)
4. Những gì KHÔNG thuộc scope
5. Câu hỏi mở — những điểm chưa được làm rõ cần confirm
   với Business Owner hoặc BA

Format: rõ ràng, không dùng thuật ngữ kỹ thuật,
người không có background IT vẫn đọc được.
```

---

**Prompt 4 — Verify PRD trước khi bàn giao BA**

```
Tôi vừa hoàn thành PRD sau đây:
[Dán PRD vào đây]

Hãy review với vai trò là một BA sẽ nhận tài liệu này:
1. Requirement nào còn mơ hồ — có thể hiểu theo nhiều cách?
2. Requirement nào thiếu tiêu chí chấp nhận
   (acceptance criteria) — không biết làm đến đâu là "xong"?
3. Có assumption nào đang được viết như sự thật nhưng
   chưa được Business Owner xác nhận chưa?
4. Edge case nào quan trọng chưa được đề cập?

Đừng viết lại PRD. Chỉ liệt kê điểm cần PO làm rõ thêm.
```

---

### 📤 Output bàn giao cho BA/PM

```markdown
## Product Requirements Document (PRD) — CRM v1.0

### 1. Mục tiêu sản phẩm
[Liên kết trực tiếp với mục tiêu kinh doanh từ Business Brief]

### 2. Người dùng & nhu cầu chính
| Nhóm người dùng | Nhu cầu chính | Vấn đề hiện tại |
|----------------|---------------|-----------------|
| Sales rep | ... | ... |
| Sales manager | ... | ... |
| Marketing | ... | ... |
| Ban Giám Đốc | ... | ... |

### 3. Tính năng theo thứ tự ưu tiên
#### Must-have (Version 1 bắt buộc có)
- ...

#### Should-have (Nên có nếu đủ thời gian)
- ...

#### Could-have (Tương lai)
- ...

### 4. Ngoài scope Version 1
- ...

### 5. Ràng buộc kỹ thuật đã biết
[Hệ thống cần tích hợp với gì, dữ liệu cũ cần migrate không...]

### 6. Câu hỏi mở — cần BA/PM làm rõ
[Những điểm PO chưa có câu trả lời, cần BA đào sâu hơn]

### 7. Tiêu chí nghiệm thu tổng thể
[Điều kiện để Business Owner chấp nhận bàn giao]
```

---
---

## 3. BA/PM

> **Bạn là ai trong dự án này?**
> Bạn nhận PRD từ PO và chuyển hóa nó thành tài liệu kỹ thuật đủ rõ để DEV có thể làm việc. Bạn là người đứng giữa — vừa phải hiểu business đủ để nói chuyện với PO, vừa phải hiểu kỹ thuật đủ để viết requirement mà DEV không phải đoán.

---

### 📥 Input của bạn

**Nhận từ PO:** PRD (xem template ở Phần 2 → Output)

Trước khi làm gì tiếp theo, đọc PRD và kiểm tra:
- Requirement nào còn mơ hồ?
- Acceptance criteria của từng tính năng đã rõ chưa?
- Phần "Câu hỏi mở" của PO — cái nào bạn cần hỏi lại PO, cái nào bạn tự quyết được?

---

### 🧠 Checklist tư duy Tầng 1 — áp dụng cho BA/PM

**Từ M0 — Mental Model:**
- [ ] Mình có đang assume rằng mình hiểu ý PO đúng không — hay cần xác nhận lại?
- [ ] Khi viết user story, mình có đang viết solution thay vì viết need không?

**Từ M1 — Problem Framing:**
- [ ] Mỗi user story có liên kết được với một nhu cầu thực tế trong PRD không?
- [ ] Acceptance criteria có thể đo lường được không — hay chỉ là mô tả cảm tính?

**Từ M2 — Logic & Edge Case:**
- [ ] Flow của từng tính năng đã bao gồm cả happy path lẫn edge case chưa?
- [ ] 4 loại edge case đã kiểm tra chưa: boundary values, null/empty, unexpected input, permission?
- [ ] Data: thông tin khách hàng cũ sẽ được nhập vào hệ thống mới thế nào? Format có nhất quán không?

**Từ M3 — AI Literacy:**
- [ ] Khi dùng AI để viết user story hoặc flow — AI có đang bỏ sót edge case không?
- [ ] Acceptance criteria AI đề xuất có đủ cụ thể để DEV và QC hiểu đúng không?

---

### 💬 Prompt mẫu — BA/PM làm việc với AI

**Mục đích:** Dùng AI để viết user story chuẩn, vẽ flow, xác định edge case, và tạo tài liệu kỹ thuật cho DEV.

---

**Prompt 1 — Viết User Story từ PRD**

```
Tôi là BA đang chuyển PRD thành User Story cho DEV.

Đây là tính năng cần viết user story:
Tên tính năng: [Ví dụ: Quản lý thông tin khách hàng]
Mô tả trong PRD: [Dán đoạn mô tả tính năng từ PRD]
Người dùng chính: [Ví dụ: Sales rep]

Hãy viết User Story theo format:
"Là [vai trò], tôi muốn [hành động], để [mục đích/lợi ích]."

Với mỗi user story, viết thêm:
- Acceptance Criteria (tiêu chí chấp nhận) — dùng format
  Given / When / Then
- Ít nhất 3 edge case cần xử lý

Sau khi viết xong, hãy tự review và chỉ ra:
- User story nào còn mơ hồ?
- Acceptance criteria nào chưa đo lường được?
- Edge case nào quan trọng mà bạn chưa đề cập?
```

---

**Prompt 2 — Vẽ flow và tìm edge case có chủ đích**

```
Tôi cần mô tả flow cho tính năng sau:

Tính năng: [Ví dụ: Thêm khách hàng mới vào CRM]
User story: [Dán user story vừa viết]
Người dùng: Sales rep

Hãy:
1. Vẽ flow dạng text (dùng mũi tên →) cho happy path
2. Liệt kê tất cả edge case theo 4 nhóm:
   - Boundary values: (ví dụ: tên khách hàng quá dài, email không hợp lệ)
   - Null/Empty: (ví dụ: bỏ trống field bắt buộc)
   - Unexpected input: (ví dụ: nhập ký tự đặc biệt, số điện thoại nước ngoài)
   - Permission: (ví dụ: sales rep thường vs sales manager có quyền khác nhau)
3. Với mỗi edge case, mô tả: hệ thống nên phản ứng thế nào?

Lưu ý: Đây là tính năng liên quan đến dữ liệu khách hàng —
hãy đặc biệt chú ý đến trường hợp trùng lặp khách hàng
và data validation.
```

---

**Prompt 3 — Viết tài liệu kỹ thuật bàn giao DEV**

```
Tôi cần tổng hợp tài liệu kỹ thuật cho DEV dựa trên:

User Stories đã xác nhận:
[Dán danh sách user story]

Flow và Edge case đã xác định:
[Dán kết quả từ Prompt 2]

Hãy tạo Technical Specification với cấu trúc:
1. Mô tả tính năng (1 đoạn, không dùng jargon kỹ thuật)
2. User story và acceptance criteria (đã xác nhận)
3. Flow chi tiết (happy path + error path)
4. Edge case và cách xử lý mong đợi
5. Business rules — các quy tắc nghiệp vụ cần tuân theo
   (ví dụ: "Một email chỉ được đăng ký 1 tài khoản")
6. Data requirements — những field nào là bắt buộc,
   format/validation rule của từng field
7. Câu hỏi mở — những gì BA chưa có câu trả lời,
   cần DEV confirm hoặc đề xuất giải pháp kỹ thuật

Format: rõ ràng, có thể dùng làm checklist khi DEV code
và QC test.
```

---

**Prompt 4 — Review Technical Spec trước khi bàn giao DEV**

```
Tôi vừa hoàn thành Technical Specification sau:
[Dán spec vào đây]

Hãy review với 2 góc nhìn:

Góc nhìn DEV:
- Requirement nào còn mơ hồ — có thể implement theo
  nhiều cách khác nhau mà không biết cách nào đúng?
- Business rule nào chưa được định nghĩa đủ rõ?
- Data requirement nào thiếu hoặc mâu thuẫn?

Góc nhìn QC:
- Acceptance criteria nào không thể test được vì
  không đủ cụ thể?
- Edge case nào quan trọng chưa được đề cập?
- Làm sao biết tính năng "xong" và đúng?

Đừng viết lại spec. Chỉ liệt kê những điểm cần BA làm rõ.
```

---

### 📤 Output bàn giao cho DEV

```markdown
## Technical Specification — [Tên tính năng]
### Phiên bản: | Ngày: | BA phụ trách:

---

### 1. Mô tả tính năng
[1-2 đoạn, ngôn ngữ đơn giản]

### 2. User Stories & Acceptance Criteria

#### US-001: [Tên user story]
**User story:** Là [vai trò], tôi muốn [hành động], để [mục đích].

**Acceptance Criteria:**
- Given [điều kiện ban đầu]
  When [hành động xảy ra]
  Then [kết quả mong đợi]
- Given...

---

### 3. Flow chi tiết

**Happy path:**
Bước 1 → Bước 2 → Bước 3 → ...

**Error path:**
[Mô tả những gì xảy ra khi có lỗi]

---

### 4. Edge case & cách xử lý

| Edge case | Hành vi mong đợi |
|-----------|-----------------|
| Email đã tồn tại trong hệ thống | Hiển thị thông báo lỗi, gợi ý tìm khách hàng cũ |
| Tên khách hàng để trống | Không cho submit, highlight field bắt buộc |
| ... | ... |

---

### 5. Business Rules
- BR-001: Một email chỉ được liên kết với 1 tài khoản khách hàng
- BR-002: ...

---

### 6. Data Requirements

| Field | Bắt buộc | Format/Validation | Ghi chú |
|-------|----------|-------------------|---------|
| Tên KH | Có | Text, tối đa 100 ký tự | |
| Email | Có | Email format hợp lệ | Unique |
| ... | | | |

---

### 7. Câu hỏi mở
[Những điểm DEV cần confirm hoặc đề xuất giải pháp]
```

---
---

## 4. DEV

> **Bạn là ai trong dự án này?**
> Bạn nhận Technical Specification từ BA/PM và build tính năng bằng code — có sự hỗ trợ của AI. Nhiệm vụ của bạn không chỉ là làm cho code chạy được, mà là làm đúng theo requirement, xử lý đủ edge case, và đảm bảo QC có thể test được.

---

### 📥 Input của bạn

**Nhận từ BA/PM:** Technical Specification (xem template ở Phần 3 → Output)

Trước khi code, đọc spec và kiểm tra:
- Acceptance criteria có đủ rõ để biết code đến đâu là "xong" không?
- Business rule nào ảnh hưởng đến cách thiết kế data/logic?
- Edge case nào trong spec cần xử lý đặc biệt?
- Câu hỏi mở trong spec — cái nào cần hỏi BA trước khi code, cái nào tự quyết được?

---

### 🧠 Checklist tư duy Tầng 1 — áp dụng cho DEV

**Từ M0 — Mental Model:**
- [ ] Mình có đang bị automation bias — AI generate code chạy được là merge luôn không?
- [ ] "Chạy được" ≠ "Đúng". Mình đã kiểm tra logic nghiệp vụ chưa, hay chỉ kiểm tra syntax?

**Từ M2 — Edge Case:**
- [ ] Code xử lý được null/empty input chưa?
- [ ] Code xử lý được boundary values chưa? (số âm, chuỗi quá dài, số quá lớn)
- [ ] Code xử lý được unexpected input chưa? (ký tự đặc biệt, XSS, SQL injection)
- [ ] Permission được kiểm soát đúng chưa? (người dùng thường không làm được việc của admin)

**Từ M3 — AI Literacy:**
- [ ] AI generate code theo pattern phổ biến — pattern đó có phù hợp với business rule cụ thể của dự án này không?
- [ ] AI có đang bỏ sót edge case quan trọng trong spec không?
- [ ] Mình có thể giải thích từng đoạn code AI generate không — hay chỉ copy vì nó "trông có vẻ đúng"?

---

### 💬 Prompt mẫu — DEV làm việc với AI

**Mục đích:** Dùng AI để generate code đúng requirement, xử lý edge case, và tự review trước khi bàn giao QC.

---

**Prompt 1 — Generate code từ Technical Spec**

```
Tôi là developer đang build tính năng cho hệ thống CRM.

Technical Specification:
[Dán toàn bộ spec của tính năng từ BA]

Tech stack: [Ví dụ: Node.js / Express / PostgreSQL / React]

Hãy generate code cho [tên tính năng cụ thể], bao gồm:
1. [Ví dụ: API endpoint để tạo khách hàng mới]
2. [Ví dụ: Validation logic theo Data Requirements trong spec]
3. [Ví dụ: Error handling cho các edge case đã liệt kê]

Yêu cầu bắt buộc:
- Implement đúng tất cả Business Rules trong spec
- Xử lý tất cả edge case đã liệt kê trong spec
- Trả về error message rõ ràng, có thể hiểu được
- Code có comment giải thích business logic

Sau khi generate, hãy tự review và chỉ ra:
- Edge case nào trong spec mà code chưa xử lý?
- Business rule nào có thể bị vi phạm?
- Điểm nào trong code cần tôi đặc biệt chú ý khi review?
```

---

**Prompt 2 — Review code AI generate trước khi commit**

```
Đây là code tôi vừa generate (hoặc viết):

[Dán code vào đây]

Đây là requirement gốc:
[Dán acceptance criteria và edge case từ spec]

Hãy review code này và chỉ ra:

1. Logic nghiệp vụ (Business logic):
   - Code có implement đúng từng acceptance criteria không?
   - Business rule nào bị bỏ sót hoặc implement sai?

2. Edge case:
   - Edge case nào trong spec chưa được xử lý?
   - Edge case nào quan trọng mà spec không đề cập nhưng
     cần xử lý?

3. Security cơ bản:
   - Input validation có đủ không?
   - Có lỗ hổng injection nào không?

4. Maintainability:
   - Đoạn code nào khó đọc / khó maintain sau này?

Đừng viết lại code cho tôi ở bước này.
Chỉ liệt kê những điểm cần sửa và giải thích tại sao.
```

---

**Prompt 3 — Generate unit test từ acceptance criteria**

```
Tôi cần viết unit test cho function sau:

[Dán function/code cần test]

Acceptance Criteria từ spec:
[Dán acceptance criteria]

Edge case đã xác định:
[Dán danh sách edge case]

Hãy generate unit test bao gồm:
1. Test cho mỗi acceptance criteria (happy path)
2. Test cho mỗi edge case trong danh sách
3. Test cho các trường hợp lỗi (error cases)

Với mỗi test, viết rõ:
- Tên test mô tả được mục đích
- Arrange (setup data)
- Act (gọi function)
- Assert (kiểm tra kết quả mong đợi)

Sau khi generate, chỉ ra: test case nào còn thiếu mà
QC có thể phát hiện ra?
```

---

**Prompt 4 — Chuẩn bị release notes cho QC**

```
Tôi vừa hoàn thành implementation cho:
Tính năng: [Tên tính năng]
Spec gốc: [Link hoặc dán spec]

Những thay đổi đã làm:
[Mô tả ngắn những gì đã implement]

Những điểm deviation (làm khác spec) nếu có:
[Liệt kê và giải thích lý do]

Câu hỏi mở từ spec và cách tôi xử lý:
[Liệt kê câu hỏi mở + quyết định đã đưa ra]

Hãy giúp tôi tạo Release Notes cho QC, bao gồm:
1. Tóm tắt những gì đã implement
2. Hướng dẫn test (test environment setup nếu cần)
3. Known limitations hoặc edge case chưa xử lý
4. Những điểm QC cần đặc biệt chú ý khi test
```

---

### 📤 Output bàn giao cho QC

```markdown
## Release Notes — [Tên tính năng]
### Version: | Build: | DEV phụ trách: | Ngày:

---

### 1. Những gì đã implement
[Danh sách tính năng/function đã build, liên kết với
user story tương ứng trong spec]

- US-001: ✅ Đã implement — [mô tả ngắn]
- US-002: ✅ Đã implement — [mô tả ngắn]
- US-003: ⚠️ Partial — [giải thích phần nào chưa xong]

---

### 2. Thay đổi so với Spec gốc (Deviations)
| Spec nói | Thực tế implement | Lý do |
|----------|------------------|-------|
| ... | ... | ... |

---

### 3. Câu hỏi mở trong Spec & Quyết định đã đưa ra
| Câu hỏi | Quyết định | Cần BA/PO confirm |
|---------|-----------|------------------|
| ... | ... | Có / Không |

---

### 4. Test environment
- URL/branch: ...
- Account test: ...
- Data setup cần thiết: ...

---

### 5. Những điểm QC cần đặc biệt chú ý
[Edge case quan trọng, business rule phức tạp,
phần code có logic đặc biệt]

---

### 6. Known issues / Limitations
[Những gì biết là chưa hoàn hảo, sẽ fix ở sprint sau]
```

---
---

## 5. QC

> **Bạn là ai trong dự án này?**
> Bạn là người nghiệm thu — đứng ở góc nhìn của người dùng cuối để đảm bảo hệ thống hoạt động đúng như requirement. Bạn không chỉ test những gì DEV nói đã làm — bạn test cả những gì spec yêu cầu nhưng có thể DEV bỏ sót.

---

### 📥 Input của bạn

**Nhận từ DEV:** Release Notes  
**Đối chiếu với:** Technical Specification từ BA/PM

> ⚠️ **Quan trọng:** Tài liệu gốc để test là **Technical Specification từ BA/PM** — không phải Release Notes của DEV. Release Notes cho bạn biết DEV đã làm gì. Spec cho bạn biết hệ thống phải làm gì. Hai tài liệu này có thể khác nhau — và chỗ khác nhau chính là nơi bạn cần test kỹ nhất.

---

### 🧠 Checklist tư duy Tầng 1 — áp dụng cho QC

**Từ M0 — Mental Model:**
- [ ] Mình có đang bị confirmation bias — chỉ test những case mình nghĩ sẽ pass không?
- [ ] Mình có đang tin Release Notes của DEV quá mức — automation bias?

**Từ M1 — Systems Thinking:**
- [ ] Tính năng này kết nối với tính năng nào khác trong hệ thống? Test tích hợp cần kiểm tra gì?
- [ ] Feedback loop: khi tính năng này thay đổi data, nó ảnh hưởng đến màn hình/báo cáo nào khác?

**Từ M2 — Edge Case:**
- [ ] Đã test đủ 4 loại edge case chưa: boundary, null/empty, unexpected input, permission?
- [ ] Đã test ở nhiều role khác nhau chưa? (Sales rep vs Manager vs Admin)
- [ ] Data từ test case có realistic không — hay chỉ dùng data "đẹp"?

**Từ M3 — AI Literacy:**
- [ ] Nếu dùng AI generate test case — AI có đang bỏ sót edge case quan trọng không?
- [ ] Test case AI generate có cover đúng acceptance criteria trong spec không?
- [ ] Mình đã verify test case AI generate bằng cách đọc spec gốc chưa?

---

### 💬 Prompt mẫu — QC làm việc với AI

**Mục đích:** Dùng AI để generate test case toàn diện, phát hiện gap, và viết báo cáo nghiệm thu.

---

**Prompt 1 — Generate test case từ Spec và Release Notes**

```
Tôi là QC đang test tính năng cho hệ thống CRM.

Technical Specification (nguồn chính):
[Dán spec từ BA/PM]

Release Notes từ DEV:
[Dán release notes]

Hãy generate test case theo cấu trúc:

Với mỗi Acceptance Criteria trong spec:
- Test case happy path
- Test case negative (input sai, điều kiện không thỏa mãn)

Với mỗi Edge case trong spec:
- Test case cụ thể cho edge case đó

Thêm test case cho:
- Phân quyền: test với từng role (Sales rep / Manager / Admin)
- Data validation: mỗi field bắt buộc
- Tích hợp: tính năng này ảnh hưởng đến màn hình/
  báo cáo nào khác?

Format mỗi test case:
- ID: TC-001
- Tên: [mô tả ngắn]
- Precondition: [điều kiện ban đầu]
- Steps: [các bước thực hiện]
- Expected result: [kết quả mong đợi]
- Linked to: [AC hoặc edge case nào trong spec]

Sau khi generate, chỉ ra:
- Test case nào cover chồng chéo nhau?
- Acceptance criteria nào trong spec chưa được cover?
- Edge case nào quan trọng mà cả spec lẫn release notes
  không đề cập nhưng bạn cho là cần test?
```

---

**Prompt 2 — So sánh Spec vs Release Notes để tìm gap**

```
Tôi cần xác định gap giữa những gì BA yêu cầu
và những gì DEV đã implement.

Technical Specification (BA/PM):
[Dán spec]

Release Notes (DEV):
[Dán release notes]

Hãy phân tích và tạo bảng so sánh:

| Requirement trong Spec | Trạng thái theo Release Notes | Cần test gì |
|------------------------|------------------------------|-------------|
| AC-001: ... | ✅ Đã implement / ⚠️ Partial / ❌ Chưa đề cập | ... |

Đặc biệt chú ý:
1. Requirement nào trong spec không có trong release notes?
   (DEV quên implement hoặc quên đề cập)
2. Deviation nào DEV ghi trong release notes?
   Có cần BA/PO confirm không?
3. "Câu hỏi mở" DEV tự quyết — quyết định đó có đúng
   với intent trong spec không?
```

---

**Prompt 3 — Phân tích bug và viết bug report**

```
Tôi vừa phát hiện bug sau khi test:

Mô tả những gì xảy ra:
[Mô tả chi tiết — steps to reproduce]

Expected result theo spec:
[Trích dẫn acceptance criteria hoặc edge case tương ứng]

Actual result:
[Những gì thực sự xảy ra]

Hãy giúp tôi:
1. Phân loại bug: đây là lỗi implementation, lỗi spec
   không rõ, hay edge case chưa được define?
2. Đánh giá severity: Critical / High / Medium / Low
   (dựa trên impact với người dùng và business)
3. Viết bug report chuẩn để DEV có thể reproduce
   và fix mà không cần hỏi thêm
4. Đề xuất: cần hỏi BA để làm rõ spec, hay DEV
   có thể fix thẳng?
```

---

**Prompt 4 — Viết báo cáo nghiệm thu**

```
Tôi vừa hoàn thành quá trình test cho tính năng:
[Tên tính năng]

Kết quả test:
- Tổng số test case: ...
- Pass: ... | Fail: ... | Blocked: ...
- Bug tìm thấy: [danh sách bug và severity]

Những điểm deviation so với spec đã được confirm bởi BA/PO:
[Liệt kê]

Hãy giúp tôi viết Báo cáo Nghiệm thu gửi cho PO và
Business Owner, bao gồm:
1. Tóm tắt kết quả (executive summary — 1 đoạn)
2. Danh sách tính năng: Pass / Fail / Partial
3. Bug chưa fix: severity và impact
4. Rủi ro nếu release với tình trạng hiện tại
5. Khuyến nghị: Approve nghiệm thu / Cần fix thêm /
   Cần làm rõ requirement

Tone: chuyên nghiệp, rõ ràng, người không có technical
background vẫn hiểu được.
```

---

### 📤 Output bàn giao cho PO & Business Owner

```markdown
## Báo cáo Nghiệm Thu — [Tên tính năng]
### Ngày test: | QC phụ trách: | Version tested:

---

### Tóm tắt
[1 đoạn: tính năng này đã sẵn sàng release chưa,
và lý do ngắn gọn]

---

### Kết quả tổng quan

| Hạng mục | Số lượng |
|----------|---------|
| Tổng test case | |
| Pass | |
| Fail | |
| Blocked (chưa test được) | |

---

### Chi tiết theo User Story

| User Story | Kết quả | Ghi chú |
|-----------|---------|---------|
| US-001: ... | ✅ Pass | |
| US-002: ... | ❌ Fail | Bug #003 |
| US-003: ... | ⚠️ Partial | Edge case X chưa xử lý |

---

### Bug report tóm tắt

| Bug ID | Mô tả | Severity | Trạng thái |
|--------|-------|----------|-----------|
| BUG-001 | ... | Critical | Open |
| BUG-002 | ... | Medium | Open |

---

### Điểm cần PO/BA làm rõ
[Những chỗ spec mơ hồ phát hiện trong quá trình test]

---

### Khuyến nghị
- [ ] ✅ Approve nghiệm thu — sẵn sàng release
- [ ] 🔧 Cần fix bug Critical trước khi release
- [ ] 📋 Cần BA/PO làm rõ requirement ở [điểm cụ thể]
```

---
---

## 🔁 Tổng quan luồng liên kết

```
Business Owner
  ↓ Business Brief
  (Problem Statement · Mục tiêu KD · Tiêu chí nghiệm thu · Scope)

PO
  ↓ Product Requirements Document (PRD)
  (Nhu cầu từng phòng ban · Must/Should/Could · Câu hỏi mở)

BA/PM
  ↓ Technical Specification
  (User Story · Acceptance Criteria · Flow · Edge case · Business Rules · Data Requirements)

DEV
  ↓ Release Notes + Code
  (Những gì đã implement · Deviations · Known issues · Hướng dẫn test)

QC
  ↓ Báo cáo Nghiệm thu
  (Kết quả test · Bug report · Khuyến nghị release)

→ Quay về Business Owner & PO để quyết định
```

---

### Nguyên tắc xuyên suốt — áp dụng cho mọi role

> Dù bạn ở role nào, 3 câu hỏi này luôn đúng khi làm việc với AI:
>
> 1. **"AI đang giải quyết vấn đề của tôi, hay vấn đề phổ biến nhất trong training data của nó?"**
> 2. **"Output này cover happy path — edge case nào đang bị bỏ sót?"**
> 3. **"Tôi có thể giải thích tại sao output này đúng không — hay tôi chỉ đang tin vì nó trông có vẻ đúng?"**

---
