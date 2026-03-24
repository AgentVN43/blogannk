---
sidebar_position: 5
slug: /education/age-ai/foundation/module-4
id: age-ai-foundation
title: Module 4
---


# Module 4 — AI Simulation
## Thực chiến: phản biện AI output trong môi trường an toàn

**Thời lượng:** Nửa ngày (chiều ngày 4)
**Bloom target:** Vận dụng (toàn bộ module)

---

### Mục tiêu của module này

Đây là module duy nhất không có phần giảng lý thuyết. Toàn bộ thời gian dành cho thực hành.

Mục tiêu: Áp dụng tất cả những gì học được từ M0 đến M3 vào một môi trường có kiểm soát — nơi AI được cố ý tạo ra output có lỗi, và nhiệm vụ của bạn là phát hiện và giải thích lỗi đó.

---

### Tại sao cần bài tập simulation?

Biết lý thuyết là một chuyện. Thực sự nhận ra lỗi trong output AI khi đang làm việc thực tế là một chuyện khác.

Nhiều người biết rằng AI có thể sai — nhưng khi đứng trước một tài liệu AI tạo ra trông rất hoàn chỉnh, họ vẫn approve mà không kiểm tra. Simulation tạo ra trải nghiệm "bắt được AI sai" trong môi trường an toàn, giúp xây dựng phản xạ kiểm tra output trước khi dùng.

---

### Cấu trúc buổi Simulation

**Phần 1 — Cá nhân (60 phút)**

Mỗi học viên nhận một bộ AI-generated output phù hợp với công việc thực tế của mình. Output đã được cố ý đặt vào 3–5 lỗi ở các mức độ khác nhau: lỗi rõ ràng, lỗi tinh tế, và lỗi chỉ phát hiện được khi hiểu sâu về nghiệp vụ.

Nhiệm vụ: đọc output, đánh dấu tất cả điểm nghi ngờ, viết giải thích lý do — và phân loại: đây là lỗi loại gì (hallucination, edge case bị bỏ sót, logic sai, data assumption sai...)

**Phần 2 — Nhóm (60 phút)**

Các nhóm 3–4 người thảo luận về kết quả từng người. Mục tiêu: không phải ai cũng phải tìm được tất cả lỗi một mình — mà là team phải tìm được hết khi làm việc cùng nhau. Đây là mô hình thực tế: trong dự án, review AI output là công việc của cả team.

**Phần 3 — Debrief (30 phút)**

Facilitator reveal toàn bộ lỗi đã được cài vào và giải thích lý do. Thảo luận: lỗi nào hay bị bỏ sót nhất? Tại sao? Quy trình review nào giúp phát hiện tốt hơn?

---

### Các bộ output simulation theo role

**Dành cho BA/PM**
AI-generated requirement document cho một tính năng thanh toán định kỳ. Lỗi được cài: 2 requirement mâu thuẫn nhau, 1 edge case quan trọng không được đề cập, 1 assumption về hành vi người dùng không được xác nhận, 1 định nghĩa thuật ngữ không nhất quán.

**Dành cho QC/Tester**
AI-generated test case cho flow đăng ký tài khoản. Lỗi được cài: thiếu test case cho email đã tồn tại, thiếu test case cho password quá yếu, test case cho trường hợp mạng chập chờn, logic test step sai thứ tự, 1 expected result mô tả sai.

**Dành cho Developer**
AI-generated code function tính hoa hồng. Lỗi được cài: sai logic khi giá trị âm, thiếu xử lý null input, kết quả làm tròn sai, không có error handling khi chia cho 0.

**Dành cho Business Owner / Quản lý**
AI-generated business case cho việc triển khai chatbot CSKH. Lỗi được cài: con số ROI được tính dựa trên assumption không được nêu rõ, 1 số liệu benchmark từ ngành khác được dùng như thể là benchmark của ngành này, timeline triển khai không tính đến thời gian training data, rủi ro về data privacy không được đề cập.

---

### Tiêu chí đánh giá

Bài tập Simulation được đánh giá theo 3 tiêu chí:

| Tiêu chí | Mô tả | Trọng số |
|----------|--------|----------|
| Phát hiện lỗi | Tìm được bao nhiêu % lỗi được cài vào | 40% |
| Lý giải | Giải thích được tại sao đây là lỗi, lỗi thuộc loại nào | 40% |
| Đề xuất | Đưa ra được hướng sửa hoặc prompt lại để cải thiện | 20% |

**Lưu ý quan trọng:** Người tìm được ít lỗi nhưng giải thích chính xác sẽ được đánh giá cao hơn người tìm nhiều lỗi nhưng không giải thích được. Mục tiêu không phải tìm cho đủ số lượng — mà là hiểu đủ sâu để có thể giải thích.

---

### Quiz kiểm tra M4 (tích hợp)

M4 không có quiz riêng biệt. Bài tập Simulation chính là bài quiz cho module này — và đồng thời là bài kiểm tra tổng hợp cho toàn bộ Tầng 1.

Người hoàn thành tốt bài Simulation đã chứng minh được khả năng vận dụng của cả 4 module trước đó:
- M0: nhận ra bias trong cách AI framing vấn đề
- M1: nhìn thấy lỗi về system boundary và root cause
- M2: phát hiện edge case và data assumption sai
- M3: áp dụng Verify-Challenge-Decide

---

---

## Tổng kết Tầng 1

### Bạn đã học được gì?

Sau khi hoàn thành 4 module của Tầng 1, bạn có khả năng:

**Tư duy:**
- Nhận ra cognitive bias trong quyết định của bản thân và team
- Nhìn một hệ thống theo cấu trúc Input–Process–Output và xác định feedback loop
- Phân biệt symptom và root cause trong vấn đề thực tế
- Viết problem statement rõ ràng, không chứa giải pháp

**Logic và dữ liệu:**
- Đọc một flow và chủ động tìm edge case
- Nhận diện 4 loại vấn đề data quality phổ biến
- Đặt câu hỏi đúng trước khi tin vào một tập dữ liệu

**Làm việc với AI:**
- Hiểu AI hoạt động như thế nào và tại sao AI có thể sai
- Nhận biết 4 cách AI hay sai: hallucination, prompt sensitivity, context collapse, out-of-date knowledge
- Áp dụng framework Verify–Challenge–Decide với mọi AI output
- Viết prompt cụ thể, có context, và iterate kết quả

### Bước tiếp theo

Sau Tầng 1, bạn chuyển sang **Tầng 2 — Application** theo role của mình: BA/PM, QC/Tester, Developer, hoặc Business Owner. Tầng 2 sẽ áp dụng trực tiếp nền tảng này vào công việc cụ thể của từng người.

---

*Tài liệu này là nội dung chương trình Tầng 1 — Foundation. Phiên bản 1.0.*