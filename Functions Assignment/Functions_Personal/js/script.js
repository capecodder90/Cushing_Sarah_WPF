/*
 Sarah A. Cushing
 Wednesday, October 22, 2014
 Functions Assignment: Personal
 */

// How many pairs of jeans can I buy after depositing this week’s paycheck?

var paycheck = Number(prompt("How much was this week's paycheck for?")); // declares paycheck, prompt the user for the paycheck amount, store the value as a number
var inTheBank = Number(prompt("How much money in in the checking account?")); // declares inTheBank, prompt the user for the amount in their checking account, store the value as a number
var priceOfJeans = 42; // declares priceOfJeans, defines it as $42
var numOfJeans = howManyJeans(paycheck, inTheBank, priceOfJeans); // declares numOfJeans, sets it equal to the value returned from the function howManyJeans

// creates howManyJeans function with the parameters paycheck, inTheBank and priceOfJeans
function howManyJeans(paycheck, inTheBank, priceOfJeans){
    return parseInt((paycheck + inTheBank) / priceOfJeans); // calculates the number of jeans that can be purchased and returns the value
}

console.log("I can buy " + numOfJeans + " pairs of jeans."); // concatenated the string, prints it to the console