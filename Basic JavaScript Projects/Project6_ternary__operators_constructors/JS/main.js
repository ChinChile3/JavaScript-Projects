// This function uses a ternary operator to display different outputs based on input from the user
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


// Uses ternary operator to display whether someone can vote based on age input from user
function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You may vote":"You cannot vote";
    document.getElementById("Vote").innerHTML = Can_vote + " in this election.";
}


// This is an example of contructors and making new objects
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
// Utilizing NEW for assignment
var Doreen =  new Vehicle("Oldsmobile", "Alero", 2001, "White");
function carFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Doreen drives a " + Doreen.Vehicle_Color + " " + Doreen.Vehicle_Year + " " + Doreen.Vehicle_Make +
    " " + Doreen.Vehicle_Model;
}


// Example of a contructor function and assigning a variable the value of a reserved word
function Game(title, developer, genre, release) {
    this.title = title;
    this.developerName = developer;
    this.gameGenre = genre;
    this.releaseDate = release;
}
var Doom = new Game("Doom", "Id", "FPS", "December 10, 1993");
function Game_Function() {
    document.getElementById("Game_Info").innerHTML = Doom.title +
    " is a " + Doom.gameGenre + " game that was developed by " +
    Doom.developerName + " that was released on " + Doom.releaseDate;
}





//var reserved = catch;
//document.write(reserved);


//
function decrement_Function() {
    document.getElementById("Nested_Function").innerHTML = Subtract();
    function Subtract() {
        var start = 5;
        function Minus_one() {start -= 1;}
        Minus_one();
        return start;
    }
}