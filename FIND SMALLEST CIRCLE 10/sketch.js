// FIND SMALLEST CIRCLE
// AMAAN REHMAN
// 3/5/26
//

let NUM_CIRCLES = 10
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function makeCircles(){
  let count = 0
  while(count < NUM_CIRCLES){
    let x_ =  random(0, width);
    let y_ = random(0, height);
    let s_ = random(10, 150);
    let c = {x:x_, y:y_, s:s_}
      circles.push(c);
    count++;
  }
}

function renderCircles(){
  let smallest = circles[0].s;
  let smallestY = circles[0].y;
  for(let c of circles ){
    noFill();
    circle(c.x, c.y, c.s);
    if(c.s < smallest){
      smallest = c.s;
      smallestY =  c.y;

    }

  }
fill(1)
stroke("green"); strokeWeight(3);
text(smallest, width/2, height/2)
stroke(0.2), strokeWeight(0);



}


function draw() {
  background(220);
  makeCircles();
  renderCircles();
}
