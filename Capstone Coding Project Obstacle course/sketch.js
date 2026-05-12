// The Death Chase
// Amaan and Ahnaaf
// 5/6/26
//


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
  //menuBg = loadImage("");

  //loads playbutton image
  //playButton = loadImage("");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

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
  background(20);
  //images not yet added
//image(menuBg, 0,0,width,height);

fill(0,150);
rect(0,0, width, height);
fill("red");

textAlign(CENTER);
textFont('Courier New');

textSize(90);
text("THE DEATH CHASE", width/2, 700);
}





function optionsScreen(){
  background(40);
  

}

function level1(){

}