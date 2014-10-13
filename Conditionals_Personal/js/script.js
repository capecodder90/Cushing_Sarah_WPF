/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Personal
 */

// If the weather outside is sunny, and the temperature is above 25 degrees Fahrenheit I will go landscaping. Otherwise, I will stay in my bed and sleep in.

var weather = String(prompt("Is it raining, snowing, or sunny outside?")); // declares weather, prompts the user to input a weather type, stores the response as a string
var temp; // declares temp
var minTemp = 25; // declares minTemp, defines it as 25
var sunCap = "Sunny"; // declares sunCap, defines it as Sunny, with an uppercase s
var sunLow = "sunny"; // declares sunLow, defines it as sunny, with a lowercase s
var goLandscape; // declares goLandscape

// if the user didn't input anything into the weather prompt, ask them to enter something in the console
if(weather === ""){
    console.log("Please type in a valid response: raining, snowing, or sunny.");
    // if they entered Sunny with a capital S OR sunny with a lowercase s, prompt them to enter the temperature, store it as a number in the temp variable
}else if(weather === sunCap || weather === sunLow){
    temp = Number(prompt("What is the temperature outside (in F\xB0)?"));
    // if they don't enter anything into the prompt, or their entry is invalid, tell them in the console
    if(temp == false){
        console.log("Please enter a valid number.");
     // otherwise, check if the temperature is greater than or equal to the minTemp
    }else if(temp >= minTemp){
        // if so, concatenate the string
        goLandscape = "Its " + temp + " F\xB0 outside. I am going landscaping today!";
        // then write it to the console
        console.log(goLandscape);
    }
 // otherwise, print to the console that I am going to sleep in today
}else{
    console.log("I am going to sleep in today.");
}