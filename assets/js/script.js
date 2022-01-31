/*
The code-writing process:

	-solve the LOGIC (create vars with appropriate values/etc.)
		BEFORE trying to
	-render the results
		BECAUSE then
	-both processes are easier:
		-logic is just logic
			AND
		-rendering data is just rendering data

No need to get bogged down in both at the same time!

:)	20220131/PT@PhilipT.com

*/


//------------ INITIALIZATION ---------------
// TODO: Declare any global variables we need

let
	isHeads = new Boolean(),
	howManyHeads = 0,
	howManyTails = 0,
	totalFlips = 0

function flipCoin() {
	console.log("(Math.round((Math.random() * 1)) === 1) : ", (Math.round((Math.random() * 1)) === 1))
	if (Math.round((Math.random() * 1)) === 1) {	/* Returns a random integer from 0 to 1 */ //HOW TO DO THIS MORE ELEGANTLY (than if/else)? "isHeads = boolean(numExp)" 20220131/PT@PhilipT.com
		isHeads = true} else {
			isHeads = false
		} //if/else...
		return isHeads
	}	//function flipCoin...

document.addEventListener('DOMContentLoaded', function () { //this makes sure the HTML is loaded (so we therefore have access to its content) before we try to run any code 20220131/PT@PhilipT.com

//test flipCoin function:
for (i=1; i<=4; i++) {
	if (flipCoin() === true) {
		console.log("flipCoin is TRUE")
		howManyHeads++} else {
			console.log("flipCoin is FALSE")
			howManyTails++
			}
			totalFlips = howManyHeads + howManyTails
			percentHeads = Math.round(((howManyHeads / totalFlips)) * 100)
			percentTails = Math.round(((howManyTails / totalFlips)) * 100)
	console.log(`total heads: ${howManyHeads}, total tails: ${howManyTails}, total flips: ${totalFlips}, heads: ${percentHeads}%, tails: ${percentTails}%"\n\n`) 
	}       //for i=1...
		
// TODO: Add event listener and handler for flip and clear buttons

// Flip Button Click Handler
	// TODO: Determine flip outcome
	// TODO: Update image and status message in the DOM
	// Update the scoreboard
	// TODO: Calculate the total number of rolls/flips
	// Make variables to track the percentages of heads and tails
	// TODO: Use the calculated total to calculate the percentages
	// HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
	// TODO: Update the display of each table cell

// Clear Button Click Handler
	// TODO: Reset global variables to 0
	// TODO: Update the scoreboard (same logic as in flip button click handler)

})