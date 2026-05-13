// objects
// Amaan Rehman
// 5/13/26
//


let objects = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 200; i++){
  objects.push(new AnimatedObject(random(width), random(height)));
   objects.push(new CircleObject(random(width), random(height)));
   objects.push(new LineObject());
  }
  
}

function draw() {
  background(200);
  for(let o of objects){
    o.move();
    o.display();
  }
}




