// Object Notation, Noise Recap
// Amaan Rehman
// 3/2/26



let ball, ball2; //objects cannot be created before setup

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {//object notation. Inside the brackets
            //SET UP A BUNCH OF PROPERTY; VALUE PAIRS
    x: 300,   y: 400,   size: 40,
    c: color(random(255), random(255),random(255)),
    timeX: random(100), timeY: random(100), timeOff: 0.4,
}

}

ball2 =
 {x: 600, y: 500,  size: 50,
  c: color(random(255), random(255),random(255)),
    timeX: random(100), timeY: random(100), timeOff: 0.4,

}
function moveBall(b){
//b --> Ball type object
//update position and draw ball
//generate how to change x and y position(noise)
  let dx = noise(b.timeX); //0-1
  dx = map(dx, 0, 1, -5, 5) //dx: -5 to 5
  let dy = noise(b. timeY); //0-1
  dy = map(dy, 0, 0.1, -5, 5); //dy:  -5 to 5
//advance our noise through "cursors"
  b.timeX += b.timeOff; b.timeY += b.timeOff;

  //update position
  b.x += dx;    b.y += dy;


  if(b.x < 0) b.x = width;
  else if(b.x > width) b.x = 0;

  if(b.y < 0) b.y = height;
  else if(b.y > height) b.y = 0;

  //render circle:
  fill(b.c);
  circle(b.x, b.y, b.size);
}







function draw() {
  background(220);
  moveBall(ball);
  moveBall(ball2);

}
