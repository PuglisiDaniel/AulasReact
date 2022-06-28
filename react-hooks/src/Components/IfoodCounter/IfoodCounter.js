import React, {useState, useEffect} from "react";
import '../IfoodCounter/ifoodCounter.css'

function IfoodCounter(){
    
    const [qtd, setQtd] = useState(1)

    const[botaoStyle, setBotaoStyle] = useState('diminuiAtivado')

    useEffect(()=>{
        document.getElementById('preco').innerHTML = 2*qtd;
    },[qtd])


    function aumentar(){
        setQtd(qtd+1)
        setBotaoStyle('diminuiAtivado')
    }

    function diminuir(){
        if(qtd>0){
            setQtd(qtd-1)

        }
        if(qtd<=1){
            setBotaoStyle('diminuiDesativado')
        }
            
       
    }

    return(
        <div className="content">
            <h1>Ifood</h1>
            <div className="buttonContent">
                <button className={botaoStyle} onClick={diminuir}>-</button>
                <p>{qtd}</p>
                <button className={'aumenta'} onClick={aumentar}>+</button>

            </div> 
                
                <h3 id="preco">{qtd}</h3>
            

        
           
        </div>
    )
}

export default IfoodCounter;