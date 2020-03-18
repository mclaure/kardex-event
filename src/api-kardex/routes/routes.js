'use strict';

module.exports = function(app) {

  var mysqldb = require('../controllers/MySQLController');  
    
  //*********** KARDEX ***********
  app.route('/kardex/precio/producto')
    .get(mysqldb.kardex_precio_ponderado);    

  app.route('/kardex/item/add')
    .post(mysqldb.kardex_add_item);
 
  app.route('/kardex/:timestamp/update')
    .put(mysqldb.kardex_update);    

  app.route('/api-kardex-docs.json')
    .get((req, res) => {
          res.setHeader('Content-Type', 'application/json');
          res.sendFile(__dirname + '/api-kardex-docs.json');
    });          
};