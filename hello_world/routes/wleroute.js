const express = require('express');
const wlerouter = express.Router();
const app = express();


handle = function  (req, res, next) {
    console.log('inside wle handle' + req.originalUrl);
    next();
}

wlerouter.get('/', handle, (req, res) => {
    console.log('inside wle route');
    res.send('wle route');
}); 

module.exports = wlerouter;