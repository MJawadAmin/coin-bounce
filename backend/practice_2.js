const http = require("http"); // Import the built-in HTTP module to create a server.
const port = process.env.PORT || 3000; // Use an environment variable for the port or default to 3000.

const server = http.createServer((req, res) => { // Create a server and define a request handler.
    res.statusCode = 200; // Set the HTTP status code to 200 (OK).
    res.setHeader('Content-Type', 'text/html'); // Set the response content type to HTML.
    res.end('<h1>This is the code with me</h1> <p>Hey, this is the way to rock the world!</p>');  
    // Send an HTML response and end the response process.
});

server.listen(port, () => { // Start the server and listen on the specified port.
    console.log(`Server is listening on port ${port}`); // Log a message when the server starts successfully.
});
