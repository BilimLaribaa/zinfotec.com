import React from "react";

const Spinner = ({ size = "40px" }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <span 
        className="spinner-border" 
        role="status" 
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default Spinner;
