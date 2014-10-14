/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Wacky
 */

// If the price of a bunch of helium-filled balloons is $10 less than the amount of money in my wallet, I will purchase the balloons and have a wacky voice party.

var oneBalloon = String(prompt("What is the price of one helium balloon?")); // declares oneBalloon, prompts the user to input the price of one balloon
var numOfBalloons; // declares numOfBalloons
var minNumBalloons = 1; // declares minNumBalloons, defines it as 1 balloon
var priceOfBalloons; // declares priceOfBalloons
var money; // declares money
var noEntry = "That is not a valid entry."; // declares noEntry, stores the string for an empty prompt

// if the price of one balloon is not entered AND the price is not equal to "0"...
if(oneBalloon == false && oneBalloon != "0"){
    console.log(noEntry); // ... print the no entry string to the console
 // otherwise, if the price of one balloon is greater than 0...
}else if(oneBalloon > 0){
    numOfBalloons = String(prompt("How many balloons do you want to buy?")); // ...prompt the user to input the number of balloons they want to buy
    // if they don't input an answer AND the input is not equal to "0"...
    if(numOfBalloons == false && numOfBalloons != "0"){
        console.log(noEntry); // ...print the no entry string to the console
     // otherwise, if the number of balloons to be purchased is less than the minimum number of balloons...
    }else if(numOfBalloons < minNumBalloons){
        console.log("Why would you not want balloons..."); // ... print to the console that you don't know why someone wouldn't want balloons
    // otherwise, if the number of balloons to be purchased is greater than or equal to the minimum number of balloons...
    }else if(numOfBalloons >= minNumBalloons) {
        priceOfBalloons = numOfBalloons * oneBalloon; // ... calculate the total price to purchase the balloons by multiplying the number of balloons by the price of one balloon, store the result in the variable priceOfBalloons
        money = String(prompt("How much money is in your wallet?")); // prompt the user to input how much money is in their wallet
        // if they don't input anything AND the amount of money is not equal to "0"...
        if(money == false && money != "0"){
            console.log(noEntry); // ... print the no entry string to the console
        // otherwise, if the money in their wallet is greater than or equal to the total price of the balloons...
        }else if(money >= priceOfBalloons){
            console.log("You have $" + money + " in your wallet. You can buy the bunch of " + numOfBalloons + " balloons that you wanted! Go have your wacky voice party!"); // ... concatenate the you can buy them string, and print it to the console
        // otherwise, concatenate this string (the sorry you don't have enough money string) and print it to the console
        }else{
            console.log("You only have $" + money + " and the " + numOfBalloons + " balloons cost $" + priceOfBalloons + ". Sorry, you can't afford to have your wacky voice party.");
        }
    }
// otherwise, if the price of the balloons is $0 (or free)...
}else{
    console.log("If the balloons are free, just get some!"); // ... print to the console to just get some balloons
}