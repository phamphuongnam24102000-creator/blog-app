const { posts } = require('../../data/posts');

class SiteController {
  // [GET] /
  home(req, res) {
    const featured = posts.find(p => p.featured) || posts[0];
    res.render('home', {
      title: 'Trang chủ',
      featured,
      posts: posts.filter(p => p !== featured).slice(0, 4),
    });
  }
}

module.exports = new SiteController();
