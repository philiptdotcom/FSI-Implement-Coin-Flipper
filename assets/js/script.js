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
document.addEventListener('DOMContentLoaded', function() { //this makes sure the HTML is loaded (so we therefore have access to its content) before we try to run any code 20220131/PT@PhilipT.com
	console.log('DOMContentLoaded')
})

//------------ INITIALIZATION ---------------
// Declare any global variables we need

const
	pennyHeadsImgfile = 'assets/images/penny-heads.jpg'
	pennyTailsImgfile = 'assets/images/penny-tails.jpg'
	pennyInitialImgfile = 'assets/images/penny-questionmark.jpg'
//TEMP
console.log(pennyInitialImgfile)

let
	isHeads = new Boolean(),
	howManyHeads = 0,
	howManyTails = 0,
	totalFlips = 0

//------------ TROUBLESHOOTING/LOGIC DEVELOPMENT ---------------
// (Comment this out for production version)

///*
//test flipCoin function:
for (i=1; i<=4; i++) {
	if (flipCoin() === true) {
//DEBUG		console.log("flipCoin is TRUE")
		howManyHeads++} /* if flipCoin() */
		else {
//DEBUG			console.log("flipCoin is FALSE")
			howManyTails++
			}	//else
			totalFlips = howManyHeads + howManyTails
			percentHeads = Math.round(((howManyHeads / totalFlips)) * 100)
			percentTails = Math.round(((howManyTails / totalFlips)) * 100)
//DEBUG	console.log(`total heads: ${howManyHeads}, total tails: ${howManyTails}, total flips: ${totalFlips}, heads: ${percentHeads}%, tails: ${percentTails}%"\n\n`) 
	}       //for i=1...
//*/

//------------ FUNCTIONS ---------------
// Define all functions (at the top of the code)

function flipCoin() {
//	console.log("(Math.round((Math.random() * 1)) === 1) : ", (Math.round((Math.random() * 1)) === 1))
	if (Math.round((Math.random() * 1)) === 1) {	/* Returns a random integer from 0 to 1 */ //HOW TO DO THIS MORE ELEGANTLY (than if/else)? "isHeads = boolean(numExp)" 20220131/PT@PhilipT.com
		isHeads = true}	// if...
		else {
			isHeads = false
		} // else...
		return isHeads
	}	//function flipCoin...

//------------ MAIN CODE BODY ---------------

// create coin image element
console.log('create coin image element')	//DEBUG
let coinImage = document.createElement('img')
coinImage.setAttribute('id', 'coinImageId')	//or, apparently: coinImage.id = 'coinImageId'
console.log('pennyInitialImgfile: ', pennyInitialImgfile)
coinImage.setAttribute('src', pennyInitialImgfile)	//or, perhaps: coinImage.src = 'pennyInitialImgfile'

// find place to insert coin image
//DEBUG
console.log('find place to insert coin image')

//let whereToPutCoinImage = document.querySelector('div[text()="Penny Image Display, Button Controls, and Status Message"]')

/********** Thanks, Mark N, for helping me with this part!!  ****************/
var xpath = "//div[contains(text(),'Penny Image')]";
let whereToPutCoinImage = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

//DEBUG whereToPutCoinImage.textContent = null	// Setting textContent on a node removes all of the node's children and replaces them with a single text node with the given string value

//DEBUG: just so SOME VALID element is selected, so I can proceed without fixing this problem....
//whereToPutCoinImage = document.querySelector('div')

//TO DO: DELETE text content of whereToPutCoinImage
//whereToPutCoinImage = document.querySelector('div:contains("Penny Image Display, Button Controls, and Status Message")')
whereToPutCoinImage.id = "whereToPutCoinImage"


//whereToPutCoinImage = ''	//DEBUG
//whereToPutCoinImage.setAttribute('content', null)	//DEBUG
//whereToPutCoinImage.setAttribute('textContent', null)	//DEBUG
//whereToPutCoinImage.setAttribute('text', null)	//DEBUG



//DEBUG
console.log('whereToPutCoinImage: ', whereToPutCoinImage)
console.log(whereToPutCoinImage.innerHTML)

// insert initial coin image
//DEBUG: WHY DOESN'T THIS WORK? HOW CAN I MAKE IT WORK? whereToPutCoinImage.insertBefore(coinImage, whereToPutCoinImage.firstChild)

//DEBUG: just to have SOME element selected (should be from the above code, but since that doesn't work [yet]...:)
whereToPutCoinImage.appendChild(coinImage)




// Flip Button Click Handler
coinImage.addEventListener('click', function() {
	if (flipCoin() === true) {
//DEBUG		console.log("flipCoin is TRUE")
				howManyHeads++
				coinImage.src = coinHeadsImage
			} /* if flipCoin() */
				else {
//DEBUG			console.log("flipCoin is FALSE")
					howManyTails++
					coinImage.src = coinTailsImage
				}	//else
					totalFlips = howManyHeads + howManyTails
					percentHeads = Math.round(((howManyHeads / totalFlips)) * 100)
					percentTails = Math.round(((howManyTails / totalFlips)) * 100)
//DEBUG	console.log(`total heads: ${howManyHeads}, total tails: ${howManyTails}, total flips: ${totalFlips}, heads: ${percentHeads}%, tails: ${percentTails}%"\n\n`) 

/*
 this could technically be more efficient if these assignments were put inside if/else (above), but it's trivial and this way may be easier to understand:
 */
		// TODO: Update image and status message in the DOM
		numberOfHeads = document.getElementById('heads')
		numberOfHeads.textContent = howManyHeads

		numberOfTails = document.getElementById('tails')
		headsPercentDisplay = 

		numberOfTails.textContent = howManyTails++
		percent


	// Update the scoreboard
	// TODO: Calculate the total number of rolls/flips
	// Make variables to track the percentages of heads and tails
	// TODO: Use the calculated total to calculate the percentages
	// HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
	// TODO: Update the display of each table cell
})



// TODO: Add event listener and handler clear button
// Clear Button Click Handler
	// TODO: Reset global variables to 0
	// TODO: Update the scoreboard (same logic as in flip button click handler)
