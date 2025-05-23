print('Starting database initialization...');

db = db.getSiblingDB('product_db');

print('Connected to product_db database');

// Drop existing collection if it exists
db.products.drop();

print('Dropped existing products collection');

// Sample products data
const products = [
  {
    "name": "MacBook Pro M2",
    "price": 1999,
    "description": "Latest Apple laptop with M2 chip"
  },
  {
    "name": "iPhone 14 Pro",
    "price": 999,
    "description": "Premium smartphone with dynamic island"
  },
  {
    "name": "Sony WH-1000XM4",
    "price": 349,
    "description": "High-end noise cancelling headphones"
  },
  {
    "name": "Samsung Galaxy S23",
    "price": 799,
    "description": "Flagship Android smartphone"
  },
  {
    "name": "iPad Air",
    "price": 599,
    "description": "Versatile tablet for work and entertainment"
  },
  {
    "name": "Dell XPS 13",
    "price": 1299,
    "description": "Premium Windows ultrabook"
  },
  {
    "name": "AirPods Pro",
    "price": 249,
    "description": "Wireless earbuds with active noise cancellation"
  },
  {
    "name": "Nintendo Switch OLED",
    "price": 349,
    "description": "Portable gaming console with OLED screen"
  },
  {
    "name": "Canon EOS R6",
    "price": 2499,
    "description": "Professional mirrorless camera"
  },
  {
    "name": "Microsoft Surface Pro 8",
    "price": 999,
    "description": "2-in-1 laptop tablet hybrid"
  }
];

// Insert data
const result = db.products.insertMany(products);

print('Insertion result:', JSON.stringify(result));
print('Current documents in products collection:');
db.products.find().forEach(printjson);

print('Sample products inserted successfully!');
