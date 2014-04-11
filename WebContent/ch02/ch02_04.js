var a = {name: "a", fun:function(){return this;}};

console.log(a.fun());


var bFunc = function() {return this;};
var b = {name:"b", fun:bFunc};

console.log(b.fun()['name']);