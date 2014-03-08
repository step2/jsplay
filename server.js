var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");

		if (route != undefined) {
			route(pathname);
		} else {
			console.log("router not defined");
		}

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("server has started");

}

exports.start = start;