import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import SidePopup from "../../components/model-pop/side-popup";
const Filter = () => {
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
        <CiFilter size={20} />
        <span>Filter</span>
      </div>
      {show && (
        <SidePopup
          showModal={show}
          handleClose={() => setShow(false)}
          title="FILTER"
        >
          <div className="px-2">
            <div className="input-group mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="searchButton"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  id="searchButton"
                >
                  Search
                </button>
              </div>
            </div>
            <h4 className="mt-5"></h4>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle w-100"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select a Size
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  M
                </a>
                <a className="dropdown-item" href="#">
                  L
                </a>
                <a className="dropdown-item" href="#">
                  S
                </a>
                <a className="dropdown-item" href="#">
                  XL
                </a>
                <a className="dropdown-item" href="#">
                  XXL
                </a>
              </div>
            </div>
            <div className="mt-5">
              <h4>Categories</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkbox1"
                />
                <label className="form-check-label" htmlFor="checkbox1">
                  {" "}
                  V neck{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  {" "}
                  Round neck{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkbox3"
                />
                <label className="form-check-label" htmlFor="checkbox3">
                  {" "}
                  Collar{" "}
                </label>
              </div>
            </div>
            <div className="mt-5">
              <h4>Discounts</h4>
              <form>
                <input
                  type="radio"
                  id="option1"
                  name="option"
                  value="option1"
                />
                <label htmlFor="option1">10% off or more</label>
                <br />
                <input
                  type="radio"
                  id="option2"
                  name="option"
                  value="option2"
                />
                <label htmlFor="option2">20% off or more</label>
                <br />
                <input
                  type="radio"
                  id="option3"
                  name="option"
                  value="option3"
                />
                <label htmlFor="option3">30% off or more</label>
                <br />
                <input
                  type="radio"
                  id="option4"
                  name="option"
                  value="option4"
                />
                <label htmlFor="option4">40% off or more</label>
                <br />
                <input
                  type="radio"
                  id="option5"
                  name="option"
                  value="option5"
                />
                <label htmlFor="option5">50% off or more</label>
                <br />
              </form>
            </div>
          </div>
        </SidePopup>
      )}
    </>
  );
};

export default Filter;
