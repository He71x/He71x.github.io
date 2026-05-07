// Horizontal mirror
// Amaan Rehman
// 5/6/26

let myImage;


function preload(){
  myImage = loadImage("assets/hand.jpg");
}


function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myImage,0,0);

  loadPixels();
  horizontalMirror();
  updatePixels();

}


function horizontalMirror(){
  //only check right half

  for(let x = width/2;x<width;x++){
    for(let y = 0; y < height;y++){


  let index = ((y*width) + x)*4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];


let mirror = width - x - 3;
setPixel(mirror,y, r, g, b);


    
}
  }
}

function setPixel(x,y,r,g,b){
  
  let index = ((y*width) + x)*4;
  setPixelOneD(index,r,g,b);
}

function setPixelOneD(pos, r, g, b){
  
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}