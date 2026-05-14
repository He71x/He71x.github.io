// The Death Chase
// Amaan and Ahnaaf
// 5/6/26



//which screen shown
let gameState = "menu";

let playButton;
let menuBg;

let optionsButton;
 let levelBg1;

 let characterImg;
 let zombieImg;


function preload(){
  //loads menu background image
  menuBg = loadImage("assets/Menu Background.jpeg");

  //loads level1 image
  levelBg1 = loadImage("assets/Level 1 background.png");

  //loads zombie image
  //zombieImg = loadImage("");

  //loads character image
  //characterImg = loadImage("");

}

function setup() {
  createCanvas(950, 980);

}

function draw() {
  background(220);
  if(gameState === "menu"){
    menuScreen();
  }
  else if(gameState === "options"){
    optionsScreen();
  
  }
  else if(gameState === "level1"){
    level1();

  }
}


function repaint(){
  let g = 255;
  background(g);
}
function menuScreen(){
image(menuBg, 0,0,width,height);



let button =  createButton("PLAY");
button.position(385,755);
button.size(200, 50);
button.mousePressed(repaint);








fill("red");
textAlign(CENTER);
textFont('bold');

textSize(90);
text("THE DEATH CHASE", width/2, 100);

}

function optionsScreen(){
  background(40);
  

}

function level1(){
  image(levelBg1,0,0,width,height);

}