/*
Sarah A. Cushing
Wednesday, October 8, 2014
Expressions Assignment: Wacky
 */

// Determine how many gallons of milk and chocolate syrup you will need to fill your rectangular bathtub with chocolate milk. Figure it out for your two favorite chocolate syrups. Change the number of tbsp. of syrup to make it more or less chocolate-y.

// Ask the user their favorite brands of chocolate syrup.
var syrupBrand = new Array(2); // creates a new array with a variable named syrupBrand
syrupBrand[0] = prompt("What is the brand of your favorite chocolate syrup?"); // uses a prompt to ask the user to input the name of their favorite syrup; stores the input
syrupBrand[1] = prompt("What is the brand of your second favorite chocolate syrup?"); // uses a prompt to ask the user to input the name of their second favorite syrup; stores the input


// Ask the user for the dimensions of the inside of their bathtub.
var width = prompt("What is the length of the inside of your bathtub in inches"); // declares width and uses a prompt to ask the user to input the width of the tub in inches, stores the input
var length = prompt("What is the width of the inside of your bathtub in inches"); // declares length and uses a prompt to ask the user to input the length of the tub in inches, stores the input
var height = prompt("What is the height of the inside of your bathtub in inches"); // declares height and uses a prompt to ask the user to input the height of the tub in inches, stores the input

// Calculate the volume of the bathtub.
var volume = width * length * height; // declares volume, multiplies the width times the length times the height, stores the calculation

// Print result of formula to the console.
console.log("The volume of your bathtub is " + volume + " cubed inches.");// Concatenates the string, and prints the stored data in the volume variable to the console

// Convert inches cubed to US gallons liquid: inches cubed divided by 231.
var numGallons = parseInt(volume / 231); // declares numGallons, calculates the volume divided by 231, stores the answer

// Print result of formula to the console.
console.log("Your bathtub holds approximately " + numGallons + " US gallons liquid."); // Concatenates the string, and prints the stored data in the numGallons variable to the console

// How many tbsp of syrup per gallon, based on the figure in tbsp per 8 oz?
var tbsp = 2; // declares tbsp and defines it as 2
var tbspPerGal = tbsp * 128 / 8; // declares tbspPerGal, takes the value in tbsp, multiples it by 128 (the number of oz in a gallon), and then divides that result by 8 oz (the number of oz held by most drinking glasses)

// Print result of the formula to the console.
console.log("You will need " + tbspPerGal + " tbsp. per US gallon of milk."); // Concatenates the string, and prints the stored data in the tbspPerGal variable to the console

// Calculate how many tbsp. are need for the number of gallons of milk we are putting in the bathtub.
var numSyrup = tbspPerGal * numGallons; // declares numSyrup, multiplies the number of tablespoons per gallon by the number of gallons of milk

// Print result to the console.
console.log("You will need " + numGallons + " US gallons liquid of milk. You will also need " + numSyrup + " tablespoons of " + syrupBrand[0] + " Chocolate Syrup, or " + syrupBrand[1] + " Chocolate Syrup. Have fun!"); // concatenates the strings, and prints the result to the console