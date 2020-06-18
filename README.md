# _Pig-Dice_

#### _Dice Game, 6-18-2020_

#### By _**JohnNils Olson, Erich Richter**_

## Description

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

* _If the player rolls a 1, they score nothing and it becomes the next player's turn._
* _If the player rolls any other number, it is added to their turn total and the player's turn continues._
* _If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn._

The first player to score 100 or more points wins.

For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-5, after which she chooses to hold, and adds her turn total of 22 points to her score._

| Spec| Example input | Example Output
| ----------- | ----------- | ----------- |
| player rolls program return a random value | "roll button click" | "4" |
| if number is equal to 1, players turn is ended | "roll button click" | "player twos turn" |
| if player rolls again, values are added | "roll button clicked" | "4 + 2 = 6" |
| if player 1 holds, score is recorded and turn switches to player 2 | "click hold button" | "Total score = 6" "player 2 is up!" |
| player that reaches 100 or more wins | "-" |"player wins!"
| if "start over" button is clicked on the output, page refreshes | "" | "" |










## Setup/Installation Requirements

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:
1. Internet Browser
2. Code editor like VScode to view the codebase

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:

1. Download this repository onto your computer
2. Double click index.html to open it in your web browser

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open via Bash/GitBash:

1. Clone this repository onto your computer:
    "git clone https://github.com/RichterBros/pig-dice"
2. Navigate into the "roman-numeral" directory in Visual Studio Code or preferred text editor:
3. Open the project
    "code ."
3. Open index.html in your browser:
    "open index.html"

## Known Bugs

none

## Support and contact details

JohnNils Olson johnnils@gmail.com ,   Erich Richter erich.richter@gmail.com

## Technologies Used

* Visual Studio Code
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

### License

Copyright (c) 2020 **_JohnNils Olson_** , **_Erich Richter_**

This software is licensed under the MIT license.
