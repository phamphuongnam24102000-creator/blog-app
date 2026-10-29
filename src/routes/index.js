const newsRouter = require('./news');
const siteRouter = require('./site');

// Gắn tiền tố URL cho từng nhóm route.
// Thêm nhóm mới (vd /courses) chỉ cần tạo routes/courses.js rồi thêm 1 dòng ở đây.
function route(app) {
  app.use('/news', newsRouter);
  app.use('/', siteRouter);

  // Không route nào khớp → trang 404
  app.use((req, res) => {
    res.status(404).render('404', { title: 'Không tìm thấy trang' });
  });
}

module.exports = route;
