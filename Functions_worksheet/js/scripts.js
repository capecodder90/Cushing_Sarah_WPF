/*
Sarah A. Cushing
Monday, October 20, 2014
Assignment: Functions Worksheet
 */

// Circumference

// The circumference of a circle is equal to 2 times pi times the radius

var two = 2; // declares two, defines it as 2
var pi = 3.14; // declares pi, defines it as 3.14
var radius = 28; // declares radius, defines it as 28
var circumference = calcCircumference(two, pi, radius); // declares circumference, sets it equal to the value returned from the function calcCircumference with the arguments two, pi, and radius (values of which are stored in the variables)
console.log("The circumference of the circle is " + circumference + "."); // concatenate the string and print the result to the console

function calcCircumference(two, pi, radius){ // creates the function calcCircumference with the parameters two, pi and radius
    return two * pi * radius; // tells it to return the value of two times pi times radius
}


// Stung!

// Find the number of bee stings required to kill and animal by dividing the victim's weight by 8.666666667 bee stings per pound

var victimWeight = 150;
var stingsPerPound = 8.666666667;
var numBeeStings = calcBeeStings(victimWeight, stingsPerPound);
