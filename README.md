Dưới đây là nội dung chi tiết cho **README.md** của dự án CRUD quản lý công việc với **Backend Golang**, **Frontend React**, và **Docker**.

---

# 📝 **Task Manager App**

## 📚 **Giới thiệu**

Dự án **Task Manager App** là một ứng dụng quản lý công việc đơn giản, cung cấp các tính năng **CRUD** (Tạo, Đọc, Cập nhật, Xóa) cho các tác vụ. Ứng dụng được xây dựng với:

- **Backend**: Golang (Gin Framework)  
- **Frontend**: React.js  
- **Cơ sở dữ liệu**: SQLite  
- **Docker**: Đóng gói và triển khai ứng dụng với Docker & Docker Compose  

---

## 🚀 **Tính Năng**

- 📋 **Xem danh sách công việc**  
- ➕ **Thêm công việc mới**  
- ✏️ **Chỉnh sửa công việc**  
- 🗑️ **Xóa công việc**  
- ✅ **Đánh dấu hoàn thành công việc**  

---

## 🛠️ **Cấu Trúc Dự Án**

```plaintext
task-manager/
├── backend/          # Backend Golang
│   ├── main.go       # Entry point backend
│   ├── go.mod        # Dependencies
│   ├── Dockerfile    # Docker config for backend
│   ├── database/
│   │   └── database.go # Database configuration
│   ├── handlers/     # API handlers
│   ├── models/       # Database models
│   ├── routes/       # API routes
│
├── frontend/         # Frontend React
│   ├── src/
│   │   ├── api.js    # API integration
│   │   ├── App.js    # Main app component
│   │   ├── index.js  # Entry point frontend
│   ├── package.json  # Dependencies
│   ├── Dockerfile    # Docker config for frontend
│
└── docker-compose.yml # Docker Compose configuration
```

---

## ⚙️ **Yêu Cầu Hệ Thống**

- **Docker**: >= 20.x  
- **Docker Compose**: >= 2.x  
- **Golang**: >= 1.21 (nếu chạy backend thủ công)  
- **Node.js**: >= 18.x (nếu chạy frontend thủ công)  

---

## 💻 **Cách Chạy Dự Án**

### 🐳 **1. Chạy với Docker Compose**

1. **Clone dự án:**
   ```bash
   git clone https://github.com/Trunks-Pham/asm-devops-taskmanager.git
   cd task-manager
   ```

2. **Chạy Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Truy cập ứng dụng:**
   - Backend: [http://localhost:8080/tasks](http://localhost:8080/tasks)  
   - Frontend: [http://localhost:3000](http://localhost:3000)  

---

### 🛠️ **2. Chạy Backend và Frontend Thủ Công**

#### ✅ **Chạy Backend:**
```bash
cd backend
go run main.go
```

API sẽ hoạt động tại: [http://localhost:8080](http://localhost:8080)  

#### ✅ **Chạy Frontend:**
```bash
cd frontend
npm install
npm start
```

Frontend sẽ hoạt động tại: [http://localhost:3000](http://localhost:3000)  

---

## 📡 **API Endpoints**

| Method | Endpoint      | Mô Tả              |
|--------|---------------|---------------------|
| GET    | /tasks        | Lấy danh sách công việc |
| POST   | /tasks        | Tạo công việc mới     |
| PUT    | /tasks/:id    | Cập nhật công việc    |
| DELETE | /tasks/:id    | Xóa công việc         |

**Ví dụ dữ liệu JSON:**
```json
{
  "title": "Học Golang",
  "description": "Học lập trình backend với Golang",
  "completed": true
}
```

---

## 📦 **Dockerfile Chi Tiết**

### 📄 **Backend Dockerfile**
```dockerfile
FROM golang:1.21

WORKDIR /app
COPY . .

RUN go mod tidy
RUN go build -o main .

EXPOSE 8080
CMD ["./main"]
```

### 📄 **Frontend Dockerfile**
```dockerfile
FROM node:20

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### 📄 **docker-compose.yml**
```yaml
version: '3'

services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
```

---

## 🛡️ **Bảo Mật**

- Sử dụng biến môi trường cho thông tin nhạy cảm  
- Xác thực và phân quyền (có thể mở rộng)  
- Validate dữ liệu đầu vào  

---

## 🐞 **Ghi chú về lỗi**

1. **Port conflict**: Kiểm tra xem cổng `8080` và `3000` có đang được sử dụng bởi ứng dụng khác không.  
2. **Database issues**: Kiểm tra file `tasks.db` được tạo đúng cách.  
3. **Frontend API Errors**: Kiểm tra biến môi trường API URL trỏ đúng Backend.  

---

## 📜 **License**

Dự án này được cấp phép theo [MIT License](https://opensource.org/licenses/MIT).

---

## 🤝 **Đóng Góp**

1. Fork dự án  
2. Tạo branch mới: `git checkout -b feature/your-feature`  
3. Commit thay đổi: `git commit -m 'Add new feature'`  
4. Push branch: `git push origin feature/your-feature`  
5. Tạo Pull Request  

---

## 📞 **Liên Hệ**

- **Tác giả**: Phạm Minh Thảo (Trunks Phạm)  
- **Email**: minhthaopham230104@gmail.com
- **GitHub**: [github.com/Trunks-Pham](https://github.com/Trunks-Pham)  

---

Chúc bạn thành công! 🚀✨