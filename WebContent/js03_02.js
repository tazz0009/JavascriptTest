var Parent = function() {
	//this.print = function() {
	//	console.log("Parent, this.print");
	//};
};

var Children = function() {
	//this.print = function() {
	//	console.log("Children, this.print");
	//};
};

Object.prototype.print = function() {
	console.log("Object.prototype.print");
};

Parent.prototype.print = function() {
	console.log("Parent.prototype.print");
};

Children.prototype = new Parent;

var children = new Children();
children.print();
