// Create Web Server
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
  const { body } = req;
  const { comment } = body;
  console.log('Comment:', comment);
  res.send('Comment posted');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
