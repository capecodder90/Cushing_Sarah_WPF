/*
Sarah A. Cushing
Wednesday, October 8, 2014
Expressions Assignment: Wacky
 */

// Determine how many gallons of milk and chocolate syrup you will need to fill your rectangular bathtub with chocolate milk. Figure it out for your two favorite chocolate syrups. Change the number of tbsp. of syrup to make it more or less chocolate-y.

// Ask the user their favorite brands of chocolate syrup.
var syrup1 = prompt("What is the brand of your favorite chocolate syrup?"); // declares syrup1 and uses a prompt to ask the user to input the name of their favorite syrup; stores the input
var syrup2 = prompt("What is the brand of your second favorite chocolate syrup?"); // declares syrup2 and uses a prompt to ask the user to input the name of their second favorite syrup; stores the input

// Ask the user for the dimensions of the inside of their bathtub
var width = prompt("What is the length of the inside of your bathtub in inches"); // declares width and uses a prompt to ask the user to input the width of the tub in inches, stores the input
var length = prompt("What is the width of the inside of your bathtub in inches"); // declares length and uses a prompt to ask the user to input the length of the tub in inches, stores the input
var height = prompt("What is the height of the inside of your bathtub in inches"); // declares height and uses a prompt to ask the user to input the height of the tub in inches, stores the input

// Calculate the volume of the bathtub
var volume = width * length * height; // declares volume, multiplies the width times the length times the height, stores the calculation

