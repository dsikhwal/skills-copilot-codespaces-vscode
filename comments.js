// Create Web Server
// 1. Import express
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Define a port number
const port = 3000;

// 4. Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 5. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// 6. Run the server
// node comments.js
// Output: Server is running on http://localhost:3000

// 7. Test the server
// Open the browser and go to http://localhost:3000
// Output: Hello World

// 8. Stop the server
// Ctrl + C

// 9. Create a new route
app.get('/api/comments', (req, res) => {
    res.send('Comments');
});

// 10. Run the server
// node comments.js
// Output: Server is running on http://localhost:3000

// 11. Test the server
// Open the browser and go to http://localhost:3000/api/comments
// Output: Comments

// 12. Stop the server
// Ctrl + C

// 13. Create a new route with a parameter
app.get('/api/comments/:id', (req, res) => {
    res.send(`Comment ID: ${req.params.id}`);
});

// 14. Run the server
// node comments.js
// Output: Server is running on http://localhost:3000

// 15. Test the server
// Open the browser and go to http://localhost:3000/api/comments/123
// Output: Comment ID: 123

// 16. Stop the server
// Ctrl + C

// 17. Create a new route with multiple parameters
app.get('/api/comments/:id/:name', (req, res) => {
    res.send(`Comment ID: ${req.params.id}, Name: ${req.params.name}`);
});

// 18. Run the server
// node comments.js
// Output: Server is running on http://localhost:3000

// 19. Test the server
// Open the browser and go to http://localhost:3000/api/comments/123/john
// Output: Comment ID: 123, Name: john