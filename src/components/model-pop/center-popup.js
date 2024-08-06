
import React, { useState } from "react";

export const CenterPopup = (props) => {
  const {
    onClick,
    showModal,
    setShowModal,
    title,
    children,
    footerContent,
    handleClick,
    backGroundStyle,
    titleStyle,
    popupDiv,
    popupStyle,
    handleclose,
  } = props;
  return (
    
    <div>
      <div
        className={`${showModal ? "block" : "hidden"
          } fixed inset-0 z-[100] bg-black bg-opacity-50 ${popupStyle}`}
      >
        <div
          className={`flex items-center justify-center p-4 min-h-screen w-full ${popupDiv} mx-auto`}
        >
          <div
            className={`relative rounded-lg shadow ${backGroundStyle}`}
            style={{
              background:
                "linear-gradient(147.07deg, rgba(33, 95, 167, 0.44) 0%, rgba(16, 52, 77, 0.25) 101.5%)",
              backdropFilter: "blur(5px)",
            }}
          >
            <div className="relative rounded-lg shadow ">
              {title && (
                <div className="flex items-center justify-between p-4 md:p-5  rounded-t text-[20px] ">
                  <h3
                    className={`text-[20px] font-semibold text-white ${titleStyle}`}
                  >
                    {title}
                  </h3>
                  <button
                    onClick={() => {
                      setShowModal && setShowModal(false);
                      handleclose && handleclose();
                    }}
                    type="button"
                    className=" text-white bg-transparent hover:bg-[#2A7BDE] hover:rounded-full  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  >
                    <svg
                      className="w-3 h-3 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              )}
              <div className="p-4 md:p-5 space-y-4">{children}</div>
              {footerContent && (
                <div className="flex items-center p-4 md:p-5  rounded-b ">
                  {footerContent}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
