const session = require('express-session');
const fs = require('fs');
const path = require('path');

const db = require('./static/database').db;
const pgSession = require('connect-pg-simple')(session);

const secret = fs.readFileSync(path.join(__dirname, 'bin', 'ca', 'private.key'), 'utf8');
const sess = (secure) => session({
  store: new pgSession({pgPromise: db}),
  secret: secret,
  resave: false,
  saveUninitialized: true,
  rolling: true,
  cookie: {
    //secure: app.get('env') !== 'development' || app.get('port') === 443 ,
    secure: secure,
    maxAge: 3 * 24 * 60 * 60 * 1000
    }, // 3 days
   //key: "UserSession"
});
module.exports = sess;
