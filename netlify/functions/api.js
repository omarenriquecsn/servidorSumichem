const path = require('path'); // Módulo para resolver rutas
const serverless = require('serverless-http');
const { dbCom } = require(path.resolve(__dirname, '../src/config/dbCom'));
const app = require(path.resolve(__dirname, '../src/server'));

dbCom().then(() => app.listen(8888, () => {
  console.log("escuchando por el puerto 8888");
}));

module.exports.handler = serverless(app);
