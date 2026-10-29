const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');   // (1)

const helpers = require('./helpers/handlebars');
const locals = require('./app/middlewares/locals');
const route = require('./routes');

const app = express();
const port = 3000;

app.use(morgan('dev'));

// Phục vụ file tĩnh trong src/public: /css/app.css, /img/logo.png, /favicon.ico
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('hbs', engine({ extname: '.hbs', helpers }));   // (2)
app.set('view engine', 'hbs');                              // (3)
app.set('views', path.join(__dirname, 'resources', 'views'));   // (4)

// Biến dùng chung cho mọi trang
app.use(locals);

// Routes
route(app);

app.listen(port, () => console.log(`http://localhost:${port}`));
