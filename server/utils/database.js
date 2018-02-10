const pgp = require('pg-promise')(/*options*/);
const connectionString = process.env.DATABASE_URL ||
  "postgres://dbuser:dbuserparola@localhost:5434/sc2infodb";
const db = pgp(connectionString);

const users = {
  id: 'id',
  username: 'username',
  password: 'password',
  email: 'email',
  battlenetid: 'battlenetid',
  avatarlink: 'avatarlink',
  register_date: 'register_date'
}

module.exports = {
  db: db,
  users: users,
  connectionString: connectionString,
}
