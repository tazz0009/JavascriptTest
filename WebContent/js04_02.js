var test1 = function() {
	console.log("test1 : " + this);
};

var test2 = function() {
	console.log("test2 : " + this);
};

onload = function() {
	test1();
	test2();
	var newTest1 = new test1();
	var newTest2 = new test2();
	
	newTest1;
	newTest2;
};