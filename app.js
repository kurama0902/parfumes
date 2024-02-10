const express = require('express');
const api = require('./routes/api')
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(cors(cors.CorsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);

module.exports = app;