const express = require('express');
const jdarouter = express.Router();
const app = express();


handle = function  (req, res, next) {
    console.log('inside jda handle' + req.originalUrl);
    next();
}

jdarouter.get('/', handle, (req, res) => {
    console.log('inside jda route');
    res.send('jda route');
}); 

module.exports = jdarouter;