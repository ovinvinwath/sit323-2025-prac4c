// write following in terminal: node server.js
// to start calculator and follow instructions

//server setup and run code
const express = require('express');
const app = express();
const port = 5001;
const calculatorRoutes = require('./endpoints.js'); //path to endpoints
app.use('/', calculatorRoutes);

//Terminal output
app.listen(port, () => {
    console.log(`The Calculator microservice is running on http://localhost:${port}`);
});

//Welcome msg to avoid Cannot GET/ routing error
app.get('/', (req, res) => {
    res.send(`Welcome to the Calculator Microservice! \n
        Use following web url format on search bar to use calculator => "http://localhost:5001/[Function]?num1=[]&num2=[]"
        |Functions include add, subtract, multiply, divide, sqrt(Which only takes num1), mod, exp(exponent) 
        |Example: http://localhost:5001/divide?num1=200&num2=20`);
    
});

