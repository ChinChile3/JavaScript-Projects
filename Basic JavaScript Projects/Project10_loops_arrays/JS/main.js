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
// I commented out the getElementById on line 67 to let the rest of my JS code work
var num1 = 45;
{
    let num2 = 47;
}
//document.getElementById("let_keyword").innerHTML = num1 + num2;
// In index.html starting on line 43 is my example of using the return statement





// Example of an object with properites, a method, and a return statement
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


// Example of break and continue statements
var T = ""
for (let R = 25; R > 10; R--) {
    if (R == 20) { continue; }
    if (R == 15) { break; }
    T += "Here is the number " + R + "<br>";
}
document.getElementById("b_c_statement").innerHTML = T;