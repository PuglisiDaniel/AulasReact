import React from "react";
import  ReactDOM  from "react-dom";
import "./styles.css";
import Button from './Button'


function somar(n1, n2){
    alert(n1+n2)
}

const element = 'exemplo de elemento';

const App = () =>{

    return (
        <div className="App">
            <Button onClick={()=>somar(2,3)} name="Bruno Silva" />
        </div>

    )
}

const rootElement = document.getElementById("root");

//ReactDOM.render(element, rootElement);
ReactDOM.render(<App />, rootElement);