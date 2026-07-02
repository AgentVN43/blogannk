---
sidebar_position: 1
slug: /education/age-ai/code/day-2
id: age-ai-code-day-2
title: Day 2
---
# Day 2 — JS Variables thực hành + Template literals

## PHẦN 1 — LÝ THUYẾT

### 1.1. Ôn tập nhanh — Khi nào dùng `const`, khi nào dùng `let`

Sau ngày đầu tiên, bạn đã biết `const` dùng cho giá trị không đổi và `let` dùng cho giá trị có thể thay đổi. Nhưng trong thực tế viết test automation, **làm sao để biết một giá trị có "đổi" hay không?**

Hãy áp dụng một **nguyên tắc đơn giản**:

> **Hỏi bản thân: Giá trị này có thay đổi trong SUỐT QUÁ TRÌNH CHẠY TEST không?**

| Loại dữ liệu | Ví dụ trong Automation Test | Nên dùng | Lý do |
|-------------|----------------------------|----------|-------|
| Cấu hình cố định | URL của app, timeout, tên file báo cáo | `const` | Không đổi từ đầu đến cuối test |
| Dữ liệu test đầu vào | username, password, product ID | `const` | Trong một test case cụ thể, dữ liệu này cố định |
| Trạng thái thay đổi | số lần thử đăng nhập, kết quả API trả về | `let` | Giá trị thay đổi sau mỗi hành động |
| Biến đếm | vị trí đang duyệt trong danh sách | `let` | Thay đổi khi lặp qua các phần tử |

> **🔗 Liên hệ với Manual Testing:**
> - `const` giống như **bước kiểm tra cố định** trong test case: bạn không thể thay đổi nó giữa chừng
> - `let` giống như **biến trạng thái** bạn ghi chú trong quá trình test: lúc đầu đơn hàng "Chờ duyệt", sau khi duyệt thành "Đã duyệt"

---

### 1.2. Template Literal — Ứng dụng thực tế trong Automation Test

Hôm qua bạn học template literal để ghép chuỗi. Hôm nay ta đi sâu hơn: **Trong automation test, template literal được dùng ở đâu?**

**Tình huống 1 — Tạo URL động:**

Khi test app B2B quản lý đơn hàng, bạn cần kiểm tra chi tiết của từng đơn hàng:

```typescript
// Mỗi đơn hàng có một ID riêng
const orderId = "ORD-2024-001";
// Cần mở URL: https://app.com/orders/ORD-2024-001/detail
```

Dùng template literal, bạn có thể **tạo URL** từ biến `orderId` một cách dễ dàng.

**Tình huống 2 — Viết log / báo cáo kết quả test:**

Khi test chạy, bạn cần ghi lại **những gì đã xảy ra** để sau này debug nếu test thất bại:

```typescript
// Cần ghi: "Đã đăng nhập thành công với user admin@company.com lúc 10:30:15"
```

Template literal giúp bạn **đóng gói** thông tin thời gian, tên user, trạng thái vào một câu log duy nhất.

**Tình huống 3 — Tạo selector (bộ định danh) động:**

Trong app React của bạn, có thể các element được đánh id theo pattern:

```html
<button data-testid="approve-order-ORD-2024-001">Duyệt</button>
<button data-testid="reject-order-ORD-2024-001">Từ chối</button>
```

Để click vào nút "Duyệt" của một đơn hàng cụ thể, bạn cần tạo selector với `orderId` nhúng vào bên trong. Template literal giúp làm việc này **một cách an toàn và dễ đọc**.

---

### 1.3. Quy tắc đặt tên biến — "Nói lên ý đồ"

Người mới code thường đặt tên biến linh tinh như `a`, `b`, `data`, `temp`. Điều này khiến code **khó đọc** và **khó bảo trì** — giống như viết test case không có tên, chỉ đánh số vậy.

**Quy tắc vàng:** Tên biến phải **mô tả được nội dung nó chứa** và **dễ hiểu với người đọc sau 6 tháng**.

| ❌ Tên xấu (không nên dùng) | ✅ Tên tốt (nên dùng) | Vì sao tốt hơn? |
|---------------------------|----------------------|-----------------|
| `a` | `BASE_URL` | Ai cũng biết đây là URL chính của app |
| `u` | `validUsername` | Rõ ràng là username hợp lệ để test |
| `p` | `adminPassword` | Biết ngay đây là password của user admin |
| `x` | `loginAttempts` | Biết ngay biến này đếm số lần đăng nhập |
| `str` | `orderStatusMessage` | Biết ngay đây là thông báo trạng thái đơn hàng |

**Nguyên tắc đặt tên trong JavaScript/TypeScript:**

- Dùng **camelCase** cho biến thông thường: `validUsername`, `orderId`, `loginAttempts`
- Dùng **UPPER_SNAKE_CASE** cho hằng số không đổi: `BASE_URL`, `DEFAULT_TIMEOUT`, `API_KEY`
- Tên phải là danh từ (noun) — đại diện cho một "thứ"

> **🔗 Liên hệ với Manual Testing:** Khi bạn viết test case, bạn đặt tên cho từng bước rõ ràng: "Bước 1: Nhập username", "Bước 2: Nhập password". Tên biến cũng vậy — nó giúp người đọc hiểu ngay biến đó dùng để làm gì mà không cần đọc hết code.

---

### 1.4. `null` vs `undefined` — "Không có gì" nhưng khác nhau

Cả `null` và `undefined` đều có nghĩa "không có giá trị", nhưng khác nhau về **nguồn gốc**:

```typescript
// undefined — biến được khai báo nhưng chưa gán giá trị
let user;
console.log(user);  // in ra: undefined (JS tự đặt)

// null — chủ động gán "không có gì"
const selectedUser = null;  // do lập trình viên cố tình gán
```

| | `undefined` | `null` |
|:---|:---|:---|
| **Ai đặt?** | JavaScript tự động | Lập trình viên gán |
| **Ý nghĩa** | "Chưa có giá trị" | "Cố tình để trống" |
| **Kiểu dữ liệu** | `undefined` | `object` (lỗi thiết kế lịch sử của JS) |

> **Trong test:** Khi bạn dùng `?.` (Day 5), nó trả về `undefined` nếu element không tồn tại — giúp code không bị crash.

---

### 1.5. Toán tử so sánh — Kiểm tra giá trị

Dùng để so sánh 2 giá trị, trả về `true` hoặc `false`. Rất quan trọng cho assertion sau này.

```typescript
const a = 5;
const b = '5';

// ❌ == và != — so sánh "xuề xòa", không quan tâm kiểu dữ liệu
console.log(a == b);   // true — coi 5 = '5' dù khác kiểu (number vs string)

// ✅ === và !== — so sánh NGHIÊM NGẶT, phải cùng kiểu và cùng giá trị
console.log(a === b);  // false — khác kiểu (number vs string)
console.log(a !== b);  // true

// Các toán tử khác
console.log(a > 3);    // true
console.log(a >= 5);   // true
console.log(a < 10);   // true
```

> **Quy tắc vàng:** Luôn dùng `===` (3 dấu) và `!==`. Không dùng `==`/`!=` (2 dấu) — dễ gây bug khó tìm.

---

### 1.6. Boolean logic — Kết hợp nhiều điều kiện

Dùng `&&` (AND), `||` (OR), `!` (NOT) để kết hợp các điều kiện:

```typescript
const isAdmin = true;
const isLoggedIn = true;

// && — cả hai đều đúng mới true
console.log(isAdmin && isLoggedIn);  // true

// || — chỉ cần một đúng là true
console.log(isAdmin || isLoggedIn);  // true

// ! — phủ định
console.log(!isAdmin);  // false
```

> **Trong test:** "Nếu user vừa là admin vừa đã đăng nhập thì mới được duyệt đơn" → `if (isAdmin && isLoggedIn) { ... }`

---

### 1.7. String methods — Xử lý text trong test

Các method hữu ích khi kiểm tra text trên trang:

```typescript
const productName = '  Grey Jacket  ';

// includes — kiểm tra "có chứa chuỗi con không?"
console.log(productName.includes('Jacket'));   // true

// toLowerCase / toUpperCase — chuyển hoa/thường (so sánh không phân biệt hoa/thường)
console.log(productName.toLowerCase());         // "  grey jacket  "

// trim — bỏ khoảng trắng thừa đầu và cuối
console.log(productName.trim());               // "Grey Jacket"
```

> **Trong test:** Khi assert tên sản phẩm, dùng `.toLowerCase()` để tránh fail vì viết hoa/không viết hoa.

---

### 1.8. Spread operator `...` — Copy và merge object

Dùng `...` để sao chép hoặc gộp object — tạo biến thể test data từ 1 object gốc:

```typescript
// Sao chép object — tạo bản sao, không ảnh hưởng object gốc
const defaultUser = { role: 'VIEWER', active: true };
const adminUser = { ...defaultUser, role: 'ADMIN' };
// Kết quả: { role: 'ADMIN', active: true }

// Dùng trong test — tạo nhiều biến thể từ 1 base
const baseProduct = { name: 'Grey Jacket', price: 55, slug: 'grey-jacket' };
const saleProduct = { ...baseProduct, price: 40 };   // chỉ đổi giá
const vipProduct = { ...baseProduct, price: 100, vip: true };  // thêm field mới
```

> **Lợi ích:** Không cần viết lại toàn bộ object cho mỗi biến thể — chỉ ghi đè field khác.


## PHẦN 2 — CODE EXAMPLE

### 2.1. Thực hành chọn `const` vs `let` — SAI và ĐÚNG

**❌ CÁCH SAI — Dùng sai loại biến và đặt tên vô nghĩa**

```typescript
// ❌ Dùng let cho mọi thứ — không biết biến nào thay đổi, biến nào không
let a = "https://app.example.com";        // URL không đổi, nên dùng const
let b = "admin";                          // Tên user cố định, nên dùng const
let c = 0;                                // ❌ Biến đếm thay đổi, dùng let đúng nhưng tên xấu
let d = "Chờ duyệt";                      // ❌ Trạng thái thay đổi, dùng let đúng nhưng tên xấu

// ❌ Chỉ dùng const — không thể thay đổi biến cần thay đổi
const loginAttempts = 0;                  // ❌ LỖI! Không thể tăng biến này
// loginAttempts = loginAttempts + 1;    // Sẽ báo lỗi, code không chạy được
```

**✅ CÁCH ĐÚNG — Chọn đúng `const`/`let` và đặt tên có ý nghĩa**

```typescript
// ✅ const cho giá trị không đổi — dùng UPPER_SNAKE_CASE cho hằng số
const BASE_URL = "https://app.example.com";
const LOGIN_ENDPOINT = "/auth/login";
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "P@ssw0rd123";
const ORDER_LIST_PAGE = "/orders";

// ✅ let cho giá trị thay đổi — dùng camelCase
let loginAttempts = 0;                    // Sẽ tăng khi đăng nhập thất bại
let currentOrderStatus = "PENDING";       // Sẽ thay đổi qua các bước: PENDING → APPROVED → SHIPPED
let currentOrderId = "";                  // Sẽ được gán sau khi tạo đơn hàng
let apiResponseData = null;              // Sẽ được gán khi nhận response từ API

// ✅ Có thể tăng biến loginAttempts vì đã khai báo với let
loginAttempts = loginAttempts + 1;        // ✅ Hợp lệ
currentOrderStatus = "APPROVED";          // ✅ Hợp lệ
```

**📊 Bảng so sánh — Vì sao cách ĐÚNG tốt hơn cách SAI**

| Tiêu chí | Cách SAI (`let` lung tung + tên xấu) | Cách ĐÚNG (`const`/`let` đúng + tên rõ) |
|----------|--------------------------------------|------------------------------------------|
| **Tính rõ ràng** | Không biết biến nào dùng để làm gì | Nhìn tên là hiểu ngay mục đích |
| **An toàn** | Có thể vô tình thay đổi URL trong code | `const` bảo vệ giá trị quan trọng khỏi bị thay đổi |
| **Dễ bảo trì** | Phải đọc hết code mới hiểu | Chỉ cần đọc tên biến là hiểu |

---

### 2.2. Template Literal với dữ liệu test — SAI và ĐÚNG

**❌ CÁCH SAI — Khai báo dữ liệu test rời rạc, không gắn kết với nhau**

```typescript
// ❌ Mỗi thông tin là một biến riêng — khó quản lý
const username = "admin";
const password = "123456";
const role = "Admin";
const email = "admin@company.com";
const fullName = "Nguyễn Văn Admin";

// ❌ Dùng + để ghép — dễ sai và khó đọc
const loginInfo = "User: " + username + ", Role: " + role + ", Email: " + email;
// Kết quả: "User: admin, Role: Admin, Email: admin@company.com"

// ❌ Tạo URL bằng cách nối chuỗi — cồng kềnh
const baseUrl = "https://app.example.com";
const orderId = "ORD-001";
const detailUrl = baseUrl + "/orders/" + orderId + "/detail";
```

**✅ CÁCH ĐÚNG — Dùng object + template literal để tổ chức dữ liệu test**

```typescript
// ✅ Gom các thông tin liên quan vào một object (dùng const)
const testUser = {
    username: "admin",
    password: "123456",
    role: "Admin",
    email: "admin@company.com",
    fullName: "Nguyễn Văn Admin"
};

// ✅ Dùng template literal để tạo message từ object
const loginInfo = `User: ${testUser.username}, Role: ${testUser.role}, Email: ${testUser.email}`;
// Kết quả: "User: admin, Role: Admin, Email: admin@company.com"

// ✅ Tạo URL động với template literal — rõ ràng và an toàn
const BASE_URL = "https://app.example.com";
const orderId = "ORD-001";
const detailUrl = `${BASE_URL}/orders/${orderId}/detail`;
// Kết quả: "https://app.example.com/orders/ORD-001/detail"

// ✅ Có thể nhúng nhiều biến cùng lúc trong cùng một template literal
const loginMessage = `🔐 Đang đăng nhập với user ${testUser.username} (${testUser.role}) tại ${new Date().toLocaleTimeString()}`;
// Kết quả: "🔐 Đang đăng nhập với user admin (Admin) tại 10:30:15"
```

**📊 Bảng so sánh — Vì sao cách ĐÚNG tốt hơn cách SAI**

| Tiêu chí | Cách SAI (biến rời + nối chuỗi) | Cách ĐÚNG (object + template literal) |
|----------|-------------------------------|--------------------------------------|
| **Tổ chức dữ liệu** | Mỗi thông tin một biến, khó theo dõi | Gom nhóm theo logic (ví dụ: user, order) |
| **Khả năng mở rộng** | Thêm thông tin → thêm biến mới | Thêm thuộc tính vào object là đủ |
| **Độ an toàn** | Dễ ghép sai dấu cách, dễ sai cú pháp | Template literal ít lỗi hơn |

---

### 2.3. Ví dụ về null/undefined, so sánh, boolean, string methods, spread

```typescript
// ✅ null vs undefined
let user;                    // undefined — chưa gán
const admin = null;          // null — cố tình để trống
console.log(typeof user);    // "undefined"
console.log(typeof admin);   // "object" (đặc thù của JS)

// ✅ Toán tử so sánh — dùng ===
const price = 55;
console.log(price === 55);   // true
console.log(price === '55'); // false (khác kiểu)
console.log(price > 50);     // true

// ✅ Boolean logic
const isAdmin = true;
const isLoggedIn = true;
if (isAdmin && isLoggedIn) {
  console.log('Được duyệt đơn');
}

// ✅ String methods — xử lý text
const name = '  GREY JACKET  ';
console.log(name.trim().toLowerCase());              // "grey jacket"
console.log(name.includes('JACKET'));                // true

// ✅ Spread operator — copy object
const defaultConfig = { timeout: 30000, retries: 2 };
const fastConfig = { ...defaultConfig, timeout: 5000 };
console.log(fastConfig);  // { timeout: 5000, retries: 2 }
```


## PHẦN 3 — BÀI THỰC HÀNH TRÊN PROJECT THỰC

Phần này sẽ được đưa ra vào thực hành project.

## PHẨN 4 — INTERVIEW Q&A

### Câu 1: "Trong project automation của anh/chị, làm thế nào để quyết định một biến nên là `const` hay `let`? Cho ví dụ cụ thể từ project thực."

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- Dựa vào việc giá trị có thay đổi trong quá trình test hay không
- `const` cho dữ liệu cấu hình (URL, timeout, credentials mặc định)
- `let` cho trạng thái thay đổi (số lần thử, order status, giá trị lấy từ API)
- Có thể kể ví dụ cụ thể từ project của họ: URL app là `const`, nhưng `orderStatus` là `let`
</details>

---

### Câu 2: "Nếu một biến là object và được khai báo với `const`, anh/chị có thể thay đổi nội dung bên trong object đó không? Nếu có, điều này có mâu thuẫn gì với việc dùng `const` không?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- Có thể thay đổi **thuộc tính bên trong** object được khai báo với `const`
- `const` chỉ ngăn **gán lại** object mới, không ngăn **thay đổi nội dung** object cũ
- Đây là một trong những lý do nhiều dev dùng `const` cho object — vì họ muốn object đó "tồn tại" xuyên suốt, nhưng vẫn thay đổi được trạng thái bên trong (giống như file Excel: tên file không đổi, nhưng nội dung bên trong có thể thay đổi)
</details>

---

### Câu 3: "So sánh việc dùng object để gom dữ liệu test (ví dụ `user` object) với việc khai báo từng biến riêng lẻ (`username`, `password`, `role`...). Khi nào nên dùng cách nào?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- Object giúp gom nhóm dữ liệu liên quan, dễ truyền vào function và dễ bảo trì
- Biến riêng lẻ dùng khi dữ liệu đơn giản, ít, và không nhóm với nhau
- Trong automation test, object thường được ưa chuộng hơn vì test data thường có nhiều thuộc tính (user, order, product...)
- Ví dụ: khi có 3 user khác nhau, dùng object giúp dễ dàng clone và thay đổi một vài thuộc tính
</details>

---

### Câu 4: "Giả sử anh/chị cần test flow đăng nhập với 5 user khác nhau (admin, editor, viewer, blocked user, expired user). Anh/chị sẽ tổ chức dữ liệu test này như thế nào để code được gọn, dễ bảo trì và dễ thêm user mới sau này?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- Tạo một **mảng (array)** chứa các object user
- Mỗi object có các thuộc tính: `username`, `password`, `role`, `expectedResult` (mong đợi login thành công hay thất bại)
- Việc dùng mảng giúp dễ dàng loop (sẽ học sau) để chạy test cho từng user
- Cách này giúp tách biệt dữ liệu test khỏi code, giống như file Excel riêng trong manual testing
- Khi thêm user mới, chỉ cần thêm 1 object vào mảng, không cần sửa logic test
</details>

---

### Câu 5: "`null` và `undefined` khác nhau thế nào? Khi nào gặp từng loại trong test automation?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- `undefined`: JavaScript tự đặt khi biến chưa được gán hoặc property không tồn tại
- `null`: lập trình viên chủ động gán để biểu thị "không có giá trị"
- Trong Playwright: `.textContent()` trả về `null` nếu element không có text, còn truy cập property không tồn tại của object trả về `undefined`
- Dùng `??` để xử lý cả hai trường hợp (sẽ học ở Day 5)
</details>

---

### Câu 6: "Tại sao luôn dùng `===` thay vì `==` trong JavaScript?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- `==` so sánh "xuề xòa" — tự động chuyển đổi kiểu dữ liệu (type coercion), dễ gây bug
- `===` so sánh "nghiêm ngặt" — phải cùng kiểu và cùng giá trị mới true
- Ví dụ: `0 == false` → true (bug), `0 === false` → false (đúng)
- Trong test: luôn dùng `===` vì assertion cần chính xác
</details>

---

### Câu 7: "Khi nào dùng `&&`, khi nào dùng `||` trong logic test? Cho ví dụ cụ thể."

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- `&&` (AND): cả hai điều kiện đều đúng → dùng khi "cần tất cả đều thỏa"
- `||` (OR): chỉ cần một điều kiện đúng → dùng khi "chỉ cần một cái thỏa"
- Ví dụ: "Chỉ duyệt đơn nếu user là admin VÀ đã đăng nhập" → `isAdmin && isLoggedIn`
- Ví dụ: "Hiển thị lỗi nếu email trống HOẶC password trống" → `!email || !password`
</details>

---

### Câu 8: "Spread operator `...` dùng để làm gì? Lợi ích khi quản lý test data?"

<details>
<summary><strong>💡 Gợi ý câu trả lời (cho Mentor tham khảo)</strong></summary>

Học viên nên trả lời được các ý:
- `...` dùng để copy toàn bộ thuộc tính của object/array vào object/array mới
- Lợi ích: tạo biến thể test data từ 1 object gốc mà không sửa object gốc
- Ví dụ: base product có giá £55, tạo sale product với `{ ...baseProduct, price: 40 }`
- Dễ bảo trì: khi thêm field mới vào base, tất cả biến thể tự động có field đó
</details>

---
