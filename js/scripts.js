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

Game.prototype.addScore = function(game) {
  for (let i=0; this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == this.turn) {
        return this.players.score += roll;
      }
    }
  }
}
  // if (roll === 1) {
  //   game.switchTurn();
  // } else {
  //   for (i=0; i < this.players; i++){
  //       if (this.player.id === this.turn) {
  //         this.player.score += roll;
  //       }
  //      console.log(player.score)
  //  }

//}
//}

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
    $("#die-value").text(roll);
//    game.addScore();

    console.log(playerOne, playerTwo);
    //playerOne, playerTwo)
  
});

});
