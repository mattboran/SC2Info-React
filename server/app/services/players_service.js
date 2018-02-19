const apikey = require('../utils/apikey');
const blizz = require('blizzard.js').initialize({ apikey });
const dbService = require('db_service');

module.exports = {
    getTop: (region, start, end) => {
        blizz.sc2.ladder([]);
    },
    searchPlayer: (player, region) => {
        return new Promise( (resolve, reject) => {
            dbService.dispatchPreparedStatement()
        });
    }

}