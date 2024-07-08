import './App.css'
import Titulo from "./components/Titulo"

function App() {

  const saludo = "hola"



  return (

    <div style={{
      backgroundColor: "gray",
      color: "lime"
    }}>
      <h1 className='titulo' >{saludo}</h1>
      <Titulo />
      <Titulo />
      <Titulo />
      <Titulo />
    </div>
  )
}

export default App
