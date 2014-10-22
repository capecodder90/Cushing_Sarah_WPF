/*
Sarah A. Cushing
Wednesday, October 22, 2014
Functions Assignment: Industry
 */

// Calculate the price for a website build based on the number of pages and whether there was a discount or not.

var customDesignPrice = 250;
var pagePrice = 25;
var numPages = prompt("How many pages does your website need?");
var projectPrice = calcProjectPrice();

function calcProjectPrice(customDesignPrice, pagePrice, discountAmt){
    return numPages * pagePrice + customDesignPrice - discountAmt;
}
console.log("Your website build will cost you " + projectPrice + " with " + numPages + ".");
var haveDiscount = String(prompt("Do you have a coupon?"));
if(haveDiscount === "yes" || haveDiscount === "Yes"){
    var discountAmt = prompt("What is the amount of the coupon?");

}