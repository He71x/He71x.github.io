// PLANETS AND MOON IDK
// AMAAN REHMAN
// 3/26/26


//ADD STYLE


let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(0, 1);
  noStroke();
  fill("lightblue");
  myPlanet.display();
}
function mousePressed(){
  //regular click - add moon
  //shift click - destory and rest moon
  if(keyPressed && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
 else myPlanet.createMoon();
}
function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX
    myPlanet.y = mouseY
  }
}

class Planet{
  //constructor
  constructor(x,y){
    this.x = x; this.y = y; this.s = 100;
    this.s = color(random(255),random(255),random(255));
   
    this.moons = []

  }

  //class methods
  createMoon(){
    this.moons.push(new Moon());

  }
  display(){
    circle(this.x, this.y, this.s);

    for(let m of this.moons){
      m.update(this.x, this.y, this.s);
      
    }
  }
  }
  class Moon{
    constructor(){
      this.speed = random(50,150); //angular spseed
      this.angle = 0;
      this.orbitRadius = random(100, 200);
      this.s = random(10, 50);
    }
    move(){
      this.angle += this.speed
    }
display(x,y){
  push();
  translate(x,y);
  rotate(this.angle);
  circle(this.orbitRadius, 0, this.s);
  pop();
}
update(x,y){
  this.move()
  this.display(x,y)

}
  }

























































































































































































































































































































