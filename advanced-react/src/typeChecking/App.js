import React from "react";
import PetShop from "./PetShop";


function App(){


  const handleClick = ()=>{
    console.log('Iniciado')
  }
  return(
    <div>
      <PetShop
        cao={'Bidu'}
        // gato={'Fumaça'}
        clientes={2}
        nomeCliente = {['Valdir' ,' Lucas']}
        onClick = {handleClick}
        conhecido = {true}
        info = {'opa'}  
      />
    </div>
  )
}


export default App;
