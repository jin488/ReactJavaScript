import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormularioCheckout from './FormularioCheckout.jsx';
import db from '../../db/db.js';
import "./FormCheckout.css"
import validateForm from "../../utils/validationForm.js"
import { toast } from 'react-toastify';

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const [idOrder, setIdOrden] = useState(null);
    const { carrito, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        const order = {
            Buyer: { ...datosForm },
            products: [...carrito],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice(),
        };

        const response = await validateForm(datosForm);
        if (response.status === 'success') {
            sendOrder(order);
        } else {
            toast.warning(response.message);
        }

    };

    const sendOrder = async (order) => {
        try {
            const ordersRef = collection(db, 'ordenes');
            const orderDb = await addDoc(ordersRef, order);
            setIdOrden(orderDb.id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {idOrder ? (
                <div className='orderComplete'>
                    <h2>Order completed successfully! 😁</h2>
                    <p>Save your generated order ID: {idOrder} </p>
                </div>
            ) : (
                <FormularioCheckout
                    datosForm={datosForm}
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm}
                />
            )}
        </div>
    );
};
export default Checkout;
