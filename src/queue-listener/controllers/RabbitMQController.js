'use strict';

const amqp = require('amqplib/callback_api');
var kardex = require('./KardexController');
const logger = require('../logger/logger');

const rmqSettings = { 
                        url: 'amqp://admin:Password123@HOME',
                        exchange: "kardex-sync-data",
                        kardex: "kardex"               
                    };
                    
module.exports.startReceivingMessages = () => {
    amqp.connect(rmqSettings.url, function(rabbitmqConnectionError, connection) {
        if (rabbitmqConnectionError) throw rabbitmqConnectionError;
            connection.createChannel(function(rabbitmqChannelError, channel) {
                if (rabbitmqChannelError) throw rabbitmqChannelError;

                    //Configure exchange
                    channel.assertExchange(rmqSettings.exchange, 'direct', { durable: false });

                    channel.assertQueue('', { exclusive: true }, 
                        function(queueError, queueObj) {
                            if (queueError) throw queueError;
                                console.log(' [*]  ======= Starting waiting for messages =======');

                                //bindind the exchanges with the Queue
                                channel.bindQueue(queueObj.queue, rmqSettings.exchange, rmqSettings.kardex); 

                                //Consuming the message
                                channel.consume(queueObj.queue, function(msg) {
                                    var key = msg.fields.routingKey;
                                    var message = msg.content.toString();

                                    logger.info(' [x] ' + key + ': ' + message);
                                    
                                    var itemInfo = JSON.parse(message);

                                    if(key == rmqSettings.kardex)
                                    {
                                        //A users action happened we need to handle the action
                                        if(itemInfo.operation === 'add')
                                        {
                                            kardex.addItem(itemInfo);
                                        }
                                        else if (itemInfo.operation === 'update')
                                        {
                                            kardex.updateItem(itemInfo);
                                        }                                        
                                        else
                                        {
                                            logger.info(' [!] {api-Kardex} => operation not found');
                                        }
                                    }
                                    else 
                                    {
                                        logger.info(' [!] Message {' + key + '} was not found');
                                    }

                                }, {
                                    noAck: false
                                });
                    });
            });
   });
};