const authService   = require('./auth_service');
const dbService     = require('./db_service');

module.exports = {
  registerUser: (user) => {
    const { password } = user;
    return new Promise( (resolve, reject) => {
      authService.hashPassword(password)
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
      dbService.dispatchPreparedStatement(dbService.actions.FETCH_USER, user)
          .then((retrievedUser) => {
              const providedPassword = user.password;
              console.log("in loginUser: ", retrievedUser);
              return authService.verifyUser(retrievedUser, providedPassword);
          }).then((verifiedUser) => {
              console.log("verified user in loginUser: ", verifiedUser);
              return authService.generateJWT(verifiedUser);
          }).then((token) => {
              console.log("Generated token in loginUser: ", token);
              resolve(token);
          }).catch((err) => {
              reject(err);
          });
    });

  }
}
