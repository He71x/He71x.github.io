//Basics pf Coordinnate systems
//IN PYTHON, WE WROTE "RUN TO COMPLETION"
// (start at top, end at bottom)

//IN p5.js, we write "interactive"
// setup() - runs once, at start
// draw() - runs over and over(after setup)
// targeting 60 times per second  
//SCREEN IS UPDATED AT BOTTOM OF DRAW

// ----GLOBAL VARIABLE SECTION---
//WE CAN DECLARE VARIABLES HERE
//WE CAN INITIALIZE VARIABLES WITH SIMPLE DATA TYPES
//DON'T HAVE ACCESS TO SYSTEM VARIABLES
let circleX = 240;
let COMPLETION = 500

function setup() {
  createCanvas(500, 400);
}

function draw() {
  //REPEATS OVER AND OVER(AUTOMATICALLY) 60 FRAMES

  background(100); //WIPES THE SCREEN}
//drawTwoCircles();
fiveCircles();

//    R   G    B

function fiveCircles(){
  fill(20, 100, 20)
stroke("#00FF00")

//      x        y  dia

circle(COMPLETION, 10, 50) ;

//SECOND CIRCLE
fill("blue");
noStroke();
circle(width/40, height/35, 30)


}


fill(200, 100, 20)
stroke("#00FF00")

//      x        y  dia

circle(circleX, 200, 30) ;




}

function drawTwoCircles(){
//    R   G    B

fill(200, 100, 20)
stroke("#00FF00")

//      x        y  dia

circle(circleX, 100, 50) ;

//SECOND CIRCLE
fill("blue");
noStroke();
circle(width/2, height/2, 200)
}











