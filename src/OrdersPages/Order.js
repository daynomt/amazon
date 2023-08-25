import React from "react";
import "./order.css";
import moment from "moment";

import CurrencyFormat from "react-currency-format";
import CheckoutProducts from "../component/checkoutproducts/CheckoutProducts";

function Order({ order }) {
  return (
    <div className="order">
      <h1>Order </h1>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma ")}</p>
      <p className="order_id">
        <small className="id">{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProducts
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hiddenButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3>order Total:{value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
