const express = require('express');
const app = express();
const jdarouter = require('./routes/jdaroute.js');
const wlerouter = require('./routes/wleroute.js');

console.log('Entered index file');

app.use('/jda', jdarouter);
console.log('routed /jda to jdarouter');
app.use('/wle', wlerouter);
console.log('routed /wle to wlerouter');


// cache.on('message', function (message) {
//     console.log('Message logged by cache::' + message);
//   });

// var bpc = function byPassCaching(req, res, next) {
//     const URLs = '/abbc';
//     if(URLs == req.originalUrl) {
//         console.log('URL matchiing... so ignore caching');
//         res.use_express_redis_cache = false;
//     }
//     next();
// }

// app.get("/:component/*", bpc, cache.route(), (req,res)=> {
//     const apiUrl = req.originalUrl;
//     console.log('Inside router-'+ apiUrl);
//     res.send('Testing API cahching');
// });

app.listen(3000);