// 5 color 
// Amaan Rehman
// 5/5/26



let myImage;

function preload(){
  myImage = loadImage("assets/nuit.jpg");
}
function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myImage,0, 0);

  loadPixels();
  five();
  updatePixels();
}


function five(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){

      let avg = getAvg(x,y)

//if else statements to change to possible colors
      if(avg >= 205){
        setPixel(x,y,170,230,220);

      }
      else if(avg>=155){
        setPixel(x,y,105,150,210);
      }
      else if(avg>=105){
        setPixel(x,y,120,180,60);
      }
      else if(avg>=55){
        setPixel(x,y,130,30,130);
      }
      else{
        setPixel(x,y,90,10,50);
      }
    }
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


function setPixel(x,y,r,g,b){
  
  let index = ((y*width) + x)*4;
  setPixelOneD(index,r,g,b);
}

function setPixelOneD(pos, r, g, b){

  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}