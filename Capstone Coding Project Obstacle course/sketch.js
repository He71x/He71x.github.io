// The Death Chase
// Amaan and Ahnaaf
// 5/6/26



//which screen shown
//let gameState = "menu";

let firstImage = true;
let menuBg;
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
  let button =  createButton("PLAY");
button.position(385,755);
button.size(200, 50);
button.mousePressed(repaint);
button.mousePressed(swapBg);

}

function draw() {
  background(220);
 if(firstImage){
  image(menuBg, 0,0,width,height); 
  fill("red");
  textAlign(CENTER);
  textFont('bold');
  textSize(90);
  text("THE DEATH CHASE", width/2, 100);

 }
 else{
scale(1, 0.7);
  
  image(levelBg1,0, 0, width, height);
  rect(0,1000,500, 900);

 
 }
  }
function swapBg(){
  firstImage =! firstImage;
}
function repaint(){
  let g = 255;
  background(g);
}

