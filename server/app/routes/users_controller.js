const passwordService    = require('../services/password_service');

module.exports = function(app, db){
  app.post('/api/users/testHash', (req, res) => {
    const {password} = req.body;
    console.log("Got here");
    console.log(req.body);
    passwordService.hashPassword(password)
      .then((pass) =>{
        console.log(pass);
      }).catch((err) =>{
        console.log("error: ", err);
      });
  }),
  app.get('/healthCheck', (req, res)=>{
    res.send(200);
  })

}
