module.exports = (app) => {
  app.get('/api/news', (req, res) => {
    res.json([{
      id: 1,
      title: "Title 1"
    },
    {
      id: 2,
      title: "Title 2"
    }])
  })
};
