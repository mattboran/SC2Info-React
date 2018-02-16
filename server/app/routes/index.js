const newsController = require('./news_controller');
const usersController = require('./users_controller');

module.exports = function(app) {
  newsController(app);
  usersController(app);
}
