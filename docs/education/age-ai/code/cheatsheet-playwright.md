---
sidebar_position: 1
slug: /education/age-ai/code/cheatsheet-playwright
id: cheatsheet-playwright
title: Cheatsheet Playwright
---

# Cheatsheet 2 — Playwright API & Best Practices
> Tra cứu nhanh method, pattern, và nguyên tắc · Dùng kết hợp với Cheatsheet 1: JS/TS Foundation
> App thực hành: https://sauce-demo.myshopify.com

---

## Mục lục tra cứu nhanh

### Playwright API
| Cần làm gì | Method | Xem mục |
|---|---|---|
| Tìm element trên trang | `getByRole` / `getByLabel` / `getByText` | [#1] |
| Click, fill, select, hover | `click()` / `fill()` / `selectOption()` | [#2] |
| Kiểm tra kết quả | `expect().toBeVisible()` / `toHaveText()` | [#3] |
| Chờ element / URL / API | `waitForURL()` / `waitForSelector()` | [#4] |
| Chạy code trước/sau mỗi test | `beforeEach` / `afterEach` / `beforeAll` | [#5] |
| Không login lại mỗi test | `storageState` / `auth.setup.ts` | [#6] |
| Tách selector ra class riêng | Page Object Model | [#7] |
| BasePage cho method dùng chung | `extends BasePage` | [#8] |
| Tự động tạo Page Object trong test | Custom Fixtures | [#9] |
| Mock API response | `page.route()` | [#10] |
| Cấu hình project | `playwright.config.ts` | [#11] |

### Best Practices
| Nguyên tắc | Xem mục |
|---|---|
| Test những gì user thấy, không test implementation | [#12] |
| Mỗi test tự lo state của mình | [#13] |
| Ưu tiên test critical user journeys | [#14] |
| Workflow: Record → Refactor → Ship | [#15] |
| Đặt tên test rõ ràng | [#16] |
| Debug khi test fail | [#17] |

---

## PHẦN 1 — PLAYWRIGHT API

---

## [#1] Locators — Tìm Element Đúng Cách

**Thứ tự ưu tiên: dùng từ trên xuống, chỉ xuống dưới khi không có lựa chọn tốt hơn.**

```typescript
// ✅ 1. getByRole — ưu tiên nhất (phản ánh những gì user thấy)
page.getByRole('button', { name: 'Add to cart' })
page.getByRole('link', { name: 'Grey jacket' })
page.getByRole('heading', { name: 'Your cart' })
page.getByRole('textbox', { name: 'Email' })
page.getByRole('checkbox', { name: 'Save my information' })

// ✅ 2. getByLabel — cho form inputs có label
page.getByLabel('Email address')
page.getByLabel('Password')
page.getByLabel('Country')

// ✅ 3. getByPlaceholder — khi input có placeholder nhưng không có label
page.getByPlaceholder('Search products...')
page.getByPlaceholder('Enter email')

// ✅ 4. getByText — tìm theo text content
page.getByText('Grey jacket')
page.getByText('£55.00')
page.getByText('Order confirmed', { exact: true })  // exact match

// ✅ 5. getByTestId — khi dev đã gắn data-testid
page.getByTestId('add-to-cart-button')
page.getByTestId('cart-count')

// ⚠️ 6. CSS / XPath — chỉ dùng khi không có lựa chọn nào trên
page.locator('#cart-count')
page.locator('.product-title')
page.locator('input[type="email"]')

// ❌ Tránh dùng — dễ vỡ khi UI thay đổi nhỏ
page.locator('div.container > div:nth-child(2) > button')
```

**Tìm selector nhanh bằng Codegen:**
```bash
npx playwright codegen https://sauce-demo.myshopify.com
# Thao tác trên browser → Playwright suggest selector tốt nhất ở bên phải
```

**Chaining locators — thu hẹp phạm vi tìm kiếm:**
```typescript
// Tìm button "Add to cart" trong card sản phẩm "Grey jacket"
const greyJacketCard = page.locator('.product-card').filter({ hasText: 'Grey jacket' })
await greyJacketCard.getByRole('button', { name: 'Add to cart' }).click()
```

> **Phỏng vấn hay hỏi:** Tại sao ưu tiên `getByRole` hơn CSS selector?
> → `getByRole` test behavior như user thấy. CSS selector test implementation detail — đổi class name là vỡ test.

---

## [#2] Actions — Tương Tác Với Element

```typescript
// ✅ Navigation
await page.goto('https://sauce-demo.myshopify.com')
await page.goto('/products/grey-jacket')  // relative URL (cần baseURL trong config)
await page.goBack()
await page.reload()

// ✅ Click
await page.getByRole('button', { name: 'Add to cart' }).click()
await page.getByRole('link', { name: 'Grey jacket' }).click()
await page.locator('.overlay').click({ force: true })  // force khi element bị che

// ✅ Fill input — xóa nội dung cũ trước khi gõ
await page.getByLabel('Email').fill('user@example.com')
await page.getByLabel('Password').fill('mypassword')
await page.getByPlaceholder('Search...').fill('Grey jacket')

// ✅ Clear và fill lại
await page.getByLabel('Email').clear()
await page.getByLabel('Email').fill('newuser@example.com')

// ✅ Select dropdown
await page.getByLabel('Country').selectOption('VN')                    // by value
await page.getByLabel('Size').selectOption({ label: 'Medium' })        // by label
await page.getByLabel('Sort by').selectOption({ index: 2 })            // by index

// ✅ Checkbox / Radio
await page.getByLabel('Save my information').check()
await page.getByLabel('Save my information').uncheck()
await page.getByLabel('Credit card').check()

// ✅ Keyboard
await page.keyboard.press('Enter')
await page.keyboard.press('Tab')
await page.keyboard.press('Escape')
await page.keyboard.press('Control+A')   // Ctrl+A: chọn tất cả
await page.getByLabel('Search').press('Enter')

// ✅ Hover
await page.getByText('Grey jacket').hover()

// ✅ Scroll
await page.getByText('Load more').scrollIntoViewIfNeeded()
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

// ✅ Upload file
await page.getByLabel('Upload image').setInputFiles('path/to/image.jpg')
```

---

## [#3] Assertions — Kiểm Tra Kết Quả

**Luôn dùng `expect` của Playwright** — có auto-retry (tự thử lại đến 30 giây trước khi fail).

```typescript
// ✅ Page assertions
await expect(page).toHaveURL('https://sauce-demo.myshopify.com/account')
await expect(page).toHaveURL(/account/)          // regex match
await expect(page).toHaveURL(/\/checkout\//)
await expect(page).toHaveTitle(/Sauce Demo/)
await expect(page).toHaveTitle('Grey jacket – Sauce Demo')

// ✅ Visibility
await expect(page.getByText('Grey jacket')).toBeVisible()
await expect(page.locator('.error-message')).toBeHidden()
await expect(page.locator('.loading-spinner')).not.toBeVisible()

// ✅ Text content
await expect(page.locator('h1')).toContainText('Grey jacket')  // partial match
await expect(page.locator('h1')).toHaveText('Grey jacket')     // exact match
await expect(page.getByText('£55.00')).toBeVisible()

// ✅ Input value
await expect(page.getByLabel('Email')).toHaveValue('user@example.com')
await expect(page.getByLabel('Quantity')).toHaveValue('2')

// ✅ Element state
await expect(page.getByRole('button', { name: 'Checkout' })).toBeEnabled()
await expect(page.getByRole('button', { name: 'Out of stock' })).toBeDisabled()
await expect(page.getByLabel('Newsletter')).toBeChecked()

// ✅ Count
await expect(page.locator('.cart-item')).toHaveCount(2)
await expect(page.locator('.product-card')).toHaveCount(6)

// ✅ Attribute
await expect(page.locator('img.product-image')).toHaveAttribute('alt', 'Grey jacket')

// ✅ Soft assertion — tiếp tục test dù assertion này fail
await expect.soft(page.getByText('Sale')).toBeVisible()
await expect.soft(page.getByText('Free shipping')).toBeVisible()
// Test tiếp tục, tổng hợp tất cả lỗi soft assertion ở cuối
```

**`toContainText` vs `toHaveText`:**
```typescript
// Tên sản phẩm: "Grey jacket – Limited Edition"

await expect(locator).toContainText('Grey jacket')      // ✅ pass — tìm chuỗi con
await expect(locator).toHaveText('Grey jacket')         // ❌ fail — phải khớp chính xác toàn bộ
await expect(locator).toHaveText('Grey jacket – Limited Edition')  // ✅ pass
```

> **Khi nào dùng soft assertion?** Khi muốn kiểm tra nhiều điều độc lập trên cùng 1 trang — ví dụ: header, footer, sidebar — và muốn biết tất cả cái nào fail thay vì dừng lại ở cái đầu tiên.

---

## [#4] Waiting — Đợi Đúng Cách

```typescript
// ❌ Không bao giờ hardcode wait — chậm và không ổn định
await page.waitForTimeout(3000)  // tránh hoàn toàn

// ✅ Playwright tự động chờ element ready trước khi action
// Không cần viết wait thêm trong hầu hết trường hợp
await page.getByRole('button', { name: 'Check out' }).click()
// → Playwright tự chờ button: visible + enabled + stable + nhận được click

// ✅ Wait for URL thay đổi (sau submit form, sau redirect)
await page.waitForURL(/checkout/)
await page.waitForURL('**/order-confirmation**')
await page.waitForURL(url => url.includes('confirmation'))

// ✅ Wait for element state (loading spinner biến mất)
await page.waitForSelector('.loading-spinner', { state: 'hidden' })
await page.waitForSelector('.product-grid', { state: 'visible' })
await page.waitForSelector('.cart-item', { state: 'attached' })

// ✅ Wait for API response (khi click trigger API call)
const [response] = await Promise.all([
  page.waitForResponse('**/cart/add.js'),
  page.getByRole('button', { name: 'Add to cart' }).click(),
])
const data = await response.json()
expect(data.item_count).toBe(1)

// ✅ expect() tự retry — không cần waitFor thêm
await expect(page.locator('.cart-count')).toContainText('1')
// Tự retry đến 30 giây, pass ngay khi cart-count hiện '1'

// ✅ Tăng timeout cho element load chậm (chỉ dùng khi cần thiết)
await expect(page.locator('.data-table')).toBeVisible({ timeout: 10000 })
```

---

## [#5] Hooks — Setup và Cleanup

```typescript
test.describe('Grey jacket page', () => {

  // Chạy 1 lần trước TẤT CẢ tests trong describe (dùng cho setup nặng)
  test.beforeAll(async ({ browser }) => {
    // seed database, tạo test account...
  })

  // Chạy trước MỖI test (dùng nhiều nhất — navigate, clean state)
  test.beforeEach(async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/products/grey-jacket')
  })

  // Chạy sau MỖI test (cleanup)
  test.afterEach(async ({ page }) => {
    // xóa cart, logout nếu cần
  })

  // Chạy 1 lần sau TẤT CẢ tests (teardown)
  test.afterAll(async () => {
    // đóng kết nối, xóa test data...
  })

  test('hiển thị đúng tên sản phẩm', async ({ page }) => {
    // beforeEach đã goto product page rồi
    await expect(page.locator('h1')).toContainText('Grey jacket')
  })

  test('giá hiển thị đúng', async ({ page }) => {
    // beforeEach đã goto product page rồi
    await expect(page.getByText('£55.00')).toBeVisible()
  })
})
```

**Khi nào dùng cái nào:**
| Hook | Dùng khi |
|---|---|
| `beforeEach` | Navigate đến trang cần test, reset về clean state |
| `afterEach` | Logout, xóa cart, cleanup sau mỗi test |
| `beforeAll` | Setup tốn thời gian: tạo test account, seed data |
| `afterAll` | Teardown: đóng kết nối DB, xóa file tạm |

---

## [#6] Authentication — Không Login Lại Mỗi Test

```typescript
// ✅ Bước 1: Tạo file tests/auth.setup.ts
import { test as setup } from '@playwright/test'
import path from 'path'

const authFile = path.join(__dirname, '../playwright/.auth/user.json')

setup('lưu session đăng nhập', async ({ page }) => {
  await page.goto('https://sauce-demo.myshopify.com/account/login')
  await page.getByLabel('Email').fill(process.env.TEST_EMAIL!)
  await page.getByLabel('Password').fill(process.env.TEST_PASSWORD!)
  await page.getByRole('button', { name: 'Sign in' }).click()
  await page.waitForURL(/account/)

  // Lưu cookies + localStorage vào file
  await page.context().storageState({ path: authFile })
})
```

```typescript
// ✅ Bước 2: playwright.config.ts — dùng session đã lưu
import { defineConfig } from '@playwright/test'

export default defineConfig({
  projects: [
    {
      name: 'setup',
      testMatch: '**/auth.setup.ts',
    },
    {
      name: 'tests',
      use: {
        storageState: 'playwright/.auth/user.json',  // dùng session đã lưu
      },
      dependencies: ['setup'],  // chạy setup trước
    },
  ],
})
```

```bash
# ✅ Bước 3: Tạo file .env (không commit lên git)
TEST_EMAIL=your-test-email@gmail.com
TEST_PASSWORD=yourpassword
BASE_URL=https://sauce-demo.myshopify.com
```

```
# ✅ Bước 4: .gitignore — không commit credentials
.env
playwright/.auth/
```

---

## [#7] Page Object Model — Tách Selector Ra Class Riêng

```typescript
// ✅ tests/pages/ProductPage.ts
import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class ProductPage extends BasePage {
  // Khai báo tất cả locators ở đây
  readonly productName: Locator
  readonly productPrice: Locator
  readonly addToCartButton: Locator
  readonly cartCount: Locator

  constructor(page: Page) {
    super(page)
    this.productName    = page.locator('h1')
    this.productPrice   = page.locator('.price')
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' })
    this.cartCount      = page.locator('.cart-count')
  }

  // Khai báo tất cả actions ở đây
  async goto(slug: string) {
    await this.page.goto(`https://sauce-demo.myshopify.com/products/${slug}`)
  }

  async addToCart() {
    await this.addToCartButton.click()
  }

  // Khai báo assertions hay dùng
  async expectProductName(name: string) {
    await expect(this.productName).toContainText(name)
  }

  async expectPrice(price: string) {
    await expect(this.productPrice).toContainText(price)
  }

  async expectCartCount(count: number) {
    await expect(this.cartCount).toContainText(String(count))
  }
}

// ✅ tests/features/product.spec.ts — dùng POM
import { test, expect } from '@playwright/test'
import { ProductPage } from '../pages/ProductPage'

test('thêm Grey jacket vào giỏ hàng', async ({ page }) => {
  const productPage = new ProductPage(page)
  await productPage.goto('grey-jacket')
  await productPage.expectProductName('Grey jacket')
  await productPage.addToCart()
  await productPage.expectCartCount(1)
})
```

**Lợi ích:** Khi nút "Add to cart" đổi text → chỉ sửa 1 dòng trong `ProductPage.ts`, tất cả tests tự cập nhật.

---

## [#8] BasePage — Method Dùng Chung Cho Tất Cả Pages

```typescript
// ✅ tests/pages/BasePage.ts
import { Page } from '@playwright/test'

export class BasePage {
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

  async scrollToBottom() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    )
  }

  async dismissCookieBanner() {
    const banner = this.page.getByRole('button', { name: 'Accept cookies' })
    if (await banner.isVisible()) {
      await banner.click()
    }
  }
}

// ✅ Tất cả Page classes kế thừa BasePage
// tests/pages/CartPage.ts
export class CartPage extends BasePage {
  readonly checkoutButton = this.page.getByRole('button', { name: 'Check out' })
  readonly cartItems = this.page.locator('.cart-item')

  async goto() {
    await this.page.goto('/cart')
    await this.waitForPageLoad()  // method từ BasePage
  }

  async proceedToCheckout() {
    await this.checkoutButton.click()
  }
}
```

---

## [#9] Custom Fixtures — Tự Động Tạo Page Objects

```typescript
// ✅ tests/fixtures/index.ts
import { test as base, expect } from '@playwright/test'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { LoginPage } from '../pages/LoginPage'

type MyFixtures = {
  productPage: ProductPage
  cartPage: CartPage
  loginPage: LoginPage
}

export const test = base.extend<MyFixtures>({
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page))
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page))
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
})

export { expect }
```

```typescript
// ✅ tests/features/cart.spec.ts — import test từ fixtures
import { test, expect } from '../fixtures'  // không phải từ @playwright/test

test('thêm sản phẩm và kiểm tra giỏ hàng', async ({ productPage, cartPage }) => {
  // productPage và cartPage tự động được tạo — không cần new ProductPage(page)
  await productPage.goto('grey-jacket')
  await productPage.addToCart()

  await cartPage.goto()
  await expect(cartPage.cartItems).toHaveCount(1)
})
```

---

## [#10] API Mocking — Kiểm Soát Data Trong Test

```typescript
// ✅ Mock empty state — không cần xóa cart thật
test('hiển thị thông báo khi giỏ hàng trống', async ({ page }) => {
  await page.route('**/cart.js', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ items: [], item_count: 0, total_price: 0 }),
    })
  })
  await page.goto('/cart')
  await expect(page.getByText('Your cart is empty')).toBeVisible()
})

// ✅ Mock error state — test khi server lỗi
test('hiển thị lỗi khi không tải được sản phẩm', async ({ page }) => {
  await page.route('**/products/grey-jacket.js', async route => {
    await route.fulfill({ status: 500, body: 'Server Error' })
  })
  await page.goto('/products/grey-jacket')
  await expect(page.getByText('Something went wrong')).toBeVisible()
})

// ✅ Theo dõi API call mà không chặn
test('add to cart gọi đúng API', async ({ page }) => {
  const [request] = await Promise.all([
    page.waitForRequest('**/cart/add.js'),
    page.getByRole('button', { name: 'Add to cart' }).click(),
  ])
  expect(request.method()).toBe('POST')
})

// ✅ Modify response (giữ nguyên request, đổi response)
await page.route('**/products.json', async route => {
  const response = await route.fetch()
  const json = await response.json()
  json.products[0].price = '£1.00'  // giả lập giá sale
  await route.fulfill({ json })
})
```

> **Lưu ý:** Khai báo `page.route()` TRƯỚC khi `page.goto()` — route phải được setup trước khi request xảy ra.

---

## [#11] playwright.config.ts — Cấu Hình Chuẩn

```typescript
import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,     // không cho .only trên CI
  retries: process.env.CI ? 2 : 0,  // retry 2 lần trên CI, 0 lần local
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],   // HTML report: npx playwright show-report
    ['list'],   // in kết quả ra terminal
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://sauce-demo.myshopify.com',
    screenshot: 'only-on-failure',   // chụp screenshot khi fail
    video: 'retain-on-failure',      // record video khi fail
    trace: 'on-first-retry',         // trace khi retry lần đầu
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

## PHẦN 2 — BEST PRACTICES

---

## [#12] Test User-Visible Behavior — Không Test Implementation

```typescript
// ❌ Test implementation detail — vỡ khi refactor CSS/HTML
await expect(page.locator('.btn-primary.is-loading')).toBeVisible()
await expect(page.locator('[data-state="submitting"]')).toBeVisible()
await expect(page.locator('form > div:nth-child(3) input')).toHaveValue('test')

// ✅ Test những gì user nhìn thấy và tương tác được
// User thấy: nút đang xử lý
await expect(page.getByRole('button', { name: 'Placing order...' })).toBeDisabled()

// User thấy: thông báo thành công
await expect(page.getByText('Order placed successfully')).toBeVisible()

// User thấy: được chuyển đến trang confirmation
await expect(page).toHaveURL(/order-confirmation/)

// User thấy: sản phẩm xuất hiện trong giỏ hàng
await expect(page.getByRole('cell', { name: 'Grey jacket' })).toBeVisible()
```

**Câu hỏi tự kiểm tra:** *"Nếu dev đổi class name từ `.btn-primary` sang `.button-main` mà không đổi giao diện, test này có fail không?"* — Nếu có → đang test implementation, cần refactor.

---

## [#13] Test Isolation — Mỗi Test Tự Lo State Của Mình

```typescript
// ❌ Test 2 phụ thuộc Test 1 đã thêm sản phẩm vào cart
test('1. thêm Grey jacket vào cart', async ({ page }) => {
  await page.goto('/products/grey-jacket')
  await page.getByRole('button', { name: 'Add to cart' }).click()
})
test('2. checkout — PHỤ THUỘC test 1', async ({ page }) => {
  await page.goto('/cart')
  // ❌ Nếu test 1 fail hoặc chạy riêng → cart trống → test 2 fail vô lý
  await page.getByRole('button', { name: 'Check out' }).click()
})

// ✅ Mỗi test tự setup state của mình
test('checkout với Grey jacket', async ({ page }) => {
  // Setup: tự thêm sản phẩm trong test này luôn
  await page.goto('/products/grey-jacket')
  await page.getByRole('button', { name: 'Add to cart' }).click()

  // Bây giờ mới test checkout
  await page.goto('/cart')
  await page.getByRole('button', { name: 'Check out' }).click()
  await expect(page).toHaveURL(/checkout/)
})
```

**Kiểm tra test isolation:**
```bash
# Chạy test nhiều lần — nếu fail ngẫu nhiên = test phụ thuộc thứ tự (flaky)
npx playwright test --repeat-each=3

# Chạy ngược thứ tự
npx playwright test --workers=4  # song song, thứ tự ngẫu nhiên
```

---

## [#14] Critical User Journeys — Test Đúng Thứ Cần Test

```typescript
// ✅ Critical journeys cho Sauce Demo e-commerce

// Journey 1: User có thể mua hàng (quan trọng nhất)
test('complete purchase — browse đến order confirmed @critical', async ({ page }) => {
  await page.goto('/products/grey-jacket')
  await page.getByRole('button', { name: 'Add to cart' }).click()
  await page.goto('/cart')
  await page.getByRole('button', { name: 'Check out' }).click()
  // ... fill shipping + payment
  await expect(page.getByText('Order confirmed')).toBeVisible()
})

// Journey 2: User có thể tìm và xem sản phẩm
test('search và tìm thấy sản phẩm @smoke', async ({ page }) => {
  await page.goto('/')
  await page.getByPlaceholder('Search').fill('jacket')
  await page.keyboard.press('Enter')
  await expect(page.locator('.product-card')).toHaveCount(2)
})

// Journey 3: User có thể quản lý tài khoản
test('login → xem order history → logout @smoke', async ({ page }) => {
  // (đã có session từ storageState)
  await page.goto('/account')
  await expect(page.getByRole('heading', { name: 'Account' })).toBeVisible()
  await page.getByRole('link', { name: 'Sign out' }).click()
  await expect(page).toHaveURL(/login/)
})

// ❌ Không cần test những thứ này (ít business value, dễ vỡ)
// test('màu nền header phải là #FFFFFF', ...)
// test('font chữ phải là 16px', ...)
// test('animation transition mất đúng 300ms', ...)
```

**Tags để filter test theo mức độ quan trọng:**
```bash
npx playwright test --grep @smoke    # chỉ chạy smoke tests (check nhanh)
npx playwright test --grep @critical # chỉ chạy critical paths
npx playwright test --grep-invert @slow  # bỏ qua test chậm
```

---

## [#15] Workflow: Record → Refactor → Ship

```bash
# Bước 1: Record (5 phút)
npx playwright codegen https://sauce-demo.myshopify.com
# → Thao tác flow cần test → Copy code vào file .spec.ts
```

```typescript
// Bước 2a: Refactor thủ công (tuần 1-4, khi đang học)
// TRƯỚC — Codegen output (dùng selector dễ vỡ)
await page.locator('button:has-text("Add to cart")').first().click()

// SAU — Refactor thủ công
await page.getByRole('button', { name: 'Add to cart' }).click()

// Bước 2b: Refactor bằng LLM (tuần 5+, khi đã hiểu POM)
// Prompt gửi LLM:
// "Refactor script này theo Page Object Model. Dùng getByRole hoặc
//  data-testid thay CSS selector. Thêm expect assertions. Xử lý loading.
//  Chia action thành methods có tên rõ ràng. Output: TypeScript + Playwright."
```

```typescript
// Bước 3: Review output LLM (10 phút) — QUAN TRỌNG
// □ Selector có đúng với app thực tế không? (chạy thử để xác nhận)
// □ Assertion có kiểm tra đúng điều cần không?
// □ Có test.describe.serial không? (nếu có → xem lại test isolation)
// □ Có waitForTimeout không? (nếu có → thay bằng expect() hoặc waitForURL)

// Bước 4: Chạy test
npx playwright test add-to-cart --headed   // xem browser chạy
npx playwright test                        // chạy toàn bộ
npx playwright show-report                 // xem HTML report
```

---

## [#16] Naming Convention — Tên Test Mô Tả Hành Vi

```typescript
// ❌ Tên không có thông tin
test('login test', ...)
test('test 1', ...)
test('cart', ...)

// ✅ Tên mô tả: [điều kiện] → [kết quả mong đợi]
test('login thành công với email và password hợp lệ', ...)
test('hiển thị lỗi khi đăng nhập với password sai', ...)
test('không thể checkout khi giỏ hàng trống', ...)
test('số lượng trong giỏ hàng tăng lên 1 sau khi thêm sản phẩm', ...)

// ✅ Cấu trúc file theo feature
test.describe('Authentication', () => {
  test.describe('Login', () => {
    test('đăng nhập thành công với credentials hợp lệ', ...)
    test('hiển thị lỗi khi password sai', ...)
    test('hiển thị lỗi khi email không tồn tại', ...)
    test('không redirect khi form chưa điền đủ', ...)
  })
  test.describe('Logout', () => {
    test('logout thành công và redirect về trang login', ...)
  })
})

test.describe('Shopping Cart', () => {
  test('thêm sản phẩm vào giỏ hàng cập nhật số lượng', ...)
  test('xóa sản phẩm khỏi giỏ hàng', ...)
  test('giỏ hàng trống hiển thị thông báo phù hợp', ...)
})
```

**Cấu trúc thư mục chuẩn:**
```
tests/
├── features/
│   ├── auth/
│   │   ├── login.spec.ts
│   │   └── logout.spec.ts
│   ├── product/
│   │   ├── product-list.spec.ts
│   │   └── product-detail.spec.ts
│   ├── cart/
│   │   └── cart.spec.ts
│   └── checkout/
│       └── checkout.spec.ts
├── pages/
├── fixtures/
├── test-data/
└── auth.setup.ts
```

---

## [#17] Debug Khi Test Fail — Từ Nhanh Đến Chi Tiết

```bash
# Bước 1: Đọc error message trong terminal
# Playwright báo rõ: element nào không tìm thấy, assertion nào fail, timeout ở đâu

# Bước 2: Chạy 1 test cụ thể ở headed mode + slow motion
npx playwright test login --headed --slow-mo=500
# → Xem browser chạy, thấy đúng điểm bị fail

# Bước 3: Chạy với debug mode
npx playwright test login --debug
# → Mở Playwright Inspector: step qua từng action, tìm selector live

# Bước 4: Xem Trace Viewer (chi tiết nhất)
npx playwright test login --trace on
npx playwright show-trace test-results/login/trace.zip
# → Replay từng action, xem DOM tại từng thời điểm, xem network requests
```

```typescript
// Thêm breakpoint trong code để dừng và inspect
test('debug this', async ({ page }) => {
  await page.goto('/products/grey-jacket')
  await page.pause()  // MỞ Playwright Inspector — có thể click và tìm selector
  await page.getByRole('button', { name: 'Add to cart' }).click()
})

// Log giá trị để debug
const cartText = await page.locator('.cart-count').textContent()
console.log('Cart count hiện tại:', cartText)

// Chụp screenshot tại điểm cụ thể
await page.screenshot({ path: 'debug-step-3.png', fullPage: true })
```

**Thứ tự debug được đề xuất:**
```
1. Đọc error message → thường đủ để biết vấn đề
2. Chạy --headed --slow-mo → xem browser làm gì
3. Chạy --debug → dùng Inspector để tìm selector đúng
4. Xem Trace Viewer → khi cần chi tiết nhất (DOM, network, console)
```

> **Không bao giờ** thêm `waitForTimeout` để "fix" test fail — đó là giấu vấn đề đi, không phải fix. Tìm đúng nguyên nhân và dùng assertion hoặc waitForURL/waitForSelector phù hợp.

---

## Tổng hợp: Commands hay dùng hàng ngày

```bash
# Chạy test
npx playwright test                          # chạy tất cả
npx playwright test login                    # chạy file có tên "login"
npx playwright test --grep "thêm sản phẩm"  # chạy test có tên khớp
npx playwright test --grep @smoke            # chạy test có tag @smoke

# Chế độ chạy
npx playwright test --headed                 # hiện browser
npx playwright test --headed --slow-mo=500   # chạy chậm 500ms mỗi action
npx playwright test --debug                  # mở Playwright Inspector

# Report và debug
npx playwright show-report                   # mở HTML report
npx playwright test --trace on               # bật trace
npx playwright show-trace trace.zip          # xem trace

# Codegen
npx playwright codegen https://sauce-demo.myshopify.com   # record test
```
---
