'use strict';

const http = require('http');
const logger = require('../logger/logger');

module.exports.kardex_precio_ponderado = (response, idProducto) => {
  const urlPath = '/kardex/precio/producto?id=' + idProducto;
  const options = {
    hostname: 'localhost',
    port: 9000,
    path: urlPath,
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    logger.info('[' + urlPath +'] statusCode: ' + res.statusCode);
    res.on('data', result => {
        let data = JSON.parse(result);
        response.status(200).json(data[0]); 
    });
  });
  
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
    logger.info('[/kardex/precio/producto] erro: ' + e.message);
    response.status(400).json({error: e.message}); 
  });  

  req.end();
};