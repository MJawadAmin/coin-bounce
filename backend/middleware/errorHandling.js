const { ValidationError } = require('joi');

const errorHandler = (error, req, res, next) => {
    
    let status = 500;
    let data = { message: "Internal server error" };

    // Handle Joi validation errors
    if (error instanceof ValidationError) {
        status = 400;
        data.message = error.message;
    } 
    // Handle errors with a defined status
    else if (error.status) {
        status = error.status;
        data.message = error.message || "An error occurred";
    } 
    // Handle general errors with a message
    else if (error.message) {
        data.message = error.message;
    }

    // Send the response
    res.status(status).json(data);
};

module.exports = errorHandler;
