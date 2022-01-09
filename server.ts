import express from 'express';
import CONFIG_SERVICE from './services/config-service';
import DataGenerationService from './services/data-generation-servive';
import FAKER_SERVICE from './services/faker-service';

const app = express();
const { PORT } = CONFIG_SERVICE;

const DATA_KEYS = Object.keys(FAKER_SERVICE.dataGenerationFunctions);

app.get('/', (req, res) => {
    const data = DataGenerationService.fakerKeyToValueMapper();
    res.send({ data });
});

app.get('/available-types', (req, res) => res.send(DATA_KEYS));

app.get('/custom/:type', (req, res) => {
    const parameter = req?.params?.type;
    if (DATA_KEYS.includes(parameter)) {
        const data = DataGenerationService.fakerKeyToValueMapper(parameter);
        res.send({ data });
    }
    else{
        res.send({error: "No data can be generated for given type!"})
    }
});

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
