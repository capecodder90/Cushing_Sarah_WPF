/*
Sarah A. Cushing
Wednesday, October 22, 2014
Functions Assignment: Industry
 */

// Calculate the price for a website build based on the number of pages and whether there was a discount or not.

var customDesignPrice = 250;
var pagePrice = 25;
var numPages = prompt("How many pages does your website need?");
var discountAmt;
var haveDiscount = prompt("Do you have a coupon?");
var projectPrice;

function calcProjectPrice(numPages, pagePrice, customDesignPrice, discountAmt){
    return numPages * pagePrice + customDesignPrice - discountAmt;
}
function projectResponse(){
    console.log("Your website build will cost you " + projectPrice + " with " + numPages + " pages.");
}

if(haveDiscount === "yes" || haveDiscount === "Yes"){
    discountAmt = Number(prompt("What is the amount of the coupon?"));
}else if(haveDiscount === "no" || haveDiscount === "No"){
    discountAmt = 0;
    projectPrice = calcProjectPrice(numPages, pagePrice, customDesignPrice, discountAmt);
    projectResponse();
}


