var filter = require('./filter.js');
var dir_path = process.argv[2];
var ext = process.argv[3];

filter(dir_path, ext, function (error, files) {

	if (error)
		return console.error('There is an error! -->', error)

	files.forEach(function (file) {
		console.log(file)
	})

})
