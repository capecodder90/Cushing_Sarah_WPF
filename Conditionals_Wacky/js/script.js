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
var money;
var noEntry = "That is not a valid entry.";

if(oneBalloon == false && oneBalloon != "0"){
    console.log(noEntry);
}else if(oneBalloon > 0){
    numOfBalloons = String(prompt("How many balloons do you want to buy?"));
    if(numOfBalloons == false && numOfBalloons != "0"){
        console.log(noEntry);
    }else if(numOfBalloons < minNumBalloons){
        console.log("Why would you not want balloons...");
    }else if(numOfBalloons >= minNumBalloons) {
        priceOfBalloons = numOfBalloons * oneBalloon;
        money = String(prompt("How much money is in your wallet?"));
        if(money == false && money != "0"){
            console.log(noEntry);
        }else if(money >= priceOfBalloons){
            console.log("You have $" + money + " in your wallet. You can buy the bunch of " + numOfBalloons + " balloons that you wanted! Go have your wacky voice party!");
        }else{
            console.log("You only have $" + money + " and the " + numOfBalloons + " balloons cost $" + priceOfBalloons + ". Sorry, you can't afford to have your wacky voice party.");
        }
    }
}else{
    console.log("If the balloons are free, just get some!");
}