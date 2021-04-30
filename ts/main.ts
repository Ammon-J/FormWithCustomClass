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
    console.log(game);
    return game;
}

function addVideoGame() {
    if(isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

function displayGame(myGame:VideoGame):void {

}

function isAllDataValid() {
    return true;
}

function getById(id:string) {
    return document.getElementById(id);
}