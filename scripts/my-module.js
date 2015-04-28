var myModule = function (dirName, extName, callback) {
var fs = require('fs');
var path = require('path');
var extensionList = [];
var txtList = [];
var fileList = fs.readdir(dirName, function (err, files) {
	if (err) {
		return callback (err);
	};
	for (i=0; i < files.length; i++) {
		extensionList[i] = path.extname(files[i]);
		if (("." + extName) === extensionList[i]) {
			txtList.push(files[i]);
		};
	};
	callback(null, txtList);
});
};

module.exports = myModule;