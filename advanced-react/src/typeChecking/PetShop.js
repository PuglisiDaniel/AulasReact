import React from "react";
import ProptTypes from 'prop-types'

function PetShop(props){

    const {cao, gato, clientes, nomeCliente, onClick, conhecido, info} = props


    return(
        <div>
            <h1>Cachorro: {cao}</h1>
            <h1>Gato: {gato}</h1>

            <div>
                Quantidade de Clientes: {clientes}
            </div>
            <div>
                Nome do CLiente: {nomeCliente}
            </div>
            <div>
                Já esteve aqui: {conhecido}
            </div>
            <div>
                Infos: {info}
            </div>
            <button onClick={onClick}>Iniciar</button>
        </div>
    )
}

PetShop.defaultProps = {
    cao: 'Chico',
    gato: 'juca',
    clientes: 0
}

PetShop.ProptTypes = {
    cao: ProptTypes.string,
    gato: ProptTypes.string,
    clientes: ProptTypes.number.isRequired,
    nomeCliente: ProptTypes.array.isRequired,
    onClick: ProptTypes.func.isRequired,
    conhecido: ProptTypes.bool.isRequired,
    info: ProptTypes.object.isRequired
}

export default PetShop;