import { useState, useEffect } from "react"
import catchProducts from "../../data/data.js"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    const {idProduct} = useParams()

    useEffect(() => {
        catchProducts()
        .then((data) => {
            const productFound = data.find( (productoData) => productoData.id === idProduct)
            setProducts(productFound)
        })
    }) 


return (
    <ItemDetail products={products} />
)
}

export default ItemDetailContainer