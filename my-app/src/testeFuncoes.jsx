import React from "react";
import "./styles.css"

const buttonA = <button>Histórico</button>
const buttonB = <button>Cadastrar</button>

const hasCostumer = true;

const costumer = function showCostumer() {
    if(!hasCostumer){
        return null
    } 
    return(
        <div>
            <h1>Nome do cliente aqui</h1>
        </div>
    )
}


const App = () => {
    
    
    return (
        <div>
        <p>Digital Inovation One</p>
        <p>Hello World</p>
        
        <br />
        {hasCostumer ?(
            <div>
            Veja o histórico<br/>
            {buttonA}
            </div>
            
            ) :(
                <div>
                Cadastre-se <br/> {buttonB}
                </div>
                )}
                
                </div>
                );
            };
        <div>
            {{costumer}}
        </div>
            


export default App;
//             const App = () => {
            
//                 const casoTrue = () =>{
//                     <div>Ola amiguinho</div>
//                 }
//                 const casoFalse = () =>{
//                     <div>Adeus zika</div>
//                 }
            
//                 return (
//                     <div>
//                         <p>Digital Inovation One</p>
//                         <p>Hello World</p> 
//                         {hasCostumer? ()=>this.casoTrue() : ()=>this.casoFalse() }           
            
//                     </div>
//                 );
//             };
// 