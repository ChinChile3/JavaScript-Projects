// Function that adds 45 and 27
function add_Function() {
    var add = 45 + 27;
    document.getElementById("add_math").innerHTML = "45 + 27 = " + add;
}

// Function that subtracts 47 from 108
function minus_Function() {
    var minus = 108 - 47;
    document.getElementById("minus_math").innerHTML = "108 - 47 = " + minus;
}

// Function that multiplies 16 and 13
function multiply_Function() {
    var multiply = 16 * 13;
    document.getElementById("multiply_math").innerHTML = "16 * 13 = " + multiply;
}

// Function that divides 144 by 12
function divide_Function() {
    var divide = 144 / 12;
    document.getElementById("divide_math").innerHTML = "144 / 12 = " + divide;
}

// Function that has multiple math operators
function many_math_Function() {
    var many = (5 + 7) / 3 - 3;
    document.getElementById("many_math").innerHTML = "(5 + 7) / 3 - 3 = " + many;
}

// Function that uses modulo to show remainder of 45 / 8
function modulo_Function() {
    var modulo = 45 % 8;
    document.getElementById("remainder_math").innerHTML = "45 / 8 has a reaminder of " + modulo;
}

// Function that flips var to a negative number
function negation_Function() {
    var negate = 17;
    document.getElementById("negation").innerHTML = "Here is a negative number: " + -negate;
}

// Function that increments the var increase
function increment_Function() {
    var increase = 15;
    increase++;
    document.getElementById("increment").innerHTML = increase;
}

// Function that decrements the var decrease
function decrement_Function() {
    var decrease = 34;
    decrease--;
    document.getElementById("decrement").innerHTML = decrease;
}

// Function that gets random number between 1 and 100
function random_Function() {
    var random = (Math.random() * 100);
    document.getElementById("random_number").innerHTML = random;
}

// Function that displays 6 to the power of 4
function power_Function() {
    var pwr = (Math.pow(6, 4));
    document.getElementById("power").innerHTML = pwr;
}