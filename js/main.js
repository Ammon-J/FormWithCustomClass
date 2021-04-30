var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[Type=button]");
    addBtn.onclick = addVideoGame;
};
function getVideoGame() {
    var game = new VideoGame();
    game.title =
        getById("title").value;
    game.price =
        parseFloat(getById("price").value);
    var ratingInput = getById("rating");
    game.rating = ratingInput.value;
    var digitalonly = getById("online");
    game.isDigitalOnly = digitalonly.checked;
    console.log(game);
    return game;
}
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function displayGame(myGame) {
}
function isAllDataValid() {
    return true;
}
function getById(id) {
    return document.getElementById(id);
}
