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
var firColWidth = pgCont / firCol * 100; // divides the page container width by the width of the first column, then multiplies the decimal by 100 to get the percent