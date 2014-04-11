/**
 * Library 모듈화를 위한 코딩기법1
 */
(function() {
	'user strict';
	var root = this;
	var version = '1.0';
	var Module1;
	if (typeof exports !== 'undefined') {
		Module1 = exports;
	} else {
		Module1 = root.Module1 = {};
	}
	Module1.getVersion = function() {
		return version;
	};
}).call(this);

test("Module 1 test", function(){
	equal(Module1.getVersion(), '1.0', "Passed!");
});

/**
 * Library 모듈화를 위한 코딩기법2
 * 글로벌 객체를 파라미터로 전달
 */
(function(global) {
	var root = global;
	var version = '1.0';
	var Module2;
	if (typeof exports !== 'undefined') {
		Module2 = exports;
	} else {
		Module2 = root.Module2 = {};
	}
	Module2.getVersion = function() {
		return version;
	};
}(this));

test("Module 2 test", function(){
	equal(Module2.getVersion(), '1.0', "Passed!");
});

