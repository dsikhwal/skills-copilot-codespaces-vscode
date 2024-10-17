// Create Web Server
// 1. Create an express application
// 2. Create a route for GET /comments
// 3. Respond with an array of comments
// 4. Listen on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    { username: 'Todd', comment: 'lololol' },
    { username: 'Skyler', comment: 'lmao' },
    { username: 'Sk8erBoi', comment: 'rofl' },
    { username: 'Ada', comment: 'hahaha' }
  ]);
});

app.listen(3000);
