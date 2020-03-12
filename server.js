const http = require('http');
const fs = require('fs');

console.log('its working...!')

function intServer(req, res) {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>This is simple landing url data.</h1>');
        res.write('<form action="/method" method="POST"><input type="text" name="username"/><button type="submit">Submit</button></form>')
        return res.end();
    } else if (req.url === '/method' && req.method === 'POST') {
        const data = [];
        req.on('data', (code) => {
            data.push(code);
        });
        req.on('end', () => {
            const processData = Buffer.concat(data).toString();
            fs.writeFileSync('message.txt', processData.split('=')[1]);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>This is simple testing is this server return some data.</h1>')
    res.end();
}

const server = http.createServer(intServer);

server.listen(1500)