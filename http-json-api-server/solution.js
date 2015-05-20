var http = require('http');
var url = require('url');
var strftime = require('strftime');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
};

function unixtime (time) {
  return { unixtime : time.getTime() }
};

var server = http.createServer(function (request, response){
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var request_info = url.parse(request.url, true);
	var data = new Date(request_info.query.iso)
	var result;

	if (request_info.pathname == '/api/parsetime') {
		result = parsetime(data)
		response.end(JSON.stringify(result))
	};

	if (request_info.pathname == '/api/unixtime') {
		result = unixtime(data)
		response.end(JSON.stringify(result))
	}
});
server.listen(Number(process.argv[2]))