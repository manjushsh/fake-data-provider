import FAKER_SERVICE from "./faker-service";

const DataGenerationService = {
    fakerKeyToValueMapper: (key) => {
        const maps = {};
        Object.keys(FAKER_SERVICE.dataGenerationFunctions).forEach((keyPair) => maps[keyPair] = FAKER_SERVICE.dataGenerationFunctions[keyPair]());
        return key ? maps[key] : maps;
    },
};

export default DataGenerationService;