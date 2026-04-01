// Cars Cars Cars!
// Amaan Rehman
// 3/27/26



let eastbound = [];
let westbound = [];
let light;


function setup(){
  createCanvas(windowWidth, windowHeight);
   light = new trafficLight(width/2, height/8 - 20);

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
for(let x = 0; x < width; x += 50){
  line(x, width/2, x + 21, width/2)
  


}
}

class Vehicle {
  constructor(car, x, y, direction){
    this.car = car;
    this.x = x;
    this.y = y;
    this.direction = direction;
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
      //truck 
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
      if(this.direction === 1 && this.xSpeed < 20){
        this.xSpeed += 0.3;
      }
if(this.direction === -1 && this.xSpeed > -15){
  this.xSpeed -= 0.3;
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
  if(light.state === "green"){
    this.move();}
  if(random(100) < 1) this.speedUp();
    if(random(100) < 1) this.speedDown();
      if(random(100) < 1) this.changeColor();

    this.display();
}
}
  function mousePressed(){
    //shift and click = westbound

    if(keyIsDown(SHIFT)){
      let y = height * random(0.35, 0.55);
      westbound.push(new Vehicle( 0, mouseX, y, -1))
    }else{
      let y = height * random(0.55, 0.70);
      eastbound.push(new Vehicle(1, mouseX, y, 1))
    }

  }

//challenge traffic light system
  class trafficLight {
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.state = "green";  //starts for the green light
      this.timer = 0;
    }
display(){
  fill(50);
rect(this.x, this.y, 30, 80);

//start with red light system
if(this.state === "red"){
  fill(255, 0, 0);
}else{ 
  fill(100);
}
  circle(this.x + 15, this.y + 20, 15);

//green
if(this.state === "green"){
  fill(0,255, 0);
}else{
fill(100);
}
circle(this.x + 15, this.y + 60, 15);

}

update() {
  if(this.state === "red"){
    this.timer--;
    if(this.timer <= 0){
      this.state = "green";
      
    }
  }
}

turnRed(){
  this.state = "red";
  this.timer = 120;
}
}


  function keyPressed(){
    if(key === ' '){
      light.turnRed();
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
  light.update();
  light.display();
}
 












