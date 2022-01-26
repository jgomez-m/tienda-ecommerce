import { Timestamp, collection, addDoc } from 'firebase/firestore';
import React, { useState, useContext } from 'react';
import CartContext from '../context/CartContext'
import db from '../firebase/config';
import Order from './Order';

export const BuyerForm = () => {
    const { cart, totalPrice, clear } = useContext(CartContext);
    const [buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState('');
    const [validMsg, setValidMsg] = useState('');
  
    const handleInputName = (e) => {
      setBuyer({ ...buyer, name: e.target.value });
    };
    const handleInputPhoneNumber = (e) => {
      setBuyer({ ...buyer, phone: e.target.value });
    };
    const handleInputEmail = (e) => {
      setBuyer({ ...buyer, email: e.target.value });
    };

    const createOrder = async () => {
        //   setOrderId(1);
        const orderData = {
            buyer: buyer,
            date: Timestamp.fromDate(new Date()),
            total: totalPrice(),
            items: {
            ...cart.map((element) => {
                return {
                    id: element.item.id,
                    title: element.item.title,
                    price: element.item.price,
                    quantity: element.quantity,
                };
            }),
            },
        };
        try{ 
            const docRef = await addDoc(collection(db, "orders"), orderData)
            setOrderId(docRef.id)
            // console.log("Document Id: ", docRef.id)
            clear()
        } 
        catch(e) {
            console.error("Error adding a Order: ", e);
        }

    };
    const validateFields = () => {
      if (
        buyer.hasOwnProperty("name") &&
        buyer.hasOwnProperty("email") &&
        buyer.hasOwnProperty("phone")
      ) {
        if (
          buyer.name.trim() !== "" &&
          buyer.phone.trim() !== "" &&
          buyer.email.trim() !== ""
        ) {
          if (buyer.email.trim().indexOf("@gmail.com") !== -1) {
            createOrder();
            setValidMsg("Datos ingresados de forma correcta, obteniendo orden");
          } else {
            setValidMsg("Dirección de email incorrecta, solo se aceptan @gmail.com");
          }
        }
      } else {
        setValidMsg("datos ingresados de forma incorrecta");
      }
    };

    return (
        <div className="container aligned-items" style={{width: '40%'}}>
      {orderId !== '' ? (
        <Order id={orderId}></Order>
      ) : (
        <>
          <span className="p-3">
            <h3 className="font-weight-bold"> Ingrese sus datos por favor</h3>
          </span>

          <form>
            <div className="p-2 " >
              <label htmlFor="fname" className="p-1">
                Nombre completo
              </label>
              <input
                type="text"
                onChange={handleInputName}
                id="lname"
                name="lname"
                className="p-1"
              />
            </div>
            <div className="p-2">
              <label htmlFor="email" className="p-1">
                Email
              </label>
              <input
                type="email"
                onChange={handleInputEmail}
                id="lname"
                name="email"
                className="p-1"
              />
            </div>
            <div className="p-2">
              <label htmlFor="phone-number" className="p-1">
                Número de teléfono
              </label>
              <input
                type="tel"
                onChange={handleInputPhoneNumber}
                id="phone-number"
                name="lname"
                className="p-1"
              />
            </div>
          </form>

          <h6>
            <button className="button-style-1" onClick={() => validateFields()}>
                Crear Orden de Compra
            </button>
            <p className="font-weight-bold"> {validMsg}</p>
          </h6>
        </>
      )}
    </div>
    );
}