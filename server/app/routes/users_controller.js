const passwordService = require('../services/password_service');
const userService = require('../services/user_service');

module.exports = function(app, db){
  app.post('/api/users/testHash', (req, res) => {
    const {password} = req.body;
    passwordService.hashPassword(password)
      .then((pass) =>{
        console.log(pass);
      }).catch((err) =>{
        console.log("error: ", err);
      });
  }),
  app.post('/api/users/register', (req, res) => {
    const user = req.body;
    console.log("User: ", user);
    userService.registerUser(user)
      .then((userID) =>{
        console.log("Registered user with ID: ", userID);
        res.send(userID);
      }).catch((err) => {
        console.log("Error registering user: ", err);
      });
  })
  app.get('/healthCheck', (req, res)=> {
    res.send(200);
  })

}
