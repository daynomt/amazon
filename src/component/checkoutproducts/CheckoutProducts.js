import React from "react";
import "./checkoutProducts.css";

import { useStateValue } from "../Stateprovider/StateProvider";

function CheckoutProducts({ id, title, image, price, rating, hideButton }) {
  const [{ basket, user }, disPatch] = useStateValue();
  const removeFromBasket = () => {
    disPatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout_Product">
      <img className="checkout_ProductImage" src={image} />
      <div className="checkout_ProductInfo">
        <p className="checkout_Title">{title}</p>
        <p className="checkout_Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        {hideButton && (
          <button className="removeButton" onClick={removeFromBasket}>
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProducts;
