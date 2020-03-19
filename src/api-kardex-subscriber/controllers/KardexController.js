'use strict';

const http = require('http');
const logger = require('../logger/logger');
const rmq = require("./RabbitMQController");
const wrapper = require("./WrapperController");

exports.kardex_precio_ponderado = (req, res, next) => {

  let productId = req.query.id;
  wrapper.kardex_precio_ponderado(res, productId);
};

exports.kardex_add_item = (req, res, next) => {
         
let idProducto = req.body.idProducto;
let cantidad = req.body.cantidad;
let precio = req.body.precio;
var message = JSON.stringify({ operation: "add"
                              ,idProducto: idProducto
                              ,cantidad: cantidad
                              ,precio: precio});
rmq.sendMessage(message);
res.status(200).json( { addItem: "queued" });
};

exports.kardex_update = (req, res, next) => {         

let timestamp = req.params.timestamp;
let idProducto = req.body.idProducto;
let cantidad = req.body.cantidad;
let precio = req.body.precio;
var message = JSON.stringify({ operation: "update"
                              ,timestamp:timestamp
                              ,idProducto: idProducto
                              ,cantidad: cantidad
                              ,precio: precio});
rmq.sendMessage(message);
res.status(200).json( { updateItem: "queued" });
};