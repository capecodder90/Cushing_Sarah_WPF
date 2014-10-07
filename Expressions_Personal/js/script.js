/*
Sarah A. Cushing
Tuesday, October 7, 2014
Expressions Assignment: Personal
 */

// You have three different cars available to you. Enter what the name of the vehicle is and the miles-per-gallon. Determine how much gas you purchase with the amount of money you have in your pocket. How many miles will you be able to drive with this much gas in each of the cars. How many miles do you need to drive? Determine which vehicle would get you the closest to your destination using the least fuel efficient car possible. Assume all three car's gas tanks are empty to start.

// Have the user input the names of the three cars
var carName = new Array(3); // used to store the names of the three cars
carName[0] = prompt("What is the name of your first car?"); // asks the user to input the name of the first car.
carName[1] = prompt("What is the name of your second car?"); // asks the user to input the name of the second car.
carName[2] = prompt("What is the name of your third car?"); // asks the user to input the name of the third car.

// Have the user input the miles per gallon of each of the three cars
var mpg = new Array(3); // used to store the miles per gallon of each of the three cars
mpg[0] = prompt("How many miles per gallon does the " + carName[0] + " get?"); // asks the user to input the miles per gallon for car number 1.
mpg[1] = prompt("How many miles per gallon does the " + carName[1] + " get?"); // asks the user to input the miles per gallon for car number 2.
mpg[2] = prompt("How many miles per gallon does the " + carName[2] + " get?"); // asks the user to input the miles per gallon for car number 3.

// Provide the price of gas, and ask the user to input the amount of money they have avilable.
var gasPrice = 3.50; // the price of gas.
var yourMoney = prompt("How much money, to the nearest whole dollar, do you have in your pocket for gas?"); // asks the user to input the amount of money they have in their pocket.

// Calculate the amount of gas they can purchase, in gallons.
var numGallons = yourMoney / gasPrice; // divide the amount of money available for gas by the price of the gas.

// Print the number of gallons that they can buy to the console.
console.log("You can afford " + numGallons + " gallons of gas.");

// Calculate the number of miles each car can go on the amount of gas that can be purchased.
var numMiles = new Array(3); // used to store the number of miles for each car.
numMiles[0] = mpg[0] * numGallons; // calculates the number of miles for the first car by multiplying the miles per gallon by the number of gallons purchased.
numMiles[1] = mpg[1] * numGallons; // calculates the number of miles for the second car by multiplying the miles per gallon by the number of gallons purchased.
numMiles[2] = mpg[2] * numGallons; // calculates the number of miles for the third car by multiplying the miles per gallon by the number of gallons purchased.

// Print the number of miles each car can drive to the console.
console.log("You will be able to drive " + numMiles[0] + " miles with the " + carName[0] + ", " + numMiles[1] + " miles with the " + carName[1] + ", and " + numMiles[2] + " miles with the " + carName[2] + "."); // concatenates the strings and pulls in the stored data for each array element.

// Ask the user how many miles they need to drive.
var milesNeeded = prompt("How many miles do you need to drive?"); // prompts the user to enter the number of miles they need to drive to reach their destination.

var useCar1 = numMiles <= milesNeeded;
console.log(useCar1);