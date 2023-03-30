import React from "react";


function CreateArea(){
    return (
    <div>
    <form>
        <input name="title" placeholder="This is a title"></input>
        <textarea name="content" placeholder="This is the content" rows={3}></textarea>
        <button>Add</button>
    </form>
    </div>
    );
}

export default CreateArea;