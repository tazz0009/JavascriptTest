var result = _.find(['a', 'b', 3, 'd', 4], _.isNumber);

console.log(result);	// 3 


var result2 = _.filter([1, 2, 3, 4, 5, 6], function(num) {return num % 2 == 0;});

console.log(result2);	// [2, 4, 6] 


var result3 = _.reject(['a', 'b', 3, 'd', 4], _.isNumber);

console.log(result3); 	// ["a", "b", "d"] 


function complement(pred) {
	return function() {
		console.log(_.toArray(arguments));
		return !pred.apply(null, _.toArray(arguments));
	};
}

var result4 = _.filter(['a', 'b', 3, 'd', 4], complement(_.isNumber));

console.log(result4);


var result5 = _.all([1, 2, 3], _.isNumber);

console.log(result5);


var result6 = _.any([1, 2, 'c', 4, 'd'], _.isString);

console.log(result6);






