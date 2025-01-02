const { Globalca, WMS, Despachos, Clientes } = require("../models/models");

async function globalca() {
  const dbGlobalca = await Globalca.find();
  return dbGlobalca;
}

async function globalcaPost(producto) {
  const dbGlobalca = await Globalca.create(producto);
}

async function wms() {
    const dbWms = await WMS.find();
    return dbWms;
  }
  
  async function wmsPost(producto) {
    const dbWMS = await WMS.create(producto);
  }

  async function despachos() {
    const dbDespachos = await Despachos.find();
    return dbDespachos;
  }
  
  async function despachosPost(despa) {
    const dbDespachos = await Despachos.create(despa);
  }

  async function clientes() {
    const dbClientes = await Clientes.find();
    return dbClientes;
  }
  
  async function clientesPost(customer) {
    const dbClientes = await Clientes.create(customer);
  }


  

module.exports = {
  globalca,
  globalcaPost,
  wms,
  wmsPost,
  despachos,
despachosPost,
clientes,
clientesPost


};
