import React, {useState} from "react";
import Gallery from './Smartcomponent/gallery/index'

function App(){

  const fotos = [

    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/nature',
    'http://placeimg.com/140/60/tech',
    'http://placeimg.com/140/60/any'
  ]

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <Gallery fotos={fotos}/>
    </>
  )
}


export default App;
