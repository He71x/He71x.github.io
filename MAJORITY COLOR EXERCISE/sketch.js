// Image color 1st exercise
// Amaan Rehman
// 4/24/26
//

let myImage;

function preload(){
  //called BEFORE setup. Won't conclude
  //until all loads are complete.
  myImage = loadImage("assets/chip.jpg");    
}

function setup() {
  //createCanvas(myImage.width, myImage.height);
  createCanvas(640,480);

  pixelDensity(1); 
  //myVideo.hide();
}

function draw() {
  background(220);
  image(myImage, 0,0);   //STILL IMAGE
  
  //access and modify the pixels on the Canvas
  loadPixels();  //dumps data from canvas into array
  background(0);
  myColor();
  boost();
   //greyscale();
  updatePixels();
 // textImage();
  //randomSpots();
}

function randomSpots(){
  randomSeed(4);
  let size = 5;
  noStroke();
  for (let i = 0 ; i < 15000; i++){
    let x = int(random(0,width));
    let y = int(random(0,height));
    if(dist(x,y,mouseX, mouseY)< 150){
      let c = getColor(x,y);
    fill(c);
    circle(x,y,size);
    }
    
  }
}

function getColor(x,y){
  //return color located at an x,y coordinate
  let index = ((y*width) + x)*4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return color(r,g,b);
}

function textImage(){
  fill(255);
  let scaleAmount = 10;
  textSize(scaleAmount);

  for(let x = 0; x < width; x+= scaleAmount){
    for(let y = 0; y < height; y += scaleAmount){
      let avg = getAvg(x,y);  //0-255
      if (avg > 210) text("f", x, y);
      else if(avg > 170) text("T", x, y);
      else if(avg > 130) text("x", x, y);
      else if(avg > 90) text(":", x, y);
      else if(avg > 45) text(".", x, y);
    }
  }
}

function boost(){
  //brightening filter
  let boostAmount = map(mouseX, 0, width,-100,100);
  for(let i = 0; i<pixels.length; i+=4){
    let r = pixels[i] + boostAmount;
    let g = pixels[i+1] + boostAmount;
    let b = pixels[i+2] + boostAmount;
    setPixelOneD(i,r,g,b);
  }
}

function getAvg(x,y){
  // return average intensity of rgb
  // at (x,y).
  let index = ((y*width) + x)*4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return (r+g+b) / 3
}

function greyscale() {
  // use the average intensity of each pixel
  // to represent it as a shade of grey.
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      setPixel(x,y,avg,avg,avg);
    }
  }
}

function setPixel(x,y,r,g,b){
  //x,y → pixel location
  //r,g,b → color values
  let index = ((y*width) + x)*4;
  setPixelOneD(index,r,g,b);
}

function setPixelOneD(pos, r, g, b){
  //pos → 1D location of the pixel's red component
  //r,g,b → new color values (0-255) for the pixel
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function myColor(){
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      if(avg >210) fill(255, 0, 0);
      else if(avg > 170) fill(0, 255, 0);
      else if(avg > 130) fill(0, 0, 255);
      else if(avg > 90) fill(255, 0, 255);
      else if(avg > 45) fill(255, 255, 0);
}

}
}





