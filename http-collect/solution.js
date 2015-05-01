var bl = require('bl')
var http = require('http');

http.get(process.argv[2], function (response){
	response.setEncoding('utf8')
	response.pipe(bl(function (err, data) {
		if (err)
			return console.log(err)
		data = data.toString('utf8')
		console.log(data.length)
		console.log(data)
	}))
});
