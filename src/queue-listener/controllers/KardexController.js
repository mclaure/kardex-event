'use strict';

const http = require('http');
const logger = require('../logger/logger');

module.exports.addItem = (itemInfo) => {
  const urlPath = '/kardex/item/add';
  const data = JSON.stringify({
	                              idProducto : itemInfo.idProducto,
	                              cantidad : itemInfo.cantidad,
	                              precio : itemInfo.precio
                              });

  const options = {
    hostname: 'localhost',
    port: 9000,
    path: urlPath,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }    
  };

  const req = http.request(options, (res) => {
    logger.info('[/kardex/item/add] statusCode: ' + res.statusCode);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
  });

  req.on('error', (error) => {
    logger.info('[/kardex/item/add] ' + error);
  })

  req.write(data);
  req.end();
};

module.exports.updateItem = (itemInfo) => {
  const urlPath = '/kardex/' + itemInfo.timestamp + '/update';
  const data = JSON.stringify({
	                              idProducto : itemInfo.idProducto,
	                              cantidad : itemInfo.cantidad,
	                              precio : itemInfo.precio
                              });

  const options = {
    hostname: 'localhost',
    port: 9000,
    path: urlPath,
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }    
  };

  const req = http.request(options, (res) => {
    logger.info('[/kardex/{timestamp}/update] statusCode: ' + res.statusCode);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
  });

  req.on('error', (error) => {
    logger.info('[/kardex/{timestamp}/update] ' + error);
  });

  req.write(data);
  req.end();
};