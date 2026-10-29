const { posts } = require('../../data/posts');

class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news', {
      title: 'Tin tức',
      posts,
    });
  }
}

module.exports = new NewsController();
