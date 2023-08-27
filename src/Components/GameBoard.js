import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import { IsWinner, isDraw, getComputerMove } from "../helper";

import {
  NO_PLAYER,
  PLAYER1,
  PLAYER2,
  SIZE,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "../Constants";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(SIZE).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    setGameBoard(Array(SIZE).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER1);
    setGameState(GAME_STATE_PLAYING);
    console.log("initGame");
  };

  const suggestMove = () => {
    circleClicked(getComputerMove(gameBoard));
  };

  const circleClicked = (id) => {
    if (gameBoard[id] !== NO_PLAYER || gameState !== GAME_STATE_PLAYING) return;
    if (IsWinner(gameBoard, id, currentPlayer)) {
      setWinPlayer(currentPlayer);
      setGameState(GAME_STATE_WIN);
    } else if (isDraw(gameBoard, id, currentPlayer)) {
      setWinPlayer(NO_PLAYER);
      setGameState(GAME_STATE_DRAW);
    }
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      ></GameCircle>
    );
  };

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < SIZE; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };
  return (
    <>
      <Header
        player={currentPlayer}
        gameState={gameState}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">{initBoard()}</div>
      <Footer
        onClick={initGame}
        onSuggestClick={suggestMove}
        gameState={gameState}
      />
    </>
  );
};

export default GameBoard;
