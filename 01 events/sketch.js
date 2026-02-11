// Text and Events
// Mr. Scott
// Feb 9, 2026

// Global Variable Section
let textShade = 255;
let textScale =  40;
let bgcolor = "grey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  // this function will report some
  // system variables related to mouse
  // onto the screen via text()

  // mouseX, mouseY → store current mouse pos
  // mouseIsPressed → boolean: button pressed?
  //    good for mouseHELD events...

  // try using mouseIsPressed to change size
  // because draw() runs 60 times/s, usually
  // mouseIsPressed will be checked 4-10 times
  // per click event.

  // if(mouseIsPressed){
  //   textScale = int(random(10,100)); //10-99
  // }

  textSize(textScale);
  fill(textShade);
  text(mouseX + ", "+ mouseY + ", " + mouseIsPressed +
    ", " + mouseButton, mouseX, mouseY);
}

function mousePressed(){
  // this is a p5 function
  // automatically called exactly ONCE
  // per mousePress (on down action)
  textShade = int(random(0,255));
}

function displayKeyboard(){
  // we'll use this function to inspect
  // some of p5's keyboard capabilities
  //
  // keyIsPressed → is a keyboard button press?
  // key          → last pressed key (non-coded)
  // keyCode      → last pressed coded key AS A NUMBER

  if(keyIsPressed){
    //good for keyHELD events...
    //something was pressed. Next, check which key/keyCode
    if(key === " "){
      bgcolor = color(random(255), random(255), random(255));
    }
  }

  textSize(30);
  textAlign(CENTER, CENTER);
  let t = keyIsPressed + ", " + key + ", " + keyCode;
  text(t, width/2, height/2)
}

function keyPressed(){
  //called automatically ONCE per keydown event
  if(keyCode === 65){
    bgcolor = color(random(255), random(255), random(255));
  }
}

function draw() {
  //goal: keep draw() tidy!
  background(bgcolor);
  //displayMouse();
  displayKeyboard();
  
}