import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


function App(){
    return (
        <div>
            <Header />
            <Note 
                title="This is a title"
                content="This is the content"
            />
            <Footer />
        </div>
    )
}

export default App;