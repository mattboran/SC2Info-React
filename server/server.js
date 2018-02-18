// server.js - main server

const express     = require('express');
const bodyParser  = require('body-parser');
const session     = require('express-session');
const pgSession   = require('connect-pg-simple')(session);
const passport    = require('passport');
const cookieParser= require('cookie-parser');
const https       = require('https');
const db          = require('./app/utils/database');
const privateKey  = require('./app/utils/keys').key;
const privateCert = require('./app/utils/keys').cert;
const BnetStrategy = require('passport-bnet').Strategy;
const IDs = require('./app/utils/apikey');

const app         = express();

const port = process.env.PORT || 3001;
const httpsServer = https.createServer({key: privateKey, cert: privateCert}, app);

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

// TODO: Separate this block into a separate file please!!
const BNET_ID = process.env.BNET_ID || IDs.bnetID;
const BNET_SECRET = process.env.BNET_SECRET || IDs.secret;

app.use(passport.initialize());
app.use(passport.session());

// Use the BnetStrategy within Passport.
passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((user, done) => { done(null, user); });
passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "https://127.0.0.1:3001/auth/bnet/callback"
}, function(accessToken, refreshToken, profile, done) {
    console.log("AccessToken: ", accessToken);
    console.log("RefreshToken: ", refreshToken);
    console.log("Profile: ", profile);
    return done(null, profile);
}));

require('./app/routes')(app, passport);

httpsServer.listen(port, () => {
    console.log('Server running on ' + port);
});

module.exports = app;