// Validation for form submitting
function validateForm() {
    var y = document.forms["Form"]["full_name"].value;
    var z = document.forms["Form"]["email"].value;
    if (y == "") {
        alert("You must enter your full name");
        return false;
    }
}