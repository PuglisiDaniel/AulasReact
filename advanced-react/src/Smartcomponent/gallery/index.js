import React, { memo, useState } from "react";
import Button from '../botoes/index'


function Gallery(props){
    const {fotos} = props

    const [galeria, setGaleria] = useState(fotos)


    const handleRemove = (key)=>{
        const novaGaleria = galeria.filter((img, index) => index !== key )
        setGaleria(novaGaleria)

    }

    const renderizaFoto = (img, key)=>{
        return (
        <div>
            <div>
                <img src={img} alt='detete' />
                <Button onClick={ () => handleRemove(key)} > Remover {key}</Button>
            </div>
           

        </div>
    )
    }



    return (
        <div>
            <div>
                {galeria.map(renderizaFoto)}
            </div>

        </div>
        
    )

}

export default memo(Gallery);