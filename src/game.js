export function Game(players, turn, currentRoll) {
    this.players = players;
    this.turn = turn;
    this.currentRoll = currentRoll;
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