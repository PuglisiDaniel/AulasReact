import React, {useContext} from "react";
import {ThemeContex} from './useContext/Theme'
import Form from './Form'

function Card(){
    const theme = useContext(ThemeContex);
    console.log('theme:values ', theme)
    return(
        <div style={{padding: '50px'}}>
            <Form />
            <button style={{background: theme.background, color:theme.color}}>Botao do Card</button>
        </div>
    )
}

export default Card;