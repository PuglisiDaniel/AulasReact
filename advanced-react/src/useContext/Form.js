import React, {useContext} from "react";
import {ThemeContex} from './useContext/Theme'


function Form(){

    const contex = useContext(ThemeContex)

    const renderForm = (
   

        <form>
            <label>Nome </label>
            <input />
            <label>Idade</label>
            <input />
            <label>E-mail</label>
            <input />
            <label>Senha</label>
            <input />
            <label>Telefone</label>
            <input />
        
        </form> 
       
    )
        


    const renderNotLogged = (
        <h1>
            É necessário realizar o login
        </h1>
    )
    return(
        <div>
            {!contex.token ? renderNotLogged : renderForm}
        </div>
        
       
    )
}

export default Form;