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
console.log("Sparky got " + parseInt(sparkySlices) + " slices of pizza."); // writes the number as a whole integer in the console, concatenates the strings

//Problem: Average Shopping Bill
// The average weekly grocery shopping amount is equal to the five week's totals added together, and then divided by five
var shopTotals = new Array(250, 300, 100, 123, 281); // array of shopping totals for five weeks
var totalAmt = shopTotals[0] + shopTotals[1] + shopTotals[2] + shopTotals[3] + shopTotals[4]; // finds the sum of the totals for all five weeks
var average = totalAmt / 5; // finds the average for the five weeks

console.log("You have spent a total of " + "$" + totalAmt + " on groceries over 5 weeks. That is an average of " + "$" + average + " per week."); // concatenates the strings and prints them to the console

//Problem: Discounts
// The item's price with tax is equal to the original price times the sales tax plus the original price minus the discount. The item's price without tax is equal to the original price minus the discount.
var origPrice = 250; // items original price
var percDiscount = 20; // item discount percent
var itemDescrip = "Netbook"; // item description
var salesTax = origPrice * 0.0625; // item sales tax
var wTax = (origPrice - origPrice * (percDiscount / 100)) + salesTax; // price of item with the discount and sales tax (20 / 100 = .20, .20 * $250 = $50, $250 - $50 = $200, $250 * 0.0625 = $15.625, $200 + 15.625 = $215.625)
var woTax = origPrice - origPrice * (percDiscount / 100); // price of the item with the discount only (20 / 100 = .20, .20 * $250 = $50, $250 - $50 = $200)

console.log("Your " + itemDescrip + " was originally $" + origPrice + ", but after a " + percDiscount + "% discount, it is now $" + woTax + " without tax, and $" + wTax + " with tax."); // concatenates the strings and writes them to the console