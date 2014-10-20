/*
Sarah A. Cushing
Monday, October 20, 2014
Assignment: Functions Worksheet
 */

// Circumference

// The circumference of a circle is equal to 2 times pi times the radius

var two = 2; // declares two, defines it as 2
var pi = 3.14; // declares pi, defines it as 3.14
var circumference = calcCircumference(28); // declares circumference, sets it equal to the value returned from the function calcCircumference with the argument of radius as 28
console.log("The circumference of the circle is " + circumference + "."); // concatenate the string and print the result to the console

function calcCircumference(radius){ // creates the function calcCircumference with the parameter of radius
    return two * pi * radius; // tells it to return the value of two times pi times radius (set in the argument)
}


// Stung!

// Find the number of bee stings required to kill and animal by dividing the victim's weight by 8.666666667 bee stings per pound

var stingsPerPound = 8.666666667; // declares stingsPerPound, defines it as 8.666666667
var numBeeStings = calcBeeStings(140); // declares numBeeStings, defines it as equal to the value stored in the function calcBeeStings with the argument of victimWeight as 140 pounds
console.log("It takes " + numBeeStings + " bee stings to kill this animal."); // concatenates the string, then prints it to the console

function calcBeeStings(victimWeight){ // declares the calcBeeStings function with the parameter of victimWeight
    return victimWeight / stingsPerPound; // tells it to return the value of victimWeight (set in the argument) divided by stingsPerPound
}