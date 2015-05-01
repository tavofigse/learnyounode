var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
	for (var j=0; j<3;j++)
		console.log(results[j])
}

for (var i=2; i < process.argv.length; i++) {
	http.get(process.argv[i], function (response) {
		response.setEncoding('utf8');
		response.pipe(bl(function (err, data) {
			
			if (err)
				return console.log(err)
			
			results[count] = data.toString('utf8');
			count++

			if ( count == 3 )
				printResults()

		}))
	});
};