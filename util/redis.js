const redis_client = require('redis');

const client = redis_client.createClient();
// console.log(client);
client.on('error',err => console.log('Redis Client Eroor', err));

client.connect();

module.exports = client;