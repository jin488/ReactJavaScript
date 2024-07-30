import { useState, useEffect } from "react";
import catchProducts from "../../data/data.js"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
    const[products , setProducts] = useState([]);

    const {idCategory} = useParams()

useEffect(() => {
    catchProducts()
    .then((response) => {
        if(idCategory){

            const filterProducts = response.filter( (products) => products.category === idCategory)
            setProducts(filterProducts)
        }else{
            
            setProducts(response)
        }
    })
    .catch((error) => {
        console.error(error)
    }) 
    .finally(() => {
        console.log("finalizo la promesa")
    })
}, [idCategory]);


return (
    <div>
        <p>{saludo}</p>
        <ItemList productos={products} />
    </div>
)
};

export default ItemListContainer