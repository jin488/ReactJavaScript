import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import db from "../../db/db.js"

const ItemDetailContainer = () => {
    const [producto, setProducts] = useState({})
    const { idProducts } = useParams()

    const getProduct = async () => {
        try {
            const docRef = doc(db, 'products', idProducts);
            const dataDb = await getDoc(docRef);
            const data = { id: dataDb.id, ...dataDb.data() };
            setProducts(data);
        } catch (error) {}
    };

    useEffect(() => {
        getProduct();
    }, [])


    return <ItemDetail producto={producto} />

}

export default ItemDetailContainer