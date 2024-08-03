import React from "react";
import kids from "../../assets/images/kids.png";
import hoodies from "../../assets/images/hoodies.png";
import oversized from "../../assets/images/oversized.png";
import shopall from "../../assets/images/shopall.png";
import sleeves from "../../assets/images/sleeves.png";
import Filter from "./filter";
import Products from "./products";

const Section = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <div className="text-center" style={{ flex: "1 0 100px" }}>
            <img src={shopall} alt="Shop All" className="img-fluid" style={{ height: "70px", width: "70px" }} />
            <p>SHOP ALL</p>
          </div>
          <div className="text-center" style={{ flex: "1 0 100px" }}>
            <img src={oversized} alt="T-Shirts" className="img-fluid" style={{ height: "70px", width: "70px" }} />
            <p>T-SHIRTS</p>
          </div>
          <div className="text-center" style={{ flex: "1 0 100px" }}>
            <img src={hoodies} alt="Hoodies" className="img-fluid" style={{ height: "70px", width: "70px" }} />
            <p>HOODIES</p>
          </div>
          <div className="text-center" style={{ flex: "1 0 100px" }}>
            <img src={oversized} alt="Oversized" className="img-fluid" style={{ height: "70px", width: "70px" }} />
            <p>OVERSIZED</p>
          </div>
          <div className="text-center" style={{ flex: "1 0 100px" }}>
            <img src={sleeves} alt="Sleeves" className="img-fluid" style={{ height: "70px", width: "70px" }} />
            <p>SLEEVES</p>
          </div>
          <div className="text-center" style={{ flex: "1 0 100px" }}>
            <img src={kids} alt="Kids" className="img-fluid" style={{ height: "70px", width: "70px" }} />
            <p>KIDS</p>
          </div>
        </div>
      </div>
      <Filter />
      <Products />
    </>
  );
};

export default Section;
