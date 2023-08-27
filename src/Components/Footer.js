import React from "react";
import { GAME_STATE_PLAYING } from "../Constants";

const Footer = ({ onClick, onSuggestClick, gameState }) => {
  const renderButton = () => {
    if (gameState === GAME_STATE_PLAYING) {
      return (
        <button
          onClick={onSuggestClick}
          disabled={gameState !== GAME_STATE_PLAYING}
        >
          Suggest
        </button>
      );
    }
    return <button onClick={onClick}>New Game</button>;
  };
  return <div className="panel footer">{renderButton()}</div>;
};

export default Footer;
