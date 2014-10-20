/*
Sarah A. Cushing
Monday, October 20, 2014
Assignment: Functions Worksheet
 */

// Circumference

// The circumference of a circle is equal to 2 times pi times the radius

var two = 2;
var pi = 3.14;
var radius = 28;
var circumference = calcCircumference(two, pi, radius);
console.log("The circumference of the circle is " + circumference + ".");

function calcCircumference(two, pi, radius){
    return two * pi * radius;
}