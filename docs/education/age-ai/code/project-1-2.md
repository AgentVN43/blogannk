---
sidebar_position: 1
slug: /education/age-ai/code/project-1-2
id: project-1-2
title: Project 1 - Bài 2
---

# Bài 2 — Full Flow Với Page Object Model
### Từ test case tay → code chạy được — chỉ dùng POM, không dùng Fixtures
> Điều kiện: Đã hoàn thành Bài 1 và bài tập thực hành
> App: https://sauce-demo.myshopify.com
> Mục tiêu: Xây dựng test suite hoàn chỉnh với POM — đủ dùng cho mọi project

---

## Nhắc Lại: Bài Này Dùng Gì?

```
✅ Page Object Model (POM) — tổ chức locators + actions vào class riêng
✅ new LoginPage(page) thủ công trong mỗi test — rõ ràng, dễ hiểu
❌ Custom Fixtures — sẽ học ở Bài 3 (tùy chọn, nâng cao)
```

Sau Bài 2, bạn có thể dừng lại và tự tin apply vào bất kỳ project thật nào
(HRM, ERP, Banking...). Bài 3 chỉ là nâng cấp thêm tiện ích — không phải bắt buộc.

---

## Tư Duy Cốt Lõi: 3 Câu Hỏi Trước Khi Viết Mỗi Test

```
1. "Test này bắt đầu từ state nào?"
   → Giỏ hàng trống hay có hàng? Đã login hay chưa? Đang ở trang nào?

2. "User làm gì trong test này?"
   → Liệt kê từng action: goto, fill, click, select...

3. "Làm sao biết test pass hay fail?"
   → Định nghĩa rõ expected result = assertion trong code
```

---

## Phần 1 — Setup Project

### 1.1 Khởi tạo

```bash
mkdir sauce-demo-tests && cd sauce-demo-tests
npm init playwright@latest
# Chọn: TypeScript · tests/ folder · No GitHub Actions · Yes install browsers
npm install dotenv --save-dev
```

### 1.2 Cấu trúc thư mục

```bash
mkdir -p tests/features/auth
mkdir -p tests/features/cart
mkdir -p tests/features/checkout
mkdir -p tests/pages
mkdir -p tests/test-data
touch .env .env.example .gitignore
```

```
sauce-demo-tests/
├── tests/
│   ├── features/
│   │   ├── auth/
│   │   │   └── login.spec.ts
│   │   ├── cart/
│   │   │   └── cart.spec.ts
│   │   └── checkout/
│   │       └── checkout.spec.ts
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── ProductPage.ts
│   │   └── CartPage.ts
│   ├── test-data/
│   │   ├── users.ts
│   │   ├── products.ts
│   │   └── checkout.ts
│   └── auth.setup.ts
├── playwright.config.ts
├── .env
├── .env.example
└── .gitignore
```

### 1.3 File cấu hình

```
# .gitignore
node_modules/
playwright-report/
test-results/
playwright/.auth/
.env
screenshots/
```

```
# .env.example — template, commit lên git để team biết cần điền gì
BASE_URL=https://sauce-demo.myshopify.com
TEST_EMAIL=your-test-email@gmail.com
TEST_PASSWORD=your-test-password
```

```
# .env — điền credentials thật, KHÔNG commit lên git
BASE_URL=https://sauce-demo.myshopify.com
TEST_EMAIL=testuser@gmail.com
TEST_PASSWORD=TestPassword123
```

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],

  use: {
    baseURL: process.env.BASE_URL || 'https://sauce-demo.myshopify.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'setup', testMatch: '**/auth.setup.ts' },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
})
```

---

## Phần 2 — Test Data Files

> Đặt data vào đúng chỗ — không phán đoán, không thêm bớt so với Bài A.

```typescript
// tests/test-data/users.ts
export const users = {
  valid: {
    email: process.env.TEST_EMAIL!,
    password: process.env.TEST_PASSWORD!,
  },
  invalidPassword: {
    email: process.env.TEST_EMAIL!,
    password: 'wrongpassword_xyz_123',
  },
  newUser: {
    email: `autotest+${Date.now()}@gmail.com`,
    password: 'TestPassword123!',
    firstName: 'Auto',
    lastName: 'Tester',
  },
}
```

```typescript
// tests/test-data/products.ts
export interface Product {
  name: string
  price: string
  slug: string
}

export const products: Record<string, Product> = {
  greyJacket: {
    name: 'Grey jacket',
    price: '£55.00',
    slug: 'grey-jacket',
  },
  noirJacket: {
    name: 'Noir jacket',
    price: '£60.00',
    slug: 'noir-jacket',
  },
  stripedTop: {
    name: 'Striped top',
    price: '£50.00',
    slug: 'striped-top',
  },
}
```

```typescript
// tests/test-data/checkout.ts
export const checkoutData = {
  contact: {
    email: 'autotest@gmail.com',
  },
  shipping: {
    firstName: 'Auto',
    lastName: 'Tester',
    address: '123 Test Street',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    postalCode: '700000',
    phone: '0901234567',
  },
  payment: {
    cardNumber: '4242 4242 4242 4242',
    expiry: '12 / 25',
    cvv: '123',
    nameOnCard: 'Auto Tester',
  },
}
```

---

## Phần 3 — Page Objects

> Tư duy khi viết mỗi Page class:
> *"Trang này có những element nào test cần dùng?
> Actions nào sẽ lặp lại trong nhiều test?"*

### 3.1 BasePage — nền tảng cho tất cả pages

```typescript
// tests/pages/BasePage.ts
import { Page } from '@playwright/test'

export class BasePage {
  // protected: các class con (LoginPage, CartPage...) dùng được
  // private: chỉ BasePage dùng được
  // public: ai cũng dùng được (mặc định)
  constructor(protected page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle')
  }

  async takeDebugScreenshot(name: string) {
    await this.page.screenshot({
      path: `screenshots/debug-${name}-${Date.now()}.png`,
      fullPage: true,
    })
  }

  async dismissCookieBanner() {
    const banner = this.page.getByRole('button', { name: /accept/i })
    const isVisible = await banner.isVisible({ timeout: 2000 }).catch(() => false)
    if (isVisible) {
      await banner.click()
    }
  }
}
```

### 3.2 LoginPage

> Tư duy: *"TC-AUTH-01 và TC-AUTH-02 đều cần: goto login, fill email,
> fill password, click sign in. → Gom vào LoginPage."*

```typescript
// tests/pages/LoginPage.ts
import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
  // Locators — khai báo 1 lần, dùng nhiều lần
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly signInButton: Locator
  readonly errorMessage: Locator

  constructor(page: Page) {
    super(page)  // gọi constructor của BasePage
    this.emailInput    = page.getByLabel('Email')
    this.passwordInput = page.getByLabel('Password')
    this.signInButton  = page.getByRole('button', { name: 'Sign in' })
    this.errorMessage  = page.locator('.notice--error, [class*="error"]')
  }

  // Actions
  async goto() {
    await this.page.goto('/account/login')
    await this.waitForPageLoad()  // method từ BasePage
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.signInButton.click()
  }

  // Assertions — đặt vào Page Object để tái sử dụng
  async expectLoginSuccess() {
    await expect(this.page).toHaveURL(/\/account/)
  }

  async expectErrorVisible() {
    await expect(this.errorMessage).toBeVisible()
  }

  async expectStillOnLoginPage() {
    await expect(this.page).toHaveURL(/\/account\/login/)
  }
}
```

### 3.3 ProductPage

```typescript
// tests/pages/ProductPage.ts
import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class ProductPage extends BasePage {
  readonly productName: Locator
  readonly productPrice: Locator
  readonly addToCartButton: Locator

  constructor(page: Page) {
    super(page)
    this.productName     = page.locator('h1')
    this.productPrice    = page.locator('.price')
    this.addToCartButton = page.getByRole('button', { name: /add to cart/i })
  }

  async goto(slug: string) {
    await this.page.goto(`/products/${slug}`)
    await this.waitForPageLoad()
  }

  async addToCart() {
    await this.addToCartButton.click()
  }

  async expectProductName(name: string) {
    await expect(this.productName).toContainText(name)
  }

  async expectProductPrice(price: string) {
    await expect(this.productPrice).toContainText(price)
  }
}
```

### 3.4 CartPage

```typescript
// tests/pages/CartPage.ts
import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class CartPage extends BasePage {
  readonly cartItems: Locator
  readonly checkoutButton: Locator
  readonly emptyCartMessage: Locator

  constructor(page: Page) {
    super(page)
    this.cartItems        = page.locator('.cart__row, [class*="cart-item"]')
    this.checkoutButton   = page.getByRole('button', { name: /check out/i })
    this.emptyCartMessage = page.getByText(/your cart is empty/i)
  }

  async goto() {
    await this.page.goto('/cart')
    await this.waitForPageLoad()
  }

  async expectItemCount(count: number) {
    await expect(this.cartItems).toHaveCount(count)
  }

  async expectProductInCart(productName: string) {
    await expect(this.page.getByText(productName)).toBeVisible()
  }

  async proceedToCheckout() {
    await this.checkoutButton.click()
    await this.page.waitForURL(/\/checkouts\//)
  }
}
```

---

## Phần 4 — Auth Setup

```typescript
// tests/auth.setup.ts
import { test as setup } from '@playwright/test'
import path from 'path'
import { users } from './test-data/users'

const authFile = path.join(__dirname, '../playwright/.auth/user.json')

setup('lưu session đăng nhập', async ({ page }) => {
  await page.goto('/account/login')
  await page.getByLabel('Email').fill(users.valid.email)
  await page.getByLabel('Password').fill(users.valid.password)
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.waitForURL(/\/account/)

  // Lưu cookies + localStorage để tái sử dụng
  await page.context().storageState({ path: authFile })
})
```

---

## Phần 5 — Viết Tests: Dịch Test Case Tay Sang Code

> **Quy tắc dịch:**
> Mỗi dòng trong "Các bước" → 1 action trong code
> Mỗi dòng trong "Kết quả mong đợi" → 1 assertion trong code
>
> **Cách khởi tạo Page Object trong Bài 2 (thủ công, không dùng Fixtures):**
> `const loginPage = new LoginPage(page)` — viết trong mỗi test cần dùng

### 5.1 Login Tests — TC-AUTH-01, 02, 03

```typescript
// tests/features/auth/login.spec.ts
import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { users } from '../../test-data/users'

// Không dùng storageState cho file này
// vì đây là test login — cần bắt đầu ở trạng thái chưa login
test.use({ storageState: { cookies: [], origins: [] } })

test.describe('Login', () => {

  // TC-AUTH-01: Happy path
  test('đăng nhập thành công với credentials hợp lệ', async ({ page }) => {
    // Khởi tạo Page Object — thủ công, rõ ràng
    const loginPage = new LoginPage(page)

    // Điều kiện: chưa login, ở trang Login
    await loginPage.goto()

    // Các bước
    await loginPage.login(users.valid.email, users.valid.password)

    // Kết quả mong đợi
    await loginPage.expectLoginSuccess()
  })

  // TC-AUTH-02: Sad path
  test('hiển thị lỗi khi đăng nhập với password sai', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login(
      users.invalidPassword.email,
      users.invalidPassword.password
    )

    await loginPage.expectStillOnLoginPage()
    await loginPage.expectErrorVisible()
  })

  // TC-AUTH-03: Edge cases — bỏ trống fields
  test.describe('Validation khi bỏ trống fields', () => {

    test('không thể login khi bỏ trống cả email và password', async ({ page }) => {
      const loginPage = new LoginPage(page)
      await loginPage.goto()

      // Không fill gì — click Sign in ngay
      await page.getByRole('button', { name: 'Sign in' }).click()

      await loginPage.expectStillOnLoginPage()
    })

    test('không thể login khi bỏ trống password', async ({ page }) => {
      const loginPage = new LoginPage(page)
      await loginPage.goto()

      await page.getByLabel('Email').fill(users.valid.email)
      // Không fill password
      await page.getByRole('button', { name: 'Sign in' }).click()

      await loginPage.expectStillOnLoginPage()
    })

  })

})
```

### 5.2 Cart Tests — TC-CART-01, 02

```typescript
// tests/features/cart/cart.spec.ts
import { test, expect } from '@playwright/test'
import { ProductPage } from '../../pages/ProductPage'
import { CartPage } from '../../pages/CartPage'
import { products } from '../../test-data/products'

test.describe('Shopping Cart', () => {

  // TC-CART-01: Happy path — thêm 1 sản phẩm
  test('thêm Grey jacket vào giỏ hàng — số lượng cập nhật đúng', async ({ page }) => {
    // Khởi tạo Page Objects cần dùng trong test này
    const productPage = new ProductPage(page)
    const cartPage = new CartPage(page)

    // Điều kiện: ở trang product detail Grey jacket
    await productPage.goto(products.greyJacket.slug)
    await productPage.expectProductName(products.greyJacket.name)

    // Action: thêm vào giỏ hàng
    await productPage.addToCart()

    // Kiểm tra trong Cart
    await cartPage.goto()
    await cartPage.expectItemCount(1)
    await cartPage.expectProductInCart(products.greyJacket.name)
  })

  // TC-CART-02: Thêm nhiều sản phẩm khác nhau
  test('thêm 2 sản phẩm khác nhau — giỏ hàng có đủ cả 2', async ({ page }) => {
    const productPage = new ProductPage(page)
    const cartPage = new CartPage(page)

    // Thêm sản phẩm 1
    await productPage.goto(products.greyJacket.slug)
    await productPage.addToCart()

    // Thêm sản phẩm 2
    await productPage.goto(products.noirJacket.slug)
    await productPage.addToCart()

    // Kiểm tra cart có đủ 2 sản phẩm
    await cartPage.goto()
    await cartPage.expectItemCount(2)
    await cartPage.expectProductInCart(products.greyJacket.name)
    await cartPage.expectProductInCart(products.noirJacket.name)
  })

  // Data-driven: kiểm tra từng sản phẩm hiển thị đúng thông tin
  for (const product of Object.values(products)) {
    test(`${product.name} — tên và giá hiển thị đúng`, async ({ page }) => {
      const productPage = new ProductPage(page)

      await productPage.goto(product.slug)
      await productPage.expectProductName(product.name)
      await productPage.expectProductPrice(product.price)
    })
  }

})
```

### 5.3 Checkout Test — TC-CHECKOUT-01

```typescript
// tests/features/checkout/checkout.spec.ts
import { test, expect } from '@playwright/test'
import { ProductPage } from '../../pages/ProductPage'
import { CartPage } from '../../pages/CartPage'
import { products } from '../../test-data/products'
import { checkoutData } from '../../test-data/checkout'

test.describe('Checkout Flow', () => {

  // TC-CHECKOUT-01: Full purchase flow @critical
  test('hoàn thành checkout với thông tin hợp lệ @critical', async ({ page }) => {
    const productPage = new ProductPage(page)
    const cartPage = new CartPage(page)

    // Step 1: Add to cart
    await productPage.goto(products.greyJacket.slug)
    await productPage.addToCart()

    // Step 2: Vào cart, kiểm tra sản phẩm đúng
    await cartPage.goto()
    await cartPage.expectProductInCart(products.greyJacket.name)

    // Step 3: Proceed to checkout
    await cartPage.proceedToCheckout()
    await expect(page).toHaveURL(/\/checkouts\//)

    // Step 4: Điền thông tin liên hệ
    await page.getByLabel('Email').fill(checkoutData.contact.email)
    await page.getByRole('button', { name: /continue/i }).click()

    // Step 5: Điền thông tin giao hàng
    await page.getByLabel('First name').fill(checkoutData.shipping.firstName)
    await page.getByLabel('Last name').fill(checkoutData.shipping.lastName)
    await page.getByLabel('Address').fill(checkoutData.shipping.address)
    await page.getByLabel('City').fill(checkoutData.shipping.city)
    await page.getByLabel('Country').selectOption(checkoutData.shipping.country)
    await page.getByLabel(/postal|zip/i).fill(checkoutData.shipping.postalCode)
    await page.getByRole('button', { name: /continue/i }).click()

    // Step 6: Chọn shipping method (cái đầu tiên)
    await page.locator('[name="shipping_rate"]').first().check()
    await page.getByRole('button', { name: /continue/i }).click()

    // Step 7: Điền thông tin thanh toán
    // Shopify dùng iframe cho card fields — cần frameLocator
    const cardFrame   = page.frameLocator('[name*="card-fields-number"]')
    const expiryFrame = page.frameLocator('[name*="card-fields-expiry"]')
    const cvvFrame    = page.frameLocator('[name*="card-fields-verification"]')

    await cardFrame.locator('input').fill(checkoutData.payment.cardNumber)
    await expiryFrame.locator('input').fill(checkoutData.payment.expiry)
    await cvvFrame.locator('input').fill(checkoutData.payment.cvv)
    await page.getByLabel(/name on card/i).fill(checkoutData.payment.nameOnCard)

    // Step 8: Submit order
    await page.getByRole('button', { name: /pay now/i }).click()

    // Kết quả mong đợi: trang order confirmation
    await expect(page).toHaveURL(/\/thank_you|\/orders\//)
    await expect(
      page.getByText(/thank you|order confirmed/i)
    ).toBeVisible({ timeout: 15000 })
  })

})
```

---

## Phần 6 — Chạy Test và Đọc Kết Quả

```bash
# Chạy toàn bộ
npx playwright test

# Chạy 1 file
npx playwright test tests/features/auth/login.spec.ts

# Chạy theo tên
npx playwright test --grep "đăng nhập thành công"

# Chạy critical tests
npx playwright test --grep @critical

# Xem browser chạy
npx playwright test --headed

# Xem HTML report
npx playwright show-report
```

### Đọc kết quả — phân biệt 3 loại fail

```
Bug thật:
→ App không làm đúng expected behavior
→ Ví dụ: click "Add to cart" nhưng cart count không tăng
→ Việc làm: tạo bug report, thông báo DEV

Test bị sai:
→ App đúng nhưng assertion trong test sai
→ Ví dụ: expect URL là /account nhưng app redirect về /account/orders
→ Việc làm: sửa assertion cho đúng với behavior thật

Môi trường lỗi:
→ App đúng, test đúng nhưng staging có vấn đề
→ Ví dụ: API timeout, domain thay đổi
→ Việc làm: chạy lại, báo DevOps nếu vẫn fail
```

---

## Phần 7 — Xử Lý Tình Huống Khó

### "Không tìm được selector"

```
Thứ tự thử:
1. Codegen: npx playwright codegen https://sauce-demo.myshopify.com
   → Click element cần tìm → Playwright suggest selector

2. Debug mode: npx playwright test --debug
   → Hover element trong Inspector để xem locator

3. DevTools F12 → Elements → chuột phải → Copy selector
   → Dùng như fallback, sau đó tìm getByRole thay thế

Tự hỏi:
→ Element có text nhìn thấy? → getByRole hoặc getByText
→ Input có label? → getByLabel
→ DEV đã gắn data-testid? → getByTestId
```

### "Test flaky — khi pass khi fail"

```
1. Chạy lại 3 lần — nếu luôn pass → có thể không phải flaky
2. npx playwright test --repeat-each=5 → nếu fail 1-2 lần → flaky
3. npx playwright test --trace on → xem trace.zip tìm nguyên nhân
4. Tìm waitForTimeout trong code → thay bằng expect() hoặc waitForURL
```

### "Test pass local nhưng fail trên máy người khác"

```
Nguyên nhân thường gặp:
❌ Credentials hardcode → ✅ dùng .env + process.env
❌ Test phụ thuộc thứ tự chạy → ✅ mỗi test tự setup state
❌ Selector theo text ngôn ngữ cụ thể → ✅ dùng getByRole hoặc data-testid
```

---

## Phần 8 — Pre-Submit Checklist

```
CODE QUALITY:
□ Không có waitForTimeout nào
□ Không có credentials hardcode — tất cả từ process.env
□ Mỗi test có ít nhất 1 assertion có nghĩa
□ Tên test mô tả rõ behavior
□ Test data tập trung trong test-data/ files
□ Locators nằm trong Page Object class, không nằm trong spec file

PAGE OBJECT MODEL:
□ Mỗi page có class riêng kế thừa BasePage
□ Class có: locators (readonly) + actions (method) + assertions (method)
□ Spec file chỉ chứa test logic, không chứa locator string

TEST COVERAGE:
□ Tất cả critical flows có happy path + ít nhất 1 sad path
□ Auth setup hoạt động, storageState được tái sử dụng

RELIABILITY:
□ npx playwright test --repeat-each=3 → không có test flaky
□ HTML report sạch: tất cả tests pass

MAINTAINABILITY:
□ Clone project về, điền .env → chạy được ngay
□ .env.example có hướng dẫn đủ để người mới biết điền gì
```

---

## Tổng Kết Bài 2

```
Setup project (config, .env, cấu trúc thư mục)
      ↓
Tạo test-data files
      ↓
Viết Page Objects: BasePage → LoginPage → ProductPage → CartPage
      ↓
Viết Auth Setup
      ↓
Viết tests: new XxxPage(page) trong mỗi test
Critical first: auth → cart → checkout
      ↓
Chạy, đọc kết quả, phân biệt Bug / Test sai / Môi trường
      ↓
Tick Pre-submit checklist
      ↓
✅ Done — test suite đủ dùng cho project thật
```

---

## Bài Tập Thực Hành

```
□ Setup project từ đầu (không copy — tự làm từng bước)
□ Tạo test-data files từ data đã chuẩn bị ở Bài A
□ Viết BasePage và LoginPage
□ Viết login.spec.ts cho TC-AUTH-01 và TC-AUTH-02
  — khởi tạo: const loginPage = new LoginPage(page)
□ Chạy, đọc report, sửa cho đến khi pass
□ Tự viết thêm ProductPage và cart.spec.ts cho TC-CART-01
□ npx playwright test --repeat-each=3 — đảm bảo không flaky
```

> Mentor review theo Pre-submit checklist ở Phần 8.
> Test suite phải chạy được trên máy mentor mà không cần thay đổi gì
> ngoài việc tạo file .env.

---
