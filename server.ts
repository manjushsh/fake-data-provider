import express from 'express';
import CONFIG_SERVICE from './services/config-service';
import DataGenerationService from './services/data-generation-servive';
import FAKER_SERVICE from './services/faker-service';
import Locale from './locale-options.json';

const app = express();
const { PORT } = CONFIG_SERVICE;

const DATA_KEYS = Object.keys(FAKER_SERVICE.dataGenerationFunctions);

app.get('/', (req, res) => {
    const data = DataGenerationService.fakerKeyToValueMapper();
    res.send({ data });
});

app.get('/available-types', (req, res) => res.send(DATA_KEYS));

// Language with all data - SET B
app.get('/data/:type', (req, res) => {
    const parameter = req?.params?.type;
    if (DATA_KEYS.includes(parameter)) {
        const data = DataGenerationService.fakerKeyToValueMapper("en", parameter);
        res.send({ data });
    }
    else if (Locale.locale.includes(parameter)) {
        const data = DataGenerationService.fakerKeyToValueMapper(parameter);
        res.send({ data });
    }
    else {
        const data = DataGenerationService.fakerKeyToValueMapper();
        res.send({ data });
    }
});

// Language and Type - SETA+SET B || TYPE Data SET A
app.get('/data/:type/:locale', (req, res) => {
    const type = req?.params?.type;
    const locale = req?.params?.locale;
    if (DATA_KEYS.includes(type) && Locale.locale.includes(locale)) {
        const data = DataGenerationService.fakerKeyToValueMapper(locale, type);
        res.send({ data });
    }
    else if (DATA_KEYS.includes(type)) {
        const data = DataGenerationService.fakerKeyToValueMapper("en", type);
        res.send({ data });
    }
    else if (Locale.locale.includes(locale)) {
        const data = DataGenerationService.fakerKeyToValueMapper(locale);
        res.send({ data });
    }
    else {
        res.send({ error: "No data can be generated for given type!" })
    }
});

// app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));

module.exports = app;
