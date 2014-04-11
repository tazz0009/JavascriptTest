function Person(firstName, lastName) {
	
	this.constructor.population++;
	
    // **********************************************************************
    // PRIVATE VARIABLES AND FUNCTIONS
    // 'PRIVELEGED METHODS'만 읽기/쓰기/수정 가능
    // **********************************************************************	
	var alive = true;
	
	function getFullName() {
		return lastName + ", " + firstName;
	}
	
	this.toString = function() {
		return getFullName();
	};
	
	this.isAlive = function() {
		return alive;
	};

    // **********************************************************************
    // PUBLIC PROPERTIES -- 누구나 읽기/쓰기 가능
    // **********************************************************************
	this.age =1;
	
};

Person.prototype.addAge = function() {
	this.age++;
};

//*************************************************************************
//STATIC PROPERTIES -- 누구나 읽기/쓰기 가능
//*************************************************************************
Person.population = 0;

//*************************************************************************
//STATIC METHODS -- 누구나 읽기/쓰기 가능
//*************************************************************************
Person.showTotalPopulation = function(msg) {
	console.log(msg + " : " + Person.population);
};