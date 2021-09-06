const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
// Create a User using: POST "/api/auth/"


// app.get('/', (req, res) => {
//     res.send('Hello Notebook!')
//   })
// similar to above 
router.post('/',[
    body('name',"Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password').isLength({ min: 5 })
] ,
 (req, res) => { 
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // const user = User(req.body);
    // user.save();
    // res.send(req.body);

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user)).catch(err => res.json({error : "Error : This email ID is already present", message : err.message}));

})

module.exports = router;