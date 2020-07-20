const express = require('express');

const app = express();

//you still have to link the stylesheet in the html
app.use(express.static('public'));
app.use(express.static('images'));

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/missions', (request, response) => {
  response.sendFile(__dirname + '/views/missions.html');
});

app.get('*', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(3001);
