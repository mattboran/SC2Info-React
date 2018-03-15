const playerService = require('../services/players_service');

module.exports = (app) => {
    app.get('/api/players/top', (req, res) => {
        const region = req.param('region');
        const start = req.param('start');
        const end = req.param('end');
    }),
    app.post('/api/players/search', (req, res) => {
        const {player, region} = req.body;
        playerService.searchPlayerId(player, region)
            .then((player_id) => {
                res.json(player_id);
            }).catch((err) => {
                res.status(403).json(err);
        });

    }),
    app.post('/api/players/searchDetail', (req, res) => {
        const {player, region} = req.body;
        console.log("Route for player detail got to.");
        playerService.searchPlayerDetail(player, region)
            .then(data => {
                res.json(data);
            }).catch(err => {
            res.status(404).json(err);

        });

    })
}
