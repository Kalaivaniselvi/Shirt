import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import SidePopup from "../../../components/model-pop/side-popup"
const Home = (props) => {
  const { setShow, show } = props;
  const [value, setValue] = useState("All");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        <FaSearch size={20}/>
      </div>
      {show && (
        <SidePopup
          showModal={show}
          handleClose={() => setShow(false)}
          title="SEARCH OUR SITE"
          
        >
          <div
            className="pt-5 px-3"
            style={{
              borderBottom: "1px solid grey",
              paddingBottom: "6rem",
            
            }}
          >
            <select
              value={value}
              onChange={handleChange}
              className="py-1"
              style={{ borderRadius: "35px", width: "100%" }}
            >
              <option value="All">Select All Categories</option>
              <option value="Combo">Combo</option>
              <option value="CropTop">CropTop</option>
              <option value="Dress">Dress</option>
              <option value="Gifts">Gifts</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Kids wear">Kids wear</option>
              <option value="Knot Top">Knot Top</option>
              <option value="OverSized">OverSized</option>
              <option value="T-shirts">T-shirts</option>
            </select>
            <div className="search-box">
              <input type="search" placeholder="Search" />
              <IoSearch className="search-icon" />
            </div>
          </div>
        </SidePopup>
      )}
    </>
  );
};

export default Home;
