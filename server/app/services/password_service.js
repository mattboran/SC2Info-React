const bcrypt    = require('bcrypt');

module.exports = {
  hashPassword: function(password) {
    const hashRounds = 10;
    console.log("Password: ", password);
    return new Promise(function(resolve, reject){
      bcrypt.hash(password, hashRounds, function(err, hash){
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      })
    })
  }


}
