var fs = require('fs');
var path = require('path');

module.exports = function (dir_path, ext, callback) {

	fs.readdir(dir_path, function (error, files){
		if (error)
			return callback(error)

		files = files.filter(function (file){
			return path.extname(file) == '.' + ext
		});

		callback(null, files)
	});

}