var Parent = function() {
	this.print = function() {
		console.log("My name is " + this.getName());
	};
};

var Children = function(name) {
	this.name = name;
	
	this.getName = function() {
		return this.name;
	};
};

Children.prototype = new Parent;

var children = new Children("tazz009");
children.print();
