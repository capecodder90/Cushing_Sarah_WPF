/*
Sarah A. Cushing
Wednesday, October 22, 2014
Functions Assignment: Industry
 */

// Calculate the price for a website build based on the number of pages and whether there was a discount or not.

var customDesignPrice = 250;
var pagePrice = 25;
var numPages;

var haveDiscount = String(prompt("Do you have a coupon?"));
if(haveDiscount === "yes" || haveDiscount === "Yes"){
    console.log(haveDiscount)
}

var projectPrice = calcProjectPrice();