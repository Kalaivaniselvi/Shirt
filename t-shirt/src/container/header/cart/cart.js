import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import SidePopup from "../../../components/model-pop/side-popup";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Button from "../../../components/button/button";
const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        <IoCartOutline size={20}/>
      </div>
      {show && (
        <SidePopup
          showModal={show}
          handleClose={() => setShow(false)}
          title="SHOPPING CART"
        >
          <div
            className="pt-5 px-3"
            style={{
              borderBottom: "1px solid grey",
              paddingBottom: "6rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MdOutlineAddShoppingCart size={40}/>
            </div>
            <p style={{ display: "flex", justifyContent: "center" }}>Your cart is empty.</p>
            <Button title={"RETURN TO SHOP"}/>
          </div>
        </SidePopup>
      )}
    </>
  );
};

export default Cart;
