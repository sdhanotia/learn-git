const redis = require('redis');
const redisClient = redis.createClient();
const initCachableURLs = require('../utility/processfile.js');

initCachableURLs('../resources/url.txt');

function getUrlList (cacheKey) {
    if(cacheKey) {
        return urlList = redisClient.smembers(cacheKey);
    }else {
        return urlList = redisClient.smembers('URLsToCache');
    }
}

function byPassCaching(req, res, next) {

    const URLs = getUrlList();

    if(URLs == req.originalUrl) {
        console.log('URL matchiing... so caching');
        res.use_express_redis_cache = false;
    }
    next();
}
//export byPass function to use in index.js
module.exports = cachecontrol;