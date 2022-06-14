// Dictionary for a manga
function my_Dictionary() {
    var Manga = {
        Manga_Title:"Yu Yu Hakusho",
        Author:"Yoshihiro Togashi",
        First_Publish_Date:"December 3, 1990",
        Number_of_Volumes:19
    };
    document.getElementById("Dictionary").innerHTML = Manga.Author;
}

// Dictionary for a game that delets a KVP
function game_Dictionary() {
    var Game = {
        Game_Title:"Chrono Trigger",
        Developer:"Square",
        Release_Date:"March 11, 1995",
        Genre:"JRPG",
        Genre: "Role-Playing"
    };
    delete Game.Genre;
    document.getElementById("game").innerHTML = Game.Genre;
}