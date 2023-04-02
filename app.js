import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>(
    <h1 id="title" key="h2">
        Namaste React
    </h1>
)

const HeaderComponent = ()=>{
    return (
        <div id = "container">
            <Title/>
            <h2>Namaste React functional Component</h2>
            <h2>This is a h2 tag</h2>
        </div>
    )
}


var root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderComponent/>)