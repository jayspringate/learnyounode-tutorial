var net = require('net');
var server = net.createServer(function callback (socket) {
	var date = new Date();
	socket.end(date.getFullYear() + '-' + '0' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ":" + date.getMinutes() + '\n');
})
server.listen(process.argv[2]);