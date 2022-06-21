// While loop that displays the number 25 through 1 in descending order
function Call_Loop() {
    var num = "";
    var y = 25;
    while (y > 0) {
        num += "<br>" + y;
        y--;
    }
    document.getElementById("Loop").innerHTML = num;
}


// Displays the length of a string
function length_Function() {
    var words = "I am a student of The Tech Academy.";
    var length = words.length;
    document.getElementById("words_length").innerHTML = length;
}


// Displays a list of instruments
var S_instruments = ["Jingtinglers", "Whohoopers", "Floofloovers"];
var list = "";
var x;
function for_Loop() {
    for (x = 0; x < S_instruments.length; x++) {
        list += S_instruments[x] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = list;
}


// Displays a list of books from an array
function array_Function() {
    var Books = [];
    Books[1] = "1984";
    Books[0] = "Lord of the Flies";
    Books[2] = "It";
    var book_list = "";
    var x;
    for (x = 0; x < Books.length; x++) {
        book_list += Books[x] + "<br>";
    }
    document.getElementById("Array").innerHTML = book_list;
}


// Example of the const keyword
const tv_show = {title:"Regular Show", type:"Animated", genre:"Comedy"};
tv_show.title = "Adventure Time";
tv_show.network = "Cartoon Network";
function constant_function() {
    document.getElementById("Constant").innerHTML = tv_show.title + " is an "
    + tv_show.type + " " + tv_show.genre + " tv show that airs on " + tv_show.network;
}


//Example of let keyword. I intentionally wrote this code to show how let 
// is only accessible within its own block.
// Deleting the brackets would display the result of 45 + 47, which equals
// 92
var num1 = 45;
{
    let num2 = 47;
}
document.getElementById("let_keyword").innerHTML = num1 + num2;


// In index.html starting on line 43 is my example of using the return statement


// MY return STATEMENT THAT WON'T DISPLAY IN THE BROWSER
// Example of an object with properites and a method
let movie = {
    title: "Wayne's World",
    genre: "comedy",
    release_year: "1992",
    summary : function() {
        return this.title + " is a " + this.genre + " film that was released in "
        + this.release_year + ".";
    }
};
document.getElementById("movie_object").innerHTML = movie.summary();

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};

document.getElementById("Car_Object").innerHTML = car.description();