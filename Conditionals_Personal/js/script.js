/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Personal
 */

// If the weather outside is sunny, and the temperature is above 25 degrees Fahrenheit I will go landscaping. Otherwise, I will stay in my bed and sleep in.

var weather = String(prompt("Is it raining, snowing, or sunny outside?"));
var temp;

if(weather === ""){
    console.log("Please type in a valid response: raining, snowing, or sunny.");
}else if(weather === "sunny" || weather === "Sunny"){
    temp = Number(prompt("What is the temperature outside (in F\xB0)?"));
    if(temp == false){
        console.log("Please enter a valid number.");
    }else if(temp >= 25){
        console.log("I am going landscaping today!");
    }
}