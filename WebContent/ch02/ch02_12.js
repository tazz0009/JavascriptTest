var zombie = {name: "Bub", film: "Day of the Dead"};

var keys = _.keys(zombie);
var values = _.values(zombie);

console.log(keys);		// ["name", "film"] 
console.log(values);	// ["Bub", "Day of the Dead"] 

_.each(keys, function(v) {
	console.log(v + " , " + zombie[v]);
});


var result = _.pluck([{title:"Chthon", author:"Anthony"},
                      {title:"Grendel", author:"Gardner"},
                      {title:"After Dark"}], 'author');

console.log(result);	// ["Anthony", "Gardner", undefined] 

result = _.pluck(_.map([{title:"Chthon", author:"Anthony"},
                      {title:"Grendel", author:"Gardner"},
                      {title:"After Dark"}],
                      function(v) {return _.defaults(v, {author:"Unknown"});}), 'author');

console.log(result);	// ["Anthony", "Gardner", "Unknown"] 


var result2 = _.pairs(zombie);

console.log(result2);	// [["name", "Bub"], ["film", "Day of the Dead"]]


var result3 = _.object(_.map(_.pairs(zombie), function(pair) {
	return [pair[0].toUpperCase(), pair[1]];
}));

console.log(result3);	// {NAME: "Bub", FILM: "Day of the Dead"}


var result4 = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);

console.log(result4);	// {moe: 30, larry: 40, curly: 50} 


var result5 = _.invert(zombie);

console.log(result5);	// {Bub: "name", Day of the Dead: "film"} 


