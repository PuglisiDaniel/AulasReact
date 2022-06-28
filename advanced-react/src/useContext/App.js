import React, {useState, useEffect} from 'react'
import {ThemeContex, themes} from './useContext/Theme'
import Card from './Card'

function App(){

  const [token, setToken] = useState()

  useEffect(()=>{
    setTimeout(() => {
      setToken('345dkadlep3o')
      
    }, 4000);
  }, [setToken])

  return(
    <ThemeContex.Provider value={{...themes.primary, token}}>
      Testando
      <Card />
    </ThemeContex.Provider>
  )

}

export default App;

  