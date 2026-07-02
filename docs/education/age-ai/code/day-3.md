---
sidebar_position: 1
slug: /education/age-ai/code/day-3
id: age-ai-code-day-3
title: Day 3
---

### PHẦN 1 — LÝ THUYẾT

**1. `const` vs `let` — Khai báo biến**

JavaScript/TypeScript có 3 từ khóa. QC chỉ nhớ 2:

- **`const`** — dùng cho mọi thứ. URL, selector, object, array đều `const`. Giá trị không gán lại được.
- **`let`** — chỉ khi cần gán lại (đếm retry, flag trong vòng lặp).
- **`var`** — ❌ không dùng (function scope cũ, gây bug).

> **Quy tắc vàng:** Luôn `const`. Nếu TypeScript báo lỗi `Cannot assign to 'x' because it is a constant`, đổi sang `let`.

**2. Function (Hàm) là gì?**

Hãy tưởng tượng khi làm manual testing, bạn có bước "Đăng nhập" lặp lại ở 10 test case. Thay vì viết 10 lần, bạn gộp thành "Test Case con" và gọi tên. Trong code, **Function** chính là "Test Case con" đó: khối lệnh được đặt tên, đóng gói để tái sử dụng.

**3. Arrow Function**

**3.1 Vấn đề Regular vs Arrow giải quyết gì?**
JavaScript có 2 cách viết function: Regular (`function`) và Arrow (`=>`).
Regular đôi khi gây lỗi "mất ngữ cảnh" (`this`) vì tạo không gian riêng. Arrow function ngắn gọn hơn và tự giữ nguyên ngữ cảnh — cực kỳ quan trọng để Playwright không nhầm lẫn giữa các tab hay trang.

**3.2 Các biến thể cú pháp Arrow function cần biết:**

| Cách viết | Cú pháp | Ví dụ trong test |
|:---|:---|:---|
| **0 tham số** | `() => biểu_thức` | `const getUrl = () => page.url();` |
| **1 tham số** | `x => biểu_thức` (bỏ ngoặc được) | `const getName = user => user.name;` |
| **Nhiều tham số** | `(x, y) => biểu_thức` | `const sum = (a, b) => a + b;` |
| **Nhiều dòng lệnh** | `() => { lệnh1; return kq; }` | Phải có `return` tường minh |
| **Trả về object** | `() => ({ key: value })` | Bọc `()` để không nhầm với `{}` |

> **Mẹo:** Chỉ **1 tham số** mới bỏ ngoặc `()`. Chỉ **1 dòng biểu thức** mới bỏ `return` và `{}`.

**3.3 So sánh Regular vs Arrow — Chi tiết:**

| Tính năng | Regular | Arrow |
|:---|:---|:---|
| Cú pháp | `function name() {}` | `const name = () => {}` |
| `this` | Tạo ngữ cảnh riêng | Kế thừa từ nơi khai báo |
| `arguments` | Có sẵn | **Không** — dùng `...rest` |
| Dùng `new` (constructor) | Được | **Lỗi** |
| Hoisting | Được | **Không** |
| Implicit return | Không | Có (nếu body là 1 biểu thức) |

**3.4 Khi nào KHÔNG dùng Arrow function?**
- **Làm constructor:** `new myFunc()` → lỗi TypeError
- **Object method cần `this` động:** `obj.greet = () => {...}` — `this` không trỏ vào `obj`
- **Cần `arguments`:** Arrow không có, phải dùng rest `(...params) => {}`
- **Generator function:** `function*` không viết arrow được

**4. Template Literal — Ghép chuỗi thông minh**

Dùng backtick `` ` `` và `${variable}` để nhúng biến, thay vì dùng `+`.

```typescript
// ❌ Cũ: dùng dấu +
const url = 'https://b2b-app.com' + '/products/' + slug;

// ✅ Mới: template literal
const url = `https://b2b-app.com/products/${slug}`;
```

Template literal đặc biệt hữu ích khi đặt tên test động (data-driven) và xây URL từ biến.

> **Lưu ý:** Phím backtick `` ` `` nằm góc trên bên trái (cạnh Esc), khác phím nháy đơn `'`.

**Điểm chính cần nhớ:**
- `const` cho biến cố định, `let` khi cần gán lại — tránh `var`.
- **Function** giúp không lặp code.
- Arrow function: **5 dạng cú pháp**, **không** `arguments`, **không** `new`, **không** hoisting.
- **Template literal** dùng `` `${}` `` để ghép chuỗi + biến.

---

### PHẦN 2 — CODE EXAMPLE

```typescript
// ✅ const — hầu hết mọi thứ
const BASE_URL = 'https://b2b-app.com';
const ORDER_FLOW = {
  spinner: '.loading-spinner',
  submitBtn: 'button[type="submit"]',
};
let retryCount = 0;    // chỉ let khi cần gán lại
retryCount++;
```

```typescript
// ❌ Regular function — cồng kềnh
function clickSubmitButton() {
  return page.locator('button[type="submit"]').click();
}

// ✅ Arrow function — gọn, an toàn ngữ cảnh
const clickSubmitButton = () => page.locator('button[type="submit"]').click();
```

```typescript
// ✅ 5 dạng Arrow function trong Playwright
const getUrl = () => page.url();                                    // 0 tham số
const getText = el => el.textContent;                               // 1 tham số (bỏ ngoặc)
const fillLogin = async (page, user, pass) => {                     // nhiều tham số
  await page.fill('#username', user);
  await page.fill('#password', pass);
};
const buildOrder = (name, qty) => ({ name, qty, status: 'pending' }); // trả về object
```

```typescript
// ✅ Template literal với test case
const slug = 'grey-jacket';
test(`URL động cho ${slug}`, async ({ page }) => {
  await page.goto(`${BASE_URL}/products/${slug}`);
});
```

---

### PHẦN 3 — BÀI THỰC HÀNH

Phần này sẽ được đưa ra vào thực hành project.

---

### PHẦN 4 — INTERVIEW Q&A

**Câu 1:** "Tại sao team quy định dùng Arrow function cho helper Playwright thay vì Regular?"
→ Arrow không bind `this` riêng. Regular tạo `this` riêng — dễ mất context khi truyền vào fixtures/config.

**Câu 2:** "`const` vs `let` khác nhau thế nào? Khi nào dùng cái nào?"
→ `const`: không gán lại được, dùng cho hầu hết mọi thứ. `let`: gán lại được. Chỉ `let` khi thực sự cần thay đổi giá trị.

**Câu 3:** "App đổi tên class của spinner. Refactor thế nào nếu đã dùng arrow function?"
→ Vì đã đóng gói thành 1 arrow function duy nhất → chỉ sửa 1 lần ở nơi định nghĩa (DRY).

**Câu 4:** "Arrow function có hoisting không?"
→ Regular: được (gọi trước khi khai báo). Arrow: không → `ReferenceError`.

**Câu 5:** "Arrow function không có `arguments`. Khi cần lấy tất cả tham số, làm thế nào?"
→ Dùng rest parameter `(...params) => {}`. Biến `params` chứa tất cả đối số.

**Câu 6:** "Template literal dùng dấu gì? Lợi ích so với dùng `+`?"
→ Backtick `` ` ``. Nhúng biến `${var}` trực tiếp, code ngắn hơn, dễ đọc.
