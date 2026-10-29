// src/index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware ghi log: chạy cho MỌI request, đặt trước các route
app.use((req, res, next) => {
  const time = new Date().toLocaleString('vi-VN');
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
});

// Các route
app.get('/', (req, res) => {
  res.send('<h1>Trang chủ</h1><a href="/news">Xem tin tức 123</a>');
});

app.get('/news', (req, res) => {
  res.send('<h1>Tin tức</h1>');
});

app.get('/api/user', (req, res) => {
  res.json({ name: 'Nam', role: 'presales' });
});

// Mở server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});