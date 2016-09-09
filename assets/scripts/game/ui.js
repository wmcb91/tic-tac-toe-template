
'use strict';

const logic = require('./logic');

const drawBoard = function (array) {
  for (let i = 0; i < array.length; i++) {
    $('.board').append('<div id =' + i + '></div>');
    $('.board div').addClass('square');
  }
};
//sets up the board visually

const setCell = function (cell, player) {
  $('#' + cell).html
    ('<img src = ../../assets/images/' + player + '.png style="width: 130px">')
      .off();
  logic.currentGame.game.cells[cell] = player;
};
//visually updates cell with player token

const onSignUpSuccess = function (data) {
  if (data) {
    console.log(data, "You are signed up!");
  } else {
    console.log("Didn't work");
  }
};

const onSignInSuccess = function (data) {
  if (data){
    console.log(data, "You are signed in!");
  } else {
    console.log("Nope!");
  }
};

const onError = function (response) {
  console.error(response);
};

module.exports = {
  drawBoard,
  setCell,
  onSignUpSuccess,
  onSignInSuccess,
  onError,
};
