import React, {useState} from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const initialNotes = [
        {
          "_id": "6140e440dcaq88fbc3bv144e65",
          "user": "61372becdd579253cdb95fee",
          "title": "First Note",
          "description": "This is the first note. The app is in the production phase.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
          "tags": "personal",
          "date": "2021-09-14T18:04:48.269Z",
          "__v": 0
        },
        {
          "_id": "6140e440dca88qfbc32vd144e67",
          "user": "61372becdd579253cdb95fee",
          "title": "First Note",
          "description": "This is the first note. The app is in the production phase.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'",
          "tags": "personal",
          "date": "2021-09-14T18:04:48.571Z",
          "__v": 0
        },
        {
          "_id": "6vd140e440dca88fbc32144e69",
          "user": "61372becdd579253cdb95fee",
          "title": "First Note",
          "description": "This is the first note. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'",
          "tags": "personal",
          "date": "2021-09-14T18:04:48.777Z",
          "__v": 0
        },
        {
          "_id": "6140e440dca88fbc321wd44se69",
          "user": "61372becdd579253cdb95fee",
          "title": "Second Note",
          "description": "This is the first note. The app is in the production phase.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
          "tags": "personal",
          "date": "2021-09-14T18:04:48.777Z",
          "__v": 0
        },
        {
          "_id": "6140e441dcsda88fbc32144e6b",
          "user": "61372becdd579253cdb95fee",
          "title": "First Note",
          "description": "This is the first note. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
          "tags": "personal",
          "date": "2021-09-14T18:04:49.067Z",
          "__v": 0
        }
      ]

    const [notes , setNotes] = useState(initialNotes);

    // Add a Note
      const addnote = (title, description, tag) => {
        // TODO: API calls
        const note = {
          "_id": "6140e441dcsda88fbasc32aw144e62b",
          "user": "61372becdd579253cdb95fee4",
          "title": title,
          "description": description,
          "tags": tag,
          "date": "2021-09-14T18:04:49.067Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

    // Deleete a Note
      const deletenote = (id) => {
        // TODO: API calls
        const newNote = notes.filter((note)=>{
          return note._id !== id
        })
        setNotes(newNote)
      }

    //  Edit a Note
      const editnote = () => {

      }

    return(
        <NoteContext.Provider value={{notes, addnote, deletenote, editnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
