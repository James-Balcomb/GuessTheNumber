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

 /*   ### Ticket: `#U2_02`
    - **Given** there is a need to store a value in the global scope of the `script.js` file.
    - **Then** create a variable called `currentNumber`.
    - **And** assign a value of 1 to the variable.
    - **Given** that a value is stored in the `currentNumber` variable.
    - **Then** return a string that states, "Is your number <`currentNumber`>?" within the `startCompGuess()` function. */
let currentNumber;

function startCompGuess(num) {
    // This should return a string that denotes the first guessed number
    currentNumber = num;

    console.log(currentNumber);
    return(currentNumber);


}

function compGuess(reply, currentNumber) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
   console.log(currentNumber);

}

