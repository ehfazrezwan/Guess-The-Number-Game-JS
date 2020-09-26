/**
 * Guess The Number Game
 * T̶O̶D̶O̶:̶ G̶e̶t̶ u̶s̶e̶r̶ v̶a̶l̶u̶e̶ f̶r̶o̶m̶ i̶n̶p̶u̶t̶ a̶n̶d̶ s̶a̶v̶e̶ i̶t̶ t̶o̶ v̶a̶r̶i̶a̶b̶l̶e̶ n̶u̶m̶b̶e̶r̶G̶u̶e̶s̶s̶
 *̶ T̶O̶D̶O̶:̶ G̶e̶n̶e̶r̶a̶t̶e̶ a̶ r̶a̶n̶d̶o̶m̶ n̶u̶m̶b̶e̶r̶ 1̶ t̶o̶ 1̶0̶0̶ a̶n̶d̶ s̶a̶v̶e̶ i̶t̶ t̶o̶ v̶a̶r̶i̶a̶b̶l̶e̶ c̶o̶r̶r̶e̶c̶t̶N̶u̶m̶b̶e̶r̶
 *̶ T̶O̶D̶O̶:̶ C̶o̶n̶s̶o̶l̶e̶ w̶h̶e̶t̶h̶e̶r̶ t̶h̶e̶ g̶u̶e̶s̶s̶ i̶s̶ t̶o̶o̶ h̶i̶g̶h̶,̶ t̶o̶o̶ l̶o̶w̶,̶ o̶r̶ i̶s̶ c̶o̶r̶r̶e̶c̶t̶ i̶n̶s̶i̶d̶e̶ p̶l̶a̶y̶G̶a̶m̶e̶ f̶u̶n̶c̶t̶i̶o̶n̶
 *̶ T̶O̶D̶O̶:̶ C̶r̶e̶a̶t̶e̶ a̶ f̶u̶n̶c̶t̶i̶o̶n̶ c̶a̶l̶l̶e̶d̶ d̶i̶s̶p̶l̶a̶y̶R̶e̶s̶u̶l̶t̶ t̶o̶ m̶o̶v̶e̶ t̶h̶e̶ l̶o̶g̶i̶c̶ f̶o̶r̶ i̶f̶ t̶h̶e̶ g̶u̶e̶s̶s̶ i̶s̶ t̶o̶o̶ h̶i̶g̶h̶,̶ t̶o̶o̶ l̶o̶w̶,̶ o̶r̶ c̶o̶r̶r̶e̶c̶t̶
 *̶ T̶O̶D̶O̶:̶ C̶o̶m̶p̶l̶e̶t̶e̶ t̶h̶e̶ s̶h̶o̶w̶Y̶o̶u̶W̶o̶n̶,̶ s̶h̶o̶w̶N̶u̶m̶b̶e̶r̶A̶b̶o̶v̶e̶,̶ s̶h̶o̶w̶N̶u̶m̶b̶e̶r̶B̶e̶l̶o̶w̶
 *̶ T̶O̶D̶O̶:̶ U̶s̶e̶ t̶h̶e̶ s̶h̶o̶w̶Y̶o̶u̶W̶o̶n̶.̶.̶.̶ f̶u̶n̶c̶t̶i̶o̶n̶s̶ w̶i̶t̶h̶i̶n̶ d̶i̶s̶p̶l̶a̶y̶R̶e̶s̶u̶l̶t̶ t̶o̶ d̶i̶s̶p̶l̶a̶y̶ t̶h̶e̶ c̶o̶r̶r̶e̶c̶t̶ d̶i̶a̶l̶o̶g̶
 *̶ T̶O̶D̶O̶:̶ S̶a̶v̶e̶ t̶h̶e̶ g̶u̶e̶s̶s̶ h̶i̶s̶t̶o̶r̶y̶ i̶n̶ a̶ v̶a̶r̶i̶a̶b̶l̶e̶ c̶a̶l̶l̶e̶d̶ g̶u̶e̶s̶s̶
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guessList = []

// Variable for store the correct random number 
let correctNumber;

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)

    initGame()
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById("number-guess").value
  saveGuessHistory(numberGuess)
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
function displayResult() {
  // *CODE GOES BELOW HERE *

  if(numberGuess > correctNumber) {
    console.log("You guessed too high!")
    showNumberAbove()
  }else if(numberGuess < correctNumber) {
    console.log("You guessed too low!")
    showNumberBelow()
  }else {
    console.log("You guessed correct!")
    showYouWon()
  }
}


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  correctNumber = getRandomNumber()
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  return Math.floor(Math.random() * 100) + 1;     // returns a random integer from 0 to 99
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guessList.push(guess)
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("won", text)

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text)

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text)

  document.getElementById("result").innerHTML = dialog;
}
