function cat() {
	var head = _.first(arguments);
	if (existy(head))
		return head.concat.apply(head, _.rest(arguments));
	else
		return [];
}

function existy(x) { return x != null; };

function truthy(x) { return (x !== false) && existy(x); };

var result = cat([1, 2, 3], [4, 5], [6, 7, 8]);

console.log(result);	// [1, 2, 3, 4, 5, 6, 7, 8] 


function construct(head, tail) {
	return cat([head], _.toArray(tail));
}

var result2 = construct(42, [1, 2, 3]);

console.log(result2);	// [42, 1, 2, 3] 