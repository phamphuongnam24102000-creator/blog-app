const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');   // (1)

const app = express();
const port = 3000;

app.use(morgan('dev'));

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }));      // (2)
app.set('view engine', 'hbs');                        // (3)
app.set('views', path.join(__dirname, 'resources', 'views'));   // (4)

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    name: 'Nam',
    isAdmin: true,
    posts: [
      { title: 'Học Node.js', views: 120 },
      { title: 'Express cơ bản', views: 85 },
    ],
  });
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => console.log(`http://localhost:${port}`));