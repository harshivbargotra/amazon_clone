import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    //dispatch the item to data layer
    // console.log(basket);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {/* {Array(rating)
            .fill()
            .map() => (
              <p>⭐</p>
            ))} */}
          {`⭐`.repeat(rating)}
        </div>
      </div>
      <img src={image} alt="Product"/>

      <button onClick={addToBasket} className="product__addToButton">Add to Basket</button>
    </div>
  );
}

export default Product;
