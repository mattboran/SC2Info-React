const bcrypt    = require('bcrypt');
// const dbService = require('./db_service');

module.exports = {
  hashPassword: (password) => {
    const hashRounds = 10;
    return new Promise(function(resolve, reject){
      bcrypt.hash(password, hashRounds, function(err, hash){
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      })
    });
  }
}
