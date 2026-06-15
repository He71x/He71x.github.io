// The Death Chase (Capstone Project)
// Amaan and Ahnaaf
// May 6, Wednesday, 2026

//TIP: 
// 1. Some platforms in the last level may drop you.
// 2. Timing is key and even being close to the alien can 
// kill u.



let firstImage = true;
let menuBg;
let levelBg1;
let characterImg;
let button;
let levelBg3;
let winImg;


let runImg;
let levelBg2;
let levelBg4;
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

let aliens = [];

let level2Aliens = [];
let level3Aliens = [];
let level4Aliens = [];

let platforms = [];

let level1Barriers = [];
let level1Spikes = [];
let level1Platforms = [];

let level2Barriers = [];
let level2Spikes = [];
let level2Platforms = [];

let level3Barriers = [];
let level3Spikes = [];
let level3Platforms = [];

let level4Barriers = [];
let level4Spikes = [];
let level4Platforms = [];



function preload() {
  //this loads menu background image
  menuBg = loadImage("assets/Menu Background.jpeg");

  //this loads level1 image
  levelBg1 = loadImage("assets/Level 1 background.png");

  //loads level 2 image
  levelBg2 = loadImage("assets/levelBg2.png");

  //loads level 3 image
  levelBg3 = loadImage("assets/levelBg3.png");

  //loads level 4 image
  levelBg4 = loadImage("assets/levelBg4.png");

  //loads end image
  winImg = loadImage("assets/youWin.png");;

  //this loads character + idle image
  characterImg = loadImage("assets/idleAnim.png");

  //this loads running ani image
  runImg = loadImage("assets/runAni.png");

  //loads jump image
  jumpImg = loadImage("assets/jumpAni.png");


}

function setup() {
  createCanvas(950, 980);
  button = createButton("PLAY");
  button.position(385, 755);
  button.size(200, 50);
  button.mousePressed(repaint);
  button.mousePressed(startGame);

  player = new Player(-30, 130);

  level2Aliens.push(new Alien(400, 620));
  level3Aliens.push(new Alien(100, 620));
  level4Aliens.push(new Alien(200, 620));

  //places platform in its spot and used arrays
  //floor
  level1Platforms.push(new Platform(0, 990, 970, 130));
  //2nd plat
  level1Platforms.push(new Platform(175, 529, 10, 100));
  //1st plat 
  level1Platforms.push(new Platform(20, 323, 10, 100));

  level1Platforms.push(new Platform(375, 380, -50, 100));
  level1Platforms.push(new Platform(510, 570, 160, 100));
  level1Platforms.push(new Platform(900, 460, 10, 100));

  //places spikes and restarts player back to the start if touched
  level1Spikes.push(new Spike(500, 550, -110, 80));
  level1Spikes.push(new Spike(690, 550, -85, 80));
  //landing on the floor will restart back to start
  level1Spikes.push(new Spike(0, 900, 970, 130));

  level1Barriers.push(new Barrier(-120, 0, 10, height));
  level1Barriers.push(new Barrier(1000, 570, 10, 400));

  //now level 2 classes
  level2Platforms.push(new Platform(0, 900, 970, 500));
  level2Platforms.push(new Platform(230, 750, 30, 100));
  level2Platforms.push(new Platform(20, 635, 10, 100));

  level2Platforms.push(new Platform(490, 650, -20, 100));
  level2Platforms.push(new Platform(740, 570, -70, 100));
  level2Platforms.push(new Platform(840, 460, -70, 100));
  level2Platforms.push(new Platform(930, 300, 5, 100));

  level2Spikes.push(new Spike(290, 720, -95, 80));
  level2Spikes.push(new Spike(0, 870, 970, 130));

  level2Barriers.push(new Barrier(-120, 0, 10, height));
  level2Barriers.push(new Barrier(1000, 570, 10, 400));

  //now level 3 classes
  level3Platforms.push(new Platform(10, 270, 10, 200));
  level3Platforms.push(new Platform(260, 280, -80, 100));
  level3Platforms.push(new Platform(410, 420, -80, 100));
  level3Platforms.push(new Platform(145, 750, 75, 100));

  level3Platforms.push(new Platform(540, 520, -81, 100));
  level3Platforms.push(new Platform(670, 590, 10, 100));
  level3Platforms.push(new Platform(830, 450, -80, 100));
  level3Platforms.push(new Platform(930, 288, -70, 100));


  level3Spikes.push(new Spike(0, 900, 970, 130));
  level3Spikes.push(new Spike(170, 720, 40, 80));

  level3Barriers.push(new Barrier(-120, 0, 10, height));
  level3Barriers.push(new Barrier(1000, 570, 10, 400));


  //level 4 classes
  level4Platforms.push(new Platform(40, 760, 15, 100));
  level4Platforms.push(new Platform(200, 620, -100, 90));
  level4Platforms.push(new Platform(110, 503, -90, 50));
  level4Platforms.push(new Platform(180, 390, -90, 50));
  level4Platforms.push(new Platform(105, 275, -90, 50));
  level4Platforms.push(new Platform(230, 265, -90, 50));

  level4Platforms.push(new Platform(340, 150, -90, 50));
  level4Platforms.push(new Platform(530, 190, -90, 50));
  level4Platforms.push(new Platform(680, 100, -90, 50));
  level4Platforms.push(new Platform(935, 640, -90, 50));

  level4Platforms.push(new Platform(275, 800, -60, 90));
  level4Platforms.push(new Platform(472, 860, 35, 90));
  level4Platforms.push(new Platform(450, 680, -80, 90));
  level4Platforms.push(new Platform(810, 720, -80, 90));



  level4Spikes.push(new Spike(280, 370, 400, 30));
  level4Spikes.push(new Spike(0, 960, 970, 130));

  level4Barriers.push(new Barrier(-120, 0, 10, height));
  level4Barriers.push(new Barrier(1000, 570, 10, 400));
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
    if (level === 1) {
      platforms = level1Platforms;
      spikes = level1Spikes;
      barriers = level1Barriers;
      image(levelBg1, 0, 0, width, height);

      fill("darkred");
      rect(0, 975, 1000, 900);
    }
    else if (level === 2) {
      platforms = level2Platforms;
      spikes = level2Spikes;
      barriers = level2Barriers;
      aliens = level2Aliens;
      image(levelBg2, 0, 0, width, height);
      rect(0, 975, 1000, 900);
    }
    else if (level === 3) {
      platforms = level3Platforms;
      spikes = level3Spikes;
      barriers = level3Barriers;
      aliens = level3Aliens;
      image(levelBg3, 0, 0, width, height);
      rect(0, 975, 1000, 900);
    }
    else if (level === 4) {
      platforms = level4Platforms;
      spikes = level4Spikes;
      barriers = level4Barriers;
      aliens = level4Aliens;
      image(levelBg4, 0, 0, width, height);
      rect(0, 975, 1000, 900);
    }
    else if (level === 5) {
      image(winImg, 0, 0, width, height);
      fill("darkgreen");
      rect(0, 975, 1000, 900);
      return;
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

        if (level === 1) {
          player.pos.x = -90;
          player.pos.y = 100;
        }
        else if (level === 2) {
          player.pos.x = 0;
          player.pos.y = 300;
        }
        else if (level === 3) {
          player.pos.x = -300;
          player.pos.y = 100;
        }
        else if (level === 4) {
          player.pos.x = 40;
          player.pos.y = 550;
        }

      }
    }
    player.move();
    for (let a of aliens) {
      if (level === 2 || level === 3) {
        a.move();
        a.display();

        //if touching alien, restarts the player back
        if (player.pos.x + player.hitboxW > a.pos.x &&
          player.pos.x < a.pos.x + a.w &&
          player.pos.y + player.hitboxH > a.pos.y &&
          player.pos.y < a.pos.y + a.h) {

          if (level === 2) {
            player.pos.x = 0;
            player.pos.y = 300;

          }
          if (level === 3) {
            player.pos.x = -300;
            player.pos.y = 100;

          }
          player.vel.y = 0;
        }
      }
      if (level === 1 && player.pos.x > width / 1.2 &&
        player.pos.y > 200 &&
        player.pos.y < 400) {

        level = 2;
        player.pos.x = 0;
        player.pos.y = 300;
      }
      if (level === 2 && player.pos.x > width / 1.2
        &&
        player.pos.y > 50 &&
        player.pos.y < 250) {

        level = 3;
        player.pos.x = -300;
        player.pos.y = 100;
      }
      if (level === 3 && player.pos.x > width / 1.2
        && player.pos.y > 50 &&
        player.pos.y < 250) {
        level = 4;
        player.pos.x = 40;
        player.pos.y = 550;
      }
      if (level === 4 && player.pos.x > width / 1.2 &&
        player.pos.y > 30 &&
        player.pos.y < 500) {
        level = 5;
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

}
class Alien {
  constructor(x, y,) {
    this.pos = createVector(x, y);
    this.w = 20;
    this.h = 20;

    this.speed = 1.5;
    this.dir = 1;
  }
  move() {

    this.pos.x += this.speed * this.dir;

    if (this.pos.x >= 550) {
      this.pos.x = 550;
      this.dir = -1;
    }
    if (this.pos.x <= 470) {
      this.pos.x = 470;
      this.dir = 1;
    }
  }
  display() {
    fill("darkgreen");
    rect(this.pos.x, this.pos.y, this.w, this.h);

    //eyes
     fill("red");
     rect(this.pos.x + 7, this.pos.y + 5, 5, 10);
    

  }
}
//add class for the player for movement and physics
//when touching ground or platforms shown
class Player {
  constructor(x, y) { // this is code for the gravity
    //using inspiration from the vectors exercise
    this.jumping = false;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.force = createVector(0, 0.25);
    this.imgW = 250;
    this.imgH = 300;

    this.hitboxW = 190;
    this.hitboxH = 210;

  }
  move() {


    if (keyIsDown(32) && this.jumping === false) {
      this.vel.y -= 14;
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
      image(runImg, -player.pos.x - player.imgW, player.pos.y,
        player.imgW, player.imgH, frameX * spriteW, frameY *
      spriteH, spriteW, spriteH);
      pop();
    }
    else if (keyIsDown(68)) {
      image(runImg, player.pos.x, player.pos.y,
        player.imgW, player.imgH, frameX * spriteW,
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
      image(characterImg, player.pos.x, player.pos.y, 
        player.imgH, player.imgW, idleFrameX * idleSpriteW, 0,
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
    //shows image backrgound only and platform rect shape not shown.
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

    fill("grey");
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



