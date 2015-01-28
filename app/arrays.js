if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
    for(var i=0 ; i<arr.length ; i++){
        if (arr[i] === item){
            return i;
        }
    }
    return -1;
    },

    sum : function(arr) {
       var add =  0;
       for (var i = 0; i < arr.length ; i++){
        add += arr[i];
       }
    return add;
    },

    remove : function(arr, item) {
        var remove = [];
        for ( i = 0; i<arr.length ; i++){
            if(arr[i]!=item){
                remove.push(arr[i]);
            }
        }
           return remove;
    },

    removeWithoutCopy : function(arr, item) {
          var i;
          for (i=0; i <arr.length ; i++){
            if (arr[i] === item){
                arr.splice(i,1);
                i = i - 1;
            }
          }
    return arr;
    },

    append : function(arr, item) {
     arr.push(item);
     return arr;
    },

    truncate : function(arr) {
   arr.pop();
   return arr;
    },

    prepend : function(arr, item) {
     arr.unshift(item);
     return arr;
    },

    curtail : function(arr) {
    arr.shift();
    return arr;
    },

    concat : function(arr1, arr2) {
         //var myString = arr1 + arr2;
         return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;

    },

    count : function(arr, item) {
    var count = 0;
    for ( var i=0; i<arr.length; i++){
        if ( arr[i] === item){
        count++;
    }
    }
    return count;
    },

    duplicates : function(arr) {
   var sorted_arr = arr.sort();
   var dup = [];
   var count = 0;
    var seendup = [];
    var index = 0;
   //document.write(arr.length + "previous");
   for (var i=0; i < arr.length - 1 ; i++){
    //document.write(i);
    if(sorted_arr[i] === arr[i+1]){
        
    dup.push(sorted_arr[i]);
       // document.write(dup);
    count ++;
        //document.write(count);
    }
}
   
  for(var i = 0; i < dup.length; i++) 
  {
if (seendup.indexOf(dup[i]) == -1)seendup.push(dup[i]);
  }
  //return n;
   //return count;
  //document.write(seendup);
       return seendup;
    
    },

    square : function(arr) {
         var square = [];
         for (var i=0; i < arr.length; i++){
            square.push(arr[i]*arr[i]);
         }
    return square;
    },

    findAllOccurrences : function(arr, target) {
       var count = [];
       for (var i=0; i < arr.length; i++){
       	if(arr[i] === target){
       	   count.push(i);
       	}
       	}
       
     return count;
    }

  };
});
