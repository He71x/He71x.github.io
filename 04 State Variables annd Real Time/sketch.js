// STATE VARIABLES AND REAL TIME
// AMAAN REHMAN
// FEB 23, 2026

//global variables
let shapeState = 0; //0- CIRCLE   1- SQUARE
                    //2 -TRIANGLE  3- STARBUST

let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();

}

//millis()      startTime     millis()-startTime  
//  0               0                  0
//  200             0                  200
//  400             0                  400
//  600             600                 0
//  800             600                200
//  1000            600                400




function draw() {
  background(220);
  drawShape();
}
function manageTime(){
// this function will reset our timer
//(and update shapeState) once every 2 seconds.
let elapsedTime = millis() - startTime;
if(elapsedTime > 2000){
  updateState();

}

}



function updateState(){
  shapeState++;
  if(shapeState > 3) shapeState = 0; 


}

function keyPressed() {
  updateState(); 

}

function drawShape() {
  // function inspects the shapeState variable
  // and draws the appropriate shape on the canvas
  let x = width/2; let y = height/2;
  switch(shapeState) {
      case 0:
        circle(x, y, 150);
        break;
      case 1:
        square(x, y, 150);
        break;  
        case 2:
          triangle(x-50, y+50, x+50, y+50, x, y-25);
          break;
        case 3:
          for(let i = 0;  i < 30; i++){
              let x2 = random(x-80, x+80)
              let y2 = random(y-80, y+80)
              line = (x,y,x2,y2)

          }
          break;
  }

}





