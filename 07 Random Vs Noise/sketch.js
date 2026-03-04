// Random Vs Noise
// Amaan Rehman
// 2/27/26


//LOOKING AT UNPREDICTABILITY. DIFFERENCE BETWEEN UNIFORMLY
//DISTRIBUTED NUMBERS AND PERLIN NOISE.

//CHALLENGE: USE noise() to make/use a
//yspeed  variable

//global variables
let d1, d2;
let minSize = 5;  let maxSize = 200
let x1, x2, y1, y2;

let ySpeed = 0;
let xSpeed = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3; y1 = height * 0.5;
  x2 = width * 0.7;  y2 = height * 0.5;
  //frameRate(3);
}



function draw() {
  background(0);
  //randomSeed(703); //ACTUAL VALUE 
 // stars();
   //randomCircle();
   ySpeed = noise(yNoiseTime)
   ySpeed = map(ySpeed, 0, 1, -5, 5);
   y2 += ySpeed;
   noiseTime += ySpeed
   noiseCircle();

}

function noiseCircle() {
  //DRAW A FIXED CIRCLE
  //CHANGING DIAMETER BUT SMOOTH
  fill("green");
  d2 = noise(noiseTime);
  d2 = map(d2, 0, 1, minSize, maxSize)
  circle(x2, y2, d2)
noiseTime += noiseSpeed



}

function randomCircle(){
//DRAW A FIXED CIRCLE WITH random()ly
//CHANGING DIAMETER
fill(120, 2, 60)
  d1 = random(minSize, maxSize);
  circle(x1, y1, d1);
}
//VARIABLES FOR USING noise()

let noiseTime = 5, noiseSpeed = 0.03;
//NOISE SPEED CONTROLS HOW CONNECTED
//THE random noise() values are

function stars(){
  //USE random() to generate 100 stars
  //[alt] [shift] [f] - autoformat
  fill(255);
  for(let i = 0; i < 100; i++){
  }
  let x = random(0, width);
  let y = random(0, height);


  
}