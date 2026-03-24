---
sidebar_position: 1
slug: /education/age-ai/foundation/module-0
id: age-ai-foundation
title: Module 0
---

### Chương trình nền tảng bắt buộc cho tất cả mọi người

> **Dành cho ai?** BA, PM, QC, Developer, Chủ doanh nghiệp, Quản lý — bất kể bạn có background kỹ thuật hay không.
>
> **Mục tiêu chung:** Sau khi hoàn thành Tầng 1, bạn có thể tư duy rõ ràng về vấn đề, hiểu hệ thống hoạt động như thế nào, và dùng AI như một công cụ có kiểm soát — thay vì bị AI dẫn dắt.

---

## Tổng quan chương trình

| Module | Tên | Thời lượng | Bloom target |
|--------|-----|------------|--------------|
| M0 | Mental Model — Hiểu cách não người hoạt động | 0.5 ngày | Ghi nhớ → Hiểu → Vận dụng |
| M1 | Systems Thinking & Problem Framing | 1 ngày | Ghi nhớ → Hiểu → Vận dụng |
| M2 | Logic, Flow & Data Thinking | 1 ngày | Ghi nhớ → Hiểu → Vận dụng |
| M3 | AI Literacy — Hiểu AI thực sự hoạt động thế nào | 1 ngày | Ghi nhớ → Hiểu → Vận dụng |
| M4 | AI Simulation — Thực chiến phản biện AI | 0.5 ngày | Vận dụng |

**Tổng thời lượng: 4 ngày**

---

## Nguyên tắc học tập xuyên suốt

Trước khi đi vào từng module, có 3 nguyên tắc quan trọng bạn cần hiểu về cách chương trình này được thiết kế:

**1. Học để làm được, không phải học để biết**
Mỗi module đều kết thúc bằng bài tập thực tế. Nếu bạn chỉ nghe mà không làm được bài tập, nghĩa là chưa đạt yêu cầu.

**2. AI là công cụ, không phải chuyên gia**
Chương trình này không dạy bạn dùng AI nhanh hơn — mà dạy bạn kiểm soát AI tốt hơn. Sự khác biệt nằm ở chỗ: bạn hiểu kết quả AI đưa ra có đúng không, thay vì chỉ copy-paste output.

**3. Không cần background kỹ thuật**
Tất cả khái niệm đều được giải thích bằng ví dụ thực tế từ công việc hàng ngày. Nếu bạn chưa từng viết một dòng code trong đời, bạn vẫn hoàn toàn học được chương trình này.

---

---

# Module 0 — Mental Model
## Hiểu cách não người hoạt động trước khi học bất cứ thứ gì

**Thời lượng:** Nửa ngày (buổi sáng ngày 1)
**Bloom target:** Ghi nhớ → Hiểu → Vận dụng

---

### Tại sao cần học module này?

Hầu hết các chương trình đào tạo đều bắt đầu ngay vào công cụ và phương pháp. Chương trình này không làm vậy.

Lý do: nếu não bạn đang chạy theo những thói quen tư duy sai, thì dù học thêm bao nhiêu công cụ cũng không giúp được. Bạn sẽ dùng công cụ đúng theo cách sai.

Module 0 giúp bạn nhận ra những "lỗi hệ thống" trong cách não người đưa ra quyết định — để từ đó bạn học mọi thứ tiếp theo với một nền tảng tư duy vững hơn.

---

### Phần 1 — Cognitive Bias (Thiên kiến nhận thức)

**Cognitive bias** là gì? Đây là những "phím tắt" mà não người dùng để quyết định nhanh hơn — nhưng đôi khi những phím tắt này dẫn đến quyết định sai, ngay cả khi người ra quyết định hoàn toàn thông minh và thiện chí.

Quan trọng: cognitive bias không phải là dấu hiệu của người kém thông minh. Đây là đặc điểm sinh học của tất cả não người. Biết mình có bias không loại bỏ nó hoàn toàn, nhưng giúp bạn dừng lại và kiểm tra trước khi hành động.

#### Ba bias phổ biến nhất trong môi trường làm việc với AI và hệ thống

---

**Bias 1 — Confirmation Bias (Thiên kiến xác nhận)**

> Xu hướng tìm kiếm và tin vào thông tin xác nhận điều mình đã nghĩ, đồng thời bỏ qua thông tin mâu thuẫn.

Ví dụ thực tế: Bạn đang đánh giá một tính năng mới. Bạn nghĩ tính năng này tốt. AI generate ra spec cho tính năng đó, trong spec có 2 điểm mạnh và 1 lỗ hổng lớn. Rất dễ xảy ra: bạn đọc 2 điểm mạnh, gật đầu, rồi vô tình bỏ qua lỗ hổng vì não đang tìm cớ để đồng ý.

Hệ quả trong dự án: team approve requirement không đủ chặt vì "AI đã kiểm tra rồi", nhưng thực ra AI chỉ xác nhận những gì người dùng đã muốn nghe.

---

**Bias 2 — Automation Bias (Thiên kiến tự động hoá)**

> Xu hướng tin tưởng quá mức vào output của hệ thống tự động, ngay cả khi có dấu hiệu rõ ràng là output sai.

Đây là bias đặc biệt nguy hiểm khi làm việc với AI. Khi AI trả lời một cách tự tin, trôi chảy, và có vẻ logic — não người có xu hướng chấp nhận mà không kiểm tra.

Ví dụ thực tế: Developer nhờ AI viết một hàm tính chiết khấu. AI trả về code chạy được, không có lỗi syntax. Developer merge vào production mà không test edge case. Hai tuần sau phát hiện hàm tính sai khi giá trị âm — AI đã bỏ qua trường hợp này hoàn toàn.

Automation bias không có nghĩa là "đừng dùng AI". Nó có nghĩa là: **chạy được ≠ đúng.**

---

**Bias 3 — Anchoring Bias (Thiên kiến neo đậu)**

> Xu hướng phụ thuộc quá nhiều vào thông tin đầu tiên nhận được khi đưa ra quyết định.

Khi AI đưa ra một con số, một giải pháp, hoặc một cách frame vấn đề — đó trở thành "anchor". Mọi suy nghĩ tiếp theo của bạn sẽ xoay quanh anchor đó, thay vì bắt đầu từ đầu.

Ví dụ thực tế: PM nhờ AI estimate timeline cho một tính năng. AI nói "khoảng 2 tuần". PM bắt đầu lên kế hoạch từ con số 2 tuần đó. Dù sau đó team đánh giá lại và thấy 4 tuần mới thực tế, PM vẫn có xu hướng tìm cách "co lại" về gần 2 tuần — vì 2 tuần đã là anchor.

---

### Phần 2 — First Principles Thinking (Tư duy từ nguyên lý gốc)

**First principles thinking** là gì? Thay vì hỏi "người khác làm thế nào?", bạn hỏi "thực ra vấn đề này là gì ở cấp độ cơ bản nhất?"

Tư duy này không phải để phủ nhận kinh nghiệm của người khác — mà để tránh việc copy solution mà không hiểu vấn đề.

Trong context làm việc với AI: AI rất giỏi đưa ra solution phổ biến cho những vấn đề phổ biến. Nhưng vấn đề của bạn có thể có những đặc điểm riêng mà AI không biết. Nếu bạn không tư duy từ nguyên lý gốc, bạn sẽ nhận solution của người khác và áp vào vấn đề của mình — rồi thắc mắc tại sao không khớp.

**Cách thực hành đơn giản:**
Trước khi hỏi AI bất cứ điều gì, tự hỏi: "Tôi thực sự cần giải quyết cái gì?" — không phải "AI sẽ giải quyết cái này thế nào?"

---

### Phần 3 — Tư duy câu hỏi thay vì câu trả lời

Đây là một trong những thay đổi tư duy quan trọng nhất của chương trình này.

Hầu hết chúng ta được đào tạo để đưa ra câu trả lời nhanh. Trong môi trường làm việc với AI, điều này đặc biệt nguy hiểm — vì AI luôn sẵn sàng đưa ra câu trả lời, bất kể câu hỏi có rõ ràng không.

Người dùng AI hiệu quả không phải người hỏi nhiều nhất — mà là người biết **hỏi đúng** trước khi để AI trả lời.

Câu hỏi tốt là câu hỏi:
- Không chứa giả định ngầm
- Không dẫn dắt AI theo hướng bạn muốn
- Buộc bạn phải suy nghĩ rõ ràng về vấn đề trước khi nhờ AI

---

### Bài tập thực hành M0

**Bài tập 1 — Nhận diện bias**

Đọc tình huống sau và xác định bias nào đang xảy ra, giải thích lý do:

> *"Team vừa nhận được AI-generated test plan cho một tính năng thanh toán mới. Test plan trông rất đầy đủ — 45 test case, cover nhiều luồng. QC lead xem qua trong 10 phút, thấy ổn, approve. Một tuần sau go-live, phát hiện hệ thống xử lý sai khi user thanh toán bằng ví điện tử nước ngoài — một edge case không có trong test plan."*

**Bài tập 2 — First principles**

Cho tình huống: "Chúng tôi cần một chatbot để hỗ trợ khách hàng."

Viết 3 câu hỏi first-principles bạn sẽ hỏi **trước** khi bắt đầu nhờ AI xây dựng bất cứ thứ gì.

---

### Quiz kiểm tra M0

**Câu 1 — Ghi nhớ**
Liệt kê 3 cognitive bias được học trong module này và định nghĩa ngắn gọn mỗi loại (1–2 câu).

**Câu 2 — Hiểu**
Tại sao automation bias đặc biệt nguy hiểm hơn khi làm việc với AI so với khi làm việc với công cụ thông thường? Giải thích bằng lời của bạn.

**Câu 3 — Vận dụng (Scenario)**
> *"PM nhờ AI phân tích feedback của 500 user và tóm tắt top 5 vấn đề. AI đưa ra danh sách. PM gửi thẳng cho stakeholder mà không đọc lại toàn bộ feedback gốc."*
>
> Có bao nhiêu bias có thể đang xảy ra ở đây? Bạn sẽ làm khác đi như thế nào?

---
