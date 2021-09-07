const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "NikhilHaiSabkaBaap";


// Create a User using: POST "/api/auth/createuser". No login required


// app.get('/', (req, res) => {
//     res.send('Hello Notebook!')
//   })
// similar to above 
router.post('/createuser',[
    body('name',"Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password').isLength({ min: 5 })
] ,
 async (req, res) => { 

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether user with this email already exists
    try{    
        let  user = await User.findOne({ email: req.body.email });
        if(user){
            return res.status(400).json({ errors: "Error : This email ID is already present" });
        }

        const salt = await bcrypt.genSalt(10);
        securePassword =  await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        })
        
        const data = {
            user : {
                id : user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        

        res.json({authToken})

    }catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;