var myModule = require('./my-module.js');

myModule(process.argv[2], process.argv[3], function(err, files) {
	if (err)
		return callback (err);
	for (i=0; i < files.length; i++) {
	console.log(files[i]);
};
});


