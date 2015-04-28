var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	var parsed = url.parse(req.url, true);
	if (parsed.pathname === '/api/parsetime'){
		var dateInfo = parsed.query.iso;
		var date = new Date(dateInfo);
		var jsonDate = JSON.stringify({"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()});
	};
	if (parsed.pathname === '/api/unixtime'){
		var dateInfo = parsed.query.iso;
		var date = new Date(dateInfo);
		var jsonDate = JSON.stringify({"unixtime": date.getTime()});
	};
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(jsonDate);
});
server.listen(process.argv[2]);