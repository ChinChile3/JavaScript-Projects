// Switch statement that let's you choose a fighter for a video game
function Fighter_Function() {
    var Fighter_output;
    var Fighters = document.getElementById("Fighter_input").value;
    var Fighter_declaration = "You have chosen ";
    switch(Fighters) {
        case "Demitri Maximoff":
            Fighter_output = Fighter_declaration + "Demitri Maximoff";
        break;
        case "Felicia":
            Fighter_output = Fighter_declaration + "Felicia";
        break;
        case "Hsien-Ko":
            Fighter_output = Fighter_declaration + "Hsien-Ko";
        break;
        case "Lord Raptor":
            Fighter_output = Fighter_declaration + "Lord Raptor";
        break;
        case "Morrigan Aensland":
            Fighter_output = Fighter_declaration + "Morrigan Aensland";
        break;
        default:
            Fighter_output = "Please enter a fighter from above as it is written.";
    }
    document.getElementById("Output").innerHTML = Fighter_output;
}


// Example of ClassId. Will change element with class "press" at the 
// second position
function Obi_Wan_Function() {
    var O = document.getElementsByClassName("press");
    O[1].innerHTML = "These aren't the quotes you're looking for.";
}


// Displays a diamond shape within canvas HTML element
var canv = document.getElementById("first_canvas");
var canv_ctx = canv.getContext("2d");
canv_ctx.moveTo(240,0);
canv_ctx.lineTo(120, 110);
canv_ctx.lineTo(240,220);
canv_ctx.lineTo(360, 110);
canv_ctx.lineTo(240, 0)
canv_ctx.stroke();

//
var grd = canv_ctx.createLinearGradient(120, 0, 240, 220);
grd.addColorStop(0, "white");
grd.addColorStop(1, "black");

canv_ctx.fillStyle = grd;
canv_ctx.fillRect(0, 0, 120, 220);
canv_ctx.fillRect(360, 0, 480, 220)
