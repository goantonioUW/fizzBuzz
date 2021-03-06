// different ways to solve the fizzBuzz challenge
// The first way to solve using a loop 
function fizzBuzz1( value1, value2) {
    let returnValue = "";

    // we are starting at i = 1; then we are looping through until i = 100; we are starting at 1 and moving up by 1. 
    for(let i = 1; i <= 100; i++){

        //each time this code loops around we will check to see if it it divisible by 3 and 5 using the modulo operation % 
        if (i % value1 == 0 && i % value2 == 0){

            //This is returning the string FizzBuzz when the value is both divisible by 3 and 5
            returnValue += "FizzBuzz, ";
        }

        //if the value is divisible by 3 then print Fizz
        else if (i % value1 == 0){
            returnValue += "Fizz, ";
        }
    
        //if the value is divisible by 5 then print Buzz
        else if (i % value2 == 0) {
            returnValue += "Buzz, "
        }

        //If the value is not divisible by 3 or 5 then print the number. after each return adding a space after the fizz buzz or the number will keep the numbers seperate
        else {
            returnValue += i + ", ";
        }
    }
    return returnValue;
}

//This is a function to call and use our fizzBuzz function
function buzzer(){

    //we are creating an output variable to handle the string 
    let output="";

    //we are setting val1 and val2 to whatever the user chooses by going to the document getting the elementID and that value attached to it
    let val1 = document.getElementById("fizzValue").value;
    let val2 = document.getElementById("buzzValue").value;

    //Now we are setting the output to call our fizzBuzz1 function and insert the new values that the user picked.
    output = fizzBuzz1(val1, val2);

    //Now we have to add the results to the page. going back to the document and getting the elementID that we want to use to display the results and adding the output to that element. 
    document.getElementById("results").innerHTML = output;
    console.log(val1)
}
