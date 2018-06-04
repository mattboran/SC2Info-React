const newsController = require('./news_controller');
const usersController = require('./users_controller');
const playersController = require('./players_controller');
module.exports = function(app) {
  newsController(app);
  usersController(app);
  playersController(app);
}
