const http = require('http');

console.log('its working...!')

function intServer(req, res) {
    // process.exit();
    console.log('req.url');
    console.log(req.url);
    console.log('req.method');
    console.log(req.method);
    console.log('req.headers');
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>This is simple testing is this server return some data.</h1>')
    res.end();
}

const server = http.createServer(intServer);

server.listen(1500)