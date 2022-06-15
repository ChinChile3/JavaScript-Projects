// Example of the concat() method
function String_function() {
    var sent1 = "Here is ";
    var sent2 = "my example ";
    var sent3 = "of concatenation";
    var sentence = sent1.concat(sent2, sent3);
    document.getElementById("string").innerHTML = sentence;
}


// Example of slice function
function Slice_function() {
    var sli_sent = "I wanna be the very best, like no one ever was";
    var sect = sli_sent.slice(2,8);
    document.getElementById("sliced").innerHTML = sect;
}


// Function that caps all letters in <p> with id "upper"
function upperFunction() {
    var words = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = words.toUpperCase();
}
// Example of search() method, displays index 19 for word position
function Search_function() {
    var whole_sentence = "Click here for the position of the word \"position\".";
    var search_sentence = whole_sentence.search("position");
    document.getElementById("search").innerHTML = search_sentence;
}


// Displays int as a string
function to_String_function() {
    var abc = 185;
    document.getElementById("num_string").innerHTML = abc.toString();
}


//
function Precision_function() {
    var bca = 12345.98765;
    document.getElementById("precise").innerHTML = bca.toPrecision(6);
}


// Displays int with specified number of decimals
function Fixed_function() {
    var fix_num = 435.68398;
    document.getElementById("fix").innerHTML = fix_num.toFixed(3);
}
// Displays primitive string from original variable "words"
function Value_function() {
    var words = "Here is a sentence for your viewing";
    var og_words = words.valueOf();
    document.getElementById("value").innerHTML = og_words;
}