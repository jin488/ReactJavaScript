import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer className="tosty" theme="dark"/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route 
            path='/category/:idCategory'
            element={<ItemListContainer />}
          />
          <Route 
            path='/detalle/:idProducts'
            element={<ItemDetailContainer />}
          />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
