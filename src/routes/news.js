const express = require('express');
const newsController = require('../app/controllers/NewsController');

const router = express.Router();

// Đường dẫn ở đây là phần SAU tiền tố /news (khai báo trong routes/index.js)
router.get('/', newsController.index);     // → /news

module.exports = router;
