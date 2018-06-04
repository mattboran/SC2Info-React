// server.js - main server

const express     = require('express');
const bodyParser  = require('body-parser');
const session     = require('express-session');
const pgSession   = require('connect-pg-simple')(session);
const cookieParser= require('cookie-parser');
const https       = require('https');
const http         = require('http');
const db          = require('./app/utils/database');
const privateKey  = require('./app/utils/keys').key;
const privateCert = require('./app/utils/keys').cert;

const app         = express();

const port = process.env.PORT || 3001;
const httpsServer = https.createServer({key: privateKey, cert: privateCert}, app);
// const httpsServer = http.createServer(app);
app.use(cookieParser(privateKey, { httpOnly: false, secure: false }));

app.use(session({
    store: new pgSession({pgPromise: db}),
    secret: privateKey,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3 * 24 * 60 * 60 * 1000 }
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routes')(app);

httpsServer.listen(port, () => {
    console.log('Server running on ' + port);
});

module.exports = app;