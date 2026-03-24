---
sidebar_position: 1
slug: /education/age-ai/level1/foundation
id: age-ai-foundation
title: Foundation
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