import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, addnote } = context;

  return (
    <>
      <AddNote/>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
}

export default Notes;
