const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

// Routes
const index = require('./server/index');
const proxy = require('./server/proxy');
require('dotenv').config();

const app = express();

app.use(bodyParser.json({
        type:'application/json',
        limit: '50mb',
        verify: function(req, res, buf) {
            if (req.url.startsWith('/webhook')){
                req.rawbody = buf;
            }
        }
    })
);
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(session({
  name: 'ShopifyNodeApp',
  secret: process.env.SESSION_SECRET || 'coocoocachoo',
  cookie: { secure: true, maxAge: (24 * 60 * 60 * 1000) },
  saveUninitialized: true,
  resave: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use('/', index);
app.use('/proxy', proxy);


// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use((err, req, res) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
