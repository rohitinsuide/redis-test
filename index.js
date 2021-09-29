
"use strict";
const redis = require("redis");
// const Promise = require("bluebird");

// Promise.promisifyAll(redis.RedisClient.prototype);
// Promise.promisifyAll(redis.Multi.prototype);

const client = redis.createClient({
    host: '172.20.105.5',
    port: 6379,
});

client.on("error", function (err) {
    console.log("Error " + err);
});
client.on("connect", function (connect) {
    console.log("Redis connected " );
});



client.set("string key", "string val", redis.print);