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
              return authService.verifyUser(retrievedUser, providedPassword);
          }).then((verifiedUser) => {
              return authService.generateJWT(verifiedUser);
          }).then((token) => {
              resolve(token);
          }).catch((err) => {
              reject(err);
          });
    });
  },

    validateReturningUser: (token) => {
      return new Promise( (resolve, reject) => {
          console.log("Trying to validate return user with token: ", token);
          if (!token) {
              resolve(token);
          }
          authService.validateJWT(token)
              .then((user) => {
                  console.log("user got, resolving: ", user);
                  resolve(user);
              }).catch((err) => {
                  console.log("err got, rejecting: ", err);
                  reject(err);
              })
      })
    }
}
