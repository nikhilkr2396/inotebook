import React from 'react'
import { FaTrash, FaPenAlt} from "react-icons/fa";

function Noteitem(props) {
    const {note} = props;
    return (
        <div className="col-md-4">
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex bd-highlight">
                    <h5 className="card-title flex-grow-1 bd-highlight">{note.title}</h5>
                    <FaTrash className="icon mx-3" />
                    <FaPenAlt className="icon mx-3"/>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
