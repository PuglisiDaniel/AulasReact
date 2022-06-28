import {useState} from 'react';


function SmartCounter(){

    const [valor, setValor] = useState(0) //valor padrao


    

    return(
        <>
            <h2>{valor}</h2>
            <button onClick={()=>setValor(valor-1)}>Diminuir</button>
            <button onClick={()=>setValor(valor+1)}>Aumentar</button>
        </>
    )
}

export default SmartCounter;