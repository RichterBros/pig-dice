




// Player = function(){
//   this.name = name;
//   this.score = score;
//   this.turn = turn;
//   this.id = id;
// }

// let player1 = new Player()

// Player.prototype.addScore = function(){

// this.score =  

    
// }

// let roll = "";
// $("#roll").click(function() {
//   let roll = Math.floor((Math.random() * 6) + 1);
// });

// $("#hold").click(function( {
  
// })








$(document).ready(function() {
  $("#player-info").submit(function(event) {
    event.preventDefault();

    let playerOneName = $("input#player-one-name").val();
    let playerTwoName = $("input#player-two-name").val();

    console.log(playerOneName, playerTwoName);

  });
});
