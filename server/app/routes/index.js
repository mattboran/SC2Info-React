const newsController = require('./news_controller');
const usersController = require('./users_controller');

module.exports = function(app, db) {
  newsController(app,db);
  usersController(app,db);
}
