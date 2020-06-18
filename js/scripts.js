// Business Logic
Game = function(players, turn, currentRoll) {
  this.players = players;
  this.turn = turn;
  this.currentRoll = currentRoll;
}

Player = function(name, score, id){
  this.name = name;
  this.score = score;
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
  //console.log(this.players[1].name)
  if (this.turn === 1) {
    return this.players[0].name;
   } else {
   return this.players[1].name;
   }
}

Game.prototype.addScore = function(game) {
  if (this.currentRoll === 1) {
    this.switchTurn();
    //this.turnText();
  } else if (this.currentRoll > 1) {
    if (this.turn === this.players[0].id) {
      this.players[0].score += this.currentRoll;
      
    } else if (this.turn === this.players[1].id) {
      this.players[1].score += this.currentRoll;
      }
  }
}

// User Interface Logic
Game.prototype.displayGameDetails = function(game) {
  
  let currentPlayer = this.turnText();
  
  $("#player-one").text(this.players[0].name);
  $("#player-two").text(this.players[1].name);
  $("#player-one-score").text(this.players[0].score);
  $("#player-two-score").text(this.players[1].score);
  $("#turn").text(currentPlayer);
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
    playerOne.score =  0;
    playerOne.id = 1;
    
    playerTwo.name = $("input#player-two-name").val();
    playerTwo.score = 0;
    playerTwo.id = 2;
    
    game.displayGameDetails();
    $("#hide").show();
    $("#show").hide();
  });
  
  $("#roll").click(function() {
    roll = Math.floor((Math.random() * 6) + 1);
    $("#die-value").text(roll);
    game.currentRoll = roll;
    game.addScore();
    game.displayGameDetails();
  });

  $("#hold").click(function() {
    game.switchTurn();
    game.displayGameDetails();
  });
});
