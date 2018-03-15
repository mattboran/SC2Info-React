const apikey = require('../utils/apikey');
const blizz = require('blizzard.js').initialize({ apikey });
const dbService = require('./db_service');

function regionToString(region) {
    switch(region){
        case(1):
            return 'us';
        case(2):
            return 'eu';
        case(3):
            return 'kr';
        case(4):
            return 'tw';
        case(5):
            return 'sea';
        default:
            return 'us';
    }
}

module.exports = {
    getTop: (region, start, end) => {
        blizz.sc2.ladder([]);
    },
    searchPlayerId: (player, region) => {
        return new Promise( (resolve, reject) => {
            const data = { name: player, region };
            // First check for player ID
            dbService.dispatchPreparedStatement(dbService.actions.SEARCH_PLAYER, data)
                .then((player_id) => {
                    const { id, name } = player_id;
                    const origin = regionToString(player_id.region);
                    const api_data = { id, name, origin };
                    resolve(api_data);
                }).catch((err) => {
                    const { message } = err;
                    console.log("The error from playerId: ", err);
                    reject(err);
                });
        });
    },
    searchPlayerDetail: (player, region) => {
        return new Promise( (resolve, reject) => {
            const {id, name} = player;
            const reg = regionToString(region);
            blizz.sc2.profile(['profile'], {origin: reg, id, name})
                .then(response => {
                    console.log(response);
                    resolve(response);
                }).catch(err => {
                    console.log(err);
                    reject(err);
            });
        })
    }
    // searchPlayerProfile: (id, name, origin) => {
    //     return new Promise( (resolve, reject) => {
    //
    //         }
    //     });
    // }

}