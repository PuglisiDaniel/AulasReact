import React, {Component} from "react";
import  ReactDOM  from "react-dom";
import "./styles.css";



class App extends Component{

    constructor(props){

        super(props)

        this.state = {
            clock: 1000,
            glass: 'water'
        }

    }


    componentDidMount(){
        window.setTimeout(()=>{
            this.setState({
                glass: 'juice'
            })
        }, 3000)
    }

    changeGlass = ()=>{
        this.setState({
            glass: 'coffee'
        })

    }



    render() {
        const {clock, glass} = this.state;
    
        return (
            <div>
                <h1>{clock}</h1>
                <button onClick={()=>this.changeGlass()}><h2>{glass}</h2></button>
            </div>
        )
    }
    


}



const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

