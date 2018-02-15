// server.js - main server

const express     = require('express');
const db          = require('./app/utils/database');
const bodyParser  = require('body-parser');
const app         = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routes')(app, db);

app.listen(port, () => {
  console.log('Server running on ' + port);
});
