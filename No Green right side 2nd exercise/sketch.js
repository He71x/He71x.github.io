// Secone image exercise
// Amaan Rehman
// 4/28/26
//

let myImage;


function preload(){
  myImage = loadImage("assets/race.jpg");
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myImage, 0, 0);
  loadPixels();
  rightSide();
  updatePixels();
}


function rightSide(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let index = ((y*width) + x)*4;

    let r = pixels[index];
    let g = pixels[index+1];
    let b = pixels[index+2];
//affects right side of the page
    if(x > width / 2){
      setPixel(x,y,r, 0, b);
    }
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
