// Examples of a local and global variable, and an error
var x = 15;
function Add_num() {
    var y = 30;
   console.log(x + y + "<br>");
}
function Minus_num() {
    console.log(y - x);
}
Add_num();
Minus_num();


// Example of if statement
function show_Date() {
    if (new Date().getHours() > 17) {
        document.getElementById("Hello").innerHTML = "Hello, how are you doing today?";
    }
}


// My own example of a if statement that compares to sets of math operations
function Compare_num() {
    if (37 - 12 == 5 * 5) {
        document.getElementById("Compare").innerHTML = "These are equal!";
    }
}


// My example of an if and else statement
function Car_Function() {
    input_age = document.getElementById("input_age").value;
    if (input_age >= 16) {
        drive = "You are eligible for a drivers license.";
    }
    else {
        drive = "You are too young to be eligible for a drivers license."
    }
    document.getElementById("driver_age").innerHTML = drive;
}


// Example of an else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's time for some breakfast!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's lunch time!";
    }
    else {
        Reply = "It's supper time, and then get right to bed!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}