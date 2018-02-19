const playerService = require('../services/players_service');

module.exports = (app) => {
    app.get('/api/players/top', (req, res) => {
        const region = req.param('region');
        const start = req.param('start');
        const end = req.param('end');
    })
    app.get('/api/players/search', (req, res) => {
        const {player, region} = req.body;
        playerService.searchPlayer(player, region)

    })
}
