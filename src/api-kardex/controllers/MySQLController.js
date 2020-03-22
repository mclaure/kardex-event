'use strict';

var mysqlConn = require("../config/MySQLdatabase");
const logger = require('../logger/logger');

exports.kardex_precio_ponderado = (req, res, next) => {
        let sql = "select p.id_producto          as idProducto      \
                         ,p.nombre_producto      as Producto        \
                         ,round(avg(k.precio),2) as PrecioPonderado \
                    from kardex k                                   \
                    inner join producto p                           \
                    on (k.id_producto = p.id_producto)              \
                    where p.id_producto = ?                         \
                    group by p.id_producto                          \
                         ,p.nombre_producto;";
                   
        let params = [req.query.id];
    
        mysqlConn.query(sql, params, function (error, rows, fields) {
            if (error) throw error;
            else {
                if(rows) 
                {
                    logger.info('[/kardex/precio/producto] request succedd.');
                    return res.json(rows);
                }
                else
                {
                    logger.info('[/kardex/precio/producto] Product Not Found.');
                    return res.json({ "product" : "Not Found" });
                }
            }  
        });    
};

exports.kardex_add_item = (req, res, next) => {
    let sql = "INSERT INTO kardex(id_producto,cantidad,precio) \
               VALUES (?,?,?);";
               
    let params = [req.body.idProducto, req.body.cantidad, req.body.precio];

    mysqlConn.query(sql, params, function (error, rows, fields) {
        if (error)
        {
            logger.info('[/kardex/item/add] error: ' + error);
            return res.status(500).send(error);
        }
        else 
        {
            logger.info('[/kardex/item/add] request succedd.');
            return res.json( { itemCreated : true } );
        }
    });    
};

exports.kardex_update = (req, res, next) => {
    let sql = "UPDATE kardex       \
               SET id_producto = ? \
                  ,cantidad = ?    \
                  ,precio = ?      \
              WHERE event_timestamp = ?;";

    let params = [req.body.idProducto, req.body.cantidad, req.body.precio, req.params.timestamp];              

    mysqlConn.query(sql, params, function (error, rows, fields) {
        if (error)
        {
            logger.info('[/kardex/{timestamp}/update] error: ' + error);
            return res.status(500).send(error);
        }
        else 
        {
            logger.info('[/kardex/{timestamp}/update] request succedd.');
            return res.json( { itemUpdated : true } );
        }
    });    
};