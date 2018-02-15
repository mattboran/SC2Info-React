const db = require('../utils/database');
// const userService = require('./user_service.js');

const statements = {
  REGISTER_USER: 'register-user',
  FETCH_USER: 'fetch-user',
}

const DB_ERROR = "Error dispatching prepared statement!";

const registerUser = (user) => {
  const { username, email, password } = user;
  const date = new Date(Number(new Date()));
  return new Promise(function(resolve, reject){
    db.one({
      name: statements.REGISTER_USER,
      text: 'INSERT INTO users(username, email, password, register_date) VALUES($1, $2, $3, $4) RETURNING id;',
      values: [username, email, password, date]
    }).then((userID) => {
      resolve(userID);
    }).catch((err) => {
      reject(err);
    });
  });
}

module.exports = {
  actions: statements,
  dispatchPreparedStatement: function(type, data){
    switch(type) {
      case statements.REGISTER_USER:
        return new Promise(function(resolve, reject){
          registerUser(data)
          .then((userID)=>{
            console.log("userservice came back with ID: ", userID);
            resolve(userID);
          }).catch((err) =>{
            console.log(DB_ERROR);
            reject(err);
          })
        });
        break;
      case statements.FETCH_USER:
        break;
      default:
        console.log('Invalid database action type!');
        break;
    }
  }
}
