var z = "global";
function outerFn() {
	var z = "local";
	function innerFn() {
		console.log(z);
	}
	innerFn();
}
outerFn(); 	// local 출력

/**
 * 클로져의 가장 핵심적인 개념은 어휘적인(Lexical) 유효 범위다. 
 * 함수가 실행될 때는 함수가 실행되는 위치가 아닌, 
 * 함수가 정의 될 당시의 유효범위에서 실행된다.
 */

function outerFn(outerText) {
	var innerText = "first " + outerText;
	return function() {return innerText;};
}

var execution = outerFn("second");
var result = execution();

console.log(result);	// first second 출력