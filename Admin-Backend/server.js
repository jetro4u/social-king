const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// bring routes
const blogRoutes = require('./routes/blog');
const tagRoutes = require('./routes/tag');
const userRoutes = require('./routes/user');
const imageRoutes = require('./routes/image');
const commentRoutes = require('./routes/comment');
const authRoutes = require('./routes/auth');

const Sentry = require("@sentry/node");
// or use es6 import statements
// import * as Sentry from '@sentry/node';
const Tracing = require("@sentry/tracing");
// or use es6 import statements
// import * as Tracing from '@sentry/tracing';
Sentry.init({
  dsn: process.env.SENTRY_KEY,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.1,
});
const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});
setTimeout(() => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);

// app
const app = express();
app.use(express.static('public'))

// db
mongoose
    .connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('DB connected'))
    .catch(err => {
        console.log(err);
    });

// middlewares
app.use(morgan('dev'));

// Send everything from this route back as liquid.
app.use((req, res, next) => {
  res.set('Content-Type', 'application/liquid');
  return next();
});

app.use(bodyParser.json({limit: '200mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}))
app.use(cookieParser());

app.use(cors({ origin: "*" }));

// routes middleware
app.use('/api', blogRoutes);
app.use('/api', tagRoutes);
app.use('/api', userRoutes);
app.use('/api', imageRoutes);
app.use('/api', commentRoutes);
app.use('/api', authRoutes);


// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    process.on('uncaughtException', function(err) {
      console.log('Caught exception: ' + err);
    });
});

