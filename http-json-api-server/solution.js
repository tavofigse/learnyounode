var http = require('http');
var url = require('url');
var strftime = require('strftime');

var server = http.createServer(function (request, response){
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var request_info = url.parse(request.url);

	if (request_info.pathname == '/api/parsetime') {
		var data = strftime('%H-%M-%S',new Date(request_info.query['iso']));
		
	};

	if (request_info.pathname == '/api/unixtime') {

	}
});
server.listen(Number(process.argv[2]))