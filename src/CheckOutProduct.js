import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";


const CheckOutProduct = ({ id, image, title, price, rating }) => {
  const [{basket}, dispatch] = useStateValue();


    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (  
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">{`⭐`.repeat(rating)}</p>
        <button onClick={removeFromBasket}>Remove From Basket</button>
    </div>
      </div>
      
  );
};

export default CheckOutProduct;
