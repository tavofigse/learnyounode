var fs = require('fs');
var file_path = process.argv[2]

fs.readFile(file_path, function (error, data){
	if (error) throw error;
	var lines = data.toString().split('\n').length - 1;
	console.log(lines)
});

