const { Router } = require("express");
const {
  controllerGlobalcaGet,
  controllerGlobalcaPost,
  controllerWmsGet,
  controllerWmsPost,
  controllerDespachosGet,
controllerDespachosPost,
controllerClientesGet,
controllerClientesPost
} = require("../controller/globalController");

const router = Router();

router.get("/Globalca", controllerGlobalcaGet);
router.get("/WMS", controllerWmsGet);
router.get("/Despachos", controllerDespachosGet);
router.get("/Clientes", controllerClientesGet);

router.post("/Globalca", controllerGlobalcaPost);
router.post("/WMS", controllerWmsPost);
router.post("/Despachos",controllerDespachosPost);
router.post("/Clientes", controllerClientesPost);

module.exports = router;
