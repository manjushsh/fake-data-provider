import express from "express";
import DataGenerationService from "../services/data-generation-servive";
import FAKER_SERVICE from "../services/faker-service";
import Locale from "../locale-options.json";
const router = express.Router();
const DATA_KEYS = Object.keys(FAKER_SERVICE.dataGenerationFunctions);

router.get("/api/:type", (req, res) => {
    const parameter = req?.params?.type;
    if (DATA_KEYS.includes(parameter)) {
      const data = DataGenerationService.fakerKeyToValueMapper("en", parameter);
      res.send({ data });
    } else if (Locale.locale.includes(parameter)) {
      const data = DataGenerationService.fakerKeyToValueMapper(parameter);
      res.send({ data });
    } else {
      const data = DataGenerationService.fakerKeyToValueMapper();
      res.send({ data });
    }
  });

export default router;
