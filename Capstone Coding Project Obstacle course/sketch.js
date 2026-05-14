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

  //loads playbutton image
  playButton = loadImage("assets/startButton (3).png");

  //loads optionsButton image
  //optionsButton = loadImage("");

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

function menuScreen(){
image(menuBg, 0,0,width,height);

image(playButton,300,600,width/3,height/3.5);

//positions for the "play" button
let buttonX = width/2;
let buttonY = height/2;

let buttonSize1 = 250;
let buttonSize2 = 100;

let buttonHover = mouseX > buttonX - buttonSize1/2;









let optionX = width/2;
let optionY = height/2;

let optionSize1 = 300;
let optionSize2 = 200;


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