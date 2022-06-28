import React from "react";
import  ReactDOM  from "react-dom";
import "./styles.css";

function somar(n1, n2){
    return n1+n2;
}

const element = 'exemplo de elemento';

const App = () =>{

    return (
        <div className="App">
            Hello World
            <h1>{somar(2,2)}</h1>
            {element}
        </div>

    )
}

const rootElement = document.getElementById("root");

ReactDOM.render(element, rootElement);
//ReactDOM.render(<App />, rootElement);