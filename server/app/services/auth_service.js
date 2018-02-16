const pwService = require('./password_service');
const key       = require('../utils/keys');
const jwt       = require('jsonwebtoken');

module.exports = {
    hashPassword: (password) => {
        return new Promise( (resolve, reject) => {
            pwService.hashPassword(password)
                .then((hash) => {
                    resolve(hash);
                })
                .catch((err) => {
                    reject(err);
                });
        })
    },
    verifyUser: (user, providedPassword) => {
        return new Promise( (resolve, reject) => {
            const { password } = user;
            pwService.comparePasswords(password, providedPassword)
                .then((res) => {
                    resolve(user);
                }).catch((err) => {
                    reject("invalidpassword");
                });

            });
    },
    generateJWT: (user) => {
        return new Promise( (resolve, reject) => {
            const { id, username, email } = user;

            jwt.sign({ data:{ id, username, email }},
                key,
                { algorithm: 'RS256', expiresIn: '3d' }, (err, token) => {
                        if (err){
                            reject(err);
                        } else {
                            const data = {
                                id,
                                username,
                                email,
                                token
                            };
                            resolve(data);
                        }
                });
        });
    }
};