




Player = function(name, score, turn, id){
  this.name = name;
  this.score = score;
  this.turn = turn;
  this.id = id;
}



Player.prototype.addScore = function(){

//this.score =  

    
}

// let roll = "";
// $("#roll").click(function() {
//   let roll = Math.floor((Math.random() * 6) + 1);
// });

// $("#hold").click(function( {
  
// })








$(document).ready(function() {

  let playerOne = new Player("");
  let playerTwo = new Player("");

  $("#player-info").submit(function(event) {
    event.preventDefault();

    playerOne.name = $("input#player-one-name").val();
    playerOne.score = 0;
    playerOne.turn = true;
    playerOne.id = "1";

    playerTwo.name = $("input#player-two-name").val();
    playerTwo.score = 0;
    playerTwo.turn = false;
    playerTwo.id = "2";

    console.log(playerOne);
    console.log(playerTwo);

  });
});
