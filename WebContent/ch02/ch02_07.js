var result = _.map({a:1, b:2}, _.identity);

console.log(result);	// [1, 2] 

var result2 = _.map({a:1, b:2}, function(v, k) {
	return [k, v];
});

console.log(result2);	// [['a', 1], ['b', 2]] 

var result3 = _.map({a:1, b:2}, function(v, k, coll) {
	return [k, v, _.keys(coll)];
});

console.log(result3);	// [['a', 1, ['a', 'b']], ['b', 2, ['a', 'b']]]

var result4 = _.functions($);

console.log(result4);	