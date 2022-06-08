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