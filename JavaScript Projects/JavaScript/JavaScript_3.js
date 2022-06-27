function showCharacter(character) {
    var seriesCharacter = character.getAttribute("data-series-type");
    alert(seriesCharacter + " is from a " + character.innerHTML + " franchise.");
}