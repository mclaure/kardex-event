'use strict';  
var Faker = require('faker');

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

function randomFloat(min, max, decimalPlaces) {  
  var rand = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);
  var power = Math.pow(10, decimalPlaces);
  return Math.floor(rand*power) / power;
}

function appendLeadingZeroes(number){
  var value = "";
  if(number <= 9)
  {
    value = "0" + number.toString();
  }
  else
  {
    value = number.toString();
  }

  return value;
}

function randomTimeStamp(start, end) {  
  var startDate = new Date(start);
  var endDate = new Date(end);  
  var randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  let formatted_date = randomDate.getFullYear() 
                     + appendLeadingZeroes(randomDate.getMonth() + 1)
                     + appendLeadingZeroes(randomDate.getDate()) 
                     + appendLeadingZeroes(randomDate.getUTCHours()) 
                     + appendLeadingZeroes(randomDate.getMinutes()) 
                     + appendLeadingZeroes(randomDate.getSeconds())  
  return formatted_date;
}


module.exports = {
 generateRandomPayload : function(userContext, events, done) {
    var payload = {
       "idProducto": 0,
       "cantidad": 0,
       "precio": 0.0                      
    };
        
    payload.idProducto =  randomInt(1, 10);  
    payload.cantidad =  randomInt(1, 500);  
    payload.precio =  randomFloat(1.0, 10.0, 2); 
    userContext.vars.payload = payload;
    userContext.vars.timestamp = randomTimeStamp('2020-03-17 22:45:10', '2020-03-19 21:48:53');    
    return done();
  }
};