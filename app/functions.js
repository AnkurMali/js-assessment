if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(undefined,arr);
    },

    speak : function(fn, obj) {
       return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(arguement){
            return str + ', ' + arguement ;

        };

    },

    makeClosures : function(arr, fn) {

        /*var count = [];

      var newfunction = function(val) {
        return function() { return fn(val); };
      };

      for (var i = 0, i< arr.length;i++) {
        count.push(newfunction(arr[i]));
      }

      return count;*/
  
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
