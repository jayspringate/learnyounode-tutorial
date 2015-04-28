var fs = require('fs');
var path = require('path');
var fileList = [];
var extList = [];

function getList(callback) {
fs.readdir(process.argv[2], function doneReading (err, list) {
	fileList = list;
	for (i=0; i < fileList.length; i++) {
		extList.push(path.extname(fileList[i]));
	};
		for (i = 0; i < extList.length; i++) {
		if (extList[i] === ("." + process.argv[3])) {
		console.log(fileList[i]);
	};
};
});
};

// function printMatches() {
// 	for (i = 0; i < extList.length; i++) {
// 		if (extList[i] === ("." + process.argv[3])) {
// 		console.log(fileList[i]);
// 	};
// };
// };

getList();




