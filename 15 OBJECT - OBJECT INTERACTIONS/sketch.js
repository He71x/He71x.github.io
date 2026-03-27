// SMTH OBJECT IDK
// Amaan Rehman
// 3/25/26

//  GLOBALS

let nodes = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}





function draw() {
  background(0, 50);
  for(let n of nodes){
    n.move();
    n.connect(nodes);
    n.display();
    

  }
}

function mousePressed(){
if(mouseButton === "center"){
for(let i = 0; i < 50; i++){
let x = random(-50, 50);
let y = random(-50, 50);
nodes.push(new csNode(mouseX+x, mouseY+y));

}
}
if(mouseButton === "left"){
  let n =  new csNode(mouseX, mouseY);
  nodes.push(n)
}

}




class csNode{
//1. constructor
constructor(x, y){
this.x = x;  this.y = y;  this.size = 5;
this.c = color(random(255),  random(255), random(255));
//properties movement
this.xTime = random(100);  this.yTime = random(100);
this.timeShift = 0.01;  this.maxSpeed = 5;

}

//2. class methods

display(){
fill(this.c);
noStroke();
circle(this.x, this.y, this.size);
}


move(){
  //use perlin noise for x,y movement
  let xSpeed = noise(this.xTime); //0-1

}
}




