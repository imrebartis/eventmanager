/*jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

//Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

//Set our api routes
// app.use('/api', api);

//Return other routes to Angular index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set port
const port = process.env.PORT || '3000';
app.set('port', port);

//Create the http server
const server = http.createServer(app);

server.listen(port, () => console.log('Running in localhost: ${port}'));
