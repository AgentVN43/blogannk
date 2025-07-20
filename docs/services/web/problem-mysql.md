---
id: problems-with-mysql
title: Problems when working with MySQL
slug: /services/web/problems-with-mysql
---

# 🚀 Install MySQL on macOS

## 1. Cài qua bộ cài chính thức của MySQL

Truy cập: [https://dev.mysql.com/downloads/mysql](https://dev.mysql.com/downloads/mysql)

Chọn:

- **Hệ điều hành**: macOS
- **Platform**: macOS 15 (x86, ARM)

> 💡 Mở Terminal và chạy:
>
> ```bash
> uname -m
> ```
> 
> để xác định loại chip:
> - `x86_64` → Intel
> - `arm64` → Apple Silicon (M1, M2, M3...)

### Các thành phần được cài:

- MySQL Server
- MySQL Preference Pane (trong System Preferences để bật/tắt server)
- MySQL Client

Sau khi cài xong:

- Mở **System Preferences → MySQL** để bật MySQL Server.

---

## 2. Thêm MySQL vào PATH

Để sử dụng `mysql` từ Terminal:

```bash
echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
````

---

## 3. Đăng nhập MySQL

* **Username** mặc định: `root`
* **Password**: do bạn đặt trong lúc cài đặt

---

## 4. Kết nối bằng MySQL Workbench

Nếu chưa cài: tải tại [https://dev.mysql.com/downloads/workbench](https://dev.mysql.com/downloads/workbench)

* Mở **MySQL Workbench**
* Nhấn dấu `+` để tạo kết nối mới
* Điền thông tin:

  * **Hostname**: `127.0.0.1`
  * **Port**: `3306`
  * **Username**: `root`
  * **Password**: mật khẩu đã cài ở bước install

---

## 5. Import `.sql` bằng Terminal

### Tạo database:

```bash
mysql -u root -p -e "CREATE DATABASE test DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
```

* `test`: là tên của database
* `utf8mb4`: charset hỗ trợ đầy đủ tiếng Việt và emoji
* `utf8mb4_general_ci`: collation

> Nhập mật khẩu đã set ở bước cài đặt khi được hỏi

### Import database:

```bash
mysql -u root -p test < "/xx/yyy/zzz/yyy_18072025/yyyy_20250718.sql"
```

---
## 6. Troubleshooting
### ❗ Problem: `ERROR at line 1: Unknown command '\-'.`

#### 💥 Nguyên nhân:

* File `.sql` chứa ký tự không hợp lệ `\-` hoặc `\--`
* Đây là lỗi thường gặp khi file được xuất ra bởi công cụ không chuẩn hoặc có escape sai

### ✅ Cách sửa:

#### Trường hợp file nhỏ:

* Mở file `.sql` bằng text editor như VS Code
* Tìm và thay tất cả `\-` thành `--`

#### Trường hợp file lớn (>2GB):

Chạy trong Terminal:

```bash
sed 's/\\--/--/g; s/\\-/-/g' /path/to/yourfile.sql > /path/to/cleaned.sql
```

Sau đó import lại:

```bash
mysql -u root -p test < /path/to/cleaned.sql
```
---
### ❗ Problem: `Unhandled exception: 'ascii' codec can't decode`
### ✅ Cách sửa:
1. Convert file từ csv sang sql để import. 
:::tip 
Cách 1 chỉ dành cho những file dung lượng nhỏ
:::
2. Mở file và save-as đúng với charset utf-8
---
