---
sidebar_position: 1
slug: /education/age-ai/code/day-4
id: age-ai-code-day-4
title: Day 4
---

### PHẦN 1 — LÝ THUYẾT

**1. Async/Await — Chờ browser action hoàn thành**

Đây là khái niệm **quan trọng nhất** toàn bộ khóa học. Mọi thao tác với browser đều cần `await`.

Khi test manual, bạn click nút, mắt thấy spinner quay, não tự hiểu "đợi xong rồi kiểm tra". JavaScript thì không — nó chạy cực nhanh (mili-giây). Không có `await`, code sẽ click và **ngay lập tức** nhảy sang dòng tiếp theo kiểm tra kết quả — lúc đó API chưa trả về, test báo lỗi "Element not found".

- **`async`** đánh dấu hàm có chứa tác vụ cần thời gian (gọi API, tải trang, click).
- **`await`** bắt buộc code "tạm dừng" ở dòng đó cho đến khi hành động hoàn tất.

> **Quy tắc nhớ nhanh:** Dòng nào gọi `page.` → thêm `await` trước nó.

**2. Object và Destructuring — Quản lý test data**

Object là cách nhóm thông tin liên quan (sản phẩm, user, config) vào một biến duy nhất.

```typescript
// Object — nhóm thông tin sản phẩm
const greyJacket = {
  name: 'Grey jacket',
  price: '£55.00',
  slug: 'grey-jacket',
};
// Truy cập: greyJacket.name, greyJacket.price, greyJacket.slug

// Destructuring — lấy nhiều field cùng lúc
const { name, price } = greyJacket;
// Tương đương: const name = greyJacket.name; const price = greyJacket.price;
```

Destructuring đặc biệt hữu ích khi nhận tham số: `async ({ page }) => {...}` — đó là destructuring lấy `page` từ object Playwright truyền vào.

**2.1. State trong Automation Test là gì?**

**State** = trạng thái của ứng dụng tại một thời điểm. Khi test manual, bạn tự quản lý state bằng mắt và não: "À mình đang ở trang login, chưa đăng nhập", "Mình vừa thêm sản phẩm vào giỏ, giỏ có 1 item". Trong automation, state bao gồm:

| Loại state | Ví dụ | Tác động đến test |
|:---|:---|:---|
| **Auth** | Đã login / chưa login | Test checkout cần đã login |
| **URL** | Đang ở trang nào | Click link chỉ đúng nếu đang ở trang cha |
| **Cart** | Giỏ hàng có sản phẩm chưa | Test checkout cần cart có hàng |
| **Data** | DB có dữ liệu gì | Test tìm kiếm cần có sản phẩm trong DB |
| **Cookies** | Session, preference | Lưu trạng thái "đã đóng banner" |

**Vấn đề:** Nếu test A login thành công rồi logout, test B chạy sau có thể bị ảnh hưởng (session cũ, cart cũ). Đây gọi là **state leak** — nguyên nhân số 1 gây flaky test.

**Giải pháp Playwright:** Mỗi `test()` tự động được cấp một **browser context riêng** (cookies, localStorage sạch). Bạn không cần làm gì thêm — Playwright đã lo isolation cơ bản.

> **Quy tắc cho QC:** Trong mỗi test, luôn dùng `page.goto()` để điều hướng đến trang mình cần, KHÔNG giả định rằng mình đang ở trang nào từ test trước. Mỗi test là một "phiên làm việc" hoàn toàn mới.

**3. Array và `for...of` — Test data-driven**

Array chứa danh sách test data. `for...of` duyệt từng phần tử để sinh test case tự động.

```typescript
// Array test data
const products = [
  { name: 'Grey jacket', price: '£55.00', slug: 'grey-jacket' },
  { name: 'Noir jacket', price: '£60.00', slug: 'noir-jacket' },
];

// for...of — sinh 1 test case cho mỗi sản phẩm
for (const product of products) {
  test(`${product.name} — giá hiển thị đúng`, async ({ page }) => {
    await page.goto(`/products/${product.slug}`);
    await expect(page.getByText(product.price)).toBeVisible();
  });
}
// Kết quả: 2 test case độc lập trong HTML report
```

**4. `npm init playwright@latest` — Cài đặt 1 chạm**

Ngày xưa cài Playwright thủ công rất mệt: tải browser driver, tạo folder, config. Lệnh này giống "nút cài đặt tự động": nó hỏi vài câu (ngôn ngữ, browser) và setup 100% môi trường Playwright hoàn chỉnh.

**5. Cấu trúc Playwright project**

Sau khi chạy `npm init playwright@latest`, project có cấu trúc:

```
my-playwright-project/
├── tests/                    # Chứa file .spec.ts (test script)
│   └── example.spec.ts       # File test mẫu
├── test-results/             # Kết quả chạy test (tự tạo)
├── playwright-report/        # HTML report (tự tạo)
├── playwright.config.ts      # Cấu hình chính (browser, timeout, report...)
├── package.json              # Dependencies và scripts
└── .gitignore
```

| Manual Testing | Playwright |
|---|---|
| Thư mục `TestCases/` | `tests/` — file `.spec.ts` |
| File Excel test data | `test-data/` hoặc object/array trong code |
| File hướng dẫn chạy | `playwright.config.ts` |
| Báo cáo Excel | HTML Report tự động |

**6. File `.spec.ts` và HTML Report**

- **`.spec.ts`** = file test. Mỗi file chứa nhiều `test()` (test case). Dùng `test.describe()` để nhóm.
- **HTML Report** = báo cáo tự động sau khi chạy test. Gồm: PASS/FAIL, thời gian, screenshot khi fail, trace từng bước.

> So với manual: thay vì đánh dấu PASS/FAIL trong Excel, Playwright tạo report tự động có trace để debug.

**Điểm chính cần nhớ:**
- **`async/await`** là quan trọng nhất — mọi `page.` đều cần `await`.
- **State** là trạng thái ứng dụng (auth, URL, cart...). Mỗi test tự tạo state riêng — không phụ thuộc test khác.
- **Object** nhóm dữ liệu liên quan. **Destructuring** `{ a, b } = obj` lấy nhiều field cùng lúc.
- **Array + `for...of`** giúp viết 1 lần, chạy nhiều test data.
- `npm init playwright@latest` = cài đặt tự động toàn bộ môi trường.
- playwright.config.ts = trung tâm cấu hình. HTML Report = báo cáo trực quan.

---

### PHẦN 2 — CODE EXAMPLE

**async/await — Đúng và Sai:**

```typescript
// ❌ SAI — thiếu await
test('login', ({ page }) => {
  page.goto('https://b2b-app.com/login');
  page.fill('#username', 'admin');
  page.click('#login-btn');
  expect(page.locator('.welcome')).toBeVisible(); // Lỗi: chưa load xong
});

// ✅ ĐÚNG — có await
test('login', async ({ page }) => {
  await page.goto('https://b2b-app.com/login');
  await page.fill('#username', 'admin');
  await page.click('#login-btn');
  await expect(page.locator('.welcome')).toBeVisible();
});
```

**Object + Destructuring trong test:**

```typescript
// Test data dạng object
const user = {
  email: 'admin@b2b.com',
  password: 'Abc@123',
  role: 'admin',
};

// Destructuring — code gọn hơn
const { email, password } = user;
await page.getByLabel('Email').fill(email);
await page.getByLabel('Password').fill(password);
```

**Array + for...of — data-driven test:**

```typescript
// 1 array cho nhiều test case
const testUsers = [
  { email: 'admin@b2b.com', pass: 'Abc@123', expectSuccess: true },
  { email: 'wrong@b2b.com', pass: 'wrong', expectSuccess: false },
];

for (const { email, pass, expectSuccess } of testUsers) {
  test(`Login với ${email}`, async ({ page }) => {
    await page.goto('https://b2b-app.com/login');
    await page.getByLabel('Email').fill(email);
    await page.getByLabel('Password').fill(pass);
    await page.getByRole('button', { name: 'Sign in' }).click();

    if (expectSuccess) {
      await expect(page).toHaveURL(/dashboard/);
    } else {
      await expect(page.getByText('Invalid credentials')).toBeVisible();
    }
  });
}
```

**Chạy test với command:**

```bash
npx playwright test                          # chạy tất cả
npx playwright test login.spec.ts            # chạy 1 file
npx playwright test --headed                 # hiện browser (mặc định headless)
npx playwright test --project=chromium       # chạy trên Chromium
npx playwright show-report                   # mở HTML report
```

---

### PHẦN 3 — INTERVIEW Q&A

**Câu 1:** "Tại sao Playwright dùng async/await? Không có await thì sao?"
→ Browser actions (click, navigate, fill) là bất đồng bộ. `async/await` giúp code chạy tuần tự, chờ action xong mới làm bước tiếp. Không `await` → code chạy loạn xạ, test flaky.

**Câu 2:** "Destructuring `{ page }` trong tham số test có nghĩa gì?"
→ Playwright truyền vào một object chứa `page`, `browser`, `context`... Destructuring lấy thẳng property `page` từ object đó, không cần viết `const page = ...`.

**Câu 3:** "`for...of` khác gì với `for` (for i) thông thường?"
→ `for...of` duyệt trực tiếp từng phần tử array. Không cần dùng index, code sáng hơn, ít lỗi hơn.

**Câu 4:** "Khi nào dùng `npm init playwright@latest` thay vì cài từng gói?"
→ Dùng cho project mới — nó tạo cấu trúc + config + tải browser. Cài từng gói (`npm i @playwright/test`) khi thêm Playwright vào project có sẵn.

**Câu 5:** "Nếu quên khai báo `async` cho test nhưng vẫn dùng `await`, điều gì xảy ra?"
→ Lỗi cú pháp ngay lập tức. `await` chỉ hợp lệ trong hàm được đánh dấu `async`.

**Câu 6:** "Làm thế nào để đọc HTML Report tìm nguyên nhân test fail?"
→ Mở report, test fail màu đỏ → click vào. Có error message, screenshot tại thời điểm fail, trace xem từng step Playwright đã làm.
