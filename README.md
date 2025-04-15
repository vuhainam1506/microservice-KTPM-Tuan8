# Microservice KTPM - Tuần 8

Hệ thống microservice gồm 3 service độc lập:
- Product Service (port: 3001)
- Customer Service (port: 3002)
- Order Service (port: 3003)

## Cấu trúc Project

```
microservice-KTPM-Tuan8/
├── product-service/     # Quản lý sản phẩm
├── customer-service/    # Quản lý khách hàng
└── order-service/      # Quản lý đơn hàng
```

## Cách chạy

Mỗi service có thể chạy độc lập:

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