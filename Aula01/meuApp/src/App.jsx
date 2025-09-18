import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0) //hook de estado

  function aumentar(){
    setContador(contador+1)
  }
  function diminuir(){
    setContador(contador-1)
  }

  function zerar(){
    setContador(0)
  }
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Primeiro App em React</h1>
      <div className="card">
        <button onClick={aumentar}>
          Aumentar valor
        </button>
        <button onClick={diminuir}>
          Diminuir valor
        </button>
        <button onClick={zerar}>
        Zerar
        </button>
      <p>
        Valor atual:   {contador}
      </p>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
