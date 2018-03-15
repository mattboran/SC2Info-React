const db = require('../utils/database');

const statements = {
    INSERT_USER: 'register-user',
    FETCH_USER: 'fetch-user',
    SEARCH_PLAYER: 'search-player',
    SEARCH_PROFILE: 'search-profile'

}

const DB_ERROR = "Error dispatching prepared statement!";

const insertUser = (user) => {
    const { username, email, password } = user;
    const date = new Date(Number(new Date()));
    return new Promise( (resolve, reject) =>{
        db.one({
            name: statements.INSERT_USER,
            text: 'INSERT INTO users(username, email, password, register_date) VALUES($1, $2, $3, $4) RETURNING id;',
            values: [username, email, password, date]
        }).then((userID) => {
            resolve(userID);
        }).catch((err) => {
            reject(err);
        });
    });
}

const fetchUser = (user) => {
    const { username, password } = user;
    return new Promise( (resolve, reject) => {
        db.one({
            name: statements.FETCH_USER,
            text: 'SELECT * FROM users WHERE username = $1; ',
            values: [username]
        }).then((resp) => {
            resolve(resp);
        }).catch((err) => {
            reject(err);
        });
    });
}

const searchPlayer = (player) => {
    const {name, region} = player;
    let numeric_region = 1;
    if (region === "EU") { numeric_region = 2; }
    // TODO: is this correct?
    if (region === "SEA") { numeric_region = 3; }
    if (region === "KR") { numeric_region = 4; }

    return new Promise( (resolve, reject) => {
        db.one({
            name: statements.SEARCH_PLAYER,
            text: 'SELECT * FROM player_ids WHERE name = $1 AND region = $2',
            values: [name, numeric_region]
        }).then((resp) => {
            resolve(resp);
        }).catch((err) =>{
            reject(err);
        });
    });

}


module.exports = {
    actions: statements,
    dispatchPreparedStatement: (type, data) => {
        switch(type) {
            case statements.INSERT_USER:
                return new Promise( (resolve, reject) => {
                    insertUser(data)
                        .then((userID)=> {
                            resolve(userID);
                        }).catch((err) => {
                        console.log(DB_ERROR);
                        reject(err);
                    })
                });
                break;
            case statements.FETCH_USER:
                return new Promise( (resolve, reject) => {
                    fetchUser(data)
                        .then((user) => {
                            resolve(user); // Returns all props of user in table
                        }).catch((err) => {
                        reject(err);
                    })
                });
                break;
            case statements.SEARCH_PLAYER:
                return new Promise( (resolve, reject) => {
                    searchPlayer(data)
                        .then((user) => {
                            resolve(user);
                        }).catch((err) => {
                        reject(err);
                    })
                });
            default:
                console.log('Invalid database action type!');
                break;
        }
    }
}
