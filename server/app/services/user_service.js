const pwService = require('./password_service');
const dbService = require('./db_service');

module.exports = {
  registerUser: (user) => {
    const { password } = user;
    return new Promise( (resolve, reject) => {
      pwService.hashPassword(password)
        .then((hash) => {
          const preparedUser = {
            ...user,
            password: hash,
          };
          return dbService.dispatchPreparedStatement(dbService.actions.INSERT_USER, preparedUser);
        }).then((userID) => {
          resolve(userID);
        }).catch((err) => {
          reject(err);
        })
    });
  },

  loginUser: (user) => {
    return new Promise( (resolve, reject) => {
      resolve(user);
    });
    // const { username, password } = user;
    // return new Promise( (resolve, reject) => {
    //   reject(10);
    //   if (1){
    //     resolve(10);
    //   }
    // });
  },
}
