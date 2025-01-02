const mongoose = require("mongoose")

const Schema = mongoose.Schema

const schemaGlobalca = new Schema({
    id: Number,
  producto: String,
  cantidadDisponible: Number,
  cantidadApartada: Number,
  lote: String,
  fechaIn: String,
  fechaVen: String,
  almacen: String,
}) 

const Globalca = mongoose.model("Globalca", schemaGlobalca)

const schemaWMS = new Schema({
    id: Number,
  producto: String,
  cantidadDisponible: Number,
  cantidadApartada: Number,
  lote: String,
  fechaIn: String,
  fechaVen: String,
  almacen: String,
})

const WMS = mongoose.model("WMS", schemaWMS)

const schemaDespachos = new Schema({
    id: Number,
    name: String,
    producto: String,
    cantidad: Number,
    date: String,
    status: String
})

const Despachos = mongoose.model("Despachos", schemaWMS)

const schemaClientes = new Schema({
    id: Number,
    name: String,
    rif: Number,
})

const Clientes = mongoose.model("Clientes", schemaClientes)

module.exports = {
    Globalca, WMS, Despachos, Clientes
}