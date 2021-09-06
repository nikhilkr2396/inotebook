const express = require('express');
const router = express.Router();

// app.get('/', (req, res) => {
//     res.send('Hello Notebook!')
//   })

// similar to above 

router.get('/', (req, res) => {
    obj = {
        a : 'thois',
        number : 34
    }

    res.json(obj);
})

module.exports = router;