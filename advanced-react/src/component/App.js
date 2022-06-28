import React, {useState} from "react";
import Button from "./botoes";
import Calc from "./calc";

function App(){

  const [value, setValue] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(20)

  const handleClick = ()=>{
    setMin(10)
  }

  const handleCalc = ({target})=>{
    const value = Number(target.value)
    setValue(min + max + value)
  }

  return(
    <>
      <Button onClick={handleClick} >
        Adicionar Carrinho
      </Button>
      <h1>Valor = {value}</h1>
      <Calc  onChange={handleCalc} min={min} max={max} />
    
    </>
    
  )
}


export default App;
