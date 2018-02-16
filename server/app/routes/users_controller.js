// const passwordService = require('../services/password_service');
const userService = require('../services/user_service');

module.exports = function(app, db){
  app.post('/api/users/register', (req, res) => {
    const user = req.body;
    console.log("User: ", user);
    userService.registerUser(user)
      .then((userID) =>{
        res.json(userID);
      }).catch((err) => {
        const { constraint } = err;
        res.status(403).json(constraint);
      });
  }),
  app.post('/api/users/login', (req, res) => {
    const user = req.body;
    console.log("User: ", user);
    userService.loginUser(user)
      .then((token) => {
        const retVal = {
          ...user,
          password: 'password-omitted',
          token
        };
        res.json(retVal);
      }).catch((err) => {
        res.status(403).json(err);
      });
  }),
  app.get('/healthCheck', (req, res)=> {
    res.send(200);
  })

}
