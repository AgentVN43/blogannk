---
id: code-with-ai
title: Code with AI
slug: /services/web/code-with-ai
---

# �� HƯỚNG DẪN VIẾT PROMPT HIỆU QUẢ

## �� CẤU TRÚC PROMPT CHUẨN

### **1. CONTEXT & BACKGROUND**
```
Tôi đang phát triển hệ thống quản lý kho BizTrack với kiến trúc:
- Node.js + Express + MySQL
- Pattern: MVC với Service Layer
- Authentication: JWT
- Database: Connection pool với mysql2
- Error handling: Try-catch với global error middleware
- Response format: Standardized JSON với utils/response.js

Cấu trúc thư mục hiện tại:
app/
├── config/          # Database config
├── middlewares/     # Auth, validation
├── modules/         # Domain modules
├── routes/          # Route definitions
└── utils/           # Utility functions
```

### **2. REQUIREMENT SPECIFICATION**
```
Tôi cần tạo chức năng [TÊN_CHỨC_NĂNG] với các yêu cầu:

**Business Logic:**
- Mô tả chi tiết logic nghiệp vụ
- Các trường hợp đặc biệt cần xử lý
- Validation rules
- Error scenarios

**API Endpoints:**
- Method: GET/POST/PUT/DELETE
- Path: /api/v1/[resource]
- Request body/query parameters
- Response format

**Database:**
- Tables cần tạo/sửa đổi
- Relationships
- Constraints

**Security:**
- Authentication requirements
- Authorization rules
- Input validation
```

### **3. TECHNICAL CONSTRAINTS**
```
**Tuân thủ kiến trúc hiện tại:**
- Sử dụng async/await pattern
- Implement đầy đủ Model-Service-Controller
- Sử dụng utils/response.js cho response
- Error handling với try-catch
- Logging với console.error cho errors

**Code standards:**
- JSDoc comments cho tất cả functions
- Consistent naming conventions
- Proper error messages
- Input validation
```

## 🎯 VÍ DỤ PROMPT HOÀN CHỈNH

### **Ví dụ 1: Tạo chức năng quản lý nhân viên**

```
Tôi đang phát triển hệ thống quản lý kho BizTrack và cần tạo chức năng quản lý nhân viên.

**Context:**
- Hệ thống hiện tại có kiến trúc MVC với Service Layer
- Database: MySQL với connection pool
- Authentication: JWT
- Response format: Standardized JSON với utils/response.js

**Business Requirements:**
1. Quản lý thông tin nhân viên (ID, tên, email, phone, role, status)
2. Phân quyền: admin có thể CRUD, user chỉ xem
3. Validation: email unique, phone format, role phải là 'admin' hoặc 'user'
4. Soft delete: không xóa thật, chỉ update status = 'inactive'

**API Endpoints:**
- GET /api/v1/employees - Lấy danh sách (có pagination, filter)
- GET /api/v1/employees/:id - Lấy chi tiết nhân viên
- POST /api/v1/employees - Tạo nhân viên mới
- PUT /api/v1/employees/:id - Cập nhật thông tin
- DELETE /api/v1/employees/:id - Soft delete

**Database:**
- Bảng employees với các trường: employee_id (UUID), name, email, phone, role, status, created_at, updated_at
- Index trên email để check unique

**Technical Requirements:**
- Tuân thủ kiến trúc hiện tại với Model-Service-Controller
- Sử dụng async/await
- Implement đầy đủ validation
- Error handling với try-catch
- JSDoc comments
- Sử dụng utils/response.js cho response

Hãy tạo đầy đủ các file cần thiết theo cấu trúc modules hiện tại.
```

### **Ví dụ 2: Tạo chức năng báo cáo doanh thu**

```
Tôi cần tạo chức năng báo cáo doanh thu cho hệ thống BizTrack.

**Context:**
- Hệ thống có các bảng: orders, order_details, products, customers
- Kiến trúc MVC với Service Layer
- Database: MySQL với connection pool

**Business Requirements:**
1. Báo cáo doanh thu theo thời gian (ngày/tuần/tháng/năm)
2. Tính tổng doanh thu, số đơn hàng, trung bình/đơn
3. Filter theo: khoảng thời gian, khách hàng, sản phẩm
4. Export data ra Excel/CSV
5. Cache kết quả để tối ưu performance

**API Endpoints:**
- GET /api/v1/reports/revenue - Báo cáo doanh thu
- GET /api/v1/reports/revenue/export - Export báo cáo
- Query params: startDate, endDate, customerId, productId, groupBy (day/week/month/year)

**Database Queries:**
- JOIN orders với order_details, products, customers
- Aggregate functions: SUM, COUNT, AVG
- GROUP BY theo thời gian

**Technical Requirements:**
- Tạo module reports/ trong modules/
- Implement caching với Redis (nếu có) hoặc memory cache
- Pagination cho kết quả lớn
- Error handling cho queries phức tạp
- JSDoc comments đầy đủ

Hãy tạo các file cần thiết và đảm bảo performance tốt.
```

## �� TEMPLATE PROMPT CHUẨN

```
**PROJECT CONTEXT:**
Tôi đang phát triển hệ thống [TÊN_HỆ_THỐNG] với:
- Technology stack: [LIST_TECHNOLOGIES]
- Architecture: [ARCHITECTURE_PATTERN]
- Database: [DATABASE_TYPE]
- Current structure: [FOLDER_STRUCTURE]

**FEATURE REQUEST:**
Tôi cần tạo chức năng [TÊN_CHỨC_NĂNG] với các yêu cầu:

**Business Logic:**
[Chi tiết logic nghiệp vụ]

**API Requirements:**
- Endpoints: [LIST_ENDPOINTS]
- Request/Response format: [FORMAT_SPECS]
- Authentication: [AUTH_REQUIREMENTS]

**Database:**
- Tables: [TABLE_SPECS]
- Relationships: [RELATIONSHIPS]
- Constraints: [CONSTRAINTS]

**Technical Requirements:**
- Follow current architecture pattern
- Use async/await
- Implement proper error handling
- Add input validation
- Include JSDoc comments
- Use existing utility functions

**Additional Notes:**
[Any special requirements, edge cases, or constraints]

Hãy tạo đầy đủ các file cần thiết theo cấu trúc hiện tại.
```

## 📝 CHECKLIST TRƯỚC KHI GỬI PROMPT

### **Thông tin cần chuẩn bị:**
- [ ] Mô tả rõ ràng business logic
- [ ] Liệt kê đầy đủ API endpoints
- [ ] Xác định database schema
- [ ] Nêu rõ validation rules
- [ ] Mô tả error scenarios
- [ ] Xác định security requirements
- [ ] Nêu rõ performance requirements

### **Context cần cung cấp:**
- [ ] Technology stack hiện tại
- [ ] Architecture pattern đang dùng
- [ ] Cấu trúc thư mục
- [ ] Coding standards
- [ ] Existing utility functions
- [ ] Database connection setup

## �� TIPS ĐỂ CÓ KẾT QUẢ TỐT

### **1. Be Specific**
```
❌ "Tạo chức năng quản lý sản phẩm"
✅ "Tạo chức năng quản lý sản phẩm với CRUD operations, inventory tracking, và barcode generation"
```

### **2. Provide Examples**
```
"Response format example:
{
  'success': true,
  'data': {...},
  'message': 'Product created successfully'
}"
```

### **3. Mention Constraints**
```
"Tuân thủ kiến trúc hiện tại:
- Sử dụng utils/response.js cho response
- Error handling với try-catch
- JSDoc comments cho tất cả functions"
```

### **4. Ask for Specific Files**
```
"Hãy tạo các file:
- modules/products/product.model.js
- modules/products/product.service.js
- modules/products/product.controller.js
- modules/products/product.routes.js"
```

### **5. Include Edge Cases**
```
"Xử lý các trường hợp:
- Product name trùng lặp
- Invalid category_id
- Soft delete thay vì hard delete
- Image upload validation"
```

## 🚀 VÍ DỤ PROMPT THỰC TẾ

```
Tôi đang phát triển hệ thống quản lý kho BizTrack và cần tạo chức năng quản lý đơn hàng nhập kho.

**Context:**
- Hệ thống hiện tại: Node.js + Express + MySQL
- Kiến trúc: MVC với Service Layer
- Database: Connection pool với mysql2
- Response: Standardized JSON với utils/response.js

**Business Requirements:**
1. Tạo đơn hàng nhập kho với supplier, warehouse, items
2. Tính toán tổng tiền tự động từ items
3. Trạng thái: draft -> confirmed -> received
4. Khi confirmed: tạo invoice và transaction
5. Khi received: cập nhật inventory

**API Endpoints:**
- POST /api/v1/purchase-orders - Tạo đơn nhập
- GET /api/v1/purchase-orders - Danh sách (pagination, filter)
- GET /api/v1/purchase-orders/:id - Chi tiết đơn
- PUT /api/v1/purchase-orders/:id/confirm - Xác nhận đơn
- PUT /api/v1/purchase-orders/:id/receive - Nhận hàng

**Database:**
- purchase_orders: po_id, supplier_id, warehouse_id, total_amount, status, created_at
- purchase_order_items: item_id, po_id, product_id, quantity, price

**Technical Requirements:**
- Tuân thủ kiến trúc hiện tại
- Sử dụng async/await
- Transaction cho operations phức tạp
- Validation đầy đủ
- Error handling với try-catch
- JSDoc comments

Hãy tạo đầy đủ các file cần thiết trong modules/purchase-orders/.
```

Với cách viết prompt này, AI sẽ hiểu rõ yêu cầu và tạo ra code đúng chuẩn, tuân thủ kiến trúc hiện tại của hệ thống.