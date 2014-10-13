/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Personal
 */

// If the weather outside is sunny, and the temperature is above 25 degrees Fahrenheit I will go landscaping. Otherwise, I will stay in my bed and sleep in.

var weather = String(prompt("Is it raining, snowing, or sunny outside?"));
var temp;
var minTemp = 25;
var sunCap = "Sunny";
var sunLow = "sunny";
var goLandscape;

if(weather === ""){
    console.log("Please type in a valid response: raining, snowing, or sunny.");
}else if(weather === sunCap || weather === sunLow){
    temp = Number(prompt("What is the temperature outside (in F\xB0)?"));
    if(temp == false){
        console.log("Please enter a valid number.");
    }else if(temp >= minTemp){
        landscape = "Its " + temp + " outside. I am going landscaping today!"
        console.log(goLandscape);
    }
}else{
    console.log("I am going to sleep in today.");
}