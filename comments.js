// Create Web Server
const express = require('express');
const app = express();

// Create Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create Comment Array
const comments = [
    { username: 'alice', comment: 'I love you' },
    { username: 'bob', comment: 'I hate you' }
];

// Get Comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Post Comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Successfully added comment');
});

// Listen Web Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});