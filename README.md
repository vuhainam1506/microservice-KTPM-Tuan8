    # Microservice KTPM - Tuần 8

## 🚀 Continuous Deployment Status
[![Deploy Product Service to Render](https://github.com/vuhainam1506/microservice-KTPM-Tuan8/actions/workflows/deploy-product-service.yml/badge.svg)](https://github.com/vuhainam1506/microservice-KTPM-Tuan8/actions/workflows/deploy-product-service.yml)

## 🌟 Tổng quan
Hệ thống microservice gồm 3 service độc lập:
- Product Service (port: 3001) - Quản lý thông tin sản phẩm
- Customer Service (port: 3002) - Quản lý thông tin khách hàng
- Order Service (port: 3003) - Quản lý đơn hàng

## 🏗️ Cấu trúc Project
```
microservice-KTPM-Tuan8/
├── product-service/     # Quản lý sản phẩm (Node.js + Express + MongoDB)
├── customer-service/    # Quản lý khách hàng (Node.js + Express + MongoDB)
└── order-service/      # Quản lý đơn hàng (Node.js + Express + MongoDB)
```

## 📦 Tech Stack
- Backend: Node.js + Express
- Database: MongoDB
- Container: Docker
- CI/CD: GitHub Actions
- Cloud Deploy: Render

## 🔍 Chi tiết các Service

### 1. Product Service (port: 3001)
- **Chức năng**: CRUD sản phẩm, tìm kiếm sản phẩm
- **API Endpoints**:
  - `GET /products` - Lấy danh sách sản phẩm
  - `GET /products/:id` - Lấy chi tiết sản phẩm
  - `GET /products/search?name=keyword` - Tìm kiếm sản phẩm theo tên
  - `POST /products/init-sample` - Khởi tạo dữ liệu mẫu
  - `GET /products/check-db` - Kiểm tra kết nối database

### 2. Customer Service (port: 3002)
- **Chức năng**: CRUD khách hàng, tìm kiếm khách hàng
- **API Endpoints**:
  - `GET /customers` - Lấy danh sách khách hàng
  - `GET /customers/:id` - Lấy chi tiết khách hàng
  - `POST /customers` - Tạo khách hàng mới
  - `PUT /customers/:id` - Cập nhật thông tin khách hàng
  - `GET /customers/search/query` - Tìm kiếm khách hàng

### 3. Order Service (port: 3003)
- **Chức năng**: Quản lý đơn hàng
- **API Endpoints**: (Đang phát triển)

## 🚀 Hướng dẫn Chạy Local

### Chạy từng service riêng lẻ:

1. Product Service:
```bash
cd product-service
docker-compose up
```

2. Customer Service:
```bash
cd customer-service
docker-compose up
```

3. Order Service:
```bash
cd order-service
docker-compose up
```

### Cấu hình môi trường:
Mỗi service cần file `.env` với các biến:
```
PORT=3001/3002/3003
MONGO_URI=mongodb://localhost:27017/db_name
```

## 🌐 Deployment
Project được triển khai tự động lên Render thông qua GitHub Actions:
1. Push code lên GitHub
2. GitHub Actions tự động build Docker image và push lên Docker Hub
3. Trigger deployment trên Render

## 📝 Sample Data
- Products: MacBook Pro M2, iPhone 14 Pro, Sony WH-1000XM4, etc.
- Customers: Dữ liệu mẫu với thông tin cá nhân và địa chỉ

## 🔒 Security
- Các biến môi trường được bảo mật trong GitHub Secrets và Render
- Docker images được lưu trữ an toàn trên Docker Hub

## 👨‍💻 Development
- Source code: [GitHub Repository](https://github.com/vuhainam1506/microservice-KTPM-Tuan8)
- CI/CD: GitHub Actions
- Deployment: Render

