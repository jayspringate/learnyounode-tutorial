var fs = require('fs');

function logLines(callback) {
	var file = fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
		callback();
})
};

function countLines () {
	var stringArray = file.split(['\n']);
	console.log(stringArray.length - 1);
};

logLines(countLines);