var nums = [100, 2, 25];

function div(x, y) {
	return x / y;
}

var result = _.reduce(nums, div);

console.log(result);	// 2

var result2 = _.reduceRight(nums, div);

console.log(result2);	// 0.125 

function allOf() {
	return _.reduceRight(arguments, function(truth, f, seq) {
		console.log("truth : " + truth + " , f : " + f + " , seq : " + seq);
		return truth && f();
	}, true);
}

function anyOf() {
	return _.reduceRight(arguments, function(truth, f, seq) {
		console.log("truth : " + truth + " , f : " + f + " , seq : " + seq);
		return truth || f();
	}, false);
} 

function T() {return true;}
function F() {return false;}


var result3 = allOf(T, T);

console.log(result3);

var result4 = anyOf(F, F, T);

console.log(result4);