const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All Notes using : GET "/api/notes/fetchallnotes". Login required.
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user : req.user.id})
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
    
})

// ROUTE 2: Add a New Notes using : POST "/api/notes/addnote". Login required.
router.post('/addnote', fetchuser, [
    body('title',"Enter a Title with at least 3 character").isLength({ min: 3 }),
    body('description',"Enter a Discription with at least 5 character").isLength({ min: 5 })
],
   async (req, res) => {
    try {
         // array destructuring
        const {title, description, tags} = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tags, user : req.user.id
        })

        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
   
})

// ROUTE 3: Delete a Notes using : POST "/api/notes/deletenote". Login required.
// router.post('/deletenote', fetchuser, async (req, res) => {
//     const notes = await Notes.find({ user : req.user.id})
//     res.json(notes);
// })

module.exports = router;