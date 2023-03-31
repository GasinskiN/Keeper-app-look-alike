import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){
    
    const [notes, setNotes] = useState([{title: "This is a title", post: "This is the content"}, {title: "Hey", post: "there"}]);

    function updateNotes(note, e){
        setNotes(prevValue => {
            return [...prevValue, note]
        })
    }
    
    return (
        <div>
            <Header />
            <CreateArea giveNote={updateNotes}/>
            {notes.map(component => (<Note
                key = {component.key}
                title = {component.title}
                content = {component.post}
             />
            ))}

            <Footer />
        </div>
    )
}

export default App;