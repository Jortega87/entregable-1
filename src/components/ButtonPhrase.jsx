import React from 'react'
import arrayPhrases from '../utils/phrases.json'
import getRandom from '../services/getRandom'
import arrayImages from '../utils/imagenes.json'

const ButtonPhrase = ({setPhrase, setImage}) => {

    const handlePhrase =() =>{
        setPhrase(getRandom(arrayPhrases))
        setImage(getRandom([1,2,3,4]))

    }
  return (
    <button onClick={handlePhrase} className='btn'>Probar mi suerte</button>
  )
}

export default ButtonPhrase
