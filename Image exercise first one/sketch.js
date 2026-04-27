// Majority Color
// Amaan Rehman
// 4/24/26
//


let myImage;




function preLoad(){
  myImage = loadImage("assets/chip.jpg");
}
function setup() {
  createCanvas(myImage.width, myImage. height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myImage,0, 0);
  loadPixels();
  majorityColor();
  updatePixels();
}



function majorityColor(){
  
}