// Displays the data type within the document.write method
document.write(typeof "what is up my dude" + "<br>" + "<br>");


// This is an example of type coercionmy combining a string with the int 3
document.write("My favorite number is " + 3 + "<br>" + "<br>");


// This function will display NaN by dividing 0 by 0
function not_num_Function() {
    document.getElementById("not_number").innerHTML = 0/0;
}


// This function displays TRUE using the NaN function
function string_Function() {
    document.getElementById("string").innerHTML = isNaN("Is this a string?");
}


// This function displays FALSE using the NaN function
function int_Function() {
    document.getElementById("int").innerHTML = isNaN(3);
}


// This function displays infinity
function infinite_Function() {
    document.getElementById("infinite").innerHTML = 2E309;
}


// This function displays negative infinity
function nInfinite_Function() {
    document.getElementById("nInfinite").innerHTML = -4E319;
}


// This function uses Boolean logic to display TRUE
function true_Function() {
    document.getElementById("true").innerHTML = 45 > 17;
}


// This function uses Boolean logic to display FALSE
function false_Function() {
    document.getElementById("false").innerHTML = 99 <= 64;
}


// This will display 100 in the browser console
console.log(47 + 53);


// This will display FALSE in the browser console
console.log(3 < 0);


// This function displays TRUE when comparing 12 and 3 multiplied by 4
function equal_Function() {
    document.getElementById("equals").innerHTML = 12 == 3 * 4;
}


// This function displays FALSE when comparing 21 and 48 divided by 2
function not_equals_Function() {
    document.getElementById("notEquals").innerHTML = 21 == 48 / 2;
}


// TRIPLE EQUALS SIGNS BEGINNING
// These variables and functions display TRUE and FALSE three times using triple equals signs, ===
value1 = 12;
value2 = 12;
value3 = "12";
value4 = "five";

function triple_equals_Function1() {
    document.getElementById("triple_equals1").innerHTML = value1 === value2;
}

function triple_equals_Function2() {
    document.getElementById("triple_equals2").innerHTML = value1 === value4;
}

function triple_equals_Function3() {
    document.getElementById("triple_equals3").innerHTML = value1 === value3;
}

function triple_equals_Function4() {
    document.getElementById("triple_equals4").innerHTML = value3 === value4;
}
// END TRIPLE EQUAL SIGNS


// Function that displays TRUE using the && operator
function and_Function() {
    document.getElementById("and_operator1").innerHTML = 46 == 23 * 2 && 10 > 3;
}
// Function that displays FALSE using the && operator
function and_Function2() {
    document.getElementById("and_operator2").innerHTML = 23 != 23 && 10 > 3;
}


// Displays TRUE using the OR operator
function or_Function1() {
    document.getElementById("or_operator1").innerHTML = 21 / 3 == 7 || 1 > 47;
}
// Displays FALSE using the OR operator
function or_Function2() {
    document.getElementById("or_operator2").innerHTML = 21 / 3 == 6 || 1 > 47;
}



// This displays TRUE using the NOT operator
function not_Function1() {
    document.getElementById("not_operator1").innerHTML = !(47 == 22 + 23);
}
// This displays FALSE using the NOT operator
function not_Function2() {
    document.getElementById("not_operator2").innerHTML = !(47 == 22 + 25);
}

