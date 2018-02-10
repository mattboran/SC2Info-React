var session = require('express-session');
const db = require('./static/database').db;
const pgSession = require('connect-pg-simple')(session);
const sess = session({
  store: new pgSession({pgPromise: db}),
  secret: secret,
  resave: false,
  saveUninitialized: true,
  rolling: true,
  cookie: {
    secure: app.get('env') !== 'development' || app.get('port') === 443 ,
    maxAge: 3 * 24 * 60 * 60 * 1000
    }, // 3 days
   //key: "UserSession"
});
module.exports = sess;
