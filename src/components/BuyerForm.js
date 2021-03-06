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
            setValidMsg("Direcci??n de email incorrecta, solo se aceptan @gmail.com");
          }
        }
      } else {
        setValidMsg("datos ingresados de forma incorrecta");
      }
    };

    return (
        <div className="container" style={{width: '50%'}}>
      {orderId !== '' ? (
        <Order id={orderId}></Order>
      ) : (
        <>
          <span className="row col-sm m-2">
            <h3 className="font-weight-bold"> Ingrese sus datos por favor</h3>
          </span>

          <form>
            <div className="row" >
              <label htmlFor="fname" className="col-sm m-2">
                Nombre completo
              </label>
              <input
                type="text"
                onChange={handleInputName}
                id="lname"
                name="lname"
                className="col-sm m-2"
              />
            </div>
            <div className="row">
              <label htmlFor="email" className="col-sm m-2">
                Email
              </label>
              <input
                type="email"
                onChange={handleInputEmail}
                id="lname"
                name="email"
                className="col-sm m-2"
              />
            </div>
            <div className="row">
              <label htmlFor="phone-number" className="col-sm m-2">
                N??mero de tel??fono
              </label>
              <input
                type="tel"
                onChange={handleInputPhoneNumber}
                id="phone-number"
                name="lname"
                className="col-sm m-2"
              />
            </div>
          </form>

          <h6>
            <button className="col-sm m-2" onClick={() => validateFields()}>
                Crear Orden de Compra
            </button>
            <p className='col-sm font-weight-bold m-3' style={{color: 'red'}}> {validMsg}</p>
          </h6>
        </>
      )}
    </div>
    );
}