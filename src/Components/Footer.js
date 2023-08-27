import React from "react";

const Footer = ({ onClick }) => {
  return (
    <div className="panel footer">
      <button onClick={onClick}>New Game</button>
    </div>
  );
};

export default Footer;
