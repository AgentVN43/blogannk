---
sidebar_position: 1
slug: /education/age-ai/code/day-5
id: age-ai-code-day-5
title: Day 5
---

### PHẦN 1 — LÝ THUYẾT

**1. `import`/`export` — Tách file, tái sử dụng code**

Thay vì viết tất cả trong 1 file, bạn tách test data, page object, helper ra file riêng và `import` vào file test.

```typescript
// test-data/users.ts — export dữ liệu
export const users = {
  admin: { email: 'admin@b2b.com', password: 'Abc@123' },
  viewer: { email: 'viewer@b2b.com', password: 'View@456' },
};

export const BASE_URL = 'https://b2b-app.com';

// tests/login.spec.ts — import vào dùng
import { users, BASE_URL } from '../test-data/users';
```

**2. Optional chaining `?.` và Nullish coalescing `??`**

- **`?.`** — truy cập property an toàn, trả về `undefined` thay vì crash nếu object là `null/undefined`.
- **`??`** — dùng giá trị mặc định khi gặp `null/undefined` (khác `||` — fallback với mọi falsy).

```typescript
// ❌ Crash nếu null
const name = user.profile.displayName;  // TypeError nếu user.profile undefined

// ✅ Optional chaining — an toàn
const name = user?.profile?.displayName;  // undefined thay vì crash

// ✅ Nullish coalescing — mặc định
const timeout = config?.timeout ?? 30000;
```

> **`??` vs `||`:** `??` chỉ fallback khi `null/undefined`. `||` fallback khi mọi falsy (`0`, `''`, `false`). Trong test dùng `??` để tránh bug với giá trị `0` hoặc `''`.

**3. TypeScript Interface — "Khuôn" cho object**

Interface định nghĩa cấu trúc object. VS Code tự gợi ý field và báo lỗi khi sai ngay lúc gõ.

```typescript
interface Product {
  name: string;
  price: string;
  slug: string;
  inStock?: boolean;  // ? = optional
}

// VS Code tự gợi ý name, price, slug, inStock
const greyJacket: Product = { name: 'Grey jacket', price: '£55.00', slug: 'grey-jacket' };
```

**4. `try`/`catch` — Xử lý lỗi và debug**

Bắt lỗi, chụp screenshot, throw lại để test vẫn FAIL.

```typescript
try {
  await page.goto('/checkout');
  await page.getByRole('button', { name: 'Pay now' }).click();
  await expect(page.getByText('Order confirmed')).toBeVisible();
} catch (error) {
  await page.screenshot({ path: `screenshots/fail-${Date.now()}.png` });
  throw error;  // QUAN TRỌNG: throw lại để test FAIL
}
```

> Cấu hình tự động (thay try/catch thủ công): `screenshot: 'only-on-failure'` trong playwright.config.ts

**5. Locators, Actions, Assertions cơ bản trong Playwright**

**Locators — tìm element (ưu tiên từ trên xuống):**

| Cách | Khi nào dùng | Ví dụ |
|:---|:---|:---|
| `getByRole` | Button, link, heading, textbox | `getByRole('button', { name: 'Sign in' })` |
| `getByLabel` | Form input có label | `getByLabel('Email')` |
| `getByText` | Tìm theo text content | `getByText('Grey jacket')` |
| `getByTestId` | Dev đã gắn `data-testid` | `getByTestId('submit-btn')` |
| `locator()` | CSS selector — dùng cuối cùng | `locator('.product-card')` |

**Actions cơ bản:** `click()`, `fill()`, `selectOption()`, `check()`, `hover()`

**Assertions cơ bản:** `toBeVisible()`, `toContainText()`, `toHaveURL()`, `toBeEnabled()`

> **Luôn dùng `expect` của Playwright** — có auto-retry (tự thử lại đến 30 giây trước khi fail). Không dùng `expect` của Node.js hay thư viện khác.

**6. Quản lý State — Ba cấp độ từ đơn giản đến nâng cao**

**Cấp 1 — Test Isolation (cơ bản nhất):** Mỗi test tự tạo state riêng, không phụ thuộc test khác.

```typescript
// ✅ Đúng: test tự navigate, tự thêm sản phẩm
test('checkout thành công', async ({ page }) => {
  await page.goto('/products/grey-jacket');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  // ... test checkout
});
```

Playwright tự động cấp mỗi `test()` một context riêng (cookies, localStorage sạch). Không cần làm gì thêm.

**Cấp 2 — Hooks (`beforeEach`/`afterEach`):** Khi nhiều test có chung state setup.

```typescript
test.describe('Giỏ hàng', () => {
  // Chạy TRƯỚC mỗi test — navigate đến product page
  test.beforeEach(async ({ page }) => {
    await page.goto('/products/grey-jacket');
    await page.getByRole('button', { name: 'Add to cart' }).click();
  });

  // Chạy SAU mỗi test — dọn dẹp
  test.afterEach(async ({ page }) => {
    // xóa cart, logout nếu cần
  });

  test('hiển thị đúng tên sản phẩm trong cart', async ({ page }) => {
    await page.goto('/cart');
    await expect(page.getByText('Grey jacket')).toBeVisible();
  });

  test('hiển thị đúng giá', async ({ page }) => {
    await page.goto('/cart');
    await expect(page.getByText('£55.00')).toBeVisible();
  });
});
```

> **Khi nào dùng:** `beforeEach` cho việc navigate/login lặp lại. `afterEach` cho cleanup (logout, xóa data). Không dùng để share state giữa các test.

**Cấp 3 — `storageState` (auth state):** Khi cần login 1 lần, dùng cho tất cả test.

```typescript
// Bước 1: Tạo file auth.setup.ts — login và lưu session
import { test as setup } from '@playwright/test';
setup('login', async ({ page }) => {
  await page.goto('https://b2b-app.com/login');
  await page.getByLabel('Email').fill('admin@b2b.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.context().storageState({ path: 'auth.json' }); // lưu session
});

// Bước 2: playwright.config.ts — dùng session đã lưu
use: { storageState: 'auth.json' } // tự động đăng nhập cho mọi test
```

**Best Practices khác:**
- **Test user-visible behavior:** Kiểm tra những gì user thấy, không test class name.
- **Arrange–Act–Assert (AAA):** Mỗi test gồm 3 phần rõ ràng — Setup (arrange) → Hành động (act) → Kiểm tra (assert).
- **Naming convention:** `test('điều kiện — kết quả mong đợi', ...)`.

> **Câu hỏi tự kiểm tra:** "Nếu dev đổi class name từ `.btn-primary` sang `.button-main` mà không đổi giao diện, test có fail không?" — Nếu có → đang test implementation, cần refactor.

**Điểm chính cần nhớ:**
- `import`/`export` giúp tách file, tái sử dụng code.
- `?.` tránh crash khi null. `??` cho giá trị mặc định. **Không dùng** `||` cho mặc định trong test.
- **Interface** giúp VS Code gợi ý và bắt lỗi sớm.
- `try/catch` bắt lỗi → screenshot → `throw error` để test FAIL.
- Locator ưu tiên: `getByRole` > `getByLabel` > `getByText` > `getByTestId` > `locator()`.
- Luôn dùng `expect` của Playwright (có auto-retry).
- Quản lý state theo 3 cấp: **Isolation** (mặc định) → **Hooks** (setup chung) → **storageState** (auth).

---

### PHẦN 2 — CODE EXAMPLE

```typescript
// ✅ Optional chaining + Nullish coalescing trong test
const productName = await page.locator('h1').textContent();
const displayName = productName ?? 'Unknown product';

// ❌ Không dùng || cho default — nếu productName là '' (chuỗi rỗng) thì || vẫn fallback
const bad = productName || 'Unknown'; // sai nếu '' là giá trị hợp lệ
```

```typescript
// ✅ Interface cho test data
interface Order {
  productName: string;
  quantity: number;
  total: number;
}

const createOrderSummary = (order: Order) =>
  `Đã đặt ${order.quantity} x ${order.productName} — Tổng: £${order.total}`;
```

```typescript
// ✅ try/catch với screenshot khi fail
test('checkout hoàn chỉnh', async ({ page }) => {
  try {
    await page.goto('https://b2b-app.com/cart');
    await page.getByRole('button', { name: 'Check out' }).click();
    await expect(page).toHaveURL(/checkout/);
  } catch (error) {
    await page.screenshot({ path: `screenshots/checkout-fail.png`, fullPage: true });
    throw error;
  }
});
```

```typescript
// ✅ Best practice: test user-visible behavior
// ❌ Sai: test implementation
await expect(page.locator('.btn-primary.is-loading')).toBeVisible();

// ✅ Đúng: test user thấy
await expect(page.getByRole('button', { name: 'Placing order...' })).toBeDisabled();
```

```typescript
// ✅ Best practice: test isolation
// Mỗi test tự setup — không phụ thuộc test khác
test('checkout thành công', async ({ page }) => {
  await page.goto('/products/grey-jacket');
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.goto('/cart');
  await page.getByRole('button', { name: 'Check out' }).click();
  await expect(page).toHaveURL(/checkout/);
});
```

```typescript
// ✅ Import/Export + Interface + Arrow function — code chuẩn

// test-data/products.ts
export interface Product {
  name: string;
  price: string;
  slug: string;
}

export const products: Product[] = [
  { name: 'Grey jacket', price: '£55.00', slug: 'grey-jacket' },
  { name: 'Noir jacket', price: '£60.00', slug: 'noir-jacket' },
];

// tests/product.spec.ts
import { test, expect } from '@playwright/test';
import { products } from '../test-data/products';

for (const product of products) {
  test(`Kiểm tra sản phẩm: ${product.name}`, async ({ page }) => {
    await page.goto(`/products/${product.slug}`);
    await expect(page.locator('h1')).toContainText(product.name);
    await expect(page.getByText(product.price)).toBeVisible();
  });
}
```

```typescript
// ✅ beforeEach + afterEach — quản lý state cho nhiều test
test.describe('Quản lý đơn hàng', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://b2b-app.com/login');
    await page.getByLabel('Email').fill('admin@b2b.com');
    await page.getByLabel('Password').fill('Abc@123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL(/dashboard/);
  });

  test.afterEach(async ({ page }) => {
    // Logout sau mỗi test
    await page.getByRole('button', { name: 'Logout' }).click();
  });

  test('tạo đơn hàng mới', async ({ page }) => {
    await page.getByRole('button', { name: 'New order' }).click();
    await expect(page.getByText('Order created')).toBeVisible();
  });

  test('xem danh sách đơn hàng', async ({ page }) => {
    await page.getByRole('link', { name: 'Orders' }).click();
    await expect(page.locator('.order-table')).toBeVisible();
  });
});
```

```typescript
// ✅ Arrange–Act–Assert (AAA) pattern
test('tìm kiếm sản phẩm theo tên', async ({ page }) => {
  // Arrange — chuẩn bị
  await page.goto('https://b2b-app.com/products');

  // Act — hành động
  await page.getByPlaceholder('Search...').fill('Grey jacket');
  await page.keyboard.press('Enter');

  // Assert — kiểm tra
  await expect(page.getByText('Grey jacket')).toBeVisible();
  await expect(page.getByText('£55.00')).toBeVisible();
});
```

---

### PHẦN 3 — BÀI THỰC HÀNH

Phần này sẽ được đưa ra vào thực hành project.


---

### PHẦN 4 — INTERVIEW Q&A

**Câu 1:** "Optional chaining `?.` và Nullish coalescing `??` giải quyết vấn đề gì trong test?"
→ `?.` tránh crash khi element/locator null. `??` gán giá trị mặc định. Giúp test không bị dừng đột ngột vì dữ liệu không tồn tại.

**Câu 2:** "Interface trong TypeScript có lợi ích gì cho QC viết test?"
→ VS Code tự gợi ý field, báo lỗi sai kiểu ngay lúc gõ, giảm bug khi gõ sai tên field. Đặc biệt hữu ích khi quản lý nhiều test data.

**Câu 3:** "Tại sao luôn dùng `getByRole` thay vì CSS selector?"
→ `getByRole` test behavior user thấy — đổi class name không vỡ test. CSS selector test implementation detail.

**Câu 4:** "`try/catch` trong test — có cần `throw error` không? Nếu không throw thì sao?"
→ Phải `throw error`. Nếu không throw, test sẽ **PASS** dù có lỗi — kết quả sai. Cách khác: cấu hình `screenshot: 'only-on-failure'` trong config để tự động.

**Câu 5:** "Thế nào là test isolation? Làm sao kiểm tra test có isolation không?"
→ Mỗi test tự setup state, không phụ thuộc test khác. Kiểm tra: chạy `--repeat-each=3` — nếu fail ngẫu nhiên = test phụ thuộc thứ tự (flaky).

**Câu 6:** "`expect` của Playwright khác gì `assert` của Node.js hoặc `expect` của Jest?"
→ Playwright expect có auto-retry (tự thử lại đến timeout). `assert`/Jest expect throw ngay lập tức — không đợi element xuất hiện, dễ fail khi UI load chậm.

**Câu 7:** "`beforeEach` dùng để làm gì? Khi nào nên dùng thay vì copy-paste code vào mỗi test?"
→ `beforeEach` chạy trước mỗi test trong describe, dùng cho setup lặp lại (login, navigate). Tránh copy-paste, dễ bảo trì — sửa 1 chỗ là áp dụng cho tất cả test trong nhóm.

**Câu 8:** "`storageState` giải quyết vấn đề gì? Khi nào cần dùng?"
→ Giải quyết vấn đề login lại mỗi test — lưu cookies + localStorage sau khi login 1 lần, dùng lại cho tất cả test. Dùng khi có 20+ test cần authenticated state, giúp chạy nhanh hơn vì không login lại từ đầu.
