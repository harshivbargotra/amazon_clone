import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";



const Checkout = () => {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg"
          alt="Amazon Pay Banner"
        />
        <div >
        <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckOutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />))}
        </div>
      </div>
      <div className="checkout__right">
       <Subtotal/>
      </div>
    </div>
  );
};

export default Checkout;
