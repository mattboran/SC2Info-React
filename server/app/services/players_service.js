const apikey = require('../utils/apikey');
const blizz = require('blizzard.js').initialize({ apikey });

module.exports = {
    getTop: (region, start, end) => {
        blizz.sc2.ladder([]);
    }
}