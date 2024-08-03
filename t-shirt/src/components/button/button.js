import React from "react";

const Button = ({ title }) => {

  return <div className="w-full bg-black text-white py-2" style={{textAlign:"center",borderRadius:"20px",cursor:"pointer"}}>{title}</div>;

};

export default Button;
