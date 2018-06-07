const axios = require('axios');
const apikey = require('../utils/apikey').apikey;

function findSoloLadder(ladderData) {
    return ladderData.filter(ladder => {
        // first remove all unranked ladders
        const ladderDetail = ladder["ladder"]
        if (ladderDetail.length === 0)
            return false;
        const {matchMakingQueue} = ladderDetail[0];
        return matchMakingQueue === "LOTV_SOLO";
    })
}

module.exports = {
    regionToString: (region) => {
        switch (region) {
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
    },

    callProfileApi: (name, id, region) => {

        const url = "https://us.api.battle.net/sc2/profile/"
            + id + "/" + region + "/" + name
            + "/?locale=en_US&apikey=" + apikey;

        return new Promise((resolve, reject) => {
            console.log("Got here")
            axios({method: 'get', url: url}).then(response => {
                const {displayName, clanName, career, season} = response.data;
                resolve({displayName, clanName, career, season});
            }).catch(err => {
                console.log("Got an error: " + err);
                reject(err);
            })
        })
    },

    callLadderApi: (name, id, region) => {

        const url = "https://us.api.battle.net/sc2/profile/"
            + id + "/" + region + "/" + name
            + "/ladders?locale=en_US&apikey=" + apikey;

        return new Promise((resolve, reject) => {
            axios({method: 'get', url: url}).then(response => {
                const {currentSeason, previousSeason} = response.data;
                let relevantSeason;
                if (currentSeason.length > 0) {
                    relevantSeason = currentSeason;
                } else {
                    relevantSeason = previousSeason;
                }
                resolve(findSoloLadder(relevantSeason));
            }).catch(err => {
                console.log("Got an error: " + err);
                reject(err);
            })
        })
    }
}
