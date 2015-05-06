var net = require('net');

// uso de strftime 'npm install strftime'
var strftime = require('strftime');

var server = net.createServer(function (socket){
	socket.end(strftime('%Y-%m-%d %H:%M', new Date()) + '\n')
});
server.listen(Number(process.argv[2]))