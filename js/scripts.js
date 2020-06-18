// Business Logic
Game = function(players, turn, currentRoll) {
  this.players = players;
  this.turn = turn;
  this.currentRoll = currentRoll;
}

Player = function(name, gameScore, turnScore, id) {
  this.name = name;
  this.gameScore = gameScore;
  this.turnScore = turnScore;
  this.id = id;
}

Game.prototype.switchTurn = function(game) {
  if (this.turn === 1) {
    return this.turn = 2 
  } else {
    return this.turn = 1
  }
}

Game.prototype.turnText = function(game) {
  if (this.turn === 1) {
    return this.players[0].name;
  } else {
  return this.players[1].name;
  }
}

Game.prototype.turnTotal = function(game) {
  if (this.turn === 1) {
    return this.players[0].turnScore;
  } else {
    return this.players[1].turnScore;
  }
}

Game.prototype.turnScore = function(game) {
  if (this.currentRoll === 1) {
    this.switchTurn();
    this.resetTurnScore();
    this.currentRoll = 0;
  } else if (this.currentRoll > 1) {
    if (this.turn === this.players[0].id) {
      this.players[0].turnScore += this.currentRoll;
      
    } else if (this.turn === this.players[1].id) {
      this.players[1].turnScore += this.currentRoll;
      }
  }
}

Game.prototype.totalScore = function(game) {
  if (this.turn === this.players[0].id) {
    this.players[0].gameScore += this.players[0].turnScore;
  } else {
    this.players[1].gameScore += this.players[1].turnScore;
  }
}

Game.prototype.resetTurnScore = function(game) {
  this.players[0].turnScore = 0;
  this.players[1].turnScore = 0;
}

// User Interface Logic
Game.prototype.hideButton = function(game) {
  if (this.currentRoll === 1) {
    $("#hold").hide();
  } else {
    $("#hold").show();
  }
}

Game.prototype.displayGameDetails = function(game) {
  
  let currentPlayer = this.turnText();
  let turnTotal = this.turnTotal();
  
  $("#player-one").text(this.players[0].name);
  $("#player-two").text(this.players[1].name);
  $("#player-one-score").text(this.players[0].gameScore);
  $("#player-two-score").text(this.players[1].gameScore);
  $("#turn-total").text(turnTotal);
  $("#turn").text(currentPlayer);
}

Game.prototype.winCheck = function(game) {
  if (this.players[0].gameScore >= 100) {
    $("#hide").hide();
    $("#win").show();
    $("#winner").text(this.players[0].name);
  } else if (this.players[1].gameScore >= 100) {
    $("#hide").hide();
    $("#win").show();
    $("#winner").text(this.players[1].name);
  }
}

$(document).ready(function() {

  let game = new Game("")

  let playerOne = new Player("");
  let playerTwo = new Player("");

  let roll = 0;

  game.players = [playerOne, playerTwo];
  game.turn = 1
  game.currentRoll = 0;

  $("#player-info").submit(function(event) {
    event.preventDefault();

    playerOne.name = $("input#player-one-name").val();
    playerOne.turnScore = 0;
    playerOne.gameScore = 0;
    playerOne.id = 1;
    
    playerTwo.name = $("input#player-two-name").val();
    playerTwo.turnScore = 0;
    playerTwo.gameScore = 0;
    playerTwo.id = 2;
    
    game.displayGameDetails();
    $("#hide").show();
    $("#show").hide();
  });
  
  $("#roll").click(function() {
    let roll = Math.floor((Math.random() * 6) + 1);
    $("#die-value").text(roll);
    $("#hold").show();
    game.currentRoll = roll;
    console.log(game.currentRoll);
    game.hideButton();
    game.turnScore();
    game.displayGameDetails();
  });

  $("#hold").click(function() {
    $("#hold").hide();
    game.totalScore();
    game.resetTurnScore();
    game.winCheck();
    game.switchTurn();
    game.displayGameDetails();
  });

  $("#play-again").click(function() {
    location.reload(true);
  });
});

