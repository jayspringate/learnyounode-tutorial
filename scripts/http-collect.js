var http = require('http');

var request = http.get(process.argv[2], function callback (response) {
	var pageString = '';
	response.setEncoding('utf8');
	response.on('data', function (data) {
		pageString += data;
	});
	response.on('end', function () {
	console.log(pageString.length);
	console.log(pageString);
});
	});



