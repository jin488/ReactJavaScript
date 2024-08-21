import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (productoNuevo) => {
        setCarrito( ...carrito, productoNuevo)
    }

    return (
        <CartContext.Provider value={ { carrito, agregarProducto } }>
            {children}
        </CartContext.Provider>
    )
};

export {CartProvider, CartContext };