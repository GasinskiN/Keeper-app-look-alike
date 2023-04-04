import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){

    const [isExpanded, setExpand] = useState(false);

    function expand(){
        setExpand(true);
    }

    const [content, setContent] = useState({
        title: "",
        post: ""
    });

    function handleChange(event){
        const {value, name} = event.target;
        setContent(prevValue =>{
            return {
                ...prevValue,
                [name]: value
            };
        })
    }
    function handleSubmit(event){
        event.preventDefault();
    }

    return (
    <div>
    <form className="create-note" onSubmit={handleSubmit}>
        <input 
        onClick={expand} 
        onChange={handleChange} 
        name="title" 
        value={content.title} 
        placeholder="Title">
        </input>
        {isExpanded &&
        <Zoom in={isExpanded}>
            <textarea
            onChange={handleChange}
            name="post" value={content.post}
            placeholder="Content"
            rows={3}>
            </textarea>
        </Zoom>}
        <Zoom in={isExpanded}>
        <IconButton 
        onClick={() => {props.giveNote(content); setContent({title: "", post:""})}}  ><AddIcon />
        </IconButton>
        </Zoom>
    </form>
    </div>
    );
}

export default CreateArea;