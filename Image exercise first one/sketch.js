// Majority Color
// Amaan Rehman
// 4/24/26
//


let myImage;

function preload(){
  myImage = loadImage("assets/chip.jpg");
}
function setup() {
  createCanvas(640, 480);
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
  //check every pixel then change
  for(let x = 0; x < width; x++){
     for(let y = 0; y < height; y++){

      let index = ((y * width) + x) * 4;

      let r = pixels[index];
      let g = pixels[index+1];
      let b = pixels[index + 2];

      if(r >= g && r>= b){
        setPixel(x,y,255,0,0);
        //go pure red
      }
      else if(g>=b){
        setPixel(x,y,0,255,0);
        //green
      }
      else{
        setPixel(x,y,0,0,255);
        //else blue to be biggest
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