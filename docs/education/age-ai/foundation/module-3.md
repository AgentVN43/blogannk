---
sidebar_position: 4
slug: /education/age-ai/foundation/module-3
id: age-ai-foundation
title: Module 3
---

# Module 3 — AI Literacy
## Hiểu AI thực sự hoạt động thế nào để không bị AI dẫn dắt

**Thời lượng:** 1 ngày (chiều ngày 3 + sáng ngày 4)
**Bloom target:** Ghi nhớ → Hiểu → Vận dụng

---

### Tại sao cần học module này?

Có một nghịch lý quan trọng khi làm việc với AI: AI càng trả lời tự tin, trôi chảy — người dùng càng dễ tin mà không kiểm tra.

Nhưng sự tự tin trong câu trả lời của AI không liên quan đến độ chính xác của câu trả lời đó. AI không biết mình sai. AI không "cảm thấy" gì khi đưa ra thông tin sai — nó chỉ đưa ra thứ có xác suất cao nhất xuất hiện tiếp theo dựa trên pattern nó đã học.

Module này không nhằm làm bạn sợ AI. Mục tiêu là giúp bạn hiểu đủ để dùng AI một cách có kiểm soát.

---

### Phần 1 — AI thực sự làm gì?

#### Hiểu cơ bản mà không cần kỹ thuật

AI ngôn ngữ (như ChatGPT, Claude, và các công cụ tương tự) hoạt động bằng cách học từ một lượng khổng lồ văn bản — sách, trang web, tài liệu, code, hội thoại. Qua quá trình đó, nó học được rất nhiều pattern: "Khi gặp câu hỏi kiểu X, câu trả lời thường trông như thế này."

Điều quan trọng cần hiểu: AI không *hiểu* theo nghĩa con người hiểu. AI *nhận diện pattern* và *tái tạo pattern* đó theo cách phù hợp với câu hỏi của bạn.

Điều này có nghĩa là AI rất giỏi những gì đã có nhiều pattern tương tự trong dữ liệu học. Và AI sẽ gặp khó khăn — hoặc sai — với những gì ít hoặc không có trong dữ liệu học, hoặc cần hiểu sâu về context cụ thể của bạn.

---

### Phần 2 — Bốn cách AI hay sai

#### Cách sai 1 — Hallucination (Bịa đặt tự tin)

**Hallucination** là khi AI tạo ra thông tin không có thật, nhưng trình bày như thể đó là sự thật.

Điều khiến hallucination nguy hiểm: nó không phải lúc nào cũng rõ ràng. AI không nói "Tôi không chắc về điều này." AI đưa ra thông tin sai với cùng giọng điệu tự tin như khi đưa ra thông tin đúng.

Ví dụ thực tế: Nhờ AI tóm tắt các quy định pháp luật liên quan đến hợp đồng lao động. AI có thể đưa ra danh sách các điều khoản trông rất chuyên nghiệp — nhưng một số điều khoản có thể không tồn tại, hoặc số điều khoản bị trích dẫn sai.

Những lĩnh vực dễ xảy ra hallucination nhất: số liệu cụ thể, tên người, ngày tháng, trích dẫn văn bản pháp luật, tài liệu tham khảo cụ thể.

---

#### Cách sai 2 — Prompt Sensitivity (Nhạy cảm với cách đặt câu hỏi)

AI rất nhạy cảm với cách bạn đặt câu hỏi. Cùng một vấn đề, nhưng nếu bạn hỏi theo hai cách khác nhau, AI có thể đưa ra hai câu trả lời hoàn toàn khác nhau — thậm chí mâu thuẫn nhau.

Ví dụ:
- "Hệ thống của chúng tôi có ổn không?" → AI sẽ có xu hướng tìm điểm ổn để xác nhận.
- "Hệ thống của chúng tôi có vấn đề gì không?" → AI sẽ tìm điểm yếu để chỉ ra.

Cùng một hệ thống — hai prompt — hai kết quả khác nhau.

Điều này không có nghĩa là AI đang cố lừa bạn. Nó chỉ đang phản ứng với pattern của câu hỏi. Đây là lý do tại sao cách bạn đặt câu hỏi cho AI quan trọng không kém câu hỏi bạn hỏi là gì.

---

#### Cách sai 3 — Context Collapse (Mất ngữ cảnh)

AI làm việc trong một "cửa sổ ngữ cảnh" có giới hạn — nó chỉ "nhớ" và xử lý được một lượng thông tin nhất định trong một cuộc hội thoại.

Khi conversation quá dài, hoặc khi bạn cung cấp quá nhiều thông tin cùng lúc, AI bắt đầu "quên" hoặc mất kết nối giữa các phần thông tin.

Ví dụ thực tế: Bạn cung cấp cho AI toàn bộ spec của một hệ thống phức tạp (50 trang), rồi hỏi AI thiết kế một tính năng mới. AI có thể đưa ra thiết kế mâu thuẫn với constraint bạn đã đề cập ở trang 12 — vì nó đã không còn "nhớ" phần đó.

---

#### Cách sai 4 — Out-of-date Knowledge (Kiến thức lỗi thời)

AI được train trên dữ liệu đến một thời điểm nhất định. Sau thời điểm đó, nó không biết gì thêm — trừ khi có công cụ hỗ trợ tìm kiếm thực tế.

Với các lĩnh vực thay đổi nhanh — pháp luật, công nghệ, thị trường, chính sách — thông tin AI đưa ra có thể đã lỗi thời.

---

### Phần 3 — Framework kiểm soát AI: Verify → Challenge → Decide

Đây là quy trình 3 bước bạn nên áp dụng mỗi khi nhận được output từ AI trước khi sử dụng.

---

**Bước 1 — Verify (Kiểm tra)**

Đặt câu hỏi: "Output này có những yếu tố nào cần kiểm tra độc lập?"

Những thứ luôn cần verify: số liệu cụ thể, tên và thông tin cụ thể, điều khoản pháp lý, logic nghiệp vụ quan trọng, edge case trong flow.

Cách verify: tìm nguồn tham khảo độc lập, nhờ người có chuyên môn review, test thực tế (với code hoặc flow).

---

**Bước 2 — Challenge (Phản biện)**

Đặt câu hỏi: "AI đưa ra output này vì pattern hay vì hiểu vấn đề thực sự của tôi?"

Thử hỏi AI theo hướng ngược lại: "Output này có vấn đề gì không?" hoặc "Điều gì có thể sai với đề xuất này?" — một AI tốt sẽ chỉ ra được điểm yếu. Nếu AI chỉ bảo vệ output ban đầu, bạn cần kiểm tra thêm bằng chuyên môn của mình.

Thử thay đổi cách hỏi và xem output có thay đổi không. Nếu thay đổi nhiều, output ban đầu cần được kiểm tra kỹ hơn.

---

**Bước 3 — Decide (Quyết định)**

Sau khi verify và challenge, bạn đưa ra quyết định của mình — không phải AI.

AI là công cụ hỗ trợ ra quyết định, không phải người ra quyết định. Người chịu trách nhiệm cho quyết định cuối cùng luôn là con người.

Câu hỏi cuối cùng: "Tôi có thể giải thích tại sao tôi dùng output này không?" — nếu câu trả lời là "vì AI nói vậy", đó chưa phải là đủ.

---

### Phần 4 — Prompt tốt là nền tảng của output tốt

Không có công thức prompt nào áp dụng được cho mọi trường hợp. Nhưng có 4 nguyên tắc áp dụng được mọi lúc:

**Nguyên tắc 1 — Cụ thể hơn là chung chung**
"Viết email cho khách hàng" → quá chung. "Viết email thông báo trễ giao hàng 3 ngày cho khách đã đặt đơn premium, tone xin lỗi chuyên nghiệp, đề xuất voucher bù đắp" → cụ thể, AI có đủ context.

**Nguyên tắc 2 — Cung cấp context trước khi yêu cầu**
AI không biết gì về business của bạn trừ khi bạn nói. Trước khi yêu cầu AI làm gì đó, hãy mô tả: bối cảnh, đối tượng, ràng buộc quan trọng.

**Nguyên tắc 3 — Yêu cầu AI chỉ ra giới hạn của mình**
Thêm vào prompt: "Nếu bạn không chắc về bất kỳ điểm nào, hãy nói rõ." Điều này không loại bỏ hoàn toàn hallucination nhưng giảm xác suất đáng kể.

**Nguyên tắc 4 — Iterate, không phải accept**
Output đầu tiên của AI thường không phải output tốt nhất. Đặt câu hỏi tiếp theo, yêu cầu giải thích lý do, yêu cầu cải thiện phần cụ thể.

---

### Bài tập thực hành M3

**Bài tập 1 — Nhận diện rủi ro hallucination**

Cho danh sách các yêu cầu sau. Với mỗi yêu cầu, đánh giá: rủi ro hallucination cao, trung bình, hay thấp? Giải thích lý do.

- "Giải thích khái niệm feedback loop là gì"
- "Liệt kê các điều khoản trong Bộ luật Lao động Việt Nam về thời gian làm thêm giờ"
- "Viết hàm Python tính tổng một mảng số nguyên"
- "Dự báo doanh thu Q4 năm nay dựa trên data Q1-Q3"
- "Tóm tắt nội dung cuộc họp này" (đính kèm transcript)

**Bài tập 2 — Áp dụng Verify-Challenge-Decide**

AI vừa generate ra một flow xử lý đơn hàng hoàn trả (refund) gồm 8 bước. Mô tả cụ thể bạn sẽ làm gì ở mỗi bước của framework: Verify gì, Challenge thế nào, Decide dựa trên tiêu chí gì.

---

### Quiz kiểm tra M3

**Câu 1 — Ghi nhớ**
Định nghĩa: Hallucination, Prompt sensitivity, Context collapse. Với mỗi loại, cho 1 ví dụ cụ thể trong môi trường làm việc với hệ thống phần mềm.

**Câu 2 — Hiểu**
Tại sao "AI trả lời tự tin" không đồng nghĩa với "AI trả lời đúng"? Giải thích dựa trên cách AI hoạt động.

**Câu 3 — Vận dụng (Scenario)**
> *"BA nhờ AI generate toàn bộ requirement cho một hệ thống quản lý hợp đồng. AI tạo ra 40 trang tài liệu requirement trông rất đầy đủ và chuyên nghiệp. BA gửi thẳng cho dev team để bắt đầu development."*
>
> Áp dụng framework Verify-Challenge-Decide: BA nên làm gì trước khi gửi tài liệu này cho dev? Liệt kê tối thiểu 5 bước kiểm tra cụ thể.

---