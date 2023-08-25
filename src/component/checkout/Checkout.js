import React from "react";
import "../checkout/Checkout.css";
import { Link } from "react-router-dom";
import Subtotal from "../subtotal/Subtotal";
import CheckoutProducts from "../checkoutproducts/CheckoutProducts";
import { useStateValue } from "../Stateprovider/StateProvider";

function Checkout() {
  const [{ basket }, disPatch] = useStateValue();
  return (
    <div>
      <div>
        <div className="checkout">
          <div className="checkout_left">
            <img
              className="checkout_ad"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            />
            <h3>Hello</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>{" "}
          </div>
          <div className="checkout_right">
            <Subtotal />
          </div>
        </div>
      </div>
      <div>
        {basket.map((item) => (
          <CheckoutProducts
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
