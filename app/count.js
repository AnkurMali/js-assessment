if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
     var interval;
       function count1(){
       	console.log(start++);

       	if (start <=end){
       		interval = setTimeout(count1,100);
       	}
       }
     count1() ;   

     return {
     	cancel : function () {
     		interval && clearTimeout(interval);
     	}
     };
    }
  

  };
});