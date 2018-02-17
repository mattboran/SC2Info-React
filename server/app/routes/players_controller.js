module.exports = (app) => {
    app.get('/api/players/top', (req, res) => {
        const region = req.param('region');
        const start = req.param('start');
        const end = req.param('end');
    })
}
