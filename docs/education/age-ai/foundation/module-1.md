---
sidebar_position: 2
slug: /education/age-ai/foundation/module-1
id: age-ai-foundation-module-1
title: Module 1
---

# Module 1 — Systems Thinking & Problem Framing
## Nhìn thấy toàn bộ hệ thống trước khi giải quyết bất kỳ phần nào

**Thời lượng:** 1 ngày (chiều ngày 1 + sáng ngày 2)
**Bloom target:** Ghi nhớ → Hiểu → Vận dụng

---

### Tại sao cần học module này?

Khi làm việc với AI để xây dựng hệ thống, sai lầm phổ biến nhất không phải là dùng sai công cụ — mà là giải quyết sai vấn đề.

AI rất giỏi trả lời câu hỏi. Nhưng nếu bạn đặt câu hỏi sai, AI sẽ rất tự tin đưa ra câu trả lời sai.

Module này dạy bạn hai kỹ năng bổ trợ cho nhau:
- **Systems Thinking**: nhìn thấy bức tranh toàn cảnh trước khi hành động
- **Problem Framing**: đặt đúng câu hỏi trước khi tìm giải pháp

---

### Phần 1 — Systems Thinking (Tư duy hệ thống)

#### Hệ thống là gì?

Một **system** (hệ thống) là bất kỳ tập hợp các thành phần nào kết nối với nhau và cùng tạo ra một kết quả — kết quả mà không có thành phần nào tạo ra được một mình.

Ví dụ đơn giản: Quy trình duyệt đơn hàng trong một công ty. Nó gồm: khách hàng đặt đơn → hệ thống kiểm tra tồn kho → nhân viên kinh doanh xác nhận → kho đóng gói → shipper giao. Không một bước nào làm được việc "giao hàng đến tay khách" nếu tách ra một mình.

Khi bạn cần tự động hoá hoặc xây dựng một phần của hệ thống bằng AI, nếu không hiểu toàn bộ hệ thống, bạn sẽ tối ưu một phần và phá vỡ phần khác.

---

#### Ba khái niệm nền tảng

**Input — Process — Output**

Mọi hệ thống đều có thể được mô tả theo 3 thành phần này:
- **Input**: thứ đưa vào hệ thống (dữ liệu, yêu cầu, nguyên liệu, con người)
- **Process**: những gì xảy ra bên trong (xử lý, chuyển đổi, quyết định)
- **Output**: kết quả đầu ra (sản phẩm, thông tin, hành động)

Ví dụ: Hệ thống xét duyệt hợp đồng
- Input: hợp đồng từ khách hàng, thông tin khách hàng, chính sách công ty
- Process: luật sư review, trưởng bộ phận ký duyệt, hệ thống lưu trữ
- Output: hợp đồng được ký hoặc từ chối, thông báo cho khách

Khi bạn nhờ AI tự động hoá một bước trong process, bạn cần hiểu input đến từ đâu và output đi đến đâu — nếu không, AI sẽ xử lý tốt phần mình thấy nhưng bỏ qua kết nối với phần còn lại.

---

**Feedback Loop (Vòng phản hồi)**

Một hệ thống không chỉ chạy một chiều. Output của hệ thống thường quay lại ảnh hưởng đến input hoặc process — đó gọi là feedback loop.

Ví dụ: Hệ thống gợi ý sản phẩm trên sàn thương mại điện tử. Người dùng xem sản phẩm (input) → hệ thống gợi ý sản phẩm tương tự (output) → người dùng click vào sản phẩm được gợi ý → hành vi này quay lại thay đổi cách hệ thống gợi ý lần sau (feedback vào input).

Feedback loop quan trọng vì: khi bạn thay đổi một phần của hệ thống, hệ thống sẽ phản ứng theo những cách bạn có thể không lường trước. AI không tự nhìn thấy feedback loop — bạn phải chỉ cho nó.

---

**Boundary (Ranh giới hệ thống)**

Không phải mọi thứ đều thuộc về hệ thống bạn đang xây dựng. **Boundary** là ranh giới phân định: cái gì nằm trong hệ thống, cái gì nằm ngoài.

Ví dụ thực tế: Bạn đang xây hệ thống quản lý đơn hàng nội bộ. Hành vi của khách hàng trên thị trường nằm ngoài boundary của hệ thống — bạn không thể kiểm soát nó. Nhưng dữ liệu đơn hàng, quy trình duyệt, và thông báo cho khách thì nằm trong boundary.

Khi nhờ AI thiết kế một hệ thống, nếu không xác định boundary rõ ràng, AI sẽ tự định nghĩa boundary — và thường là định nghĩa quá rộng hoặc quá hẹp so với thực tế của bạn.

---

### Phần 2 — Problem Framing (Định hình vấn đề)

#### Symptom vs Root Cause

**Symptom** (triệu chứng) là những gì bạn thấy và cảm nhận được — kết quả của vấn đề thực sự.
**Root cause** (nguyên nhân gốc) là lý do thực sự gây ra triệu chứng đó.

Đây là một trong những nhầm lẫn tốn kém nhất trong phát triển hệ thống: giải quyết symptom thay vì root cause. Hệ thống được fix, nhưng vấn đề quay lại sau vài tuần — vì chưa bao giờ được giải quyết thực sự.

AI đặc biệt dễ bị dẫn dắt bởi symptom. Nếu bạn mô tả symptom cho AI, AI sẽ đề xuất giải pháp cho symptom đó. Công việc của bạn là phải tìm root cause trước khi hỏi AI bất cứ điều gì.

---

#### Phương pháp 5 Whys

Cách đơn giản nhất để đi từ symptom đến root cause: hỏi "Tại sao?" liên tục, ít nhất 5 lần.

**Ví dụ:**

> *"App của chúng tôi bị user phàn nàn chậm."*

- Tại sao chậm? → Vì thời gian load trang kéo dài hơn 5 giây.
- Tại sao load lâu? → Vì database query mất nhiều thời gian.
- Tại sao query chậm? → Vì bảng dữ liệu không có index đúng chỗ.
- Tại sao không có index? → Vì khi thiết kế database ban đầu, không ai nghĩ đến pattern truy vấn này.
- Tại sao không ai nghĩ đến? → Vì requirement không mô tả rõ volume dữ liệu và tần suất truy vấn.

**Root cause thực sự:** Requirement thiếu thông tin về scale, dẫn đến quyết định thiết kế sai ngay từ đầu. Giải pháp không phải là "tối ưu query" — mà là cải thiện quy trình thu thập requirement.

---

#### Viết Problem Statement đúng chuẩn

Một **problem statement** tốt phải đáp ứng 3 tiêu chí:
1. Mô tả vấn đề, không chứa giải pháp
2. Cụ thể và đo lường được
3. Đặt vấn đề từ góc nhìn của người bị ảnh hưởng

**Cấu trúc gợi ý:**

> *"[Đối tượng] đang gặp khó khăn với [vấn đề cụ thể] dẫn đến [hậu quả đo lường được]."*

**Ví dụ sai:** "Chúng tôi cần xây dựng một hệ thống báo cáo tự động." (Đây là giải pháp, không phải vấn đề.)

**Ví dụ đúng:** "Nhân viên kế toán mất trung bình 3 giờ mỗi tuần để tổng hợp báo cáo thủ công từ 4 nguồn dữ liệu khác nhau, dẫn đến báo cáo thường bị trễ deadline và có tỷ lệ lỗi 12%."

Khi bạn có problem statement đúng, prompt của bạn cho AI sẽ chính xác hơn — và AI sẽ đưa ra giải pháp phù hợp hơn.

---

#### Framework HMW — How Might We

Sau khi xác định root cause và viết problem statement, bước tiếp theo là mở rộng không gian giải pháp — thay vì nhảy ngay vào giải pháp đầu tiên nghĩ đến.

**How Might We** (HMW) là câu hỏi mở giúp bạn brainstorm nhiều hướng giải quyết trước khi chọn.

Ví dụ từ problem statement trên:
- "Làm thế nào chúng ta có thể giảm thời gian tổng hợp báo cáo?"
- "Làm thế nào chúng ta có thể kết nối 4 nguồn dữ liệu về một nơi?"
- "Làm thế nào chúng ta có thể phát hiện lỗi dữ liệu trước khi báo cáo được gửi đi?"

Mỗi câu HMW là một hướng khác nhau để giải quyết vấn đề. Bạn có thể dùng AI để brainstorm thêm các câu HMW — nhưng chỉ sau khi bạn đã có problem statement rõ ràng.

---

### Bài tập thực hành M1

**Bài tập 1 — Vẽ hệ thống**

Chọn một quy trình bạn đang làm hàng ngày (ví dụ: quy trình nhận task → làm → bàn giao). Vẽ sơ đồ Input–Process–Output và xác định: có feedback loop nào không? Boundary của quy trình này nằm ở đâu?

**Bài tập 2 — 5 Whys**

Cho tình huống: "Khách hàng phàn nàn rằng họ nhận được email thông báo sai thông tin đơn hàng."

Dùng 5 Whys để tìm root cause. Sau đó viết problem statement đúng chuẩn.

**Bài tập 3 — Problem Statement**

Cho brief sau: "Chúng tôi muốn dùng AI để cải thiện trải nghiệm khách hàng."

Đây có phải problem statement không? Tại sao? Viết lại thành problem statement đúng chuẩn (bạn có thể tự đặt thêm giả định về context).

---

### Quiz kiểm tra M1

**Câu 1 — Ghi nhớ**
Định nghĩa: System, Feedback loop, Boundary, Symptom, Root cause.

**Câu 2 — Hiểu**
Đọc tình huống sau và phân tích: đây là symptom hay root cause? Giải thích:
> *"Tỷ lệ chuyển đổi (conversion rate) của trang thanh toán giảm 30% trong tháng qua."*

**Câu 3 — Vận dụng (Scenario)**
> *"Một startup nhờ AI thiết kế toàn bộ hệ thống quản lý nhân sự. AI đưa ra một hệ thống đầy đủ tính năng. Sau 3 tháng triển khai, nhân viên HR phàn nàn rằng hệ thống không phù hợp với quy trình onboarding thực tế của công ty."*
>
> Dùng các khái niệm trong M1 để phân tích điều gì đã xảy ra và nên làm gì khác ngay từ đầu.

---