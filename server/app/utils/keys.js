const fs = require('fs');
const key = fs.readFileSync('./app/utils/ca/private.key', 'utf-8');
module.exports = key;