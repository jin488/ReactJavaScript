import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (newProduct) => {
        const condition = estaEnElCarrito(newProduct.id)
        if (condition) {
            const newCart = carrito.map((productCart) => {
                if (productCart.id === newProduct.id) {
                    return { ...productCart, cantidad: productCart.cantidad + newProduct.cantidad }
                } else {
                    return productCart
                }
            })

            setCarrito(newCart)
        } else {
            setCarrito([...carrito, newProduct])
        }
    }

    const estaEnElCarrito = (idProducto) => {
        const condicional = carrito.some((productCart) => productCart.id === idProducto)
        return condicional
    }

    const totalQuantity = () => {
        const totalProductos = carrito.reduce((total, productCart) => total + productCart.cantidad, 0)
        return totalProductos
    }


    const totalPrice = () => {
        const price = carrito.reduce((total, productCart) => total + productCart.cantidad * productCart.price, 0)
        return price
    }

    const deleteProducts = (idProduct) => {
        const filterProducts = carrito.filter((productCart) => productCart.id !== idProduct)
        setCarrito(filterProducts)
    }

    const emptyCart = () => {
        setCarrito([])
    }


    return (
        <CartContext.Provider value={{ carrito, agregarProducto, totalQuantity, totalPrice, deleteProducts, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
};


export { CartProvider, CartContext };