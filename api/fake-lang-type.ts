import express from "express";
import DataGenerationService from "../services/data-generation-servive";
import FAKER_SERVICE from "../services/faker-service";
import Locale from "../locale-options.json";
const router = express.Router();
const DATA_KEYS = Object.keys(FAKER_SERVICE.dataGenerationFunctions);

router.get("/api/:type/:locale", (req, res) => {
  const type = req?.params?.type;
  const locale = req?.params?.locale;
  if (DATA_KEYS.includes(type) && Locale.locale.includes(locale)) {
    const data = DataGenerationService.fakerKeyToValueMapper(locale, type);
    res.send({ data });
  } else if (DATA_KEYS.includes(type)) {
    const data = DataGenerationService.fakerKeyToValueMapper("en", type);
    res.send({ data });
  } else if (Locale.locale.includes(locale)) {
    const data = DataGenerationService.fakerKeyToValueMapper(locale);
    res.send({ data });
  } else {
    res.send({ error: "No data can be generated for given type!" });
  }
});

export default router;
