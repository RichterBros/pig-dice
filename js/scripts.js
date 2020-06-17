// Business Logic
Game = function(players, turn) {
  this.players = players;
  this.turn = turn
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

Player.prototype.addScore = function(){

  this.score += roll;
  console.log()
}

// $("#hold").click(function( {

// })


// User Interface Logic
$(document).ready(function() {

  let game = new Game("")

  let playerOne = new Player("");
  let playerTwo = new Player("");

  let roll = "";

  $("#player-info").submit(function(event) {
    event.preventDefault();

    playerOne.name = $("input#player-one-name").val();
    playerOne.score =  0;
    playerOne.id = 1;
    
    playerTwo.name = $("input#player-two-name").val();
    playerTwo.score = 0;
    playerTwo.id = 2;

    game.players = [playerOne, playerTwo];
    game.turn = playerOne.id;

    console.log(game);
    console.log(playerOne, playerTwo);

    game.switchTurn();

    console.log(game);
  });
  
  $("#roll").click(function() {
  
    let roll = Math.floor((Math.random() * 6) + 1);
//    playerOne.switchTurn()
//    playerTwo.switchTurn()
    console.log(playerOne);
    console.log(playerTwo);
    $("#die-value").text(roll);
  
});

});
