---
sidebar_position: 1
slug: /education/age-ai/code/project-1-1
id: project-1-1
title: Project 1 - Bài 1
---

# Bài 1 — Tư Duy Phân Tích Trước Khi Code
### Sprint đầu tiên: từ lúc nhận app đến lúc có test plan rõ ràng
> Role: QC/Tester — DEV đã bàn giao xong, bắt đầu sprint testing
> App: https://sauce-demo.myshopify.com
> Mục tiêu bài học: Biết **suy nghĩ gì** và **theo thứ tự nào** trước khi viết 1 dòng code

---

## Bối cảnh Sprint

> DEV team vừa hoàn thành Sprint 3. FE và BE đã deploy lên staging.
> Tech lead nhắn: *"Sauce Demo e-commerce đã sẵn sàng để QC test. Deadline demo là cuối tuần."*
> **Bạn là QC/Tester — bắt đầu từ đây.**

Câu hỏi đầu tiên xuất hiện trong đầu hầu hết mọi người:
> *"Mình nên viết test gì trước?"*

Đây là câu hỏi sai. Câu hỏi đúng là:
> *"Mình cần hiểu gì về app này trước khi quyết định test gì?"*

---

## Bước 1 — Khám Phá App Như Một User Thật (Không Phải Như Tester)

**Mở https://sauce-demo.myshopify.com — đừng mở DevTools, đừng inspect element.**

Lần đầu vào app, làm đúng 1 việc: **dùng app như một người mua hàng bình thường.**

```
Thao tác theo thứ tự tự nhiên:
1. Nhìn trang chủ — app bán gì? Có bao nhiêu sản phẩm?
2. Click vào 1 sản phẩm — xem thông tin gì hiện ra?
3. Thêm vào giỏ hàng — có gì thay đổi trên UI?
4. Vào giỏ hàng — thông tin hiển thị thế nào?
5. Thử checkout — flow đi qua những bước nào?
6. Thử đăng ký / đăng nhập — có gì khác sau khi login?
7. Thử tìm kiếm — kết quả trả về thế nào?
```

**Sau 10-15 phút khám phá, tự trả lời:**
- App này làm được những việc gì? (features)
- User sẽ dùng app này để làm gì? (jobs to be done)
- Flow nào user sẽ đi qua thường xuyên nhất?

> **Tại sao bước này quan trọng?**
> QC/Tester có 5 năm kinh nghiệm manual testing biết rõ: không thể test cái mình chưa hiểu.
> Automation testing cũng vậy — script viết sai flow = test không có giá trị dù code chạy được.

---

## Bước 2 — Vẽ Bản Đồ App (App Map)

Sau khi khám phá, **vẽ lại những gì bạn thấy** — không cần đẹp, chỉ cần đủ để hiểu cấu trúc.

### App Map của Sauce Demo

```
SAUCE DEMO — E-COMMERCE
│
├── Trang chủ (/)
│   ├── Header: Logo · Search · Cart icon · Account menu
│   ├── Hero banner
│   └── Product grid (6 sản phẩm)
│
├── Catalog (/collections/all)
│   ├── Filter / Sort
│   └── Product cards: ảnh · tên · giá · nút Add to cart
│
├── Product Detail (/products/:slug)
│   ├── Ảnh sản phẩm (gallery)
│   ├── Tên · Giá · Mô tả
│   ├── Chọn size/màu (nếu có)
│   ├── Số lượng
│   └── Nút Add to cart
│
├── Cart (/cart)
│   ├── Danh sách sản phẩm: ảnh · tên · giá · số lượng · xóa
│   ├── Tổng tiền
│   └── Nút Checkout
│
├── Checkout (multi-step)
│   ├── Step 1: Thông tin liên hệ (email)
│   ├── Step 2: Thông tin giao hàng (địa chỉ)
│   ├── Step 3: Phương thức giao hàng
│   ├── Step 4: Thanh toán (thẻ)
│   └── Step 5: Order confirmation
│
└── Account
    ├── Login (/account/login)
    ├── Register (/account/register)
    ├── Account dashboard (/account)
    └── Order history
```

> **Lưu ý khi vẽ App Map:**
> Không cần chi tiết 100% — chỉ cần đủ để trả lời:
> *"Nếu app này bị lỗi ở đâu thì user không dùng được nữa?"*

---

## Bước 3 — Xác Định Critical Flows

Từ App Map, **không phải tất cả flows đều quan trọng như nhau.**

### Framework phân loại: MoSCoW cho Testing

| Mức độ | Ý nghĩa | Nếu lỗi thì... |
|---|---|---|
| **Must test** | App không dùng được nếu flow này lỗi | User bỏ đi, doanh thu = 0 |
| **Should test** | Ảnh hưởng lớn đến trải nghiệm | User frustrated, có thể bỏ |
| **Could test** | Nice to have | User hơi khó chịu nhưng vẫn dùng được |
| **Won't test (now)** | Ít rủi ro, test sau | Ảnh hưởng tối thiểu |

### Áp dụng vào Sauce Demo

**Must test — Critical:**
```
✦ Purchase flow: thêm sản phẩm → checkout → order confirmed
✦ Add to cart: sản phẩm vào giỏ, số lượng cập nhật đúng
✦ Login / Logout
```

**Should test — High:**
```
✦ Product display: tên, giá, ảnh hiển thị đúng
✦ Search: tìm kiếm trả về đúng kết quả
✦ Cart management: cập nhật số lượng, xóa sản phẩm
✦ Register: tạo tài khoản mới
```

**Could test — Medium:**
```
✦ Wishlist · Navigation · Responsive · Error messages
```

**Won't test now — Low:**
```
✦ Animation · SEO · Performance · Accessibility
```

---

## Bước 4 — Hiểu Rõ Công Cụ Sẽ Dùng: POM và Fixtures

Trước khi viết test case tay, cần hiểu **tại sao** bài học này dùng Page Object Model (POM)
và Fixtures là gì — để khi code không bị bỡ ngỡ.

### Page Object Model (POM) là gì?

POM là cách tổ chức code: **tách locators và actions của từng trang ra một class riêng.**

**Vấn đề khi không dùng POM:**
```typescript
// login.spec.ts
await page.getByLabel('Email').fill('user@test.com')     // lặp
await page.getByLabel('Password').fill('pass')            // lặp
await page.getByRole('button', { name: 'Sign in' }).click() // lặp

// checkout.spec.ts — cần login trước khi checkout
await page.getByLabel('Email').fill('user@test.com')     // lặp lại!
await page.getByLabel('Password').fill('pass')            // lặp lại!
await page.getByRole('button', { name: 'Sign in' }).click() // lặp lại!

// Khi nút "Sign in" đổi text thành "Log in"
// → Phải sửa ở TẤT CẢ files!
```

**Giải pháp với POM:**
```typescript
// pages/LoginPage.ts — khai báo 1 lần duy nhất
export class LoginPage {
  readonly signInButton = page.getByRole('button', { name: 'Sign in' })

  async login(email: string, password: string) {
    await page.getByLabel('Email').fill(email)
    await page.getByLabel('Password').fill(password)
    await this.signInButton.click()
  }
}

// login.spec.ts — dùng POM
const loginPage = new LoginPage(page)
await loginPage.login('user@test.com', 'pass')

// checkout.spec.ts — dùng lại POM
const loginPage = new LoginPage(page)
await loginPage.login('user@test.com', 'pass')

// Khi nút đổi text → chỉ sửa 1 dòng trong LoginPage.ts
// Tất cả tests tự cập nhật theo
```

**Nguyên tắc POM:**
```
1 Page = 1 Class
Class chứa: locators (tìm element ở đâu) + actions (làm gì với element đó)
Spec file chỉ chứa: test logic (làm gì, assert gì)
```

---

### Custom Fixtures là gì? Và tại sao học sau POM?

Fixtures là bước **tiếp theo sau POM** — giải quyết vấn đề phải viết
`new LoginPage(page)` ở mỗi test.

```typescript
// Dùng POM thủ công (Bài 2 — học trước)
test('login', async ({ page }) => {
  const loginPage = new LoginPage(page)  // phải viết ở mỗi test
  await loginPage.goto()
})

// Dùng Fixtures (Bài 3 — học sau)
test('login', async ({ loginPage }) => {  // loginPage tự động có sẵn
  await loginPage.goto()
})
```

**Quan hệ giữa POM và Fixtures:**
```
POM (Bài B):      Định nghĩa LoginPage class — locators + actions
                          ↓
Fixtures (Bài C): Tự động tạo new LoginPage(page) và inject vào test
```

**Fixtures KHÔNG thay thế POM — Fixtures là lớp tiện ích xây trên POM.**
Hiểu POM trước → Fixtures sẽ rõ ràng và có ý nghĩa.
Dùng Fixtures mà chưa hiểu POM → dùng như magic, không biết debug khi lỗi.

**Lộ trình học:**
```
Bài 1 (bạn đang đọc): Mindset phân tích, test case tay
      ↓
Bài 2: Full flow với POM — new LoginPage(page) thủ công
      ↓
[Có thể dừng ở đây — đủ dùng cho mọi project kể cả HRM, ERP]
      ↓ (khi muốn nâng cao)
Bài 3: Refactor Bài B — thêm Fixtures vào codebase đã có
```

---

## Bước 5 — Viết Test Case Tay Trước Khi Code

**Quy tắc quan trọng:** Không bao giờ mở VS Code trước khi đã viết xong
test case bằng ngôn ngữ tự nhiên.

Tại sao? Khi mở VS Code, não bắt đầu nghĩ theo code — dễ bỏ sót edge case,
dễ viết test theo cách "code chạy được" thay vì "test đúng behavior".

### Format viết test case

```
Test ID:              TC-[feature]-[số thứ tự]
Feature:              [Tên feature]
Flow:                 [Happy path / Sad path / Edge case]
Tiêu đề:             [Mô tả ngắn hành vi cần kiểm tra]

Điều kiện:           [State của app trước khi test bắt đầu]
Các bước:            [Bước 1, 2, 3...]
Kết quả mong đợi:   [App phải làm gì]
Mức độ:              [Critical / High / Medium]
```

### Test cases cho Sauce Demo — Critical flows

---

**TC-CART-01**
```
Feature:    Add to Cart
Flow:       Happy path
Tiêu đề:   Thêm sản phẩm vào giỏ hàng thành công

Điều kiện:  Đang ở trang product detail của Grey Jacket
Các bước:
  1. Quan sát số lượng hiện tại trên cart icon ở header
  2. Click nút "Add to cart"
  3. Quan sát cart icon ở header
  4. Click vào cart icon để vào trang Cart

Kết quả mong đợi:
  - Số lượng trên cart icon tăng lên 1
  - Trang Cart hiển thị Grey Jacket với đúng tên, giá, số lượng = 1
  - Tổng tiền bằng giá của Grey Jacket

Mức độ: Critical
```

---

**TC-CART-02**
```
Feature:    Add to Cart
Flow:       Sad path
Tiêu đề:   Thêm nhiều sản phẩm khác nhau vào giỏ hàng

Điều kiện:  Giỏ hàng đang trống
Các bước:
  1. Thêm Grey Jacket vào giỏ hàng
  2. Quay lại catalog
  3. Thêm Noir Jacket vào giỏ hàng
  4. Vào trang Cart

Kết quả mong đợi:
  - Cart icon hiển thị số lượng = 2
  - Trang Cart có đúng 2 sản phẩm: Grey Jacket và Noir Jacket
  - Tổng tiền = giá Grey Jacket + giá Noir Jacket

Mức độ: Critical
```

---

**TC-CHECKOUT-01**
```
Feature:    Checkout
Flow:       Happy path
Tiêu đề:   Hoàn thành checkout với thông tin hợp lệ

Điều kiện:  Giỏ hàng có 1 sản phẩm (Grey Jacket), đã login
Các bước:
  1. Vào trang Cart
  2. Click "Check out"
  3. Điền email liên hệ
  4. Click "Continue to shipping"
  5. Điền địa chỉ giao hàng đầy đủ
  6. Chọn phương thức giao hàng
  7. Click "Continue to payment"
  8. Điền thông tin thẻ test (4242 4242 4242 4242)
  9. Click "Pay now"

Kết quả mong đợi:
  - Hiển thị trang Order Confirmation
  - Có order number
  - Tóm tắt đơn hàng đúng sản phẩm và giá

Mức độ: Critical
```

---

**TC-AUTH-01**
```
Feature:    Login
Flow:       Happy path
Tiêu đề:   Đăng nhập thành công với credentials hợp lệ

Điều kiện:  Đang ở trang Login, có tài khoản đã đăng ký
Các bước:
  1. Nhập email hợp lệ
  2. Nhập password đúng
  3. Click "Sign in"

Kết quả mong đợi:
  - Redirect đến trang Account dashboard
  - Header hiển thị tên user hoặc "My account"
  - Không còn thấy link "Login" ở header

Mức độ: Critical
```

---

**TC-AUTH-02**
```
Feature:    Login
Flow:       Sad path
Tiêu đề:   Hiển thị lỗi khi đăng nhập với password sai

Điều kiện:  Đang ở trang Login
Các bước:
  1. Nhập email hợp lệ (tài khoản tồn tại)
  2. Nhập password SAI
  3. Click "Sign in"

Kết quả mong đợi:
  - Không redirect — vẫn ở trang Login
  - Hiển thị thông báo lỗi rõ ràng
  - Email field vẫn giữ nguyên giá trị

Mức độ: Critical
```

---

**TC-AUTH-03**
```
Feature:    Login
Flow:       Edge case
Tiêu đề:   Không thể login khi bỏ trống email hoặc password

Điều kiện:  Đang ở trang Login
Các bước (case A): Click "Sign in" khi cả hai fields đều trống
Các bước (case B): Điền email, bỏ trống password → Click "Sign in"
Các bước (case C): Bỏ trống email, điền password → Click "Sign in"

Kết quả mong đợi:
  - Không submit form
  - Hiển thị validation message cho field bị trống
  - Không redirect

Mức độ: High
```

---

## Bước 6 — Quyết Định Thứ Tự Build Automation

### Nguyên tắc ưu tiên

```
1. Critical trước — flows ảnh hưởng trực tiếp đến business
2. Nền tảng trước — flows mà tests khác phụ thuộc vào (login, add to cart)
3. Stable trước — flows ít thay đổi UI
4. Dễ verify trước — expected result rõ ràng, dễ assert
```

### Thứ tự build cho Sauce Demo

```
Sprint 1 — Foundation:
  □ TC-AUTH-01: Login thành công        ← nhiều test khác cần login
  □ TC-AUTH-02: Login thất bại
  □ TC-CART-01: Add to cart             ← nền tảng của purchase flow

Sprint 2 — Core Flow:
  □ TC-CART-02: Add nhiều sản phẩm
  □ TC-CHECKOUT-01: Full checkout flow

Sprint 3 — Coverage mở rộng:
  □ TC-AUTH-03: Validation cases
  □ Product display, Search, Cart management
```

> **Tại sao login trước, không phải checkout?**
> Checkout cần login. Nếu viết checkout test trước mà chưa có auth setup
> → phải hardcode login steps vào mọi test → khi logic login thay đổi → vỡ hết.

---

## Bước 7 — Chuẩn Bị Test Data

```
✅ Tài khoản test:
   - Valid user: email + password hợp lệ, đã verified
   - Invalid user: email tồn tại nhưng password sai
   - New user: email chưa đăng ký

✅ Sản phẩm:
   - Grey Jacket: tên, giá, URL slug
   - Noir Jacket: tên, giá, URL slug
   - Striped Top: tên, giá, URL slug

✅ Thông tin checkout:
   - Shipping address đầy đủ
   - Test card: 4242 4242 4242 4242, expiry 12/25, CVV 123

✅ Environment:
   - BASE_URL: https://sauce-demo.myshopify.com
   - Credentials: lưu trong .env (không hardcode)
```

---

## Bước 8 — Pre-Code Checklist

```
App Understanding:
□ Đã khám phá toàn bộ app ít nhất 1 lần như user thật
□ Đã vẽ App Map với tất cả pages và flows chính
□ Đã xác định được đâu là critical flows

Test Planning:
□ Đã viết test case tay cho tất cả critical flows
□ Mỗi test case có: điều kiện, steps, expected result rõ ràng
□ Đã phân loại MoSCoW và xác định thứ tự build
□ Có cả happy path và ít nhất 1 sad path cho mỗi critical feature

Test Data:
□ Đã liệt kê tất cả data cần dùng
□ Có tài khoản test hoạt động (đã verify)
□ Data sẽ lưu trong .env và test-data files, không hardcode

Hiểu công cụ:
□ Hiểu POM là gì và tại sao cần
□ Biết Fixtures là gì và sẽ học ở Bài C (sau khi thành thạo POM)
□ Biết lộ trình: Bài B (POM) → [đủ dùng] → Bài C (Fixtures, tùy chọn)
```

---

## Tổng Kết: Mindset Của QC/Tester Trước Khi Code

```
SAI:   "Mình cần viết test cho tất cả mọi thứ"
ĐÚNG:  "Mình cần viết test cho những gì quan trọng nhất trước"

SAI:   "Mở VS Code → viết code → nghĩ sau"
ĐÚNG:  "Hiểu app → plan test → chuẩn bị data → rồi mới code"

SAI:   "Test pass là xong"
ĐÚNG:  "Test đúng behavior của user, không phải test code chạy được"

SAI:   "Automation test thay thế manual testing"
ĐÚNG:  "Automation bảo vệ những gì đã biết là đúng.
        Manual testing khám phá những gì chưa biết."
```

### Thứ tự làm việc chuẩn

```
1. Khám phá app như user thật              (10-15 phút)
2. Vẽ App Map                              (15 phút)
3. Phân loại flows theo MoSCoW             (15 phút)
4. Đọc hiểu POM và lộ trình học           (10 phút)
5. Viết test case tay — critical first     (30-45 phút)
6. Quyết định thứ tự build                 (10 phút)
7. Chuẩn bị test data                      (15 phút)
8. Tick Pre-code checklist                 (5 phút)
         ↓
   MỞ VS CODE → BÀI B
```

---

## Bài Tập Thực Hành

```
□ Mở app, khám phá 15 phút như user mua hàng thật
□ Vẽ App Map ra giấy hoặc Google Docs
□ Liệt kê 5 flows quan trọng nhất theo MoSCoW
□ Viết test case tay cho TC-CART-01 và TC-AUTH-01
  (dùng format trong bài, tự viết lại — không copy)
□ Quyết định thứ tự: bạn sẽ viết automation theo thứ tự nào? Tại sao?
□ Giải thích bằng lời: POM là gì, tại sao cần, khác Fixtures thế nào?
```

> Gửi kết quả cho mentor review trước khi chuyển sang Bài B.
> Mentor review **tư duy** — test case có cover đúng behavior không?
> Thứ tự có hợp lý không? Giải thích POM có đúng không?

---