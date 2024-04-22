//require http module
let http = require("http");

// Create server
http.createServer(function (req, res) {

	// Send the HTTP header
	res.writeHead(200, { 'Content-Type': 'text/plain' });

	// Send the response body 
	res.end('<h1>This is the example of node.js web-based application <h1/>');

	// Console will display the message
}).listen(5000,
	() => console.log('Server running at http://127.0.0.1:5000/'));