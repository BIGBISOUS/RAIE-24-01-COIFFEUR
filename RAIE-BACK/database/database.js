// const mysql = require('mysql2');
const Sequelize = require('sequelize')
const config = require('../config/config.json')

const connection = new Sequelize(config.development)
// Test la connection
connection.authenticate().then(() => {
    console.log('Connection has been established successfully.')
})
// pas de gestion d'erreur pour qu'elle interompent le script

// instanci le model avec les clees etrangere
// const model = require('./init_model')(Sequelize, connection);

module.exports = { Sequelize, connection }
