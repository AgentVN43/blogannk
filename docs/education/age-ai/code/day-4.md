---
sidebar_position: 1
slug: /education/age-ai/code/day-4
id: age-ai-code-day-4
title: Day 4
---

# Day 4 — Cấu trúc Playwright project + Chạy test mẫu

---

## PHẦN 1 — LÝ THUYẾT

### 1. Playwright Project là gì? (Giải thích bằng ngôn ngữ đơn giản)

Khi bạn bắt đầu viết automation, bạn không chỉ viết code lẻ tẻ mà cần có một **khuôn khổ tổ chức** (project structure) để quản lý tất cả các file test, cấu hình, báo cáo và dependencies. Playwright cung cấp sẵn một cấu trúc tiêu chuẩn để bạn bắt đầu.

**Hãy tưởng tượng** giống như cách bạn tổ chức thư mục test case trong manual testing:

| Manual Testing | Playwright Project |
|---|---|
| Thư mục `TestCases/` | Thư mục `tests/` — chứa các file `.spec.ts` |
| File Excel chứa test data | Thư mục `test-data/` hoặc file `.json` |
| File hướng dẫn chạy test (run instruction) | File `playwright.config.ts` — cấu hình chạy test |
| Báo cáo test (bug report) | HTML Report tự động sinh sau khi chạy |
| Thư viện hàm dùng chung (common functions) | Thư mục `pages/` hoặc `utils/` — chứa code tái sử dụng |

**Vấn đề thực tế mà cấu trúc này giải quyết:**

- Khi bạn manual test, bạn có thói quen mở file Excel → tìm test case → chạy từng bước → đánh dấu PASS/FAIL. 
- Khi automation, nếu không có cấu trúc rõ ràng, bạn sẽ gặp rối:
  - ❌ Bạn không biết test script nào đã chạy, test nào chưa
  - ❌ Không tìm thấy file cấu hình để thay đổi browser hay timeout
  - ❌ Báo cáo kết quả bị trộn lẫn, khó đọc
  - ❌ Code không tái sử dụng được — mỗi test viết lại từ đầu

**Cấu trúc Playwright mặc định sau khi chạy `npm init playwright@latest` sẽ có:**

```
my-playwright-project/
├── tests/                    # Thư mục chứa tất cả test script
│   └── example.spec.ts       # File test mẫu (bạn sẽ chạy thử)
├── test-results/             # Thư mục chứa kết quả từng lần chạy (tự tạo khi chạy)
├── playwright-report/        # Thư mục chứa HTML report (tự tạo)
├── playwright.config.ts      # File cấu hình chính
├── package.json              # Quản lý dependencies và scripts
├── package-lock.json         # Khóa version dependencies
└── .gitignore                # File bỏ qua khi push lên Git
```

---

### 2. File `example.spec.ts` là gì?

File `.spec.ts` là **file test** — nơi bạn viết các kịch bản kiểm thử tự động. Playwright cung cấp một file mẫu tên `example.spec.ts` để bạn làm quen.

**So sánh với manual testing:**
- Manual: bạn mở file Word/Excel, đọc từng bước và làm thủ công.
- Automation: bạn viết code trong file `.spec.ts`, Playwright sẽ tự động thực hiện từng bước đó trên browser.

**Điểm quan trọng cần nhớ:**

1. **File `.spec.ts` = 1 test suite** — có thể chứa nhiều test case (nhiều function `test()`)
2. **Mỗi `test()` = 1 test case** — tương ứng với 1 kịch bản kiểm thử cụ thể
3. **Hàm `test.describe()`** — dùng để nhóm các test case có liên quan (cùng flow, cùng feature)
4. **File mặc định `example.spec.ts`** — chỉ mang tính chất demo, bạn sẽ xóa nó và viết test cho project thật sau

---

### 3. HTML Report là gì?

Sau khi chạy test, Playwright tự động tạo ra một **HTML Report** (báo cáo dạng web) giúp bạn xem kết quả một cách trực quan.

**So sánh với manual testing:**
- Manual: bạn tự đánh dấu PASS/FAIL trong Excel, đôi khi kèm ảnh chụp màn hình.
- Automation: Playwright tạo báo cáo tự động, có thể bao gồm:
  - ✅ Test PASS hay FAIL
  - ⏱️ Thời gian chạy từng test
  - 🖼️ Screenshot khi fail (nếu cấu hình)
  - 📋 Step-by-step trace (xem từng bước đã làm gì)
  - 📊 Thống kê tổng quan (bao nhiêu test chạy, bao nhiêu pass/fail)

**Lợi ích:** Bạn có thể share report này với team (PM, Dev, QC khác) để mọi người cùng xem kết quả, giống như bạn từng share file Excel báo cáo test.

---

### 4. Các điểm chính cần nhớ

- 📁 **Cấu trúc project giúp tổ chức** — giống như bạn sắp xếp test case vào thư mục trong manual
- ⚙️ **File `playwright.config.ts` là "bộ điều khiển trung tâm"** — nơi set browser, timeout, report format
- 🧪 **File `.spec.ts` chứa test script** — mỗi file là một nhóm test case
- 📊 **HTML Report là báo cáo tự động** — giúp bạn đọc kết quả nhanh, có trace để debug khi fail
- 🚀 **Chạy test = Playwright mở browser tự động** — không cần làm thủ công từng bước như manual

---

## PHẦN 2 — CODE EXAMPLE

### Ví dụ 1: Cách tạo và chạy file test đầu tiên

#### ❌ CÁCH SAI

```typescript
// ❌ Đừng viết thế này - Không dùng cấu trúc test của Playwright
// 👎 Viết code JavaScript lộn xộn, không theo chuẩn Playwright

// Tự viết function mở browser (rất dài dòng)
async function openBrowser() {
  // ... hàng trăm dòng code tự viết lại
}

// Không dùng describe/spec tổ chức test
openBrowser();
clickLogin();
checkResult();
// -> Không có report, không có trace, không biết test nào fail
```

#### ✅ CÁCH ĐÚNG

```typescript
// ✅ Cách đúng - Dùng cú pháp Playwright chuẩn
// 📁 File: tests/demo-first-test.spec.ts

import { test, expect } from '@playwright/test';  // Import các hàm cần thiết

// Dùng test.describe để nhóm các test case liên quan
test.describe('Nhóm test cho chức năng Đăng nhập', () => {

  // test() là một test case cụ thể
  test('TC001 - Đăng nhập thành công với tài khoản hợp lệ', async ({ page }) => {
    // page là đối tượng đại diện cho browser tab, Playwright tự tạo
    
    // 1. Điều hướng đến trang login (giả định)
    await page.goto('https://example.com/login');
    
    // 2. Nhập username và password vào các field
    await page.fill('#username', 'tester01');  // fill = nhập text
    await page.fill('#password', 'Abc@123');
    
    // 3. Click nút Login
    await page.click('#login-button');
    
    // 4. Kiểm tra xem đã login thành công chưa
    // Giả định sau login, page có chứa text "Chào mừng"
    await expect(page.locator('.welcome-message')).toContainText('Chào mừng');
    
    // Nếu expectation đúng -> test PASS
    // Nếu expectation sai -> test FAIL và có screenshot trong report
  });

  test('TC002 - Đăng nhập thất bại với mật khẩu sai', async ({ page }) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'tester01');
    await page.fill('#password', 'wrongpassword');
    await page.click('#login-button');
    
    // Kiểm tra hiển thị thông báo lỗi
    await expect(page.locator('.error-message')).toBeVisible();
  });
});
```

---

### 📊 So sánh — Vì sao cách ĐÚNG tốt hơn?

| Tiêu chí | ❌ Cách SAI | ✅ Cách ĐÚNG |
|---|---|---|
| **Tổ chức** | Code lộn xộn, không phân biệt được test case này với test case khác | Dùng `test.describe` và `test()` phân tách rõ ràng từng test case |
| **Báo cáo** | Tự viết log, không có báo cáo chuẩn | Playwright tự động sinh HTML Report, có trace, screenshot khi fail |
| **Tái sử dụng** | Viết lại code mở browser cho mỗi test | Playwright quản lý browser lifecycle (mở/đóng tự động) |
| **Debug** | Không có tool hỗ trợ, phải tự đoán lỗi | Có trace, video, screenshot — xem lại từng step |

---

### Ví dụ 2: Chạy test bằng command

#### ❌ CÁCH SAI

```bash
# ❌ Không dùng lệnh Playwright
# 👎 Chạy kiểu thủ công, không có report

node my-test-file.js   # Chạy file JS thường, không có report
```

#### ✅ CÁCH ĐÚNG

```bash
# ✅ Dùng lệnh Playwright để chạy test

npx playwright test                              # Chạy TẤT CẢ test trong thư mục tests/
npx playwright test example.spec.ts             # Chạy 1 file cụ thể
npx playwright test --project=chromium          # Chạy trên Chromium (Chrome/Edge)
npx playwright test --headed                    # Chạy với browser hiện hình (thay vì headless)
npx playwright show-report                      # Mở HTML Report tự động trên browser
```

**Lưu ý quan trọng:**
- `npx playwright test` — là lệnh chính để chạy automation
- Mặc định Playwright chạy ở chế độ **headless** (không hiện browser) để nhanh hơn
- Thêm `--headed` nếu muốn xem browser hiện hình, giống như đang manual test

---

## PHẦN 3 — BÀI THỰC HÀNH TRÊN PROJECT THỰC

**📌 Dựa trên project thực của bạn:** App quản lý đơn hàng B2B (React). Có flow: **đăng nhập → tạo đơn hàng → chờ duyệt → xác nhận giao hàng**.

### 📝 Bài thực hành: Chạy test mẫu trên flow Đăng nhập

**Mục tiêu:** Tạo file test đầu tiên cho project thật và chạy thành công trên môi trường local của bạn.

---

### 🔍 Câu hỏi gợi mở — PHÂN TÍCH trước khi viết code

*Trước khi bắt tay vào code, hãy quan sát thật kỹ trang Đăng nhập của app thực và trả lời các câu hỏi sau (quan sát trên app, không phải đoán):*

1. **Element load như thế nào?** — Form login (username, password, button) xuất hiện ngay khi mở trang hay có độ trễ? Có loading spinner nào không?
2. **Element nào là duy nhất để xác định?** — Nhìn vào code HTML (F12), xem username field có `id` hay `data-testid` rõ ràng không? Nếu không, dùng selector gì thay thế?
3. **Sau khi login, làm sao biết thành công?** — Có element nào xuất hiện khi login thành công không (ví dụ: tên user ở góc phải, menu "Đơn hàng", ...)?
4. **App có popup confirm khi logout không?** — Nếu có, việc này ảnh hưởng gì đến test (cần xử lý popup)?

---

### ✅ Checklist các bước thực hành

| Bước | Hành động | Ghi chú |
|---|---|---|
| **1** | Mở terminal, chạy `npx playwright test example.spec.ts` để chạy test mẫu và xem nó PASS | Đảm bảo môi trường đã cài đặt đúng |
| **2** | Chạy `npx playwright show-report` để xem HTML Report | Lần đầu xem báo cáo dạng web |
| **3** | Mở file `playwright.config.ts`, tìm dòng `testDir: 'tests'` và `reporter: 'html'` | Xác định cấu hình đang dùng |
| **4** | Tạo file mới `tests/login-test.spec.ts` | Thay vì sửa file example |
| **5** | Viết test cho flow Đăng nhập của app thực: | |
| | a. `await page.goto('URL đăng nhập của app')` | Lấy URL từ browser |
| | b. `await page.fill('selector của username field', 'tài khoản thật')` | |
| | c. `await page.fill('selector của password field', 'mật khẩu thật')` | |
| | d. `await page.click('selector của nút Login')` | |
| | e. `await expect(page.locator('selector sau login')).toBeVisible()` | Ví dụ: menu Đơn hàng, tên user |
| **6** | Chạy test với lệnh `npx playwright test login-test.spec.ts --headed` để xem browser hiện hình | Quan sát Playwright tự động thao tác |
| **7** | Chạy test lần nữa nhưng bỏ `--headed` để chạy headless | So sánh tốc độ |
| **8** | Mở HTML Report sau khi chạy, xem kết quả của test vừa viết | |

---

### ✅ Acceptance Criteria — Bài thực hành hoàn thành khi:

| # | Tiêu chí | Cách kiểm tra |
|---|---|---|
| **1** | File `login-test.spec.ts` tồn tại trong thư mục `tests/` | Mở file explorer kiểm tra |
| **2** | Chạy `npx playwright test login-test.spec.ts` không bị lỗi syntax | Terminal không báo lỗi đỏ |
| **3** | Test PASS (hoặc nếu FAIL, bạn biết lý do và có thể sửa) | Xem report — test có dấu ✔ xanh |
| **4** | Bạn đã xem được HTML Report thành công trên browser | Mở được file `index.html` trong `playwright-report/` |

**📌 Bonus (nếu xong sớm):** Chạy thử với `--headed` và quay video màn hình để xem Playwright tự động điền form như thế nào (so với manual bạn từng làm).

---

## PHẦN 4 — INTERVIEW Q&A

### Câu hỏi 1: Khi nào nên dùng `test.describe` thay vì viết các `test()` riêng lẻ?

**💡 Gợi ý trả lời tham khảo (dành cho Mentor):**

- `test.describe` dùng để nhóm các test case có chung setup/context (cùng 1 flow, cùng 1 feature, ví dụ: tất cả test về Đăng nhập).
- Lợi ích: code rõ ràng hơn, có thể dùng `test.beforeEach` để chạy setup chung cho cả nhóm (giảm duplicate code), báo cáo hiển thị nhóm rõ ràng hơn.
- Không bắt buộc phải dùng, nhưng là best practice khi project có nhiều test.

---

### Câu hỏi 2: Nếu bạn chạy `npx playwright test` và thấy nhiều test fail chỉ vì test chạy quá nhanh trước khi element load, bạn làm gì để fix?

**💡 Gợi ý trả lời tham khảo (dành cho Mentor):**

- Đây là vấn đề về timing/await, phổ biến với người mới từ manual (manual họ tự đợi bằng mắt, còn tool chạy nhanh hơn họ đọc).
- Cách fix: dùng `await page.waitForSelector()` hoặc `await expect(locator).toBeVisible()` — Playwright tự động wait lên tới timeout đã cấu hình (mặc định 30s).
- Không dùng `page.waitForTimeout(5000)` vì đó là hard-coded wait (dễ fail nếu mạng chậm, hoặc chạy chậm không cần thiết nếu mạng nhanh).

---

### Câu hỏi 3: Khi nào bạn chạy test với `--headed`, khi nào chạy `headless`? Lợi ích và hạn chế của từng chế độ?

**💡 Gợi ý trả lời tham khảo (dành cho Mentor):**

- `Headless` (mặc định): nhanh hơn, tốn ít resource hơn, phù hợp chạy trên CI/CD (Jenkins, GitHub Actions) vì không cần hiển thị giao diện.
- `--headed` (hiện browser): hữu ích khi debug, xem test đang làm gì, check UI thực tế, giống manual testing hơn.
- Quy tắc: dev/debug dùng headed, chạy hàng loạt / trên server dùng headless.

---

### Câu hỏi 4: Làm thế nào để đọc và phân tích HTML Report để tìm nguyên nhân test fail?

**💡 Gợi ý trả lời tham khảo (dành cho Mentor):**

- Mở HTML Report trên browser, test fail có màu đỏ → click vào để xem chi tiết.
- Thông tin hữu ích:
  - **Error message:** dòng đỏ in đậm — cho biết lỗi gì (ví dụ: element not found).
  - **Screenshot:** ảnh chụp tại thời điểm fail (nếu cấu hình).
  - **Trace:** click vào "View trace" → xem từng step Playwright đã làm, hover vào element nào, input gì, status code của API (nếu có).
- So với manual: thay vì chỉ có "PASS/FAIL" trong Excel, bạn có trace + screenshot để debug nhanh gấp nhiều lần.

---
