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
    return game;
}
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function displayGame(myGame) {
    var displayDiv = getById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    displayDiv.appendChild(gameHeading);
    var GameInfo = document.createElement("p");
    var gameMediumDisplay = "";
    if (!myGame.isDigitalOnly) {
        gameMediumDisplay = "not";
    }
    GameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". It costs $" + myGame.price.toFixed(2) + ". \n    It is " + gameMediumDisplay + " digital only.";
    displayDiv.appendChild(GameInfo);
}
function isAllDataValid() {
    var isValid = false;
    var title = getById("title").value;
    var price = parseFloat(getById("price").value);
    var ratingInput = getById("rating").value;
    var titleSpan = getById("title-span");
    var priceSpan = getById("price-span");
    var ratingSpan = getById("rating-span");
    if (title == "") {
        titleSpan.innerText = "Game title is required!";
        isValid = false;
    }
    if (isNaN(price)) {
        priceSpan.innerText = "Price must be a number!";
        isValid = false;
    }
    if (ratingInput == "Please choose a rating") {
        ratingSpan.innerText = "The game rating is required!";
    }
    return isValid;
}
function getById(id) {
    return document.getElementById(id);
}
