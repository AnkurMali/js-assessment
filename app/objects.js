if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
     return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {

    	 var ownProperties = [];
         for (var prop in obj) {
    
            if (obj.hasOwnProperty(prop)) {
              ownProperties.push(prop + ': ' + obj[prop]);
             }        
          }
  return ownProperties;

    }
  };
});
