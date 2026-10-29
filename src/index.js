const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Trang chủ</h1><a href="/news">Tin tức</a>');
});

app.get('/news', (req, res) => {
  res.send('<h1>Tin tức</h1>');
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));