/*
Sarah A. Cushing
Tuesday, October 7, 2014
Expressions Assignment: Personal
 */

// You have three different cars available to you. Enter what the name of the vehicle is and the miles-per-gallon. Determine how much gas you purchase with the amount of money you have in your pocket. How many miles will you be able to drive with this much gas in each of the cars. How many miles do you need to drive? Determine which vehicle(s) would get you to your destination, if any. Assume all three car's gas tanks are empty to start.

// Have the user input the names of the three cars.
var carName = new Array(3); // declares carName as an array, used to store the data for the names of the three cars
carName[0] = prompt("What is the name of your first car?"); // prompts the user to input the name of the first car, stores the input
carName[1] = prompt("What is the name of your second car?"); // prompts the user to input the name of the second car, stores the input
carName[2] = prompt("What is the name of your third car?"); // prompts the user to input the name of the third car, stores the input

// Have the user input the miles per gallon of each of the three cars.
var mpg = new Array(3); // declares mpg as an array, used to store the miles per gallon of each of the three cars
mpg[0] = prompt("How many miles per gallon does the " + carName[0] + " get?"); // prompts the user to input the miles per gallon for car number 1, stores the input
mpg[1] = prompt("How many miles per gallon does the " + carName[1] + " get?"); // prompts the user to input the miles per gallon for car number 2, stores the input
mpg[2] = prompt("How many miles per gallon does the " + carName[2] + " get?"); // prompts the user to input the miles per gallon for car number 3, stores the input

// Provide the price of gas, and ask the user to input the amount of money they have available.
var gasPrice = 3.50; // declares gasPrice, defines the price of gas as $3.50
var yourMoney = prompt("How much money, to the nearest whole dollar, do you have in your pocket for gas?"); // declares yourMoney, prompts the user to input the amount of money they have in their pocket, stores the input

// Calculate the amount of gas they can purchase, in gallons.
var numGallons = yourMoney / gasPrice; // declares numGallons, divides the amount of money in their pocket by the price of the gas, stores the input

// Print the number of gallons that they can buy to the console.
console.log("You can afford " + numGallons + " gallons of gas."); // concatenates the strings, prints the result to the console

// Calculate the number of miles each car can go on the amount of gas that can be purchased.
var numMiles = new Array(3); // declares numMiles as an array, used to store the number of miles for each car
numMiles[0] = mpg[0] * numGallons; // calculates the number of miles for the first car by multiplying the miles per gallon by the number of gallons purchased, stores the input
numMiles[1] = mpg[1] * numGallons; // calculates the number of miles for the second car by multiplying the miles per gallon by the number of gallons purchased, stores the input
numMiles[2] = mpg[2] * numGallons; // calculates the number of miles for the third car by multiplying the miles per gallon by the number of gallons purchased, stores the input

// Print the number of miles each car can drive to the console.
console.log("You will be able to drive " + numMiles[0] + " miles with the " + carName[0] + ", " + numMiles[1] + " miles with the " + carName[1] + ", and " + numMiles[2] + " miles with the " + carName[2] + "."); // concatenates the strings and pulls in the stored data for each array element, prints the result to the console

// Ask the user how many miles they need to drive.
var milesNeeded = prompt("How many miles do you need to drive?"); // declares milesNeeded, prompts the user to enter the number of miles they need to drive to reach their destination, stores the input

// Calculate whether the number of miles each car can drive will allow the user to reach their destination.
var useCar1 = numMiles[0] >= milesNeeded; // declares useCar1, determines if the number of miles Car 1 can travel is greater than or equal to the number of miles to the destination, records true or false
var useCar2 = numMiles[1] >= milesNeeded; // declares useCar2, determines if the number of miles Car 2 can travel is greater than or equal to the number of miles to the destination, records true or false
var useCar3 = numMiles[2] >= milesNeeded; // declares useCar3, determines if the number of miles Car 3 can travel is greater than or equal to the number of miles to the destination, records true or false

// Print the results to the console.
console.log("You should use the " + carName[0] + ": " + useCar1 + " or " + "you should use the " + carName[1] + ": " + useCar2 + " or " + "you should use the " + carName[2] + ": " + useCar3); // concatenates the strings and prints the results of which car can or cannot be used to reach the user's destination