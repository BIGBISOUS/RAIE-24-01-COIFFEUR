var models  = require('../models');
var express = require('express');
var router  = express.Router();

module.exports = (express) => {
    // http:get /salon
    router.get('/', (req, res) => {
    models.db.Salon.findAll({ raw: true }).then(salon => {
        res.send(
            JSON.stringify(salon)
        );
    });
});

// http:post /salons
router.post('/', (req, res) => {
    models.db.Salon.create({
        nomSalon: req.body.nomSalon,
        adresseSalon: req.body.adresseSalon,
        nomCoiffeur: req.body.nomCoiffeur,
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});

// http:get /salon/id
router.get('/:id', (req, res) => {
    models.db.Salon.findOne({
        where: { idSalon: req.params.id }
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});

// http:delete /salon/id
router.delete('/:id', (req, res) => {
    models.db.Salon.destroy({
        where: { idSalon: req.params.id }
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch((err) => {
        res.status(400).send(JSON.stringify(err))
    });
});

// http:update /salon/{id}
router.put('/:id', (req, res) => {
    models.db.Salon.update({
        nomSalon: req.body.nomSalon,
        adresseSalon: req.body.adresseSalon,
        nomCoiffeur: req.body.nomCoiffeur
    }, {
        where: { idSalon: req.params.id }
    }).then(t => {  
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});
    return router
}
