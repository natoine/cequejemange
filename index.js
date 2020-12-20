'use strict'

const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));//gonna be replaced by express.json() soon 

const port = process.env.PORT || 3000 ;

const mongodb = require('mongodb');
const urimongo = require("./resources/secret/databaseconfig.js").url ;

//serves static files
app.use(express.static('resources/public'));

app.post("/addfood", function(request, response){
    var eatenfood = {};
    eatenfood.name = request.body.foodname ;
    eatenfood.declarationdate = Date.now();
    mongodb.MongoClient.connect(urimongo, { useUnifiedTopology: true }, function (err, client) {
        var eatenfoodcollection = client.db("cequejemange").collection("eatenfood");
        eatenfoodcollection.insertOne(eatenfood);
        response.end();
    });
});

app.listen(port, function () {
    console.log('Serveur listening on port ' + port);
});