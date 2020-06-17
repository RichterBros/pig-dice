// Business Logic
Player = function(name, score, turn, id){
  this.name = name;
  this.score = score;
  this.turn = turn;
  this.id = id;
}

Player.prototype.switchTurn = function(player) {
  if (this.turn === true) {
    return this.turn = false;
  } else {
    return this.turn = true;
  }
}

Player.prototype.addScore = function(){

this.score += roll;

    console.log()
}

// $("#hold").click(function( {

// })
Player.prototype.counter = function() {
  if (this.count%2 === 0) {
  return true;
  } else {
  return false;
  }
}

// User Interface Logic
$(document).ready(function() {
//player.counter()
  let playerOne = new Player("");
  let playerTwo = new Player("");

  let roll = "";

  $("#player-info").submit(function(event) {
    event.preventDefault();

    playerOne.name = $("input#player-one-name").val();
    playerOne.score =  0;
    playerOne.turn = true;
    playerOne.id = "1";
    
    playerTwo.name = $("input#player-two-name").val();
    playerTwo.score = 0;
    playerTwo.turn = false;
    playerTwo.id = "2";

    console.log(playerOne, playerTwo);
  });
  
  $("#roll").click(function() {
    let roll = Math.floor((Math.random() * 6) + 1);
    
    $("#die-value").text(roll);
  
});

});
