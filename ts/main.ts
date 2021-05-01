class VideoGame {
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[Type=button]");
    addBtn.onclick = addVideoGame;
}

/**
 * Gets all the game data from the form
 * @returns is in a VideoGame Object
 */

function getVideoGame():VideoGame {
    let game = new VideoGame();
    // Populate with data from the form
    game.title = 
        (<HTMLInputElement>getById("title")).value;

    game.price =
        parseFloat((<HTMLInputElement>getById("price")).value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalonly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalonly.checked;
    return game;
}

function addVideoGame() {
    if(isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

function displayGame(myGame:VideoGame):void {
    let displayDiv = getById("display");

    // Created <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);

    // Creat paragraph with game details
    let GameInfo = document.createElement("p");
    let gameMediumDisplay = "";
    if(!myGame.isDigitalOnly){
        gameMediumDisplay = "not";
    }

    GameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs $${myGame.price.toFixed(2)}. 
    It is ${gameMediumDisplay} digital only.`;

    // Add <p> game info
    displayDiv.appendChild(GameInfo);
}   

function isAllDataValid() {
    let isValid:boolean = false;

    let title = (<HTMLInputElement>getById("title")).value;
    let price = parseFloat((<HTMLInputElement>getById("price")).value);
    let ratingInput = (<HTMLSelectElement>getById("rating")).value;
    let titleSpan = <HTMLElement>getById("title-span");
    let priceSpan = <HTMLElement>getById("price-span");
    let ratingSpan = <HTMLElement>getById("rating-span");

    if(title == "") {
        titleSpan.innerText = "Game title is required!";
        isValid = false;
    }

    if(isNaN(price)) {
        priceSpan.innerText = "Price must be a number!";
        isValid = false;
    }

    if(ratingInput == "Please choose a rating") {
        ratingSpan.innerText = "The game rating is required!";
    }

    return isValid;
}

function getById(id:string) {
    return document.getElementById(id);
}

// Creat clearerrorSpans() function;