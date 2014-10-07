/*
 Sarah A. Cushing
 Tuesday, October 7, 2014
 Expressions Assignment: Industry Related
 */

// Calculate the percentage for the width and gutter (margin) of a responsive two-column web page layout.

// Determine the width (in pixels) of the page container.
var pgCont = prompt("What is the width of the page container in pixels?"); // prompts the user to enter the page container width and stores the response

// Determine the width of the first column (in pixels).
var firCol = prompt("What is the width of the first column in pixels?"); // prompts the user to enter the first column width and stores the response

// Determine the width of the second column (in pixels).
var secCol = prompt("What is the width of the second column in pixels?"); // prompts the user to enter the second column width and stores the response

// Define the gutter (margin-right) in pixels.
var marRight = 40; // declares and defines the gutter

// Calculate the percentage for the width of the first column.
var firColWidth = firCol / pgCont * 100; // divides the width of the first column by the page container width, then multiplies the decimal by 100 to get the percent

// Calculate the percentage for the width of the second column.
var secColWidth = secCol / pgCont * 100; // divides the width of the second column by the page container width, then multiplies the decimal by 100 to get the percent

// Calculate the percentage for the gutter (margin-right).
var margin = marRight / pgCont * 100; // divides the size of the right margin by the page container width, then multiplies the decimal by 100 to get the percent

// Determine the IDs for the two columns.
var elementID = new Array (2); // creates a new variable with an array
elementID[0] = prompt("What is the ID of the first column?"); // prompts the user for the ID for the first column, then stores the input
elementID[1] = prompt("What is the ID of the second column?"); // prompts the user for the ID for the second column, then stores the input

// Store the data in the variable percWidths.
var percWidths = "The first column with the ID of " + elementID[0] + " will have a percentage width of " + firColWidth + "; the second column with the ID of " + elementID[1] + " will have a percentage width of " + secColWidth + "; the right margin of the first column with be " + margin + "%."; // Concatenate the strings.




console.log(firColWidth + secColWidth + margin);