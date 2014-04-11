var nums = [1, 2, 3, 4, 5];

function doubleAll(array) {
	return _.map(array, function(n) { 
		return n * 2; 
	});
}

var result = doubleAll(nums);

console.log(result);	// [2, 4, 6, 8, 10] 

function average(array) {
	var sum = _.reduce(array, function(a, b, seq) { 
		console.log("a : " + a + " , b : " + b + " , seq : " + seq);
		return a + b; 
	});
	return sum / _.size(array);
}

var result2 = average(nums);

console.log(result2);	// 3 

/* nums에서 짝수만 선택 */
function onlyEven(array) {
	return _.filter(array, function(n) {
		return (n % 2) === 0;
	});
}

var result3 = onlyEven(nums);

console.log(result3);	// [2, 4] 
