//API Endpoints for calculator function

const express = require('express');
const router = express.Router();

//Addition endpoint
router.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid Numbers have been entered!');
    }
    //result display
    const result = num1 + num2;
    res.send(`Result: ${result}`);

});

// Subtraction endpoint
router.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers!');
    }
    //result display
    const result = num1 - num2;
    res.send(`Result: ${result}`);
});

// Multiplication endpoint
router.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers!');
    }
    //result display
    const result = num1 * num2;
    res.send(`Result: ${result}`);
});

// Division endpoint
router.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers!');
    }
    //0 division error incase someone tries it
    if (num2 === 0) {
        return res.status(400).send('Division by zero is undefined!');
    }
    //result display
    const result = num1 / num2;
    res.send(`Result: ${result}`);
});

//Square root endpoint
router.get('/sqrt', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1)) {
        return res.status(400).send('Invalid number!');
    }
    
    //result display
    const result = Math.sqrt(num1);
    res.send(`Result: ${result}`);
});

//Exponent endpoint
router.get('/exp', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid number!');
    }
    
    //result display
    const result = num1**num2;
    res.send(`Result: ${result}`);
});

//Modulus root endpoint
router.get('/mod', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    //error msg incase non number (NaN - Not a Number) is entered
    //status 400 is a bad request response msg, 
    //while 'res.send' would also work(and is what i would have used), a status 400 error code is considered good error handeling practise.
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid number!');
    }
    
    //result display
    const result = num1%num2;
    res.send(`Result: Remainder = ${result}`);
});

//This code line is necessary to export the endpoints so the server can get them
//Do not remove or a 'router middle ware function' error will pop up!!!
module.exports = router;