import React from "react";

const Footer = ({ onClick, onSuggestClick }) => {
  return (
    <div className="panel footer">
      <button onClick={onClick}>New Game</button>
      <button onClick={onSuggestClick}>Suggest</button>
    </div>
  );
};

export default Footer;
