import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    ,document.getElementById("root")
)

const person ={
    name : "imad ajbar",
    age : 29
}

// this call object destructuring
// syntax : const {property} = object
// const {name, age} = person
// console.log(name, age)