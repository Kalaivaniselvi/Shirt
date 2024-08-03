import React from "react";
import { IoMdClose } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidepopup.css';  // Ensure you have this file

const SidePopup = (props) => {
  const {
    modelStyle,
    handleClose,
    showModal,
    title,
    children,
    width,
    footerContent,
    closeIconStyle,
    topButton,
    iconColor,
    closeIcon,
  } = props;

  return (
    <div>
      <div className={`side-popup ${showModal ? "d-block" : "d-none"} ${modelStyle}`}>
        <div className="side-popup-dialog" >
          <div className="modal-content" style={{ background: "#ffff0021",width:"350px",height:"100vh",justifyContent:"space-between"}}>
            <div className="modal-header pt-2 px-2 pb-3"style={{display:"flex",justifyContent:"space-between" ,borderBottom:"1px solid grey"}}>
              <h5 className="modal-title text-black">{title}</h5>
              <div className="d-flex align-items-center">
                {topButton && <div>{topButton}</div>}
                {!closeIcon && (
                  <button
                    type="button"
                    className={`btn-close ${closeIconStyle}`}
                    onClick={handleClose}
                    aria-label="Close"
                  >
                  </button>
                )}
              </div>
            </div>
            <div className="modal-body">
              {children}
            </div>
            {footerContent && (
              <div className="modal-footer">
                {footerContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidePopup