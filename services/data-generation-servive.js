import FAKER_SERVICE from "./faker-service";

const DataGenerationService = {
    fakerKeyToValueMapper: (locale = "en", key) => {
        const maps = {};
        Object.keys(FAKER_SERVICE.dataGenerationFunctions).forEach((keyPair) => maps[keyPair] = FAKER_SERVICE.dataGenerationFunctions[keyPair](locale));
        return key ? maps[key] : maps;
    },
};

export default DataGenerationService;