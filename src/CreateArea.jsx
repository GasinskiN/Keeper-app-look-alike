import React, {useState} from "react";


function CreateArea(props){
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
        console.log(content);
    }
    function handleSubmit(event){
        event.preventDefault();
    }

    return (
    <div>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" value={content.title} placeholder="Title"></input>
        <textarea onChange={handleChange} name="post" value={content.post} placeholder="Content" rows={3}></textarea>
        
        <button onClick={() => {props.giveNote(content)}}  >Add</button>
    </form>
    </div>
    );
}

export default CreateArea;