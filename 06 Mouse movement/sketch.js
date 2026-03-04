// MouseWheel, Map, Lerp
// Amaan Rehman
// 26/2/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let x, y;
let x1, y1;
let diameter = 50;
let r1, g1, b1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width/2;  y = height/2;
  y1 = width/3;  y1 = height/3
  noFill();

  strokeWeight(9);

}


function draw() {
  background(220, 90);
  
  x = lerp(x, mouseX, 0.9);
  y = lerp(y, mouseY, 0.9);
  //line(x, y , mouseX, mouseY)

  x1 = lerp(x1, mouseX, 0.5);
  y1 = lerp(y1, mouseY, 0.5 );


  let r = map(x, 0,  width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = 120;
  stroke(r, g, b);

  let r1 = map(x1, 30,  width, 40, 255);
  let g1 = map(y1, 30, height, 0, 255);
  let b1 = 250;

  

  stroke(r, g, b);
  circle(x, y, diameter);

  stroke(r1, g1, b1);
  square(x1, y1, diameter);
}

function mouseWheel(event){
  //NEGATIVE: SCROLL UP -100, -200, -300
  //POSITIVE: SCROLL DOWN 100, 200, 300
  print(event.delta);
  if(event.delta < 0){ //UP
    diameter += 5;
  }
else{ //down
  diameter -= max(5, diameter - 5);
}
}








