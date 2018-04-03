const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const port = 4242;

const expressServer = express();

expressServer.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});

expressServer.get('/automatic', (req, res) => {
    res.sendFile('automatic.html', { root: __dirname })
});

expressServer.get('/manual', (req, res) => {
    res.sendFile('manual.html', { root: __dirname })
});

expressServer.get('/success', (req, res) => {
    res.sendFile('success.html', { root: __dirname })
});

expressServer.post('/payment/successful', (req, res) => {
    console.log(res);
    res.redirect('http://localhost:4242/success');      // after success redirect to success page
});

expressServer.use(bodyParser.json());       // to support JSON-encoded bodies
expressServer.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

http.Server(expressServer).listen(port, () => {
    console.log('listening on port : ' + port);
});