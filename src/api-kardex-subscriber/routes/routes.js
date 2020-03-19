'use strict';

module.exports = function(app) {

  var kardex = require('../controllers/KardexController');  
    
  //*********** KARDEX ***********
  app.route('/kardex/precio/producto')
    .get(kardex.kardex_precio_ponderado);    

  app.route('/kardex/item/add')
    .post(kardex.kardex_add_item);
 
  app.route('/kardex/:timestamp/update')
    .put(kardex.kardex_update);    

  app.route('/api-kardex-docs.json')
    .get((req, res) => {
          res.setHeader('Content-Type', 'application/json');
          res.sendFile(__dirname + '/api-kardex-docs.json');
    });          
};