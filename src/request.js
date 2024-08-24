/* eslint-disable no-console */
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5701,
  path: '/create/Server?toCase=SNAKE&foo=123',
  method: 'GET',
};

const request = http.request(options, (res) => {
  res.setEncoding('utf8');

  res.on('data', (data) => {
    console.log('Response from server:', data);
  });

  res.on('error', (error) => {
    console.error('Error:', error);
  });
});

request.end();
