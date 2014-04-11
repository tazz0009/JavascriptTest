function alarm(min, callback) {
	
	var isCall = false;
	setInterval(function() {
		var date = new Date();
		var nowMin = date.getMinutes();
		
		console.log("nowMin : " + nowMin + " , min : " + min);
		
		if (nowMin == min && !isCall) {
			isCall = true;
			callback(nowMin);
		}
	}, 1000);
};

onload = function() {
	alarm(58, function(min) {
		console.log("현재 Minutes는 '" + min + "' 입니다.");
	});
};