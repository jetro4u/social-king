// start.js
const mongoose = require('mongoose');
const throng = require('throng');
require('dotenv').config({ path: '.env' });

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

mongoose
  .connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})
  .then(()=> console.log('DB Connected'))
  .catch(err=>{
    console.log(err);
  })

mongoose.Promise = require('bluebird');

mongoose.connection.on('error', (err) => {
  console.error(`🚫 Database Error 🚫  → ${err}`);
});

function start() {
  /* You should require your models here so you don't have to initialise them all the time in
  different controlers*/
  require('./models/Shop');

  const app = require('./app');
  app.set('port', process.env.PORT || 7777);
  const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);

    // if(process.NODE_ENV!='development'){
    //     process.on('uncaughtException', function(err) {
    //     console.log('Caught exception: ' + err);
    //   });
    // }
  });
}


throng({
  workers: process.env.WEB_CONCURRENCY || 1,
}, start);
