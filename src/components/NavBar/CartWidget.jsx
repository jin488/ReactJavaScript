import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import "./navbar.css"

const CartWidget = () => {
    return (
        <div className="cartNumber">
            <TiShoppingCart size={40} className='cart'/>
            <p>1</p>
        </div>
    )
}

export default CartWidget