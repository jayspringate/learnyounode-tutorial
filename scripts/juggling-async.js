var http = require('http');

var request = http.get(process.argv[2], function callback (response) {
	var pageStringOne = '';
	response.setEncoding('utf8');
	response.on('data', function (data) {
		pageStringOne += data;
	});
	response.on('end', function () {
		var requestTwo = http.get(process.argv[3], function callback (response) {
			var pageStringTwo = '';
			response.setEncoding('utf8');
			response.on('data', function (data) {
				pageStringTwo += data;
			});
			response.on('end', function () {
				var requestThree = http.get(process.argv[4], function callback (response) {
					var pageStringThree = '';
					response.setEncoding('utf8');
					response.on('data', function (data) {
						pageStringThree += data;
					});
					response.on('end', function () {
						console.log(pageStringOne);
						console.log(pageStringTwo);
						console.log(pageStringThree);
				});
			});
		});
});
	});
});