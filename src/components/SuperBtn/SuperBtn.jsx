import React from "react";

const SuperBtn = ({ title, type, styles, handleClick }) => {
  return (
    <button
      type={type}
      style={styles}
      onClick={() => {
        console.log("Click inside SuperBtn");
        handleClick();
      }}
    >
      {title}
    </button>
  );
};

export default SuperBtn;
