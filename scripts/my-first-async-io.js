var fs = require('fs');
var file;

function logLines(callback) {
	fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
		file = fileContents;
		callback();
})
};

function countLines () {
	var stringArray = file.split(['\n']);
	console.log(stringArray.length - 1);
};

logLines(countLines);