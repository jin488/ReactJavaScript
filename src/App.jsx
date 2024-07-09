import './App.css'
import Welcome from "./components/Welcome/Welcome"
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <nav>
      <div>
        <NavBar/>
        
      </div>

      <div>
        <Welcome data = "Welcome to my page"/>
      </div>
    </nav>
  )
}

export default App
