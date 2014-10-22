/*
Sarah A. Cushing
Wednesday, October 22, 2014
Functions Assignment: Industry
 */

// Calculate the price for a website build based on the number of pages and whether there was a discount or not.

var customDesignPrice = 250; // declare customDesignPrice, define it as 250
var pagePrice = 25;  // declare pagePrice, define it as 25
var numPages = prompt("How many pages does your website need?"); // declare numPages, prompt the user for the number of pages, store the value
var discountAmt; // declare discountAmt
var haveDiscount = prompt("Do you have a coupon?"); // declare haveDiscount, ask the user if they have a coupon
var projectPrice; // declare projectPrice
var projectResponse = function(){ // declare projectResponse, define it as an anonymous function
    projectPrice = calcProjectPrice(numPages, pagePrice, customDesignPrice, discountAmt); // sets projectPrice equal to the value returned to calcProjectPrice
    console.log("Your website build will cost you " + projectPrice + " with " + numPages + " pages."); // concatenates the string, prints it to the console
};

// create the function calcProjectPrice with the parameters numPages, pagePrice, customDesignPrice, and discountAmt
function calcProjectPrice(numPages, pagePrice, customDesignPrice, discountAmt) {
    return numPages * pagePrice + customDesignPrice - discountAmt; // calculate the expression and return the value
}

if(haveDiscount === "yes" || haveDiscount === "Yes"){ // check if the user input was yes or Yes
    discountAmt = Number(prompt("What is the amount of the coupon?")); // if so, prompt the user to input the amount of their coupon
    projectResponse(); // call projectResponse to calculate the expression and print the string to the console
}else if(haveDiscount === "no" || haveDiscount === "No"){ // otherwise, if the user inputs no or No
    discountAmt = 0; // the discountAmt is set to 0
    projectResponse(); // call projectResponse to calculate the expression and print the string to the console
}


