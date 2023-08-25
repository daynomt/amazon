import React from "react";
import Product from "../product/Product";
import "./Home.css";
function home() {
  return (
    <div>
      <div>
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/11aae5e5-92c4-446e-b254-9b47fcc2c59b.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="123"
            title="The Lean Startup:How constant Innovation Creates"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
          />
          <Product
            id="123"
            title='EASELAND Mattress Pad Cover Cotton Top 8-21" Deep Pocket Pillow Top Mattress Topper'
            price={239.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/41E6b61CD0L._SY500__AC_SY400_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="123"
            title="Digital Camera for Photography, 4K 48MP Vlogging Camera for YouTube with WiFi."
            price={133.74}
            rating={1}
            image="https://m.media-amazon.com/images/I/71zRHyKOJ4L._AC_SY400_.jpg"
          />
          <Product
            id="123"
            title="Windshield Universal Car Mount Phone Holder Desk Stand with Suction Cup Base and..."
            price={1.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61XzOG9rAwL._AC_SY400_.jpg
"
          />
          <Product
            id="123"
            title="The Lean Startup:How constant Innovation Creates"
            price={21.21}
            rating={5}
            image="https://m.media-amazon.com/images/I/81kh8BSMaHL._AC_SY400_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="123"
            title="The best and widest 60 inch TV"
            price={500.99}
            rating={5}
            image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/58a4c4dc-cdbc-4436-903b-68aceda3cf95._CR0,250,3500,1832_SX507_QL70_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default home;
