'use strict'

const express = require('express');
const app = express();

const port = process.env.PORT || 3000 ;

const mongodb = require('mongodb');

const urimongo = require("./resources/secret/databaseconfig.js").url ;

//serves static files
app.use(express.static('resources/public'));


app.listen(port, function () {
    console.log('Serveur listening on port ' + port);
});