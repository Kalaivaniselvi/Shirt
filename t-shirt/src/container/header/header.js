import React, { useState } from "react";
import Home from "./search/search";
import Login from "./login/login";
import Cart from "./cart/cart";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-auto">
          <p>LOGO</p>
        </div>
        <div className="col">
          <div className="d-flex justify-content-end" style={{ gap: "9px" }}>
            <Home show={show} setShow={setShow} />
            <Login />
            <Cart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
