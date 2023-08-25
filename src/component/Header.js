import React, { useState } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider/StateProvider";
import { auth } from "./config-data/Firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAutentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png "
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAutentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "sign Out" : "signIn"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header_clearlink">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">your</span>
          <span className="header_optionLineTwo">prime</span>
        </div>
        <Link to="/checkout" className="header_clearlink">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
