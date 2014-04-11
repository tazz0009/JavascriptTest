Array.prototype.each = function(callback) {
	for ( var i = 0; i < this.length; i++) {
		callback.prototype = this[i];
		new callback(i);
	}
};