module.exports = (app, passport) => {
    app.get('/auth/bnet',
        passport.authenticate('bnet', (err, user, info)=>{
            console.log("Going to auth callback!");
            console.log("user: ", user);
            console.log("info: ", info);
            console.log("err: ", err);
        })),
        //     .then((resp) => {
        //         console.log("Got response ", resp);
        //     }).catch((err) => {
        //         console.log("Got err: ", err);
        // })),

    app.get('/auth/bnet/callback',
        passport.authenticate('bnet', { successRedirect: '/success', failureRedirect: '/fail' }),
        function(req, res){
            console.log(req.account);
            console.log("Passport: ", passport);
            res.json(req.passport.user);
        }),
    app.get('/fail', (req, res) => {
        console.log("Fail cb");
    }),
    app.get('/success', (req, res) => {
        console.log("success cb");
    })
}