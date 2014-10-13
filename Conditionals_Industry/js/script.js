/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Industry-based
 */

// If the balance on the client’s account is paid off, I will start on their next project. Otherwise, I will send them a statement of their account.

var balanceToStart = "0"; // declares balanceToStart, defines it as $0
var accountBalance = prompt("What is the balance on your last statement?"); // declares accountBalance, prompts the user to input the account balance listed on their last account statement
var accountTotal;
var recentPmts;
var sendStatement; // declares sendStatement

if(accountBalance == false && accountBalance != balanceToStart){
    console.log("Sorry, but that is not a valid number.");
}else if(Number(accountBalance) >= balanceToStart){
    recentPmts = prompt("Have you made any payments recently? If so, how much (in total)?");
    if(recentPmts == false && recentPmts != balanceToStart){
        console.log("Please enter a valid number.")
    }else{
        accountTotal = accountBalance - recentPmts;
        if(accountTotal <= balanceToStart){
            console.log("Your account is up-to-date. We will begin your project immediately.");
        }else{
            console.log("Sorry, but your account still has a balance of $" + accountTotal + ". Please remit payment at your earliest convenience, and we will begin your project upon receipt.");
        }
    }
}