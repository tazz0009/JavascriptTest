function Point2D(x, y) {
	this._x = x;
	this._y = y;
}

var result = new Point2D(0, 1);

console.log(result);	// Point2D {_x: 0, _y: 1} 


function Point3D(x, y, z) {
	Point2D.call(this, x, y);
	this._z = z;
}

var result2 = new Point3D(0, 1, 2);

console.log(result2);	// Point3D {_x: 0, _y: 1, _z: 2} 