import "./FormCheckout.css"


const FormCheckout = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <div className="boxForm">
            <form onSubmit={handleSubmitForm}>
                <label>Name: </label>
                <input type="text" name="name" placeholder="Juan Napoli" value={datosForm.name} onChange={handleChangeInput} />

                <label>Phone: </label>
                <input type="text" name="phone" placeholder="123456789" value={datosForm.phone} onChange={handleChangeInput} />

                <label>Email: </label>
                <input type="email" name="email" placeholder="juan231251@gmail.com" value={datosForm.email} onChange={handleChangeInput} />

                <button className="sendOrder" type="submit">Send  order</button>
            </form>
        </div>
    );
};
export default FormCheckout;