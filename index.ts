import express from "express";
import CONFIG_SERVICE from "./services/config-service";
import DataGenerationService from "./services/data-generation-servive";
import FAKER_SERVICE from "./services/faker-service";
import fakeType from "./api/fake-type";
import languageAndType from "./api/fake-lang-type";

const app = express();
// app.use(express.json({ extended: false }));
const { PORT } = CONFIG_SERVICE;
const DATA_KEYS = Object.keys(FAKER_SERVICE.dataGenerationFunctions);

app.get("/", (req, res) => {
  console.warn("Req ", req);
  const data = DataGenerationService.fakerKeyToValueMapper();
  res.send({ data });
});

app.get("/available-types", (req, res) => res.send(DATA_KEYS));

// Language and Type
app.get("/data/:type", fakeType);

// Language and Type
app.get("/data/:type/:locale", languageAndType);

app.listen(PORT, () => console.log(`App listening at PORT ${PORT}`));

export default app;
