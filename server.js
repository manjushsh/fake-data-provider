// import ConfigService from "./config-service";
// import FAKER_SERVICE from "./services/faker-service";
const express = require('express');
const ConfigService = require('./config-service');
const FAKER_SERVICE = require('./services/faker-service');

const app = express();
const { PORT } = ConfigService;

app.get('/', (req, res) => {
    res.end('Success! You are in /');
});

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
    console.warn(FAKER_SERVICE.fakerKeyToValueMapper());
});
