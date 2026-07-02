---
sidebar_position: 1
slug: /education/age-ai/code/project-1-3
id: project-1-3
title: Project 1 - Bài 3
---

# Bài C — Nâng Cấp Codebase Bài B Bằng Custom Fixtures
### Refactor: từ new XxxPage(page) thủ công → tự động inject qua Fixtures
> Điều kiện: Đã hoàn thành Bài B, test suite đang chạy tốt với POM
> App: https://sauce-demo.myshopify.com (cùng project với Bài B)
> Mục tiêu: Hiểu Fixtures giải quyết vấn đề gì, refactor đúng cách

---

## Tại Sao Bài C Là Tùy Chọn?

Sau Bài B, bạn đã có test suite hoàn chỉnh với POM — **đủ dùng cho mọi project thật.**

Bài C giải quyết 1 vấn đề nhỏ hơn: trong Bài B, mỗi test phải viết thủ công:

```typescript
// Lặp lại ở mỗi test trong Bài B
const loginPage   = new LoginPage(page)
const productPage = new ProductPage(page)
const cartPage    = new CartPage(page)
```

Custom Fixtures tự động hóa việc khởi tạo này. Đây là tiện ích — không phải bắt buộc.

**Khi nào nên quay lại học Bài C?**
```
✦ Khi test suite có 20+ tests và việc viết new XxxPage(page) bắt đầu tẻ nhạt
✦ Khi team muốn chuẩn hóa cách khởi tạo Page Objects
✦ Khi muốn thêm setup logic phức tạp hơn (seed data, API calls) trước mỗi test
✦ Khi đã thoải mái với POM và muốn viết code gọn hơn
```

---

## Ôn Lại: POM và Fixtures Giải Quyết Vấn Đề Gì?

```
POM giải quyết:      "Selector và action đang lặp lại ở nhiều spec files"
                     → Gom vào class riêng cho từng page

Fixtures giải quyết: "Phải viết new LoginPage(page) ở mỗi test"
                     → Tự động tạo và inject Page Object vào test

Quan hệ:
POM (Bài B)  →  định nghĩa LoginPage class
Fixtures (Bài C)  →  tự động gọi new LoginPage(page) và đưa vào test
```

**Fixtures KHÔNG thay thế POM.** Fixtures xây trên POM. Không có POM → không có gì để inject.

---

## Phần 1 — Hiểu Fixtures Trước Khi Viết

### Fixtures mặc định của Playwright

Playwright đã có sẵn một số fixtures bạn đang dùng hàng ngày mà không biết:

```typescript
// { page } trong mỗi test chính là 1 fixture mặc định của Playwright
test('example', async ({ page }) => {
//                        ^^^^
//              Đây là fixture — Playwright tự tạo page mới cho mỗi test
//              Bạn không cần new Page() hay gì cả
  await page.goto('/')
})

// Các fixtures mặc định khác:
// { browser }   → Browser instance
// { context }   → BrowserContext
// { request }   → APIRequestContext (gọi API trực tiếp)
```

### Custom Fixtures — mở rộng fixtures mặc định

```typescript
// Ý tưởng: thêm loginPage, productPage, cartPage vào danh sách fixtures
// Để test có thể dùng như { page } — tự động có sẵn, không cần khởi tạo

test('example', async ({ page, loginPage, productPage }) => {
//                               ^^^^^^^^^  ^^^^^^^^^^^
//                        Custom fixtures — tự động được inject
  await loginPage.goto()
  await productPage.goto('grey-jacket')
})
```

---

## Phần 2 — Tạo Custom Fixtures File

```typescript
// tests/fixtures/index.ts — FILE MỚI, thêm vào project Bài B
import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'

// Định nghĩa type cho custom fixtures
// TypeScript cần biết fixture nào có kiểu dữ liệu gì
type MyFixtures = {
  loginPage: LoginPage
  productPage: ProductPage
  cartPage: CartPage
}

// base.extend: mở rộng fixtures mặc định của Playwright
export const test = base.extend<MyFixtures>({

  // Mỗi fixture là 1 async function
  // { page } — fixture mặc định của Playwright, đã tự động inject
  // use(...)  — "dùng giá trị này cho test đang chạy"
  loginPage: async ({ page }, use) => {
    // Tạo LoginPage — đây là new LoginPage(page) mà bạn đã viết thủ công ở Bài B
    const loginPage = new LoginPage(page)
    // Inject vào test — test nhận được loginPage đã khởi tạo sẵn
    await use(loginPage)
    // Sau khi test xong: có thể cleanup ở đây nếu cần (logout, clear state...)
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page))
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page))
  },

})

// Export expect để spec files import từ fixtures thay vì từ @playwright/test
export { expect }
```

---

## Phần 3 — Refactor Spec Files

> Chỉ cần thay đổi 2 điều trong mỗi spec file:
> 1. Đổi import: từ `@playwright/test` → `../../fixtures`
> 2. Xóa dòng `const xxxPage = new XxxPage(page)` trong mỗi test
>    → thêm fixture vào parameter của test

### 3.1 Refactor login.spec.ts

```typescript
// TRƯỚC (Bài B):
import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { users } from '../../test-data/users'

test.use({ storageState: { cookies: [], origins: [] } })

test.describe('Login', () => {
  test('đăng nhập thành công với credentials hợp lệ', async ({ page }) => {
    const loginPage = new LoginPage(page)  // ← thủ công
    await loginPage.goto()
    await loginPage.login(users.valid.email, users.valid.password)
    await loginPage.expectLoginSuccess()
  })
})
```

```typescript
// SAU (Bài C):
import { test, expect } from '../../fixtures'  // ← đổi import
// Không cần import LoginPage nữa — fixtures tự lo
import { users } from '../../test-data/users'

test.use({ storageState: { cookies: [], origins: [] } })

test.describe('Login', () => {
  test('đăng nhập thành công với credentials hợp lệ',
    async ({ loginPage }) => {  // ← thêm loginPage vào parameter
    // Không còn: const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login(users.valid.email, users.valid.password)
    await loginPage.expectLoginSuccess()
  })

  test('hiển thị lỗi khi đăng nhập với password sai',
    async ({ loginPage }) => {
    await loginPage.goto()
    await loginPage.login(
      users.invalidPassword.email,
      users.invalidPassword.password
    )
    await loginPage.expectStillOnLoginPage()
    await loginPage.expectErrorVisible()
  })

  test.describe('Validation khi bỏ trống fields', () => {

    test('không thể login khi bỏ trống cả email và password',
      async ({ loginPage, page }) => {
      // Có thể dùng cả loginPage (fixture) và page (fixture mặc định) cùng lúc
      await loginPage.goto()
      await page.getByRole('button', { name: 'Sign in' }).click()
      await loginPage.expectStillOnLoginPage()
    })

    test('không thể login khi bỏ trống password',
      async ({ loginPage, page }) => {
      await loginPage.goto()
      await page.getByLabel('Email').fill(users.valid.email)
      await page.getByRole('button', { name: 'Sign in' }).click()
      await loginPage.expectStillOnLoginPage()
    })

  })
})
```

### 3.2 Refactor cart.spec.ts

```typescript
// TRƯỚC (Bài B):
import { test, expect } from '@playwright/test'
import { ProductPage } from '../../pages/ProductPage'
import { CartPage } from '../../pages/CartPage'

test('thêm Grey jacket vào giỏ hàng', async ({ page }) => {
  const productPage = new ProductPage(page)  // ← thủ công
  const cartPage = new CartPage(page)         // ← thủ công
  // ...
})
```

```typescript
// SAU (Bài C):
import { test, expect } from '../../fixtures'  // ← đổi import
import { products } from '../../test-data/products'

test.describe('Shopping Cart', () => {

  test('thêm Grey jacket vào giỏ hàng — số lượng cập nhật đúng',
    async ({ productPage, cartPage }) => {  // ← inject 2 fixtures cùng lúc
    // Không còn new ProductPage(page), new CartPage(page)

    await productPage.goto(products.greyJacket.slug)
    await productPage.expectProductName(products.greyJacket.name)
    await productPage.addToCart()

    await cartPage.goto()
    await cartPage.expectItemCount(1)
    await cartPage.expectProductInCart(products.greyJacket.name)
  })

  test('thêm 2 sản phẩm khác nhau — giỏ hàng có đủ cả 2',
    async ({ productPage, cartPage }) => {
    await productPage.goto(products.greyJacket.slug)
    await productPage.addToCart()

    await productPage.goto(products.noirJacket.slug)
    await productPage.addToCart()

    await cartPage.goto()
    await cartPage.expectItemCount(2)
    await cartPage.expectProductInCart(products.greyJacket.name)
    await cartPage.expectProductInCart(products.noirJacket.name)
  })

  for (const product of Object.values(products)) {
    test(`${product.name} — tên và giá hiển thị đúng`,
      async ({ productPage }) => {  // ← chỉ cần productPage
      await productPage.goto(product.slug)
      await productPage.expectProductName(product.name)
      await productPage.expectProductPrice(product.price)
    })
  }

})
```

### 3.3 Refactor checkout.spec.ts

```typescript
// SAU (Bài C):
import { test, expect } from '../../fixtures'
import { products } from '../../test-data/products'
import { checkoutData } from '../../test-data/checkout'

test.describe('Checkout Flow', () => {

  test('hoàn thành checkout với thông tin hợp lệ @critical',
    async ({ productPage, cartPage, page }) => {
    // productPage, cartPage từ fixtures
    // page từ fixture mặc định của Playwright — vẫn dùng được

    await productPage.goto(products.greyJacket.slug)
    await productPage.addToCart()

    await cartPage.goto()
    await cartPage.expectProductInCart(products.greyJacket.name)
    await cartPage.proceedToCheckout()

    await expect(page).toHaveURL(/\/checkouts\//)

    // Phần còn lại giống Bài B — dùng page trực tiếp vì checkout
    // chưa có CheckoutPage class
    await page.getByLabel('Email').fill(checkoutData.contact.email)
    await page.getByRole('button', { name: /continue/i }).click()
    // ... (giữ nguyên các bước còn lại từ Bài B)
  })

})
```

---

## Phần 4 — Cấu Trúc Project Sau Khi Refactor

```
sauce-demo-tests/
├── tests/
│   ├── features/           ← spec files đã refactor
│   │   ├── auth/
│   │   │   └── login.spec.ts       (import từ fixtures)
│   │   ├── cart/
│   │   │   └── cart.spec.ts        (import từ fixtures)
│   │   └── checkout/
│   │       └── checkout.spec.ts    (import từ fixtures)
│   ├── fixtures/           ← MỚI: thêm vào so với Bài B
│   │   └── index.ts
│   ├── pages/              ← GIỮ NGUYÊN từ Bài B
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── ProductPage.ts
│   │   └── CartPage.ts
│   ├── test-data/          ← GIỮ NGUYÊN từ Bài B
│   └── auth.setup.ts       ← GIỮ NGUYÊN từ Bài B
├── playwright.config.ts    ← GIỮ NGUYÊN từ Bài B
└── ...
```

**Tóm lại: chỉ thêm 1 file mới (`fixtures/index.ts`) và sửa phần import
+ parameter của spec files — Page Objects không thay đổi gì.**

---

## Phần 5 — So Sánh Bài B vs Bài C

| | Bài B (POM) | Bài C (POM + Fixtures) |
|---|---|---|
| Khởi tạo Page Object | `const p = new LoginPage(page)` trong mỗi test | Tự động qua fixture parameter |
| Import trong spec file | `from '@playwright/test'` | `from '../../fixtures'` |
| Số file cần tạo | Không có fixtures/ | Thêm `fixtures/index.ts` |
| Độ phức tạp | Đơn giản, rõ ràng | Thêm 1 lớp abstraction |
| Đọc code | Thấy ngay new XxxPage(page) | Cần biết fixtures để hiểu loginPage từ đâu |
| Khi Page Object lỗi | Debug trong spec file rõ ràng | Debug cần mở cả fixtures/index.ts |
| Phù hợp khi | Mới học, team nhỏ, project đơn giản | Team lớn, nhiều spec files, muốn DRY |

---

## Phần 6 — Fixtures Nâng Cao (Tham Khảo)

Khi đã quen với Fixtures cơ bản, có thể dùng thêm các pattern này:

### Setup logic phức tạp hơn trong Fixture

```typescript
// Fixture tự động goto trang trước khi test
loginPage: async ({ page }, use) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()       // tự động navigate trước mỗi test
  await use(loginPage)
  // Sau test: có thể logout, clear cookies...
}

// Fixture với cleanup sau test
cartPage: async ({ page }, use) => {
  const cartPage = new CartPage(page)
  await use(cartPage)
  // Cleanup: xóa cart sau mỗi test để không ảnh hưởng test sau
  await page.request.post('/cart/clear.js')
}
```

### Fixture scope — dùng chung cho cả describe block

```typescript
// Mặc định: fixture tạo mới cho mỗi test (scope: 'test')
// Có thể dùng scope: 'worker' để share giữa các tests trong cùng worker
loginPage: [async ({ page }, use) => {
  await use(new LoginPage(page))
}, { scope: 'test' }],  // tạo mới mỗi test — đảm bảo isolation
```

### Fixture phụ thuộc fixture khác

```typescript
// loggedInPage — fixture dùng loginPage fixture để tự login trước
loggedInPage: async ({ loginPage, page }, use) => {
  await loginPage.goto()
  await loginPage.login(users.valid.email, users.valid.password)
  await loginPage.expectLoginSuccess()
  await use(page)  // trả về page đã login
}
```

---

## Bài Tập Thực Hành

```
□ Tạo file tests/fixtures/index.ts với 3 fixtures: loginPage, productPage, cartPage
□ Refactor login.spec.ts — đổi import và xóa new LoginPage(page)
□ Chạy: npx playwright test tests/features/auth/login.spec.ts
  → Kết quả phải giống hệt Bài B (tests vẫn pass, chỉ code gọn hơn)
□ Refactor cart.spec.ts tương tự
□ Chạy toàn bộ: npx playwright test
  → Tất cả tests vẫn pass
□ Tự trả lời: "Nếu LoginPage constructor thay đổi, mình sửa ở đâu?"
  → Câu trả lời đúng: chỉ sửa trong LoginPage.ts (không phải fixtures, không phải spec)
```

---

## Checklist Sau Khi Refactor

```
□ Tất cả spec files import từ fixtures, không import từ @playwright/test
□ Không còn new XxxPage(page) trong bất kỳ spec file nào
□ Page Object files (LoginPage.ts, v.v.) không thay đổi gì so với Bài B
□ npx playwright test — tất cả pass, không có test nào bị break
□ npx playwright test --repeat-each=3 — không flaky
```

---

## Tổng Kết

```
Bài B (POM):
  new LoginPage(page) trong mỗi test
  → Rõ ràng, dễ đọc, dễ debug
  → Đủ dùng cho mọi project

      ↓ Khi muốn nâng cấp

Bài C (POM + Fixtures):
  loginPage tự động inject qua fixture parameter
  → Gọn hơn, ít lặp code hơn
  → Cần thêm 1 layer để hiểu: fixtures/index.ts

Cả hai hướng đều đúng.
Chọn hướng nào tùy thuộc vào: độ phức tạp của project,
size của team, và comfort level của người viết test.
```

---
