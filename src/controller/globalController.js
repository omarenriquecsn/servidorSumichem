const {
  globalca,
  globalcaPost,
  wms,
  wmsPost,
  despachos,
  despachosPost,
  clientes,
  clientesPost

} = require("../services/services");

const controllerGlobalcaGet = async (req, res) => {
  const global = await globalca();
  await res.json(global);
};

const controllerGlobalcaPost = async (req, res) => {
  const global = await req.body;
  await globalcaPost(global);
  controllerGlobalcaGet(req, res);
};

const controllerWmsGet = async (req, res) => {
  const Wms = await wms();
  await res.json(Wms);
};

const controllerWmsPost = async (req, res) => {
  const Wms = await req.body;
  await wmsPost(Wms);
  controllerWmsGet(req, res);
};


const controllerDespachosGet = async (req, res) => {
    const despacho = await despachos();
    await res.json(despacho);
  };
  
  const controllerDespachosPost = async (req, res) => {
    const despacho = await req.body;
    await despachosPost(despacho);
    controllerDespachosGet(req, res);
  };

  const controllerClientesGet = async (req, res) => {
    const client = await clientes();
    await res.json(client);
  };
  
  const controllerClientesPost = async (req, res) => {
    const client = await req.body;
    await clientesPost(client);
    controllerClientesGet(req, res);
  };

module.exports = {
  controllerGlobalcaGet,
  controllerGlobalcaPost,
  controllerWmsGet,
  controllerWmsPost,
  controllerDespachosGet,
controllerDespachosPost,
controllerClientesGet,
controllerClientesPost
};
