/*
 Sarah A. Cushing
 Wednesday, October 22, 2014
 Functions Assignment: Personal
 */

// How many pairs of jeans can I buy after depositing this week’s paycheck?

var paycheck = prompt("How much was this week's paycheck for?");
var inTheBank = prompt("How much money in in the checking account?");
var priceOfJeans = 42;
var numOfJeans = howManyJeans(paycheck, inTheBank);

function howManyJeans(paycheck, inTheBank){
    return parseInt((paycheck + inTheBank) / priceOfJeans);
}
