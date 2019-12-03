const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const redis = require('redis');
const cache = redis.createClient();

module.exports.initCacheableUrl = function (inputFile) {
    var instream = fs.createReadStream(inputFile);
    var outstream = new stream();

    var rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
        console.log('Line read::==>'+ line);
        var colon = line.indexOf(':');
        cache.sadd(line.substring(0, colon), line.substring(colon+1));
    });
    
    rl.on('close', function (line) {
        console.log('done reading file.');
        cache.smembers('jda', function(err, members) {
            console.log('JDA members'+ members);
        });
        cache.smembers('wle', function(err, members) {
            console.log('WLE members'+ members);
        });

    });
}

