import React, {useState} from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    
    const st = {
        "name" : "Nikhil",
        "age" : "25"
    }

    const [state,setState] = useState(st);

    const update = () => {
        setTimeout(()=>{
            setState({
                "name" : "Rohit",
                "age" : "22" 
            });
        }, 5000);
    }

    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
