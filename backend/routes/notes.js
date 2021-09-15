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

// ROUTE 2: Add a New Note using : POST "/api/notes/addnote". Login required.
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

// NOTE => For updation we use PUT request
// ROUTE 3: Update a Note using : PUT "/api/notes/updatenote/:id". Login required.
router.put('/updatenote/:id', fetchuser, [
    body('title',"Enter a Title with at least 3 character").isLength({ min: 3 }),
    body('description',"Enter a Discription with at least 5 character").isLength({ min: 5 })
],   
  async (req, res) => {
    try {
        const {title, description, tags} = req.body;

        // 1. Create a newNote object 
        const newNote = {}
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tags){newNote.tags = tags};

        // 2. Find the note that has to be update and update that note
        let note = await Note.findById(req.params.id);
       
        if(!note){
            return res.status(404).send("Not Found");
        }

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Authorized");
        }

        note = await Note.findByIdAndUpdate(req.params.id,{$set : newNote}, {new : true});
        
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
})

// ROUTE 4: Delete a Note using : DELETE "/api/notes/deletenote". Login required.
router.delete('/deletenote/:id', fetchuser, [
    body('title',"Enter a Title with at least 3 character").isLength({ min: 3 }),
    body('description',"Enter a Discription with at least 5 character").isLength({ min: 5 })
],   
  async (req, res) => {
    try {
        // Find the note that has to be delete and delete that note
        let note = await Note.findById(req.params.id);
       
        if(!note){
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if it's belong to the authorized user
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Authorized");
        }

        note = await Note.findByIdAndDelete(req.params.id);
        
        res.json({"Success" : "Note has been deleted"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
})

module.exports = router;