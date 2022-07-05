// Validation for form submitting
function validateForm() {
    var y = document.forms["Form"]["full_name"].value;
    var z = document.forms["Form"]["email"].value;
    var w = document.forms["Form"]["phone_number"].value;
    if (y == "", z == "", w == "") {
        alert("Fill all required fields");
        return false;
    }
}
