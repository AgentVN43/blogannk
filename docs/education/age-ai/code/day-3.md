---
sidebar_position: 1
slug: /education/age-ai/code/day-3
id: age-ai-code-day-3
title: Day 3
---
### PHẦN 1 — LÝ THUYẾT

**1. Function (Hàm) là gì?**
Hãy tưởng tượng khi làm manual testing, bạn có một bước "Đăng nhập" lặp đi lặp lại ở 10 test case khác nhau. Thay vì viết lại 10 lần các thao tác click username, nhập password, click nút login, bạn sẽ gộp nó thành một "Test Case con" và gọi tên nó ra để dùng. Trong code, **Function** chính là "Test Case con" đó: một khối lệnh được đặt tên, đóng gói lại để tái sử dụng bất kỳ lúc nào.

**2. Vấn đề Regular function vs Arrow function giải quyết gì?**
JavaScript có 2 cách viết function chính: Regular (cũ) và Arrow (mới). 
Khi bạn viết automation, bạn sẽ cần truyền rất nhiều hành động vào từng bước (ví dụ: "đợi 2 giây rồi mới click"). Cách viết Regular đôi khi gây ra lỗi "mất ngữ cảnh" (nhầm lẫn trang đang thao tác) vì nó tạo ra một không gian riêng. Arrow function ra đời để viết ngắn gọn hơn (tiết kiệm thời gian gõ code) và tự động giữ nguyên "ngữ cảnh" của nơi nó được tạo ra - điều cực kỳ quan trọng để Playwright không bị nhầm lẫn giữa các tab hay các trang web với nhau.

**3. `npm init playwright@latest` giải quyết vấn đề gì?**
Day xưa, cài đặt công cụ test thủ công rất mệt: phải tải browser driver, tạo folder, tạo file config, cài thư viện... Lệnh này giống như một nút "Cài đặt tự động 1 chạm". Nó hỏi bạn vài câu hỏi (dùng ngôn ngữ gì? chạy trên browser nào?) và tự động setup 100% môi trường Playwright hoàn chỉnh để bạn bắt đầu viết test ngay.

**Điểm chính cần nhớ:**
*   **Function** giúp không bị lặp code (giống nguyên tắc không viết trùng lặp Test Case trong manual).
*   **Regular function** dùng từ khóa `function`, **Arrow function** dùng dấu `=>`.
*   Trong Playwright + TypeScript, luôn ưu tiên dùng **Arrow function** để code gọn và an toàn ngữ cảnh.
*   Lệnh `npm init playwright@latest` tạo sẵn cấu trúc folder, file config và tải sẵn trình duyệt ẩn (browser binary).

---

### PHẦN 2 — CODE EXAMPLE

```typescript
// ❌ SAI: Dùng Regular function cồng kềnh và dễ gây lỗi ngữ cảnh (this) khi viết Playwright Test
function clickSubmitButton() {
  return page.locator('button[type="submit"]').click();
}

function handlePopup() {
  return page.locator('.popup-confirm').click();
}

// Gọi hàm ra dùng
clickSubmitButton();
handlePopup();
```

```typescript
// ✅ ĐÚNG: Dùng Arrow function gọn gàng, chuẩn convention của Playwright hiện đại
const clickSubmitButton = () => page.locator('button[type="submit"]').click();

const handlePopup = () => page.locator('.popup-confirm').click();

// Gọi hàm ra dùng y hệt
clickSubmitButton();
handlePopup();
```

| Vì sao cách ĐÚNG tốt hơn cách SAI |
| :--- |
| **Ngắn gọn:** Bỏ được từ khóa `function` và từ khóa `return` (với 1 dòng lệnh, arrow function tự động return kết quả). |
| **An toàn:** Arrow function không tạo ra ngữ cảnh `this` riêng, giúp tránh bug khó hiểu khi truyền hàm vào các hàm xử lý event của Playwright. |

---

### PHẦN 3 — BÀI THỰC HÀNH TRÊN PROJECT THỰC 

**Bối cảnh:** App quản lý đơn hàng B2B của bạn (React). Khi bấm "Tạo đơn hàng", app sẽ hiện **loading spinner** (gọi API) rồi hiện **popup confirm** trước khi submit thật.

**Checklist thực hành:**
1. Mở terminal tại folder project, chạy lệnh `npm init playwright@latest` để cài đặt môi trường (chọn TypeScript, chọn Chromium).
2. Mở file test mẫu mà Playwright vừa tạo ra, xóa code demo cũ đi.
3. Viết 1 arrow function tên là `waitForApiLoading`: dùng để đợi element loading spinner biến mất.
4. Viết 1 arrow function tên là `acceptOrderPopup`: dùng để đợi popup confirm hiện ra và click nút đồng ý.
5. Viết 1 test case chính (dùng `test` của Playwright), gọi lần lượt 2 hàm trên theo đúng thứ tự logic của flow "Tạo đơn hàng".

**Câu hỏi gợi mở (Phân tích trước khi code):**
> *"Trước khi viết, hãy quan sát: Loading spinner và Popup confirm này có xuất hiện ngay lập tức (đồng bộ) hay có độ trễ (bất đồng bộ) khi gọi API? Nếu API chạy nhanh quá không kịp hiện spinner, hàm đợi spinner của bạn viết như thế nào để script không bị bị lỗi timeout?"*

**Acceptance Criteria (Hoàn thành khi):**
1. Chạy lệnh `npx playwright test` và script không báo lỗi cú pháp TypeScript (không có dòng đỏ trong VS Code).
2. 2 hàm `waitForApiLoading` và `acceptOrderPopup` bắt buộc phải được viết bằng cú pháp Arrow function.
3. Test case chính không chứa trực tiếp code click popup hay đợi spinner, mà phải gọi lại qua tên 2 hàm trên.

---

### PHẦN 4 — INTERVIEW Q&A 

**Câu hỏi 1:** "Trong dự án Playwright, team bạn quy định dùng Arrow function cho mọi helper function. Tại sao lại tránh dùng Regular function, đặc biệt là khi viết các custom commands hoặc config?"
*   *Gợi ý cho mentor:* Học viên cần nhắc đến việc Arrow function không bind `this` riêng, trong khi Regular function tạo ra `this` của chính nó. Khi truyền hàm vào Playwright fixtures hoặc config, dùng Regular function dễ làm mất tham chiếu `this` của Playwright test context.

**Câu hỏi 2:** "So sánh hai cách cài đặt: chạy `npm init playwright@latest` so với cài riêng lẻ từng gói (`npm i playwright`, `npm i -D @playwright/test`). Khi nào bạn sẽ chọn cách thủ công?"
*   *Gợi ý cho mentor:* Học viên phân tích được `npm init playwright@latest` là cách chuẩn cho project mới (tạo cấu trúc, playwright.config.ts, tải browser). Cài riêng lẻ chỉ dùng khi muốn nhét Playwright vào một project có sẵn lâu năm mà không muốn thay đổi cấu trúc folder hiện tại.

**Câu hỏi 3:** "Bạn viết một arrow function để xử lý việc đợi loading spinner, nhưng hôm sau app đổi tên class của spinner. Làm thế nào để refactor hàm của bạn cho dễ maintain mà không cần sửa ở mọi nơi đã gọi hàm đó?"
*   *Gợi ý cho mentor:* Điểm mấu chốt là nguyên tắc DRY (Don't Repeat Yourself). Học viên cần giải thích vì đã đóng gói thành 1 arrow function duy nhất, nên khi selector thay đổi, họ chỉ cần sửa 1 lần ở nơi định nghĩa hàm, toàn bộ các test case gọi đến hàm đó sẽ tự động cập nhật.

**Câu hỏi 4:** "Arrow function có hỗ trợ cơ chế 'Hoisting' như Regular function không? Nếu bạn gọi một hàm trước khi nó được khai báo trong file test, điều gì sẽ xảy ra?"
*   *Gợi ý cho mentor:* Học viên nhận diện được Regular function được hoisting (có thể gọi trước khi khai báo trong code), còn Arrow function thì không. Gọi Arrow function trước khi khai báo sẽ gặp lỗi `ReferenceError` (biến chưa được khởi tạo).