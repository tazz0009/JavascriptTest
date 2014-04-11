var count = 0;
var timer = setInterval(function() {
	console.log("count : " + count);
	if (count < 10) {
		count++;
	} else {
		clearInterval(timer);
	}
}, 1000);