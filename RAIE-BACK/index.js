const express = require('express');
const app = express();
const server = require("./models");
const bodyParser = require('body-parser');
const database = require('./database/database');
var routes = require('./routes/index');

//Routes import
var rdv = require('./routes/rdv')(express, database);

app.get('/', (req, res) => {
    res.send('CA COMPILE')
})
// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }))

// enable corse for all origins
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Expose-Headers', 'x-total-count')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH')
    res.header('Access-Control-Allow-Headers', 'Content-Type,authorization')

    next()
})

app.use('/', routes)
app.use('/rdv', rdv)

// build db sontext {force: true}
server.db.sequelize.sync().then(function() {
    app.listen(server.PORT, () => 
        console.log(`serveur en écoute sur ${server.PORT}`)
    );
});

