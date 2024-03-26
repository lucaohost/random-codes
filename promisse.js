function first() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			console.log('A');
			resolve();
		}, 5000);
	});
}

function second(){
	console.log('B');
}

first().then(second);