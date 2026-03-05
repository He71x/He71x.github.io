// Perlin Noise Project
// Amaan Rehman
// 3/4/26

//Make terrains

let inc = 0.01;
let start = 0.09;


let rectWidth = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(10);
}

//function generateTerrain() {
  //USE A LOOP TO PUT A NUMBER
  //Side of side rectangles
  //random height
  // for(let x = 0; x < width; x+= rectWidth){
  //   //random height
  //   let rectHeight = random(0, height * 0.73);
  //   y = noise(0) * height;
  //   rect(x, height, rectWidth, -rectHeight);
  // }


function draw() {
  background(220);
  stroke(255);
  noFill();
 

  beginShape();
  for(var x = 0; x < width; x++){
    
    stroke(255);
    point(x, 200);


  




  }
}
