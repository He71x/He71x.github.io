// The Death Chase
// Amaan and Ahnaaf
// 5/6/26



//which screen shown
let gameState = "menu";

let firstImage = true;
let menuBg;
let levelBg1;
let characterImg;
let zombieImg;
let button;

let runImg;
let levelBg2;
let jumpImg;
let frameX = 0;
let frameY = 0;

let idleFrameX = 0;
let idleFrameY = 0;

//this stops the player from exiting screen
let barriers = [];

let level = 1;

//the spikes on the screen which restarts the player
//to the start
let spikes = [];


let spriteW = 260;
let spriteH = 300;

let idleSpriteW = 260;
let idleSpriteH = 300;

let player;

let platforms = [];

function preload() {
  //this loads menu background image
  menuBg = loadImage("assets/Menu Background.jpeg");

  //this loads level1 image
  levelBg1 = loadImage("assets/Level 1 background.png");

  //loads level 2 image
  levelBg2 = loadImage("assets/levelBg2.png");

  //this loads zombie + idle image
  //zombieImg = loadImage("");

  //this loads character + idle image
  characterImg = loadImage("assets/idleAnim.png");

  //this loads running ani image
  runImg = loadImage("assets/runAni.png");

  //loads jump image
  jumpImg = loadImage("assets/jumpAni.png");

  //loads kick image
  //kickImg = loadImage("assets/kickAni.png")

}

function setup() {
  createCanvas(950, 980);
  button = createButton("PLAY");
  button.position(385, 755);
  button.size(200, 50);
  button.mousePressed(repaint);
  button.mousePressed(startGame);

  player = new Player(-30, 130);

  //places platform in its spot and used arrays
  //floor
  if(level === 1){
  platforms.push(new Platform(0, 990, 970, 130));
  //2nd plat
  platforms.push(new Platform(175, 529, 10, 100));
  //1st plat 
  platforms.push(new Platform(20, 323, 10, 100));

  platforms.push(new Platform(375, 380, -50, 100));
  platforms.push(new Platform(510, 570, 160, 100));
  platforms.push(new Platform(900, 460, 10, 100));

  //places spikes and restarts player back to the start if touched
  spikes.push(new Spike(500, 550, -110, 80));
  spikes.push(new Spike(690, 550, -85, 80));
  //landing on the floor will restart back to start
  spikes.push(new Spike(0, 900, 970, 130));

  barriers.push(new Barrier(-120, 0, 10, height));
  barriers.push(new Barrier(1000, 570, 10, 400));
  }

}
function draw() {
  background(220);
  if (firstImage) {
    image(menuBg, 0, 0, width, height);
    fill("red");
    textAlign(CENTER);
    textFont('bold');
    textSize(90);
    text("THE DEATH CHASE", width / 2, 100);
  }
  else {
    scale(1, 0.7);
    if(level === 1){
    image(levelBg1, 0, 0, width, height);

    fill("darkred");
    rect(0, 975, 1000, 900);
  }
  else if(level === 2){
    image(levelBg2, 0, 0, width, height );
  }
    //display the platform but not shown
    for (let p of platforms) {

      p.display();
    }

    for (let s of spikes) {

      s.display();
      if (player.pos.x + player.hitboxW > s.x &&
        player.pos.x < s.x + s.w &&
        player.pos.y + player.hitboxH > s.y &&
        player.pos.y < s.y + s.h) {

        player.pos.x = -90;
        player.pos.y = 100;
        player.vel.y = 0;

      }
    }

    player.move();
    if(level === 1 & player.pos.x > width/1.2){
      level = 2;
      player.pos.x = 0;
      player.pos.y = 10;

    }


    for (let b of barriers) {
      b.display();



      if (player.pos.x + player.hitboxW > b.x &&
        player.pos.x < b.x + b.w &&
        player.pos.y + player.hitboxH > b.y &&
        player.pos.y < b.y + b.h) {

        if (b.x < width / 2) {
          player.pos.x = b.x + b.w;
        }
        else {
          player.pos.x = b.x - player.hitboxW;
        }
      }
    }
    player.display();

  }
}
//add class for the player for movement and physics
//when touching ground or platforms shown
class Player {
  constructor(x, y) {
    //using inspiration from the vectors exercise
    this.jumping = false;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.force = createVector(0, 0.3);
    this.imgW = 250;
    this.imgH = 300;

    this.hitboxW = 190;
    this.hitboxH = 210;

  }
  move() {


    if (keyIsDown(32) && this.jumping === false) {
      this.vel.y -= 15;
      this.jumping = true;
    }
    //adds the gravity
    this.vel.add(this.force);
    this.pos.add(this.vel);

    if (keyIsDown(65)) {
      this.pos.x -= 5.5;
      //runs every 6 frames to slow down animation
      if (frameCount % 5 === 0) {
        //moves on to next frame animation
        frameX++;

        if (frameX > 4) {
          frameX = 0;
          //loops animation back to start in a loop
        }
      }
    }
    if (keyIsDown(68)) {
      this.pos.x += 5.5;
      if (frameCount % 5 === 0) {
        frameX++;

        if (frameX > 4) {
          frameX = 0;
        }
      }
    }

    for (let p of platforms) {
      if (this.pos.x + this.hitboxW > p.x &&
        this.pos.x < p.x + p.w &&
        this.pos.y + this.hitboxH > p.y &&
        this.pos.y + this.hitboxH < p.y + p.h) {

        this.pos.y = p.y - this.hitboxH;
        this.vel.y = 8;
        this.jumping = false;
      }
    }
  }
  display() {
    if (keyIsDown(65)) {
      push();
      //flips image
      scale(-1, 1);
      //shows x and y position of the player, 
      // width and height of image and selects each 
      // animation from each frame. Minusing the positionx with
      //image width to change directions when pressing d 
      //to turn left
      image(runImg, -this.pos.x - this.imgW, this.pos.y,
        this.imgW, this.imgH, frameX * spriteW, frameY *
      spriteH, spriteW, spriteH);
      pop();
    }
    else if (keyIsDown(68)) {
      image(runImg, this.pos.x, this.pos.y,
        this.imgW, this.imgH, frameX * spriteW,
        frameY * spriteH,
        spriteW, spriteH);
    }
    else if (this.vel.y < 0) {
      if (frameCount % 6 === 0) {
        frameX++;

        if (frameX > 5) {
          frameX = 0;
        }
      }
      image(jumpImg, player.pos.x, player.pos.y,
        player.imgW, player.imgH, frameX * spriteW,
        frameY * spriteH, spriteW, spriteH);

    }


    else {
      //idle animation start similar to running sprite sheet
      if (frameCount % 20 === 0) {
        frameX++;

        if (frameX > 3) {
          frameX = 0;
        }
      }
      image(characterImg, this.pos.x, this.pos.y, this.imgH,
        this.imgW, idleFrameX * idleSpriteW, 0,
        idleSpriteW, idleSpriteH);
    }
  }
}
//use classes for platforms
class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display() {
    //shows image backrgound only and platoform rect shape not shown.
    noFill();
    noStroke();

    rect(this.x, this.y, this.w, this.h);

  }
}
class Spike {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display() {


    //triangle shape
    triangle(this.x, this.y + this.h, this.x + this.w / 2,
      this.y, this.x + this.w, this.y + this.h);
  }
}

class Barrier {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display() {

    fill("blue");
    rect(this.x, this.y, this.w, this.h);
  }
}

function startGame() {
  //switches screen and button hides after its in level 1
  firstImage = !firstImage;
  button.hide();
}

//
function repaint() {
  //highlights the button when hovering over
  let g = 5000;
  background(g);
}

//function transistion

