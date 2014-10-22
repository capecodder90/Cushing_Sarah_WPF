/*
 Sarah A. Cushing
 Wednesday, October 22, 2014
 Functions Assignment: Personal
 */

// How many pairs of jeans can I buy after depositing this week’s paycheck?

var paycheck = Number(prompt("How much was this week's paycheck for?"));
var inTheBank = Number(prompt("How much money in in the checking account?"));
var priceOfJeans = 42;
var numOfJeans = howManyJeans(paycheck, inTheBank, priceOfJeans);

function howManyJeans(paycheck, inTheBank, priceOfJeans){
    return parseInt((paycheck + inTheBank) / priceOfJeans);
}

console.log("I can buy " + numOfJeans + " pairs of jeans.");
console.log(paycheck + inTheBank);