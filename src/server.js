
const serverless = require("serverless-http");
const { dbCom } = require("./src/config/dbCom");
const router = require("./routes/routes");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

dbCom().then((res) =>
  app.listen(8888, () => {
    console.log("escuchando por el puerto 3000");
  })
);

module.exports = app;


