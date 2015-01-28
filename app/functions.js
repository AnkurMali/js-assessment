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

     var array = [];

      var makeFn = function(val) {
        return function() { return fn(val); };
      };

      for (var i = 0, len = arr.length; i < len; i++) {
        array.push(makeFn(arr[i]));
      }

      return array;
    },

    partial : function(fn, str1, str2) {
      return function(arg){
        return fn.apply(undefined,[str1,str2,arg]);
      };

    },

    useArguments : function() {
      sum = 0;
      for ( var i=0; i < arguments.length; i++)
      {
       sum = sum + arguments[i];
      }
    return sum;
    },

    callIt : function(fn) {
       var args; 
       args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(undefined, args);
    },

    partialUsingArguments : function(fn) {
      var args;
      args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function(){
        var argsnew;
        argsnew = args.concat(Array.prototype.slice.call(arguments));
         return fn.apply(undefined, argsnew);
      };
      
    },

    curryIt : function(fn) {

      var slice = Array.prototype.slice,
      args = slice.apply(arguments, [1]);
      return function () {
      return fn.apply(undefined, args.concat(slice.apply(arguments)));
      };
    }
  };
});
