if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
     var new1 = $.Deferred();
     setTimeout(function(){
     	new1.resolve(value);
     },10);
     	return new1.promise();
    },

    manipulateRemoteData : function(url) {
       var new2 = $.Deferred();

       $.ajax(url).then(function(response){
       	var people = $.map(response.people,function(person){
       		return person.name;
       	});
       	new2.resolve(people.sort());
       });
       return new2.promise();
    }
  };
});
