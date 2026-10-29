const { getCategories, getPopular } = require('../../data/posts');

// Biến dùng chung cho mọi trang (header, sidebar...).
// res.locals có sẵn trong mọi view mà không cần truyền qua res.render.
module.exports = function locals(req, res, next) {
  res.locals.name = 'Nam';
  res.locals.isAdmin = true;
  res.locals.currentPath = req.originalUrl.split('?')[0];   // để tô sáng menu đang chọn
  res.locals.categories = getCategories();
  res.locals.popular = getPopular();
  next();
};
