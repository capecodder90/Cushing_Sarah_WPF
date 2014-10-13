/*
Sarah A. Cushing
Monday, October 13, 2014
Conditionals Assignment: Personal
 */

// If it is Friday, and the temperature is above 25 degrees Fahrenheit I will go landscaping. Otherwise, I will stay in my bed and sleep in.

var dayOfWeek = String(prompt("What day of the week is it?")); // declares dayOfWeek, prompts the user to input a day, stores the response as a string
var temp; // declares temp
var minTemp = 25; // declares minTemp, defines it as 25
var friCap = "Friday"; // declares friCap, defines it as Friday, with an uppercase f
var friLow = "friday"; // declares friLow, defines it as friday, with a lowercase f
var goLandscape; // declares goLandscape
var sleepIn = "I am going to sleep in today."; // declares sleepIn, defines it with a string
var badEntry = "That is not a valid entry." // declares badEntry, defines it as the not a valid entry string

// if the user didn't input anything into the day of the week prompt, ask them to enter something in the console
if(dayOfWeek === ""){
    console.log(badEntry);
    // if they entered Friday with a capital f OR friday with a lowercase f, prompt them to enter the temperature, store it as a number in the temp variable
}else if(dayOfWeek === friCap || dayOfWeek === friLow){
    temp = String(prompt("What is the temperature outside (in F\xB0)?"));
    // if what the user enters is not 0 AND they don't enter anything into the prompt, or their entry is invalid, tell them to enter a valid number in the console
    if(temp != "0" && temp == false){
        console.log(badEntry);
     // otherwise, check if the temperature is greater than or equal to the minTemp
    }else if(temp >= minTemp){
        // if so, concatenate the string
        goLandscape = "Its " + dayOfWeek + " and " + temp + " F\xB0 outside. I am going landscaping today!";
        // then write it to the console
        console.log(goLandscape);
     // otherwise, print to the console that I am going to sleep in today
    }else{
        console.log(sleepIn);
    }
// otherwise, print to the console that I am going to sleep in today
}else{
    console.log(sleepIn);
}