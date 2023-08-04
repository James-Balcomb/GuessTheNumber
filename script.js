/* Within the function called "randomNumber", it allows for a two parameters to be passed.
   One will be the value that is taken from the input from the HTML document. 
   The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

//randomNumber accepts two args- "userGuess" that is a number that the user has guessed
//"computersNumber" is a number that the computer has come up with that the user is trying to guess
//returns a string based on whether on whether the user guesses too high, too low or correctly
function randomNumber(userGuess, computersNumber) {

    console.log(computersNumber);

    if (userGuess > 100 || userGuess < 1) {
        return ('Please input a number between 1 and 100');
    } else if (userGuess == computersNumber) {
        return ('The number was ' + userGuess);
    } else if (userGuess > computersNumber) {
        return ('Lower');
    } else if (userGuess < computersNumber) {
        return ('Higher');
    }

};


//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called 
    to help manage the flow of your code.
*/
let currentNumber = 1;
let highest = 100;
let lowest = 0;

createGuess = (highest, lowest) => {

    console.log(highest,lowest);
    currentNumber = Math.floor(Math.random() * (highest-lowest + 1) + lowest);
    console.log("CreateGuess", currentNumber);
    return (currentNumber);
};  

function startCompGuess(num) {
    // This should return a string that denotes the first guessed number
    currentNumber = num;
    console.log(currentNumber);
    return ("Is your number " + currentNumber + "?");
}

function compGuess(reply) {
    /* 
    The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.
    This should return a string indicating the computers response.
    */
 
    switch(reply) {
     
          case "higher": 
             highest = currentNumber;
             currentNumber = createGuess(highest, lowest);
             return("Your number is higher? Is it " + currentNumber);
              
          case "lower":
             lowest = currentNumber;
             currentNumber = createGuess(highest, lowest);
             return("Your Number is lower? Is it " + currentNumber);

          case "correct":
             return("I Knew it was " + currentNumber);
    
    }

}

//createGuess(highest, lowest);

/*
### Ticket: `#U2_06`
Considering the `compGuess()` conditional
- **Given** the `Lower` button is clicked.
- **Then** a new guess should be invoked.
- **And** the value should be reassigned to the appropriate variable.
- **Given** the `Higher` button is clicked.
- **Then** a new guess should be invoked.
- **And** the value should be reassigned to the appropriate variable. */
