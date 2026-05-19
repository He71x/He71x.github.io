// The Death Chase
// Amaan and Ahnaaf
// 5/6/26



//which screen shown
//let gameState = "menu";

let firstImage = "true";
let menuBg;
 let levelBg1;
 let characterImg;
 let zombieImg;
 let button;

 let platforms = [];
//player visibility
//  let playerX = 400;
//  let playerY = 300;

//  let playerSize = 270;

function preload(){
  //loads menu background image
  menuBg = loadImage("assets/Menu Background.jpeg");

  //loads level1 image
  levelBg1 = loadImage("assets/Level 1 background.png");

  //loads zombie image
  //zombieImg = loadImage("");

  //loads character image
  characterImg = loadImage("assets/character.png");

}

function setup() {
  createCanvas(950, 980);
 button =  createButton("PLAY");
button.position(385,755);
button.size(200, 50);
button.mousePressed(repaint);
button.mousePressed(startGame);

//places platform in its spot and used array
platforms.push(new Platform(0,850,970,130));

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
  fill("darkred")
  rect(0,975, 1000, 900);


  //display the platform but not shown
  for(let p of platforms){
  
    p.display();
  }

  characterImg.move();
  characterImg.display();

  
  //image(characterImg, 0, 714, width/4, height/3);

  //movement for player

    
  
}
}

 //add class for the player for movement and physics
 //when touching ground or platforms shown
  class Player{
    constructor(x,y){
      //using inspiration from the vectors exercise
      this.pos = createVector(x,y);
      this.vel = createVector(0,0);
      this.force = createVector(0, 0.05);

      this.size = 50;
    }
    move(){
    //adds the gravity
      this.vel.add(this.force);
      this.pos.add(this.vel);

      if(keyIsDown(65)){
        this.pos.x -= 5;
    }
    if(keyIsDown(68)){
      this.pos.x += 5;
    }
  }
  }

  for(let p of platforms){
if(this.pos.x + this.size > p.x ||
this.pos.x < p.x + p.w ||
this.pos.y + this.size > p.y ||
this.pos.y + this.size < p.y + p.h){

}
}

  
function startGame(){
  //switches screen and button hides after its in level 1
  firstImage = !firstImage;
  button.hide();
}

//
function repaint(){
  //highlights the button when hovering over
  let g = 5000;
  background(g);
}

//use classes for platforms
class Platform{
  constructor(x,y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}
display(){
  //shows image backrgound only and platoform rect shape not shown.
  noFill();
  noStroke();

  rect(this.x,this.y,this.w,this.h);
 
}

}

