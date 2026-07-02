---
sidebar_position: 1
slug: /education/age-ai/code/cheatsheet-ts-js-foundation
id: cheatsheet-ts-js-foundation
title: Cheatsheet TS/JS Foundation
---

# Cheatsheet 1 — JS/TS Foundation cho Playwright
> Tra cứu nhanh khi quên cú pháp · Không cần đọc hết — tìm đúng phần cần dùng
> App thực hành: https://sauce-demo.myshopify.com

---

## Mục lục tra cứu nhanh

| Concept | Dùng khi nào | Xem mục |
|---|---|---|
| `const` / `let` | Khai báo biến, lưu URL, selector, test data | [#1] |
| Arrow function `() => {}` | Viết callback trong test, fixture | [#2] |
| `async` / `await` | Mọi action trên browser (click, fill, goto) | [#3] |
| Template literal `` `${}` `` | Ghép chuỗi + biến, URL động, tên test | [#4] |
| Object `{}` | Lưu thông tin sản phẩm, user, config | [#5] |
| Destructuring `{ a, b } = obj` | Lấy nhiều field từ object cùng lúc | [#5] |
| Array `[]` + `for...of` | Test nhiều sản phẩm/user mà không lặp code | [#6] |
| Optional chaining `?.` | Tránh lỗi khi element/giá trị có thể null | [#7] |
| Nullish coalescing `??` | Giá trị mặc định khi null/undefined | [#7] |
| `import` / `export` | Tách test data, page object ra file riêng | [#8] |
| TypeScript Interface | Định nghĩa "khuôn" cho object, VS Code tự gợi ý | [#9] |
| `try` / `catch` | Bắt lỗi, chụp screenshot, throw lại | [#10] |

---

## [#1] const và let — Khai báo biến

**Quy tắc đơn giản:** Luôn dùng `const`. Chỉ đổi sang `let` khi VS Code báo lỗi (cần gán lại giá trị).

```typescript
// ✅ const — giá trị không thay đổi (dùng gần như mọi lúc)
const BASE_URL = 'https://sauce-demo.myshopify.com'
const greyJacket = { name: 'Grey jacket', price: '£55.00' }
const loginButton = page.getByRole('button', { name: 'Sign in' })

// ✅ let — chỉ khi cần gán lại giá trị
let retryCount = 0
retryCount++  // cần let vì giá trị thay đổi

// ❌ var — không dùng (scoping cũ, gây bug khó tìm)
var url = 'https://...'  // tránh hoàn toàn
```

> **Phỏng vấn hay hỏi:** `const` vs `let` vs `var` khác nhau thế nào?
> → `const`: không gán lại được · `let`: gán lại được, block scope · `var`: function scope, tránh dùng

---

## [#2] Arrow Function — Cú pháp hàm gọn

**Nhận dạng:** Playwright dùng arrow function ở khắp nơi. Không cần hiểu sâu, biết đọc là đủ.

```typescript
// ✅ Arrow function đầy đủ
test('login thành công', async ({ page }) => {
  await page.goto('/login')
  await page.getByRole('button', { name: 'Sign in' }).click()
})

// ✅ Arrow function rút gọn 1 dòng (không cần {} và return)
const getTitle = async (page) => page.title()
const isVisible = async (locator) => locator.isVisible()

// ✅ Trong fixture
productPage: async ({ page }, use) => {
  await use(new ProductPage(page))
}

// So sánh với regular function — cùng kết quả, Playwright dùng arrow
// Regular:  async function login(page) { ... }
// Arrow:    async (page) => { ... }
```

> **Nhớ:** `({ page }) => {}` là cú pháp nhận tham số `page` vào test. Dấu `{}` hai bên `page` là destructuring (lấy page từ object được truyền vào).

---

## [#3] Async / Await — Chờ browser action hoàn thành

**Quan trọng nhất trong toàn bộ cheatsheet.** Mọi thao tác với browser đều cần `await`.

```typescript
// ❌ Sai — không có await, code chạy tiếp khi action chưa xong
test('login', async ({ page }) => {
  page.goto('https://sauce-demo.myshopify.com/account/login')
  page.getByLabel('Email').fill('user@test.com')  // trang chưa load xong!
  page.getByRole('button', { name: 'Sign in' }).click()
})

// ✅ Đúng — await đảm bảo từng bước xong mới làm tiếp
test('login thành công', async ({ page }) => {
  await page.goto('https://sauce-demo.myshopify.com/account/login')
  await page.getByLabel('Email').fill('user@test.com')
  await page.getByLabel('Password').fill('mypassword')
  await page.getByRole('button', { name: 'Sign in' }).click()
  await expect(page).toHaveURL(/account/)
})
```

**Quy tắc nhớ nhanh:** Dòng nào bắt đầu bằng `page.` → thêm `await` trước nó.

> **Phỏng vấn hay hỏi:** Tại sao Playwright dùng async/await?
> → Browser actions (click, navigate, fill) là bất đồng bộ — mất thời gian để hoàn thành. `async/await` giúp code chạy tuần tự, chờ action xong mới làm bước tiếp theo.

---

## [#4] Template Literal — Ghép chuỗi thông minh

```typescript
// ❌ Dùng dấu + để ghép chuỗi — dễ thiếu space, khó đọc
const url = 'https://sauce-demo.myshopify.com' + '/products/' + slug
const msg = 'Sản phẩm ' + product.name + ' có giá ' + product.price

// ✅ Template literal — dùng backtick ` và ${} để nhúng biến
const url = `https://sauce-demo.myshopify.com/products/${slug}`
const msg = `Sản phẩm ${product.name} có giá ${product.price}`

// ✅ Dùng trong test name (data-driven)
for (const product of products) {
  test(`${product.name} — giá hiển thị đúng`, async ({ page }) => {
    await page.goto(`${BASE_URL}/products/${product.slug}`)
    await expect(page.getByText(product.price)).toBeVisible()
  })
}

// ✅ Dùng trong assertion message
await expect(page.locator('h1'),
  `Trang sản phẩm ${product.name} phải hiển thị đúng tiêu đề`
).toContainText(product.name)
```

> **Lưu ý:** Backtick `` ` `` là phím góc trên bên trái bàn phím (cạnh phím số 1), khác với dấu nháy đơn `'`.

---

## [#5] Object và Destructuring — Quản lý Test Data

```typescript
// ✅ Tạo object — nhóm thông tin liên quan
const greyJacket = {
  name: 'Grey jacket',
  price: '£55.00',
  slug: 'grey-jacket',
  inStock: true,
}

// ✅ Truy cập property bằng dấu chấm
await page.goto(`${BASE_URL}/products/${greyJacket.slug}`)
await expect(page.locator('h1')).toContainText(greyJacket.name)
await expect(page.getByText(greyJacket.price)).toBeVisible()

// ✅ Destructuring — lấy nhiều property cùng lúc, code gọn hơn
const { name, price, slug } = greyJacket
// Tương đương: const name = greyJacket.name; const price = greyJacket.price; ...

// ✅ Destructuring trong function parameter
async function checkProduct({ name, price, slug }) {
  await page.goto(`${BASE_URL}/products/${slug}`)
  await expect(page.locator('h1')).toContainText(name)
  await expect(page.getByText(price)).toBeVisible()
}

// ✅ Spread operator — copy và override object
const saleJacket = { ...greyJacket, price: '£40.00' }
// saleJacket = { name: 'Grey jacket', slug: 'grey-jacket', price: '£40.00' }
```

---

## [#6] Array và for...of — Test Data-Driven

```typescript
// ✅ Khai báo array test data
const products = [
  { name: 'Grey jacket',  price: '£55.00', slug: 'grey-jacket'  },
  { name: 'Noir jacket',  price: '£60.00', slug: 'noir-jacket'  },
  { name: 'Striped top',  price: '£50.00', slug: 'striped-top'  },
]

// ✅ for...of — sinh test case tự động cho từng item
for (const product of products) {
  test(`${product.name} — giá hiển thị đúng`, async ({ page }) => {
    await page.goto(`${BASE_URL}/products/${product.slug}`)
    await expect(page.getByText(product.price)).toBeVisible()
  })
}
// Kết quả: 3 test cases độc lập trong HTML report

// ✅ Array methods hay dùng trong test
const names = ['Grey jacket', 'Noir jacket', 'Striped top']

names.filter(n => n.includes('jacket'))   // ['Grey jacket', 'Noir jacket']
names.map(n => n.toLowerCase())           // ['grey jacket', 'noir jacket', ...]
names.find(n => n === 'Striped top')      // 'Striped top'
names.includes('Grey jacket')             // true

// ✅ Dùng với allTextContents() của Playwright
const allProductNames = await page.locator('.product-title').allTextContents()
// allProductNames = ['Grey jacket', 'Noir jacket', 'Striped top']
expect(allProductNames).toContain('Grey jacket')
```

> **Phỏng vấn hay hỏi:** `map` vs `filter` vs `find` khác nhau thế nào?
> → `map`: biến đổi từng phần tử, trả về array mới · `filter`: lọc phần tử thỏa điều kiện · `find`: trả về phần tử đầu tiên thỏa điều kiện (hoặc undefined)

---

## [#7] Optional Chaining và Nullish Coalescing

```typescript
// ❌ Lỗi crash nếu element không tồn tại
const text = element.textContent.trim()     // TypeError nếu element là null
const name = user.profile.displayName       // lỗi nếu profile undefined

// ✅ Optional chaining ?. — trả về undefined thay vì crash
const text = element?.textContent?.trim()
const name = user?.profile?.displayName

// ✅ Nullish coalescing ?? — dùng giá trị mặc định khi null/undefined
const displayName = await locator.textContent() ?? 'Không có tên'
const timeout = config.timeout ?? 30000
const baseUrl = process.env.BASE_URL ?? 'https://sauce-demo.myshopify.com'

// ✅ Kết hợp cả hai
const productName = product?.details?.name ?? 'Unknown product'

// ✅ Non-null assertion ! (TypeScript) — dùng với env variables
const email = process.env.TEST_EMAIL!     // nói với TypeScript: "biến này chắc chắn có giá trị"
const password = process.env.TEST_PASSWORD!
```

> **Phân biệt `??` và `||`:**
> - `??` chỉ dùng fallback khi giá trị là `null` hoặc `undefined`
> - `||` dùng fallback khi giá trị là bất kỳ falsy nào (`0`, `''`, `false`, `null`, `undefined`)
> - Trong test: dùng `??` để tránh bug khi giá trị hợp lệ là `0` hoặc `''`

---

## [#8] Import / Export — Tách file, tái sử dụng

```typescript
// ✅ test-data/products.ts — khai báo data 1 lần
export const products = {
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
}

export const BASE_URL = 'https://sauce-demo.myshopify.com'

// ✅ test-data/users.ts
export const users = {
  valid: {
    email: process.env.TEST_EMAIL!,
    password: process.env.TEST_PASSWORD!,
  },
  invalid: {
    email: 'notexist@example.com',
    password: 'wrongpassword',
  },
}

// ✅ tests/product.spec.ts — import và dùng
import { products, BASE_URL } from '../test-data/products'
import { users } from '../test-data/users'
import { ProductPage } from '../pages/ProductPage'

test('grey jacket hiển thị đúng giá', async ({ page }) => {
  const productPage = new ProductPage(page)
  await productPage.goto(products.greyJacket.slug)
  await productPage.expectPrice(products.greyJacket.price)
})
```

**Cấu trúc thư mục chuẩn:**
```
tests/
├── pages/          ← Page Object classes
├── fixtures/       ← Custom fixtures
├── test-data/      ← products.ts, users.ts, ...
└── features/       ← spec files theo feature
```

---

## [#9] TypeScript Interface — Cấu trúc rõ ràng, VS Code tự gợi ý

```typescript
// ✅ Định nghĩa interface
interface Product {
  name: string
  price: string
  slug: string
  inStock?: boolean   // ? = optional, không bắt buộc điền
}

interface UserCredentials {
  email: string
  password: string
}

// ✅ Dùng interface — VS Code tự gợi ý field, báo lỗi khi sai
const greyJacket: Product = {
  name: 'Grey jacket',
  price: '£55.00',
  slug: 'grey-jacket',
  // inStock bỏ qua được vì optional
}

// ❌ VS Code báo lỗi ngay khi gõ sai
const badProduct: Product = {
  nane: 'Grey jacket',  // ❌ lỗi: 'nane' không có trong Product
  price: 123,           // ❌ lỗi: phải là string, không phải number
}

// ✅ Dùng với array và function
const allProducts: Product[] = [greyJacket, ...]

async function checkProduct(product: Product): Promise<void> {
  await page.goto(`${BASE_URL}/products/${product.slug}`)
  await expect(page.locator('h1')).toContainText(product.name)
}
```

> **Lợi ích thực tế:** Sau khi gõ `greyJacket.` VS Code hiện danh sách: `name`, `price`, `slug`, `inStock` — không cần nhớ tên field.

---

## [#10] Try / Catch — Xử lý lỗi và Debug

```typescript
// ✅ Bắt lỗi, chụp screenshot, throw lại để test vẫn fail
test('checkout flow', async ({ page }) => {
  try {
    await page.goto('/cart')
    await page.getByRole('button', { name: 'Check out' }).click()
    await page.getByLabel('First name').fill('John')
    await page.getByLabel('Last name').fill('Doe')
    await page.getByRole('button', { name: 'Continue to shipping' }).click()
    await expect(page).toHaveURL(/shipping/)
  } catch (error) {
    // Chụp screenshot để biết lỗi xảy ra ở bước nào
    await page.screenshot({
      path: `screenshots/checkout-fail-${Date.now()}.png`,
      fullPage: true,
    })
    throw error  // QUAN TRỌNG: throw lại để test vẫn được đánh dấu FAIL
  }
})

// ✅ Cấu hình tự động (thay thế try/catch thủ công)
// playwright.config.ts
use: {
  screenshot: 'only-on-failure',   // tự chụp khi fail
  video: 'retain-on-failure',      // tự record video khi fail
  trace: 'on-first-retry',         // tự trace khi retry
}
```

> **Lưu ý quan trọng:** Nếu không `throw error` sau khi catch, test sẽ **pass** dù có lỗi — luôn throw lại.

---

## Tổng hợp: JS/TS hay dùng trong Playwright

```typescript
// Một test case dùng gần hết các concept trên
import { test, expect } from '../fixtures'           // [#8] import
import { products, BASE_URL } from '../test-data/products'

interface CheckOptions {                              // [#9] interface
  expectInStock?: boolean
}

for (const product of Object.values(products)) {    // [#6] array + for...of
  test(`${product.name} — kiểm tra trang sản phẩm`, // [#4] template literal
    async ({ page, productPage }) => {               // [#2] arrow function
    try {                                            // [#10] try/catch
      await productPage.goto(product.slug)           // [#3] async/await

      const { name, price } = product               // [#5] destructuring
      const title = await page.title() ?? 'No title' // [#7] nullish coalescing

      await expect(page.locator('h1')).toContainText(name)
      await expect(page.getByText(price)).toBeVisible()
    } catch (error) {
      await page.screenshot({ path: `screenshots/${product.slug}-fail.png` })
      throw error
    }
  })
}
```
---



