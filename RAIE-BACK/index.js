const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database/database')

//Routes import
const rdv = require('./routes/rdv')(express, database)

app.get('/', (res) => {
    res.send('Hello la vie')
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

app.use('/rdv', rdv)

app.listen(3000, () => {
    console.log('Listening on port 3000 !')
})
