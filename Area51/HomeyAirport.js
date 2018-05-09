const express = require('express')
    , bodyParser = require('body-parser')
    , dotenv = require('dotenv').config()
    , control = require('./GroomLake')

    const app = new express()

    app.use(bodyParser.json())

    app.get('/api/getComp', control.getComp)
    app.get('/sorting', control.sortOutcomes)
    app.get('/asses', control.getAss)


    const SERVER_PORT = process.env.SERVER_PORT

    app.listen(SERVER_PORT, _ => {
        console.log(`and the two of us are more alone there then I would ever be by myself ${SERVER_PORT}`)
    })