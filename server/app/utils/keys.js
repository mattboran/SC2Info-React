const fs = require('fs');
const key = fs.readFileSync('./app/utils/ca/private.key', 'utf-8');
const cert = fs.readFileSync('./app/utils/ca/localhost.crt', 'utf-8');
module.exports = {
    key,
    cert,
    authSecret: 'asdv29jas1-#B!lFI01Sv%#'
}