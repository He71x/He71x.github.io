// The Death Chase
// Amaan and Ahnaaf
// 5/6/26
//


let gameState = "menu";

//menu background image
let menuBg;
//play button image
let playButton;


function preload(){
  //loads background image
//menuBg = loadImage("");

//loads playbutton image
//playButton = loadImage("");


}

function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(220);
  //use logic to draw menu or show main screen
  if(gameState === "menu"){
    drawMenu();
  }
else if(gameState === "game"){
  drawGame();
}
}


function drawMenu(){
background(20);
//image(menuBg, 0,0,width,height);

fill(0,150);
rect(0,0, width, height);
fill("red");

textAlign(CENTER);
textFont('Courier New');

textSize(90);
text("THE DEATH CHASE", width/2, 700);

textSize(30);
text("CLICK PLAY TO START", width/2, 200);

let x = width/2;
let y = height/2

let w = 250

}

function drawGame(){
 

}