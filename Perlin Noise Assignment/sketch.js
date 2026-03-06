// Perlin Noise Project
// Amaan Rehman
// 3/4/26

//Make terrains


let noiseTime = 5;
let noiseSpeed = 0.02;

let rectWidth = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = 
}

function generateTerrain() {
  //USE A LOOP TO PUT A NUMBER
  //Side of side rectangles
  //random height
   for(let x = 0; x < width; x+= rectWidth){
  //   //random height
     let rectHeight = random(0, height * 0.73);
     y = noise(0) * height;
     rect(x, height, rectWidth, -rectHeight);
   }
  }

function draw() {
  background(220);
  generateTerrain();
  



  




  }

