const pwService = require('./password_service');
const dbService = require('./db_service');

module.exports = {
  registerUser: function(user){
    const { password } = user;
    return new Promise(function(resolve, reject){
      pwService.hashPassword(password)
        .then((hash) => {
          let preparedUser = {
            ...user,
            password: hash,
          };
          console.log("Password got: ", hash);
          console.log("Dispatching prepared statement: ", dbService.actions.REGISTER_USER);
          return dbService.dispatchPreparedStatement(dbService.actions.REGISTER_USER, preparedUser);
        }).then((userID) => {
          console.log("Successfully registered user with ID: ", userID);
          return userID;
        }).catch((err) => {
          console.log("Error in register user:", err);
          return err;
        })
    });
  }
}
