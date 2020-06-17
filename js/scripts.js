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

Game.prototype.addScore = function(game) {
  console.log(this.turn);
  console.log(this.currentRoll);
  console.log(this.players[0].score)

  if (this.currentRoll === 1) {
    this.switchTurn();
  } else if (this.currentRoll > 1) {
    if (this.turn === this.players[0].id) {
      this.players[0].score += this.currentRoll;
    } else if (this.turn === this.players[1].id) {
      this.players[1].score += this.currentRoll;
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
  });
  
  $("#roll").click(function() {
  
    roll = Math.floor((Math.random() * 6) + 1);
    $("#die-value").text(roll);
    game.currentRoll = roll;
    game.addScore();
    console.log(playerOne, playerTwo);
  //   if (roll === 1) {
  //     game.switchTurn();
  //   } else if (roll > 1) {
  //     if (game.turn === playerOne.id) {
  //       playerOne.score += roll;
  //     } else if (game.turn === playerTwo.id) {
  //       playerTwo.score += roll;
  //       }
  //   }
  //   console.log(playerOne, playerTwo);
  // });


    // for (let i=0; game.players.length; i++) {
    //   if (game.players[i]) {
    //     if (game.players[i].id == turn) {
    //       return game.players.score += roll;
    //     }
    //   } else {
    //     return false;
    //   }
    // }
//    game.addScore();

    // console.log(playerOne, playerTwo);
    //playerOne, playerTwo)
  
//});
  });
});
