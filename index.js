const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer( function (req, res) {

	let filename = '';
	let page;

	function servePage(file, statusCode) {
		fs.readFile(filename, function(err, data) {
			res.writeHead(statusCode, {'Content-Type':'text/html'});
			res.write(data);
			return res.end();
		})
	};

	switch (req.url) {

		case '/':
			filename = './index.html';
			page = servePage(filename, 200);
			return page;
			break;

		case '/about':
			filename = './about.html';
			page = servePage(filename, 200);
			return page;
			break;

		case '/contact-me':
			filename = './contact-me.html';
			page = servePage(filename, 200);
			return page;
			break;

		default:
			filename = './404.html';
			page = servePage(filename, 404);
			return page;
	}
}).listen(8080, () => {
	console.log('Listening on http://localhost:8080')
});

