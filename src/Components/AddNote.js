import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setNote] = useState({title : "", description : "", tag : "default"})
  const handleClick = (e) => {
      e.preventDefault();
      addnote(note.title, note.description, note.tag)
    //   setNote({title: "", description: "", tag: ""})
  };
  
  const onChange = (e) => {
    setNote({...note, [e.target.name] : e.target.value})
  };
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form className="my-3">
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onClick={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onClick={onChange}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
