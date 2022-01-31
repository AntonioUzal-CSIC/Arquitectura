const express = require("express");
const app = express();
const port = 3000;

app.get("/data-models/json-context.jsonld", (req, res) => {
  const file = `${__dirname}/public/json-context.jsonld`;
  res.download(file);
});

app.get("/data-models/ngsi-context.jsonld", (req, res) => {
  const file = `${__dirname}/public/ngsi-context.jsonld`;
  res.download(file);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
