---
sidebar_position: 1
slug: /education/age-ai/code/day-1
id: age-ai-code-day-1
title: Day 1
---

# Day 1 — Thiết lập môi trường + Biến JS (const/let/var)


## PHẦN 1 — LÝ THUYẾT (Bloom's: Remember + Understand)

### 1.1. Node.js và VS Code — "Công cụ để chạy code"

**Node.js là gì?**

JavaScript vốn được sinh ra để chạy trên trình duyệt (giúp website "sống động"). Nhưng Node.js là một **môi trường** cho phép JavaScript chạy được ngay trên máy tính của bạn, không cần trình duyệt.

**Tại sao Automation Tester cần Node.js?**

Playwright — công cụ bạn sẽ dùng để viết automation test — được viết bằng JavaScript/TypeScript và chạy trên Node.js. Nói nôm na: **Node.js là "lò nướng", Playwright là "bánh"**, không có lò thì không nướng được bánh.

**VS Code là gì?**

VS Code là một **trình soạn thảo code** (giống như Notepad nhưng "thông minh" hơn). Nó giúp bạn viết code dễ dàng hơn nhờ tính năng gợi ý tự động, tô màu cú pháp, và tích hợp terminal để chạy lệnh.

> **🔗 Liên hệ với Manual Testing:** Hồi bạn test manual, bạn cần trình duyệt để mở app, cần Excel để ghi test case. Bây giờ làm automation, bạn cần VS Code để viết code, và Node.js để chạy code đó.

**Điểm chính cần nhớ:**
- **Node.js** = môi trường chạy JavaScript trên máy tính
- **VS Code** = công cụ viết code (có thể tải miễn phí tại code.visualstudio.com)
- Cài Node.js trước, sau đó mới cài VS Code (hoặc thứ tự nào cũng được)
- Nên chọn bản **LTS** (Long Term Support) của Node.js vì ổn định nhất

---

### 1.2. Biến trong JavaScript — "Chiếc hộp đựng dữ liệu"

**Biến là gì?**

Biến (variable) là một **"chiếc hộp"** có tên, dùng để lưu trữ dữ liệu. Bạn có thể đặt bất cứ thứ gì vào hộp đó: số, chữ, hay một đoạn text dài.

**Tại sao Automation Tester cần biến?**

Khi bạn viết test script, bạn cần lưu trữ nhiều loại dữ liệu:
- URL của website (ví dụ: `"https://app.example.com"`)
- Tên đăng nhập (ví dụ: `"admin@company.com"`)
- Mật khẩu (ví dụ: `"P@ssw0rd123"`)
- Kết quả kiểm tra (ví dụ: `true` hoặc `false`)

Biến giúp bạn **đặt tên** cho những dữ liệu này, để sau này khi cần thay đổi (ví dụ URL test khác), bạn chỉ sửa ở **một chỗ duy nhất**, thay vì sửa hàng chục chỗ trong script.

> **🔗 Liên hệ với Manual Testing:** Khi test manual, bạn có một file Excel chứa test data (username, password, URL...). Biến trong code cũng giống như các ô trong Excel đó — nhưng thông minh hơn vì code có thể tự động đọc và dùng chúng.

---

### 1.3. Ba cách khai báo biến: `var`, `let`, `const`

JavaScript có **3 từ khóa** để khai báo biến. Hãy tưởng tượng bạn đang dán nhãn cho các chiếc hộp:

| Từ khóa | Ý nghĩa | Ví dụ thực tế |
|---------|---------|---------------|
| **`const`** | Hộp **không được thay đổi** nội dung sau khi đã bỏ đồ vào | Số CMND, mã số nhân viên — một khi đã xác định thì không đổi |
| **`let`** | Hộp **có thể thay đổi** nội dung sau này | Trạng thái đơn hàng: lúc là "Chờ duyệt", sau thành "Đã duyệt" |
| **`var`** | Hộp cũ, **không nên dùng** trong code hiện đại | Giống như cách bạn dùng điện thoại cũ bàn phím vật lý — vẫn dùng được nhưng không ai khuyên dùng nữa |

**Sự khác biệt quan trọng nhất:**

- `const` và `let` chỉ tồn tại trong **cặp dấu ngoặc nhọn `{}`** gần nhất (gọi là *block scope*) — giống như một căn phòng: biến chỉ có hiệu lực bên trong phòng đó.
- `var` thì tồn tại trong toàn bộ **hàm** hoặc thậm chí toàn bộ file (*function scope / global scope*) — giống như biến để trong nhà thì cả nhà dùng được, dễ gây nhầm lẫn.

**Quy tắc đơn giản cho người mới bắt đầu**:
1. **Luôn dùng `const`** cho mọi thứ — trừ khi bạn biết chắc chắn giá trị sẽ thay đổi
2. **Dùng `let`** khi giá trị CẦN thay đổi
3. **Không bao giờ dùng `var`** trong code mới (bạn sẽ thấy nó trong các tutorial cũ, nhưng hãy bỏ qua)

> **🔗 Liên hệ với Manual Testing:** Hãy tưởng tượng bạn có 2 loại giấy ghi chú:
> - `const` = giấy ghi chú **viết bằng bút mực**, không tẩy xóa được
> - `let` = giấy ghi chú **viết bằng bút chì**, có thể xóa viết lại

---

### 1.4. Template Literal — "Cách ghép chữ thông minh"

**Template Literal là gì?**

Đó là một cách viết **chuỗi văn bản** (string) cho phép bạn **nhúng biến** vào bên trong một cách dễ dàng, thay vì phải dùng dấu `+` để nối nhiều mảnh lại với nhau.

**Cú pháp:** Dùng dấu **backtick** (`` ` ``) — phím bên trái số 1 trên bàn phím — thay vì dấu nháy đơn `'` hoặc nháy kép `"`.

```javascript
// Cách cũ (dùng +):
const ten = "Nguyễn Văn A";
const thongBao = "Xin chào " + ten + ", bạn đã đăng nhập thành công!";

// Cách mới (template literal):
const ten = "Nguyễn Văn A";
const thongBao = `Xin chào ${ten}, bạn đã đăng nhập thành công!`;
```

**Tại sao Automation Tester cần template literal?**

Khi bạn viết test, bạn thường xuyên phải **ghép dữ liệu động** vào câu thông báo hoặc selector:
- Tạo message log: `"Đã đăng nhập với user ${username} lúc ${timestamp}"`
- Tạo selector động: `[data-testid="product-${productId}"]`

Dùng template literal giúp code **ngắn gọn**, **dễ đọc**, và ít lỗi hơn so với cách nối chuỗi cũ.

> **🔗 Liên hệ với Manual Testing:** Khi bạn viết test case, bạn thường có các bước dạng: *"Nhập username [XXX] vào ô username, nhập password [YYY] vào ô password"*. Template literal giúp bạn làm điều tương tự trong code: tạo ra câu lệnh với phần [XXX] và [YYY] được thay bằng giá trị biến.


## PHẦN 2 — CODE EXAMPLE (Bloom's: Understand + Apply)

### 2.1. Ví dụ về khai báo biến — SAI và ĐÚNG

**❌ CÁCH SAI — Khai báo biến kiểu cũ và không đúng mục đích**

```typescript
// ❌ Dùng var — không nên dùng trong code hiện đại
var userName = "admin";
var userPassword = "123456";

// ❌ Dùng let cho thứ không bao giờ thay đổi — không đúng mục đích
let API_URL = "https://api.example.com";  // URL này không đổi, nên dùng const

// ❌ Dùng const cho thứ sẽ thay đổi — gây lỗi chương trình
const loginAttempts = 0;
loginAttempts = loginAttempts + 1;  // ❌ LỖI! Không thể gán lại cho const
```

**✅ CÁCH ĐÚNG — Khai báo biến đúng cách trong TypeScript/Playwright**

```typescript
// ✅ Dùng const cho giá trị không đổi
const API_URL = "https://api.example.com";           // URL không đổi
const DEFAULT_TIMEOUT = 30000;                       // hằng số
const LOGIN_PAGE = "/auth/login";                    // đường dẫn cố định

// ✅ Dùng let cho giá trị có thể thay đổi
let loginAttempts = 0;                               // sẽ tăng dần khi đăng nhập thất bại
let currentUser = "guest";                           // sẽ thay đổi khi user đăng nhập
let orderStatus = "PENDING";                         // sẽ thay đổi theo flow đơn hàng

// ✅ const cho object — vẫn có thể thay đổi bên trong object
const userConfig = {
    username: "admin",
    password: "123456"
};
userConfig.username = "newAdmin";  // ✅ Được phép — thay đổi thuộc tính bên trong object
// userConfig = {};                // ❌ LỖI! Không thể gán lại object mới cho const
```

**📊 Bảng so sánh — Vì sao cách ĐÚNG tốt hơn cách SAI**

| Tiêu chí | Cách SAI (dùng `var` lung tung) | Cách ĐÚNG (dùng `const`/`let` đúng mục đích) |
|----------|--------------------------------|---------------------------------------------|
| **An toàn** | Biến có thể bị ghi đè ở bất cứ đâu, khó phát hiện lỗi | Code báo lỗi ngay nếu bạn cố tình gán lại `const` |
| **Dễ đọc** | Không biết biến nào sẽ thay đổi, biến nào không | Nhìn vào từ khóa là biết ngay ý đồ của người viết |
| **Debug** | Lỗi khó tìm vì biến bị thay đổi ở nhiều nơi | Lỗi xuất hiện ngay tại dòng code cố tình thay đổi `const` |

---

### 2.2. Ví dụ về Template Literal — SAI và ĐÚNG

**❌ CÁCH SAI — Nối chuỗi kiểu cũ (dễ sai, khó đọc)**

```typescript
// ❌ Dùng phép + để nối — dễ quên dấu cách, dễ sai
const username = "admin";
const password = "123456";
const loginMessage = "Đăng nhập với tài khoản " + username + " và mật khẩu " + password + " đã thành công!";
//                                                                     ↑ dễ quên dấu cách ở đây

// ❌ Nối nhiều dòng — code rất xấu và khó bảo trì
const errorMessage = "Lỗi: " + 
                     "không thể kết nối đến server " + 
                     "với user " + username;
```

**✅ CÁCH ĐÚNG — Dùng Template Literal (gọn, đẹp, an toàn)**

```typescript
// ✅ Dùng template literal với ${} để nhúng biến
const username = "admin";
const password = "123456";
const loginMessage = `Đăng nhập với tài khoản ${username} và mật khẩu ${password} đã thành công!`;
// Kết quả: "Đăng nhập với tài khoản admin và mật khẩu 123456 đã thành công!"

// ✅ Xuống dòng tự nhiên — code dễ đọc hơn nhiều
const errorMessage = `Lỗi: không thể kết nối đến server với user ${username}`;

// ✅ Có thể nhúng biểu thức bên trong ${}
const orderTotal = 1000000;
const discount = 0.1;
const finalMessage = `Tổng tiền sau giảm giá: ${orderTotal * (1 - discount)} VND`;
// Kết quả: "Tổng tiền sau giảm giá: 900000 VND"
```

**📊 Bảng so sánh — Vì sao Template Literal tốt hơn nối chuỗi cũ**

| Tiêu chí | Nối chuỗi bằng `+` | Template Literal |
|----------|-------------------|------------------|
| **Dễ đọc** | Phải nhìn nhiều dấu `+` và `"` rối mắt | Chỉ cần đọc từ trái sang phải, biến nằm trong `${}` |
| **Xuống dòng** | Phải dùng `\n` hoặc nối nhiều dòng rắc rối | Có thể xuống dòng trực tiếp bên trong backtick |
| **Nhúng biểu thức** | Không làm được, phải tính trước rồi mới nối | Có thể nhúng cả phép tính `${a + b}` |
| **Lỗi cú pháp** | Dễ quên dấu cách hoặc dấu nháy | Ít lỗi hơn, cú pháp rõ ràng |


## PHẦN 3 — BÀI THỰC HÀNH TRÊN PROJECT THỰC (Bloom's: Apply + Analyze)

### 🎯 Bài thực hành: Khai báo biến cho flow đăng nhập

**Bối cảnh:** Project của bạn là app quản lý đơn hàng B2B (có flow: đăng nhập → tạo đơn hàng → chờ duyệt → xác nhận giao hàng). Hôm nay bạn sẽ viết **các biến chứa thông tin đăng nhập và URL** để chuẩn bị cho việc viết test login ở những ngày sau.

**📝 Checklist các bước cần làm:**

- [ ] **Bước 1:** Mở VS Code, tạo một thư mục mới cho project (đặt tên là `playwright-automation` hoặc tên tùy chọn)
- [ ] **Bước 2:** Trong thư mục đó, tạo một file mới đặt tên là `day1-variables.ts` (đuôi `.ts` là TypeScript)
- [ ] **Bước 3:** Khai báo các biến sau bằng `const` hoặc `let` phù hợp:
    - `BASE_URL`: địa chỉ của app (ví dụ: `https://your-app.com`)
    - `LOGIN_URL`: đường dẫn đến trang login (ví dụ: `/login`)
    - `VALID_USERNAME`: tên đăng nhập hợp lệ
    - `VALID_PASSWORD`: mật khẩu hợp lệ
    - `loginAttempts`: số lần thử đăng nhập, bắt đầu từ 0
- [ ] **Bước 4:** Dùng **template literal** để tạo một biến `loginMessage` có nội dung:
    > `"Đang đăng nhập vào [BASE_URL][LOGIN_URL] với username [VALID_USERNAME]"`
    (thay các phần trong `[]` bằng giá trị biến tương ứng)
- [ ] **Bước 5:** Dùng `console.log()` để in ra màn hình các biến đã khai báo (để kiểm tra xem đúng chưa)

---

### 🤔 Câu hỏi gợi mở — Phân tích TRƯỚC KHI code:

> *"Trong project thực của bạn, hãy quan sát: URL của app có bao nhiêu môi trường khác nhau (dev/staging/production)? Có bao nhiêu loại user khác nhau cần test (admin, user, editor...)? Những thông tin nào sẽ THAY ĐỔI khi bạn chạy test ở các môi trường khác nhau, và thông tin nào là CỐ ĐỊNH?"*

Hãy trả lời câu hỏi này trước khi viết code — điều này giúp bạn biết biến nào nên dùng `const`, biến nào nên dùng `let`.

---

### ✅ Acceptance Criteria — Bài thực hành hoàn thành khi:

1. File `day1-variables.ts` được tạo và chứa các biến khai báo hợp lệ (có đầy đủ `const`/`let`)
2. Không có lỗi TypeScript/JavaScript nào khi chạy file (dùng `node day1-variables.ts` hoặc `ts-node day1-variables.ts` nếu đã cài)
3. `console.log()` in ra được loginMessage với nội dung đúng như mong đợi (đã được ghép bằng template literal)


## PHẦN 4 — INTERVIEW Q&A (Bloom's: Evaluate)

### Câu 1: "Tại sao trong thực tế, anh/chị thường dùng `const` làm mặc định thay vì `let` hoặc `var`?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- `const` giúp code an toàn hơn vì ngăn việc vô tình thay đổi giá trị
- `var` có thể gây lỗi khó tìm do phạm vi (scope) quá rộng và cơ chế *hoisting*
- Dùng `const` làm mặc định giúp người đọc code hiểu ngay biến nào được thiết kế để không thay đổi
- Đây là **best practice** được cộng đồng JavaScript khuyến nghị
</details>

---

### Câu 2: "So sánh `var` và `let` — khi nào anh/chị phải dùng `let` thay vì `const`, và trong trường hợp nào bắt buộc phải dùng `var`?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- Dùng `let` khi biến CẦN được gán lại giá trị mới (ví dụ: `loginAttempts`, `currentPage`)
- Dùng `const` khi giá trị không đổi (URL, hằng số cấu hình)
- Trong thực tế hiện đại, hầu như **không bao giờ cần dùng `var`** trừ khi bảo trì code cũ
- `var` có scope là function, trong khi `let` và `const` có scope là block `{}`
</details>

---

### Câu 3: "Khi viết test automation, anh/chị sẽ dùng template literal ở những tình huống nào? Cho ví dụ cụ thể."

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- Tạo message log / báo cáo: `✅ Test hoàn thành cho user ${username}`
- Tạo selector động: `[data-testid="product-${productId}"]`
- Tạo URL động: `${BASE_URL}/orders/${orderId}/detail`
- Tạo dữ liệu test với nhiều biến: `User ${name} có email ${email} và role ${role}`
- So với cách dùng `+`, template literal giúp code ngắn gọn và ít lỗi hơn
</details>

---

### Câu 4: "Giả sử anh/chị đang viết test cho flow đăng nhập của dự án thực. Biến `loginStatus` nên khai báo là `const` hay `let`? Tại sao? Nếu là `let`, giá trị của nó sẽ thay đổi như thế nào trong quá trình test?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- `loginStatus` nên là `let` vì nó thay đổi theo trạng thái đăng nhập (ví dụ: `"PENDING"` → `"SUCCESS"` → `"FAILED"`)
- Giá trị thay đổi dựa trên kết quả của từng bước trong test (nhập username/password → click login → kiểm tra kết quả)
- Nếu chỉ lưu kết quả cuối cùng và không cần thay đổi trong suốt test, có thể dùng `const` sau khi đã có giá trị
- Quyết định dùng `const` hay `let` phụ thuộc vào việc biến đó có cần thay đổi trong suốt vòng đời của test hay không
</details>

---
