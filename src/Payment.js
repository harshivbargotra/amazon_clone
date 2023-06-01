import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckOutProduct";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  

  const handleSubmit = (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    console.log(basket);

    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(user?.uid + Math.floor(Math.random() * 10))
      .set({
        basket: basket,
      });

    dispatch({
      type: "EMPTY_BASKET",
    });

    alert("Your Order Is been Placed")

    navigate("/");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>India</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
             {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            {basket.length===0 && <p className="payment__error">Please Fill The Cart</p>}
          </div>
        </div>

        
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            

            <form onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                {basket.length > 0 && <button className="payment__button">
                  <span>Buy Now</span>
                </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
