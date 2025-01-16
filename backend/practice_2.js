const http = require("http"); // Import the HTTP module to create a server.
const fs = require('fs'); // Import the File System module to read files.

const port = process.env.PORT || 3000; // Set the port to an environment variable or default to 3000.

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html'); // Correctly set the response header for HTML content.

    console.log(req.url); // Log the requested URL to the console.

    if (req.url === '/') { 
        // If the request URL is "/", send the Home Page response.
        res.statusCode = 200;
        res.end('<h1>Home Page</h1><p>Hey, this is the Home Page!</p>');
    } else if (req.url === '/about') { 
        // If the request URL is "/about", send the About Page response.
        res.statusCode = 200;
        res.end('<h1>About Page</h1><p>Hey, this is the About Page!</p>');
    } else if (req.url === '/hello') { 
        // If the request URL is "/hello", send the contents of `index.html`.
        try {
            const data = fs.readFileSync('index.html'); // Read the file synchronously.
            res.statusCode = 200;
            res.end(data.toString()); // Send the file content as the response.
        } catch (err) {
            // Handle errors if the file is not found or unreadable.
            res.statusCode = 500;
            res.end('<h1>Internal Server Error</h1><p>Could not read the file.</p>');
        }
    } else { 
        // For all other URLs, send a 404 Not Found response.
        res.statusCode = 404;
        res.end('<h1>Not Found</h1><p>This page was not found on the server.</p>');
    }
});

// Start the server and listen on the specified port.
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`); // Log the server start message.
});
