import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../db/db";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const { idCategory } = useParams()

    const getProduct = async () => {
        try {
            const productRef = collection(db, "products")
            const dataDb = await getDocs(productRef)
            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })
            setProducts(data);
            setLoad(false)
        } catch (error) { }
    }

    const getProductsByCategory = async () => {
        try {
            const productsRef = collection(db, "products");
            const q = query(productsRef, where("category", "==", idCategory));
            const dataDb = await getDocs(q);
            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            });

            setProducts(data)
            setLoad(false)
        } catch (error) { }
    };


    useEffect(() => {
        setLoad(true)
        if (idCategory) {
            getProductsByCategory();
        } else {
            getProduct();
        }

    }, [idCategory]);


    return (
        <div className="bodyProducts">
            {load ? <BarLoader color="#a70aa7" /> : <ItemList productos={products} />}
        </div>
    )
};
export default ItemListContainer