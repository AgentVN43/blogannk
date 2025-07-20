---
id: new-project-with-ai
title: Dự án mới cùng AI
slug: /services/web/new-project-with-ai
---

"Tôi đang phát triển hệ thống quản lý "Tour Trips" với:

## 1. Kiến trúc tổng thể

- Pattern: **Modular Monolith** - MVC với Service Layer
- Tech stack:
  - Backend: **Node.js + Express** (sử dụng **MongoDB** làm database)
  - Frontend: **React + React Native**
- Authentication: **JWT**

---

## 2. Các bước chuẩn bị trước khi code chức năng

1.  **Khởi tạo dự án và cấu hình cơ bản:**
    - Tạo cấu trúc thư mục dự án theo kiến trúc Modular Monolith.
    - Cài đặt các dependencies chính cho Express và Mongoose.
    - Cấu hình kết nối MongoDB.
    - Thiết lập file `.env` và thư viện quản lý biến môi trường (`dotenv`).
2.  **Cấu hình Global Middleware và Error Handling:**
    - **Global Error Middleware**
    - **Global Error Handler**

3.  **Thiết lập Utility Functions ban đầu:**
    - Khởi tạo `core/utils/database.js` với các hàm cơ bản như `query` (để log hoặc wrap Mongoose), và `paginate`.
    - Thiết lập các tiện ích chung
        - Database Utilities
        - Validation Utilities
        - Response Utilities
4. **Tạo Helper Functions**
    - Date Helpers
    - Number Helpers
    - String Helpers

---

## 3. Yêu cầu về thiết kế và triển khai Backend

- **Async/Await Pattern:** Toàn bộ logic bất đồng bộ phải sử dụng `async/await`.
- **Triển khai đầy đủ Model-Service-Controller (MSC):**
  - **Controller:** Chỉ xử lý request/response và gọi Service.
  - **Service:** Chứa toàn bộ logic nghiệp vụ phức tạp, giao tiếp với Model.
  - **Model:** Định nghĩa schema và tương tác trực tiếp với database.
- **Standardized Responses:** Sử dụng `utils/response.js` để chuẩn hóa định dạng trả về JSON cho mọi API call (bao gồm cả thành công và thất bại).
- **Error Handling:**
  - Sử dụng `try-catch` trong các hàm để bắt lỗi cục bộ.
  - **Logging:** Sử dụng `console.error`

---

## 4. Yêu cầu về Code Standards

- **JSDoc Comments:** Tất cả các hàm (functions), class, và phương thức (methods) quan trọng phải có JSDoc comments đầy đủ mô tả mục đích, tham số (`@param`), giá trị trả về (`@returns`), và các trường hợp lỗi (`@throws`).
- **Consistent Naming Conventions:** Tuân thủ một quy tắc đặt tên thống nhất cho biến, hàm, class, file, và thư mục (ví dụ: camelCase cho biến/hàm, PascalCase cho class/model, kebab-case cho tên file).
- **Proper Error Messages:** Các thông báo lỗi trả về cho client phải rõ ràng, dễ hiểu và không tiết lộ thông tin nhạy cảm về hệ thống nội bộ.
- **Input Validation:** Tất cả dữ liệu đầu vào từ client phải được kiểm tra và xác thực nghiêm ngặt ở phía server (ví dụ: sử dụng Joi, Express-validator)."
