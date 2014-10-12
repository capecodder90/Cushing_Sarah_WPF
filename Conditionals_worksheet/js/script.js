/*
Sarah A. Cushing
Sunday, October 12, 2014
Assignment: Conditionals Worksheet
 */

// Group 1: Expressions with Conditionals: Last Chance for Gas!

var mpg = 12; // declares mpg, defines as 12 miles per gallon
var amtOfGas = 10; // declares amtOfGas, defines as 25% of the tank remaining
var tankCapacity = 30; // declares tankCapacity, defines the tank capacity as 30 gallons

// Calculate whether the vehicle can drive another 200 miles on the amount of gas left in the tank.

amtOfGas = amtOfGas/100; // change the percentage to a decimal by diving the percentage by 100, store the new value

// if the percentage of gas left in the tank times the tank's capacity, divided by the number of miles per gallon is greater than or equal to 200 miles, print "Yes you can make it" message to the console
if(amtOfGas * tankCapacity * mpg >= 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    // otherwise, print the "You only have X number of miles, get gas now!" message to the console
    console.log("You only have " + amtOfGas * tankCapacity + " gallons of gas in your tank, better get gas now while you can!")
}


// Group 2: Multiple Results: Check the Login

// Check if the username and password match; if not check if the username if correct, if that is correct, check if the password is correct.

var userName = String(prompt("What is your username?"));
var userPass = String(prompt("What is you password?"));
var corUserName = "capecodder90";
var corUserPass = "1234cc";

if((userName === corUserName) && (userPass === corUserPass)){
    console.log("Welcome, " + userName + "!");
}

// Group 3: Multiple Conditions: Tire Pressure I