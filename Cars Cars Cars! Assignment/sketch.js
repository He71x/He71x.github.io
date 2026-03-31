// Cars Cars Cars!
// Amaan Rehman
// 3/27/26

//Lock in

let eastbound = [];
let westbound = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

//make eastbound cars to move right
   for(let i = 0; i < 20; i++){
     let y = random(height/2 + 10, height * 3/4 - 30);
     eastbound.push(new Vehicle(1, random(width), y, 1));
  }
  //Moving left
for (let i = 0; i < 20; i++){
  let y = random(height / 4 + 0, height / 2 - 30);
  westbound.push(new Vehicle(0, random(width), y, -1))
}
 }
  //Road image
function drawRoad(){
fill(0);
rect(0, height / 4, width, height / 2);
stroke(255);

strokeWeight(4);
//dashed line
for(let x = 0; x < width; x += 45){
  line(x, width/2, x + 21, width/2)
  noStroke();
}
}

class Vehicle {
  constructor(car, x, y, direction){
    this.car = car;
    this.x = x;
    this.y = y;
    this.direction = y;
//color and speed movement
    this.xSpeed = random(1, 5) * direction;
    this.color = color(random(255), random(255), random(255));
  }
  display(){
    fill(this.color);

    if(this.car === 0){
      //car
      rect(this.x, this.y, 40, 20);
      fill(0);
      circle(this.x + 10, this.y + 20, 5, 5);
       circle(this.x + 30, this.y + 20, 5, 5);

     } else{
      //truck kinda
      rect(this.x, this.y, 60, 27);
      stroke(0);
      line(this.x + 30, this.y, this.x + 30, this.y + 25);
noStroke();
circle(this.x + 10, this.y + 20, 5, 5);
       circle(this.x + 30, this.y + 20, 5, 5);
      }
    }
    move(){
      this.x += this.xSpeed;
    //loop back
      if(this.x > width)this.x = 0;
      if(this.x < 0) this.x = width;
    }
    speedUp(){
      if(this.direction === 1 && this.xSpeed < 15){
        this.xSpeed += 0.5;
      }
if(this.direction === -1 && this.xSpeed > -15){
  this.xSpeed -= 0.5;
}
    }
    speedDown(){
       if(this.direction === 1 && this.xSpeed > 0){
        this.xSpeed -= 0.5;
    }
    if(this.direction === -1 && this.xSpeed < 0) {
        this.xSpeed += 0.5;
    }
  }
  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }
  action(){
  this.move();
  if(random(100) < 1) this.speedUp();
    if(random(100) < 1) this.speedDown();
      if(random(100) < 1) this.changeColor();

    this.display();
}
}
  function mousePressed(){
    //shift and click = westbound

    if(keyIsDown(SHIFT)){
      let y = height * 0.35;
      westbound.push(new Vehicle( 0, mouseX, y, -1))
    }else{
      let y = height * 0.65;
      eastbound.push(new Vehicle(1, mouseX, y, 1))
    }

  }


function draw() {
  background(255);
  drawRoad();
  //run eastbound vehicle
  for(let i of eastbound) {
    i.action();
  }
  // run westbound
  for(let i of westbound){
    i.action();
  }
}












