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

// Have the user input the tank size of each of the three cars
var tankSize = new Array(3); // used to store the tank sizes of each of the three cars
tankSize[0] = prompt("What is the size (in gallons) of the " + carName[0] + "'s gas tank?"); // asks the user to input the size of the gas tank in car number 1
tankSize[1] = prompt("What is the size (in gallons) of the " + carName[1] + "'s gas tank?"); // asks the user to input the size of the gas tank in car number 2
tankSize[2] = prompt("What is the size (in gallons) of the " + carName[2] + "'s gas tank?"); // asks the user to input the size of the gas tank in car number 3

// Provide the price of gas, and ask the user to input the amount of money they have
var gasPrice = 3.50; // the price of gas
var yourMoney = prompt("How much money, to the nearest whole dollar, do you have in your pocket for gas?"); // asks the user to input the amount of money they have in their pocket

// Calculate the amount of gas they can purchase, in gallons
var numGallons = yourMoney / gasPrice; // divide the amount of money available for gas by the price of the gas

// print the number of gallons that they can buy to the console
console.log("You can afford " + numGallons + " gallons of gas.");

