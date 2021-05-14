var gameState = 0;
var roomCount;
var distance = 0;
var database;

var home, game, player;

function preload(){

}

function setup(){
    createCanvas(windowWidth, windowHeight);

    database = firebase.database();

    game = new Game();
    game.start();
}

function draw(){
    background("brown");
}