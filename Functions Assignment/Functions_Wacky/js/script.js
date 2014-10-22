/*
 Sarah A. Cushing
 Wednesday, October 22, 2014
 Functions Assignment: Wacky
 */

// If you are only allowed 5 orange sprinkles per cupcake, how many cupcakes will you need to eat before you eat all the orange sprinkles that you want?

var orangeSprinkles = 5;
var sprinkles = Number(prompt("How many sprinkles do you need to eat?"));
var cupcakesToEat = Number(prompt("How many cupcakes do you think you can eat right now?"));
var orangeSprinklesTotal = numOfSprinkles(orangeSprinkles, cupcakesToEat);

function numOfSprinkles(orangeSprinkles, cupcakesToEat){
    return orangeSprinkles * cupcakesToEat;
}

(orangeSprinklesTotal >= sprinkles) ? console.log("That will work. You can eat enough cupcakes!") : console.log("That's only " + orangeSprinklesTotal + ". You need to eat more cupcakes!");