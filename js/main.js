//What is Object Literal notation?
const aLiteralObject = {
    property1: "An object literal",
    property2: "is a object that is hard coded"
}

//Hard coded means something that is written statically in the code. There are many other ways of creating objects with code.

//A constructor is a function that acts like a template for any number of objects with the same properties.

//Constructor Function
//Most developers name their constructors with capital first letter. This is not required, but helps keep code organized
function MyConstructor(pMake,pModel,pYear,pColor){
    //this.propertyName creates the property of propertyName for the object that we will create
    this.make = pMake
    this.model = pModel
    this.year = pYear
    this.color = pColor
}

const newCar = new MyConstructor("Toyota","Camry","2020","Yellow");
const newCar1 = new MyConstructor("Ford", "Mustang", "1969", "Gun Metal Gray");

console.log(newCar, newCar1);

//The date object is a constructor that's built into the browser that helps us find the time and date

const now = new Date();

console.log( now.getHours(), ":", now.getMinutes(), ":", now.getSeconds() );

//Create a running clock in the console
//a for loop will ALWAYS run as fast as it can, we cannot set a delay for each loop.


// //How do I set a delay for a function?
// function timeDisplay(){
//    let nowAgain = new Date();
//    console.log( nowAgain.getHours(), ":", nowAgain.getMinutes(), ":", nowAgain.getSeconds() );
// }
// //setTimeout runs the function ONCE after the delay
// setTimeout( timeDisplay, 1000 );

//setInterval runs a function continuously after the delay set in miliseconds
// setInterval( timeDisplay, 1000 );

//Using setTimeout() with the concept of Recursion
function clockFunc(){
    //Get current time when function runs
    let time = new Date();
    //Creating time measurements into variables 
    let ampmChecker = time.getHours();
    //Check what time of day it is and apply AM/PM tags
    if(ampmChecker >= 12){
        document.getElementById('ampm').innerHTML = "PM"
    }else{
        document.getElementById('ampm').innerHTML = "AM"
    }
    let hours = time.getHours();
    //Change 24 hour time into Standard Time
    if (hours > 12) {
        hours = hours - 12
    }
    let minutes = time.getMinutes();
    //Add a zero before single digit minutes
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    let seconds = time.getSeconds();
    //Add a zero before single digit seconds
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    //Get html elements into function
    let hoursBox = document.getElementById("hours");
    let minutesBox = document.getElementById("minutes");
    let secondsBox = document.getElementById("seconds");
    //Put the time into their respective boxes
    hoursBox.innerHTML = hours;
    minutesBox.innerHTML = minutes;
    secondsBox.innerHTML = seconds;



    // Code for the Analog Test
    const secondsHand = document.getElementById("secondsHand");
    secondsHand.style.transform = "rotate(" + seconds*6 + "deg)";

   setTimeout(clockFunc, 1000); 
}

clockFunc();