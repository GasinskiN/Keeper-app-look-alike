import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes";



function App(){
    return (
        <div>
            <Header />
            {notes.map(component => (<Note
                key = {component.key}
                title = {component.title}
                content = {component.content}
             />
            ))}

            <Footer />
        </div>
    )
}

export default App;