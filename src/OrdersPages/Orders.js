import React, { useEffect, useState } from "react";
import Order from "./Order";
import { db } from "../component/config-data/Firebase";
import { useStateValue } from "../component/Stateprovider/StateProvider";
import "../OrdersPages/orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, disPatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(setOrders);

  return (
    <div className="orders">
      <h1
        style={{
          padding: "20px",
        }}
      >
        Your Orders{" "}
      </h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
