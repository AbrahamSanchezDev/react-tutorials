import React from "react";
import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "../Constants";

const Header = ({ player, gameState, winPlayer }) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return `Player ${player} Turn`;
      case GAME_STATE_WIN:
        return `Player ${winPlayer} Wins!`;
      case GAME_STATE_DRAW:
        return `ITS A DRAW!`;
      default:
        return "NO STATE ATM";
    }
  };
  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;
