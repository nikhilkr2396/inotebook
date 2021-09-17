import React, {useState} from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const initialNotes = [
        {
          "_id": "6140e440dca88fbc32144e65",
          "user": "61372becdd579253cdb95fee",
          "title": "First Note",
          "description": "This is the first note. The app is in the production phase.",
          "tags": "personal",
          "date": "2021-09-14T18:04:48.269Z",
          "__v": 0
        },
        {
          "_id": "6140e440dca88fbc32144e67",
          "user": "61372becdd579253cdb95fee",
          "title": "First Note",
          "description": "This is the first note. The app is in the production phase.",
          "tags": "personal",
          "date": "2021-09-14T18:04:48.571Z",
          "__v": 0
        },
        {
          "_id": "6140e440dca88fbc32144e69",
          "user": "61372becdd579253cdb95fee",
          "title": "First Note",
          "description": "This is the first note. The app is in the production phase.",
          "tags": "personal",
          "date": "2021-09-14T18:04:48.777Z",
          "__v": 0
        },
        {
          "_id": "6140e440dca88fbc32144e69",
          "user": "61372becdd579253cdb95fee",
          "title": "Second Note",
          "description": "This is the first note. The app is in the production phase.",
          "tags": "personal",
          "date": "2021-09-14T18:04:48.777Z",
          "__v": 0
        },
        {
          "_id": "6140e441dca88fbc32144e6b",
          "user": "61372becdd579253cdb95fee",
          "title": "First Note",
          "description": "This is the first note. The app is in the production phase.",
          "tags": "personal",
          "date": "2021-09-14T18:04:49.067Z",
          "__v": 0
        }
      ]

    const [notes , setNotes] = useState(initialNotes);

    return(
        <NoteContext.Provider value={{notes , setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
