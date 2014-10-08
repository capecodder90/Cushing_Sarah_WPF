/*
 Sarah A. Cushing
 Tuesday, October 7, 2014
 Expressions Assignment: Industry Related
 */

// Calculate the percentage for the width and gutter (margin) of a responsive two-column web page layout. The sum of the percentages should equal 100%.

// Determine the width (in pixels) of the page container.
var pgCont = prompt("What is the width of the page container in pixels?"); // declares pgCont, prompts the user to enter the page container width and stores the response, stores the input

// Determine the width of the first column (in pixels).
var firCol = prompt("What is the width of the first column in pixels?"); // declares firCol, prompts the user to enter the first column width and stores the response, stores the input

// Determine the width of the second column (in pixels).
var secCol = prompt("What is the width of the second column in pixels?"); // declares secCol, prompts the user to enter the second column width and stores the response, stores the input

// Define the gutter (margin-right) in pixels.
var marRight = 40; // declares and defines the gutter as 40

// Calculate the percentage for the width of the first column.
var firColWidth = firCol / pgCont * 100; // declares firColWidth, divides the width of the first column by the page container width, then multiplies the decimal by 100 to get the percent, stores the result

// Calculate the percentage for the width of the second column.
var secColWidth = secCol / pgCont * 100; // declares secColWidth, divides the width of the second column by the page container width, then multiplies the decimal by 100 to get the percent, stores the result

// Calculate the percentage for the gutter (margin-right).
var margin = marRight / pgCont * 100; // declares margin, divides the size of the right margin by the page container width, then multiplies the decimal by 100 to get the percent, stores the result

// Determine the IDs for the two columns.
var elementID = new Array (2); // declares elementID as an array
elementID[0] = prompt("What is the ID of the first column?"); // prompts the user for the ID for the first column, then stores the input
elementID[1] = prompt("What is the ID of the second column?"); // prompts the user for the ID for the second column, then stores the input

// Store the data in the variable percWidths.
var percWidths = "The first column with the ID of " + "\"" + elementID[0] + "\"" + " will have a percentage width of " + firColWidth + "; the second column with the ID of " + "\"" + elementID[1] + "\"" + " will have a percentage width of " + secColWidth + "; the right margin of the first column with be " + margin + "%."; // concatenates the strings, stores the result

// Print the result to the console.
console.log(percWidths); // prints the data stored in the variable percWidths to the console

// Determine if the sum of the percentages equals 100%
var isCorrect = firColWidth + secColWidth + margin == 100; // declares isCorrect, finds the sum of the percentage widths of the first and second column and the margin, tests if it is equal to 100%, stores the result as true or false

// Print the result of the test to the console
console.log("The statement \"The sum of the percentages for the two columns and the margin is 100%\" is " + isCorrect + "."); // concatenates the string, prints it to the console