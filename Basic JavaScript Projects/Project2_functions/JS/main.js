// This function changes the text of the <button> element when pressed
function My_First_Function() {
    var str = "This is the button text!", par = "Here is my paragraph text";
    document.getElementById("Button_Text").innerHTML = str;
}

// This function displays a concetantated string once the <p> element 
// with the id "concatenate" is clicked on
function ConFunction() {
    var sentence = "Here is my ";
    sentence += "concatenated string.";
    document.getElementById("concatenate").innerHTML = sentence;
}


// This functions adds two numbers
function mathFunction() {
    var x = 25 + 47;
    document.getElementById("add").innerHTML = x;
}


// This function displays new text when the <p> with the id "paragraph"
// is clicked on
function stringFunction() {
    var words = "Here is my function";
    document.getElementById("paragraph").innerHTML = words;
}