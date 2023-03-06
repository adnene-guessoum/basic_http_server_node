const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer( function (req, res) {

	let filename = '';

	switch (req.url) {

		case '/':
			filename = './index.html';
			fs.readFile(filename, function(err, data) {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.write(data);
				return res.end();
			});
			break;

		case '/about':
			filename = './about.html';
			fs.readFile(filename, function(err, data) {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.write(data);
				return res.end();
			});
			break;

		case '/contact-me':
			filename = './contact-me.html';
			fs.readFile(filename, function(err, data) {
				res.writeHead(200, {'Content-Type':'text/html'});
				res.write(data);
				return res.end();
			});
			break;

		default:
			filename = './404.html';
			fs.readFile(filename, function(err, data) {
				res.writeHead(404, {'Content-Type':'text/html'});
				res.write(data);
				return res.end();
			});
	}
}).listen(8080, () => {
	console.log('Listening on http://localhost:8080')
});

