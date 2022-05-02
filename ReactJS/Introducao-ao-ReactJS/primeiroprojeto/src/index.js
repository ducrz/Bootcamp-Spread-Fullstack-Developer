import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const App = () => {
    return (
        <div className="App">
            Olá Mundo!
        </div>
    )

}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)