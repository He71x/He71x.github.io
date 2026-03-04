// DRAWING WITH SINGLE LOOPS
// Amaan Rehman
// FEB 24, 2026

//GLOBAL VARIABLES


let cX = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function movingBall() {
  //USING DRAW() LOOP, WE CAN ANIMATE
  cX += 5;
  if(cX > width) cX = 0;//WRAP AROUND
circle(cX, 50, 25); 

}

//function circleLine(y, size) {
// USE FUNCTION TO DRAW A LINE OF CIRCLES
// y --> number  height at which to draw the line
// size --> number  diameter of the circles
  let xStart = width * 0.1; //10 percent position from left
  let xEnd = width * 0.9;    //00 percent position from left

  for(let x = xStart; x < xEnd; x += size)

    circle(x, y , size)


function gradientBackground(){
//CREATE A GRADIENT TO USE AS A BACKGROUND
let h =  2; //height of each rect

//use a  loop(does NOT HAVE TO BE A WHILE)
//TO DRAW VERTICAL STACK OF RECTS

let y = 1
while(y < height){
let value = map(y, 0, height, 0, 255);

fill(value, 80, 90)
  rect(0, y, width, h);
y += h;

}


}



function challenge() {
  circle()


circle(x)

}



function draw() {
  background(220);
  challenge();
  gradientBackground();
  movingBall();
 circleLine(height * 0.3, 30);
 circleLine(height / 2, 50);
 circleLine(height * 0.7, 70);



}