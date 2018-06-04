// Servicing player-relayed requests from the API

const apikey = require('../utils/apikey').apikey;
//TODO: remove this, if we can.
const util = require('util');
const axios = require('axios');
const blizz = require('blizzard.js').initialize({ apikey }, axios);
const dbService = require('./db_service');

// Blizzard API compatable string comes from client. Change to format compatible with our DB
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

function callBlizzApiForProfile(name, id, region) {

    const url = "https://us.api.battle.net/sc2/profile/"
        +id+"/"+region+"/"+name
        +"/?locale=en_US&apikey="+apikey;

    return new Promise( (resolve, reject) => {
        axios({method: 'get', url: url }).then(response => {
                    const {displayName, clanName, career} = response.data;
                    resolve({displayName, clanName, career});
              }).catch(err => {
                    console.log("Got an error: " + err);
                    reject(err);
              })
    })
}


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
            callBlizzApiForProfile(name, id, region).then(response => {
                console.log("Response!");
                resolve(response);
            }).catch(err => {
                console.log("Error!!!");
                reject(err);
            })
        })
    }
    // searchPlayerProfile: (id, name, origin) => {
    //     return new Promise( (resolve, reject) => {
    //
    //         }
    //     });
    // }

}