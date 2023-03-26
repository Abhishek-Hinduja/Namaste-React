var heading = React.createElement("h1", {
    id : "title",
}, "Namate-America");

var heading2 = React.createElement("h1", {
    id : "title",
}, "This is a very nice game");

var container = React.createElement("div", {id:"container",}, [heading,heading2])


var root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)