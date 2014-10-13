/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Industry-based
 */

// If the balance on the client’s account is paid off, I will start on their next project. Otherwise, I will send them a statement of their account.

var accounts = new Array("Smith","Jones","Hamblin"); // declares accounts, creates an array of the account names, stores the values
var balanceToStart = 0; // declares balanceToStart, defines it as $0
var accountName = String(prompt("What is the last name on the account?")); // declares accountName, prompts the user to input the last name on their account
var accountBalance; // declares accountBalance
var recentPmts; // declares recentPmts
var startProject; // declares startProject
var sendStatement; // declares sendStatement