'use strict';

let player;
let whoseTurn = 0;
let winner;

let currentGame = {
  game: {
    id: "",
    cells:"",
    over: false,
    player_x : {
      id: "",
      email: ""
    },
    player_o: {
      id: "",
      email: ""
    }
  },
};

const initializeBoard = function () {
  currentGame.game.cells = [];
  for (let i = 0; i < 9; i++) {
    currentGame.game.cells.push("");
  }
};
//sets up an array for the board

const isPlayerTurn = function () {
  if (whoseTurn === 0) {
    player = 'x';
  } else {
    player = 'o';
  }

  return player;
};
//assigns turn to player

const turnSwitch = function () {
  if (whoseTurn === 1) {
    whoseTurn = 0;
  } else {
    whoseTurn = 1;
  }
};
//switches between turns

const isVacantCell = function (cell) {
  return currentGame.game.cells[cell] === "";
};
//checks if cell is vacant

const setCellData = function(cell, player){
  currentGame.game.cells[cell] = player;
  return player;
};

const horizontalWin = function () {
    if (currentGame.game.cells[0]  &&
        currentGame.game.cells[0] === currentGame.game.cells[1] &&
        currentGame.game.cells[0] === currentGame.game.cells[2]) {
      winner = currentGame.game.cells[0];
    } else if (currentGame.game.cells[3]  &&
              currentGame.game.cells[3] === currentGame.game.cells[4] &&
              currentGame.game.cells[3] === currentGame.game.cells[5]) {
      winner = currentGame.game.cells[3];
    } else if (currentGame.game.cells[6] &&
              currentGame.game.cells[6] === currentGame.game.cells[7] &&
              currentGame.game.cells[6] === currentGame.game.cells[8]) {
      winner = currentGame.game.cells[6];
    }
    return winner;
  };
//checks for horizontal set up for possible win

const verticalWin = function () {
    if (currentGame.game.cells[0] &&
        currentGame.game.cells[0] === currentGame.game.cells[3] &&
        currentGame.game.cells[0] === currentGame.game.cells[6]) {
      winner = currentGame.game.cells[0];
    } else if (currentGame.game.cells[1] &&
      currentGame.game.cells[1] === currentGame.game.cells[4] &&
      currentGame.game.cells[1] === currentGame.game.cells[7]) {
      winner = currentGame.game.cells[1];
    } else if (currentGame.game.cells[2] &&
              currentGame.game.cells[2] === currentGame.game.cells[5] &&
              currentGame.game.cells[2] === currentGame.game.cells[8]) {
      winner = currentGame.game.cells[2];
    }
    return winner;
  };
//checks for vertical setup for possible win

const diagonalWin = function () {
  if (currentGame.game.cells[4]) {
    if (currentGame.game.cells[4] === currentGame.game.cells[0] &&
      currentGame.game.cells[4] === currentGame.game.cells[8] ||
      currentGame.game.cells[4] === currentGame.game.cells[2] &&
      currentGame.game.cells[4] === currentGame.game.cells[6]) {
      winner = currentGame.game.cells[4];
    }
  }
  return winner;
};
//checks for diagonal setup for possible win

const winCheck = function () {
  return horizontalWin() || verticalWin() || diagonalWin();
};
//checks for a win condition

const tieCheck = function () {
  let count = 0;
  for (let i = 0; i < currentGame.game.cells.length; i++) {
    if (currentGame.game.cells[i] === 'x' || currentGame.game.cells[i] === 'o'){
      count++;
    }
  }
  return count === 9;
};
//checks for a tie condition


const displayWinner = function () {
  if (winner === null) {
    $('.display-stats').html("It's a tie!");
  } else if (winner){
  $('.display-stats').html('' + winner + ' has won the game.');
  }
};
//displays winner

const winnerDeclare = function () {
  let declaration = "" + winner + " has won this round!";
  return declaration;
};

const restartGameData = function () {
  currentGame.game.over = false;
  initializeBoard(currentGame.game.cells);
  whoseTurn = 0;
  winner = null;
};
//restarts game data


module.exports = {
  currentGame,
  player,
  whoseTurn,
  initializeBoard,
  isPlayerTurn,
  turnSwitch,
  isVacantCell,
  horizontalWin,
  verticalWin,
  diagonalWin,
  winCheck,
  tieCheck,
  displayWinner,
  restartGameData,
  setCellData,
  winner,
  winnerDeclare,
};
