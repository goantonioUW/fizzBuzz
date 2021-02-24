// different ways to solve the fizzBuzz challenge
// The first way to solve using a loop 
function fizzBuzz1( value1, value2) {
    let returnValue = "";

    // we are starting at i = 1; then we are looping through until i = 100; we are starting at 1 and moving up by 1. 
    for(let i = 1; i <= 100; i++){

        //each time this code loops around we will check to see if it it divisible by 3 and 5 using the modulo operation % 
        if (i % value1 == 0 && i%value2 == 0){

            //This is returning the string FizzBuzz when the value is both divisible by 3 and 5
            returnValue += "FizzBuzz ";
        }

        //if the value is divisible by 3 then print Fizz
        else if (i % value1 == 0){
            returValue =+ "Fizz ";
        }
    
        //if the value is divisible by 5 then print Buzz
        else if (i % value2 == 0) {
            returnValue += "Buzz "
        }

        //If the value is not divisible by 3 or 5 then print the number. after each return adding a space after the fizz buzz or the number will keep the numbers seperate
        else {
            returnValue += i + " ";
        }
    }
    return returnValue;
}