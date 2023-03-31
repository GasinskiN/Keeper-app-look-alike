import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){
    
    const [notes, setNotes] = useState([{title: "This is a title", post: "This is the content"}, {title: "Hey", post: "there"}]);

    function updateNotes(note){
        setNotes(prevValue => {
            return [...prevValue, note]
        })
    }

    function deleteNote(noteID){
        setNotes(prevValue => {
            return prevValue.filter((note, index) => index !== noteID)
            
        });
    }
    
    return (
        <div>
            <Header />
            <CreateArea giveNote={updateNotes}/>
            {notes.map((component, index) => (<Note
                key = {index}
                id = {index}
                title = {component.title}
                content = {component.post}
                getNote = {deleteNote}
             />
            ))}

            <Footer />
        </div>
    )
}

export default App;