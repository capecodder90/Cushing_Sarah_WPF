/*
Sarah A. Cushing
Tuesday, October 7, 2014
Expressions Worksheet
 */

// Problem: Dog Years
// Sparky's dog year's age is equal to his age in human years times human-to-dog years (7)
var humanYrs = 12; // Sparky's age in human years
var humanToDog = 7; // 1 human year is 7 dog years
var dogYrs = "Sparky is " + humanYrs + " human years old which is " + humanYrs * humanToDog + " in dog years."; // result variable, calculates humanYrs, which is 12 years, times humanToDog, which is 7 years, and concatenates the strings in the expression.

console.log(dogYrs); // displays the result of the calculations and concatenation of the variable dogYrs in the console of the web browser

// Problem: Slice of Pie Part I
// Number of slices per person equals the number of pizzas times the number of slices, divided by the number of party goers
var slicePerPizza = 10; // the number of slices per pizza
var partyGoers = 38; // the number of party goers
var numPizzas = 12; // the number of pizzas ordered
var numSlices = "Each person ate " + slicePerPizza * numPizzas / partyGoers + " slices of pizza at the party."; // The result variable. Calculates the slices per pizza times the number of pizzas divided by the number of party goers to determine how many slices each person gets, then concatenates the strings

console.log(numSlices);//  Writes the result of the numSlices variable to the console

//Problem: Slice of Pie Part II
// The number of whole slices Sparky gets to eat is equal to the number of slices times the number of pizzas divided by the number of people
var sparkySlices = numPizzas * slicePerPizza / partyGoers; // the number of pizzas times the number of slices per pizza, divided by the number of people
console.log(parseInt(sparkySlices)); // writes the number as a whole integer in the console
