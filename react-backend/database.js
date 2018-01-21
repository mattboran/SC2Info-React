const pgp = require('pg-promise')(/*options*/);
const connectionString = process.env.DATABASE_URL ||
  "postgres://dbuser:dbuserparola@localhost:5434/sc2infodb";
console.log("DB conn string:", connectionString);
const db = pgp(connectionString);

module.exports = db;
