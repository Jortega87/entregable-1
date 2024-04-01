import arrayPhrases from'./utils/phrases.json'
import './App.css'
import getRandom from './services/getRandom'
import { useState } from 'react';
import ShowPhrase from './components/ShowPhrase';
import ButtonPhrase from './components/ButtonPhrase';
import arrayImages from  './utils/imagenes.json'



function App() {

  const [phrase, setPhrase] = useState(getRandom(arrayPhrases));

  const [image, setImage]= useState(getRandom (arrayImages));


  const objStyles = {
    backgroundImage: `url(../public/fortuna-1/fondo${image}.jpg)`,
  }

  return (
    <>
      <div className='app' style={objStyles}>
        <h1 className='app__title'> Galletas de la fortuna</h1>
        <ButtonPhrase
        setPhrase={setPhrase}
        setImage ={setImage}
        />
        <ShowPhrase
        phrase={phrase}
        />
      
      </div>
      
    </>
  )
}

export default App