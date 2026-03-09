// Perlin Noise Project
// Amaan Rehman
// 3/4/26

//Make terrains


let rectWidth = 5;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0)
}

function generateTerrain() {
  //USE A LOOP TO PUT A NUMBER
  //Side of side rectangles
  //random height
  let n = time;

   for(let x = 0; x < width; x+= rectWidth){
  //   //random height
     let rectHeight = noise(n) * height * 0.75;
     y = noise(0) * height;
     rect(x, height, rectWidth, -rectHeight);

     n += 0.01;
     time += 0.0002;
   }
  }

function draw() {
  background(220);
  generateTerrain();
  }


  function keyPressed(){
if(keyCode === LEFT_ARROW){
rectWidth -= 1;
}
if(keyCode === RIGHT_ARROW){
rectWidth += 1;
}
if(rectWidth < 1){
rectWidth = 1;
}
if(rectWidth > 100){
rectWidth = 100;

}
}

