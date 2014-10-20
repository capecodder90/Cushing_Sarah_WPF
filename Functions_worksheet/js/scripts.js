/*
Sarah A. Cushing
Monday, October 20, 2014
Assignment: Functions Worksheet
 */

// Circumference

// The circumference of a circle is equal to 2 times pi times the radius

var two = 2; // declares two, defines it as 2
var pi = 3.14; // declares pi, defines it as 3.14
var circumference = calcCircumference(28); // declares circumference, sets it equal to the value returned from the function calcCircumference with the arguments two, pi, and radius (values of which are stored in the variables)
console.log("The circumference of the circle is " + circumference + "."); // concatenate the string and print the result to the console

function calcCircumference(radius){ // creates the function calcCircumference with the parameters two, pi and radius
    return two * pi * radius; // tells it to return the value of two times pi times radius
}


// Stung!

// Find the number of bee stings required to kill and animal by dividing the victim's weight by 8.666666667 bee stings per pound

var stingsPerPound = 8.666666667; // declares stingsPerPound, defines it as 8.666666667
var numBeeStings = calcBeeStings(140); // declares numBeeStings, defines it as equal to the value stored in the function calcBeeStings with the argument of victimWeight as 140 pounds
console.log("It takes " + numBeeStings + " bee stings to kill this animal.");

function calcBeeStings(victimWeight){
    return victimWeight / stingsPerPound;
}