import "./App.css";
import Header from "./component/Header";
import Home from "./component/home/Home";
import { Route } from "react-router-dom";
import Checkout from "./component/checkout/Checkout";
import Payment from "./component/payment/Payment";
import { Routes } from "react-router-dom";
import Login from "./component/login/Login";

import { useEffect } from "react";
import { auth } from "./component/config-data/Firebase";
import { useStateValue } from "./component/Stateprovider/StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./OrdersPages/Orders";

const promise = loadStripe(
  "pk_test_51NPSxcC75I7O2ep1uc7FWfNFsTFLwXUDZOC5FrfvQt4d0eYS7FqK2rnBB7V9gDAI9GHMVAZi1wD7l05i0AyViE8500JDx2NAEm"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({ type: "SET_USER", user: authuser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />{" "}
        </Routes>{" "}
      </div>
    </>
  );
}

export default App;
