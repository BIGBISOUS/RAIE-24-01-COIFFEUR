var models  = require('../models');
var express = require('express');
var router  = express.Router();

module.exports = (express) => {
    // http:get /rdv
    router.get('/', (req, res) => {
    models.db.Rdv.findAll({ raw: true }).then(rdv => {
        res.send(
            JSON.stringify(rdv)
        );
    });
});

    return router
}