// const passwordService = require('../services/password_service');
const userService = require('../services/user_service');

module.exports = (app) => {
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
    app.post('/api/users/signin', (req, res) => {
        const user = req.body;
        userService.loginUser(user)
            .then((data) => {
                const { username, email, token } = data;
                const sessId = req.sessionID;
                const retVal = {
                    sessId,
                    username,
                    email
                };
                res.cookie('token', token).json(retVal);
            }).catch((err) => {
                res.status(403).json(err);
            });
    }),
    app.post('/api/users/pre-signin', (req, res) => {
        const token = req.cookies['token'];
        userService.validateReturningUser(token)
            .then((user) => {
                const { username, email } = user.data;
                const sessId = req.sessionID;
                const retVal = {
                    sessId,
                    username,
                    email
                };
                res.json(retVal);
            }).catch((err) => {
                res.send(err);
            });
    }),
    app.get('/healthCheck', (req, res)=> {
        res.send(200);
    })

};
