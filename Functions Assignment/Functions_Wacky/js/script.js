/*
 Sarah A. Cushing
 Wednesday, October 22, 2014
 Functions Assignment: Wacky
 */

// If you are only allowed 5 orange sprinkles per cupcake, how many cupcakes will you need to eat before you eat all the orange sprinkles that you want?

var orangeSprinkles = 5; // declares orangeSprinkles, defines it as 5 sprinkles per cupcake
var sprinkles = Number(prompt("How many sprinkles do you need to eat?")); // declares sprinkles, prompt the user to input the number of sprinkles they want to eat, store it as a number
var cupcakesToEat = Number(prompt("How many cupcakes do you think you can eat right now?")); // declares cupcakesToEat, prompts the user to input how many cupcakes they think they can eat, stores it as a number
var orangeSprinklesTotal = numOfSprinkles(orangeSprinkles, cupcakesToEat); // declares orangeSprinklesTotal, sets it equal to the result returned to numOfSprinkles with the arguments orangeSprinkles (pulled from the variable above) and cupcakesToEat (pulled from the variable above)

// creates the function numOfSprinkles with the parameters orangeSprinkles and cupcakesToEat
function numOfSprinkles(orangeSprinkles, cupcakesToEat){
    return orangeSprinkles * cupcakesToEat; // return the value of orangeSprinkles times cupcakesToEat
}

// if the total number of orange sprinkles is greater than or equal to the number of sprinkles desired, then print the "that will work" message to the console, else concatenate and print the "you need more cupcakes" message to the console
(orangeSprinklesTotal >= sprinkles) ? console.log("That will work. You can eat enough cupcakes!") : console.log("That's only " + orangeSprinklesTotal + ". You need to eat more cupcakes!");