/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Wacky
 */

// If the price of a bunch of helium-filled balloons is $10 less than the amount of money in my wallet, I will purchase the balloons and have a wacky voice party.

var oneBalloon = String(prompt("What is the price of one helium balloon?"));
var numOfBalloons;
var minNumBalloons = 1;
var priceOfBalloons = oneBalloon * numOfBalloons;
var noEntry = "That is not a valid entry.";

if(oneBalloon == false && oneBalloon != "0"){
    console.log(noEntry);
}else if(oneBalloon > Number(oneBalloon)){
    numOfBalloons = String(prompt("How many balloons do you want to buy?"));
    if(numOfBalloons == false && numOfBalloons != "0"){
        console.log(noEntry);
    }else if(numOfBalloons >= minNumBalloons){
        priceOfBalloons = numOfBalloons * oneBalloon;
    }
}