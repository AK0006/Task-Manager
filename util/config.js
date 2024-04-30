const jwt = require('jsonwebtoken');
const secret = require('./secret');

function createToken(user) {
    return jwt.sign(user, secret, {
        algorithm: 'HS256',
        expiresIn: '7d'
    });
}

module.exports = createToken;