// Servicing player-relayed requests from the API

const apikey = require('../utils/apikey').apikey;
//TODO: remove this, if we can.
const util = require('util');
const blizzApiService = require('./blizz_api_service');
const dbService = require('./db_service');

module.exports = {
    getTop: (region, start, end) => {
        blizz.sc2.ladder([]);
    },
    searchPlayerId: (player, region) => {
        return new Promise( (resolve, reject) => {
            const data = { name: player, region };
            // First check for player ID in the DB
            dbService.dispatchPreparedStatement(dbService.actions.SEARCH_PLAYER, data)
                .then((player_id) => {
                    const { id, name } = player_id;
                    const origin = regionToString(player_id.region);
                    const api_data = { id, name, origin };
                    resolve(api_data);
                }).catch((err) => {
                    const { message } = err;
                    reject(err);
                });
        });
    },
    searchPlayerDetail: (player, region) => {
        const {id, name} = player;
        return new Promise( (resolve, reject) => {
            let profileApiData = blizzApiService.callProfileApi(name,id,region);
            let ladderApiData = blizzApiService.callLadderApi(name, id, region);
            Promise.all([profileApiData, ladderApiData]).then(results => {
                console.log(results);
                resolve(results);
            }).catch(err => {
                console.log("Error!!!");
                reject(err);
            })
        })
    }
}