import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./app/store"
import App from "./App"
import "./index.css"

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider >
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