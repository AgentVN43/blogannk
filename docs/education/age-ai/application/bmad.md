---
sidebar_position: 2
slug: /education/age-ai/application/bmad
id: age-ai-application-bmad
title: Ứng dụng BMAD trong xây dựng hệ thống
---

# 1️⃣ Mục tiêu handbook

Sau khi đọc xong, mỗi role có thể:

* Start project đúng Phase
* Không skip discovery
* Không generate code sớm
* Biết chạy đúng workflow
* Biết khi nào được chuyển phase

---

# 2️⃣ Tổng quan BMAD Flow

BMAD có 6 phase chuẩn:

1. Discovery
2. Architecture
3. Design
4. Build
5. Review
6. Delivery

⚠️ Không được nhảy phase.

---

# 3️⃣ Cấu trúc Project Chuẩn

```
project-root/
 ├─ _bmad/
 ├─ _bmad-output/
 ├─ AGENTS.md
 └─ BMAD.md
```

* `_bmad` → source of truth
* `_bmad-output` → tất cả tài liệu sinh ra
* Không tạo `src/` trước Phase 4

---

# 4️⃣ ROLE-BASED START GUIDE

---

## 🧠 Role 1 – Product Owner / Leadership

### Khi bắt đầu project

### Bước 1 – Khởi động Discovery

```
bmad-brainstorming
```

Input:
Mô tả bài toán kinh doanh.

### Output mong đợi:

* vision.md
* problem.md
* goals.md

---

### Bước 2 – Làm rõ business scope

```
bmad-party-mode
```

Output:

* brd.md
* personas.md
* value-proposition.md

---

### Bước 3 – Kiểm tra logic & rủi ro

```
bmad-review-adversarial-general
```

Chỉ khi:

* Scope rõ
* Risk được liệt kê
  → mới được sang Phase 2

---

## 📊 Role 2 – BA / PM

### Sau khi Discovery xong

### Bước 1 – Chuẩn hóa tài liệu

```
bmad-editorial-review-prose
```

### Bước 2 – Lập chỉ mục tài liệu

```
bmad-index-docs
```

Mục tiêu:

* Không còn ambiguity
* Có index.yaml
* Có danh sách assumption

---

## 🏗 Role 3 – Architect

### Chỉ bắt đầu khi Phase 1 approved

Không được tự động design trước.

(Phase 2 command sẽ được mở khi project đạt gate)

---

## 💻 Role 4 – Developer

### Dev KHÔNG được làm gì trong Phase 1

Không:

* Setup framework
* Create repo structure
* Install package

Dev chỉ tham gia khi:

* Architecture được approve
* Scope freeze

---

# 5️⃣ Phase Gate Checklist

Trước khi chuyển phase:

* Vision có 1 hướng duy nhất?
* In-scope / Out-of-scope rõ?
* Risk list tồn tại?
* Assumption được ghi lại?

Nếu thiếu → quay lại Phase 1 workflow.

---

# 6️⃣ Anti-Patterns (Cấm)

❌ Chạy AI và yêu cầu “generate full stack app”
❌ Tạo src/ trước Phase 4
❌ Viết tech stack khi chưa có architecture
❌ Skip adversarial review

---

# 7️⃣ Cách thực hành trong team

Khuyến nghị:

* 1 người điều khiển AI (Operator)
* 1 người review nội dung
* 1 người làm gate approval

Không để mỗi người tự chạy AI riêng lẻ.

---

# 8️⃣ Kết quả mong đợi sau 1 project

Team phải:

* Có discipline theo phase
* Không nhảy bước
* Có full documentation trong `_bmad-output`
* Dev bắt đầu code với clarity

---

# 🔎 Next Step

Mình có thể:

1. 🔧 Chuẩn hóa lại handbook này thành **format internal-ready (clean & publishable)**
2. 📦 Xuất thành template markdown dùng làm chuẩn cho mọi project
3. 🧪 Thêm 1 mini example project để team thực hành ngay

Chọn một trong 3 hướng trên.
