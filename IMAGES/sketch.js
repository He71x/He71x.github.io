// images
// Amaan REHMAN
// 4/14/26

//play animations

let lionL, lionR;
let dir = "left";
let pinImages = [];
let current = 0; //pinwheel curr index

let pins;

async function loadAssets(){
  //load lion
lionL = loadImage("assets/lion-left.png");
lionR = loadImage("assets/lion-right.png");


//pinwheel image
for(let i = 0; i <= 8; i++){
  pinImages.push(loadImage("assets/pin-0" + i + ".png"))
}
pinImages.push(loadImage("assets/pin-00.png"));
pinImages.push(loadImage("assets/pin-01.png"));
pinImages.push(loadImage("assets/pin-02.png"));
pinImages.push(loadImage("assets/pin-03.png"));
pinImages.push(loadImage("assets/pin-04.png"));



}
async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER);  //CENTER REFERENCED IMAGES
  //noCursor();
}

function lion(){
  if(movedX < 0) dir = "left";
  else if(movedX > 0) dir = "right;"
  if(dir === "left"){
  image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  else{
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2)
  }
}




function draw() {
  background(220);
lion();
pinwheel();

}

class pinWheel{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

function mousePressed(){
pins.push(new pinwheel(mouseX, mouseY));

}
function pinwheel(){
  //cannot animate with a FOR loop
  //for(let i = 0; i <=8; i++){
    //image(pinImages[i], width/2, height/2, 0.7);
    if(frameCount % 1 === 0){
    current = (current + 1) % 9
    }
image(pinImages[current], width/2, height/2 * 0.7);
current++;
    }
    
  
  
