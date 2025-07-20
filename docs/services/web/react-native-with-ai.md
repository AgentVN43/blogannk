Tạo màn hình ""
---

## 1. **API**
- **Endpoint**: http://localhost:3008/api/v1/products.
- **Phương thức**: GET
- **Cấu trúc dữ liệu**:  

---

## 2. **Yêu cầu UI**
- Có pull-to-refresh.
- Có load-more (infinite scroll) 
- Có chừa vị trí placeholder nếu màn hình cần search/filter sẽ thêm api vô trong tương lai
- Áp dụng pattern offline-first cho màn hình X, dùng @asyncStorage.ts
---