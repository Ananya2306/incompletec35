var form;
var game, player;
var GameState ,playerCount;
var database,position;

function setup(){
    database = firebase.database();
    createCanvas(1000,500);
    console.log(GameState);
    game = new Game();

    game.getState();
    game.start();
}

function draw(){
    background(255,255,255);

}
