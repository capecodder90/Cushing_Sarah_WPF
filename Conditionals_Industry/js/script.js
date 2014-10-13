/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Industry-based
 */

// If the balance on the client’s account is paid off, I will start on their next project. Otherwise, I will send them a statement of their account.

var balanceToStart = "0"; // declares balanceToStart, defines it as $0 in a string
var accountBalance = prompt("What is the balance on your last statement?"); // declares accountBalance, prompts the user to input the account balance listed on their last account statement
var accountTotal; // declares accountTotal
var recentPmts; // declares recentPmts
var invalid = "Sorry, but that is not a valid entry."; //declares invalid, defines it as the sorry invalid input message

// if the user inputs nothing into the prompt AND the input is not equal to 0...
if(accountBalance == false && accountBalance != balanceToStart){
    console.log(invalid); // ...print the Sorry invalid input message to the console
// otherwise, if the account balance is greater than or equal to the balance required to start...
}else if(Number(accountBalance) >= balanceToStart){
    // ... prompt the user to enter any recent payments that have been made and store it in the recentPmts variable
    recentPmts = prompt("Have you made any payments recently? If so, how much (in total)?");
    // if the user inputs nothing into the prompt AND it is not equal to 0...
    if(recentPmts == false && recentPmts != balanceToStart){
        console.log(invalid); // ...print the Sorry invalid input message to the console
    // otherwise...
    }else{
        accountTotal = accountBalance - recentPmts; // ... calculate the account's total by subtracting the recent payments from the account balance
        // if the account total is less than the required balance to start...
        if(accountTotal <= balanceToStart){
            console.log("Your account is up-to-date. We will begin your project immediately."); // ... print the "we're good to go" message to the console
        // otherwise...
        }else{
            console.log("Sorry, but your account still has a balance of $" + accountTotal + ". Please remit payment at your earliest convenience, and we will begin your project upon receipt."); // ... concatenate the string, and print the "sorry your account still has a balance" message to the console
        }
    }
}