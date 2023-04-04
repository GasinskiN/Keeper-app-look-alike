import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';

function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <IconButton onClick={()=>{props.getNote(props.id)}}><DeleteOutlineIcon /></IconButton>
        </div>
    );
}
export default Note;