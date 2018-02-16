const bcrypt    = require('bcrypt');
// const dbService = require('./db_service');

module.exports = {
  hashPassword: (password) => {
    const hashRounds = 10;
    return new Promise( (resolve, reject) => {
      bcrypt.hash(password, hashRounds, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      })
    });
  },

  comparePasswords: (password, hashPassword) => {
    return new Promise(bcrypt.compare(password, hashPassword, (err, resp) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    }))
  }
}
