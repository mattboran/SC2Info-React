const newsController = require('./news_controller');
const usersController = require('./users_controller');
const oauthController = require('./oauth_controller');
module.exports = function(app, passport) {
  newsController(app);
  usersController(app);
  oauthController(app, passport);
}
