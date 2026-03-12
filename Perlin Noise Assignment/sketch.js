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
  let totalHeight = 0;
  let number = 0;
  let n = time;
  let high = 0;
  let peak = 0;

   for(let x = 0; x < width; x+= rectWidth){
     //random height
     let rectHeight = noise(n) * height * 0.75;
     y = noise(0) * height;
     rect(x, height, rectWidth, -rectHeight);
     if(rectHeight > high){
        high = rectHeight;
        peak = x;
     }
     //add the line, panning and shape
     n += 0.01;
     time += 0.0002;
     totalHeight += rectHeight;
     number++;
   }

   drawFlag(peak, height - high);

   let averageHight = totalHeight / number;
   fill(225, 0, 0);
   rect(0, height - averageHight, width, 4);
   fill(0)
  }
//make the flag
function drawFlag(x, y){
  stroke(0);
  line(x, y, x, y - 35);
//put color of flag part and position the size and shape.
  fill(0, 100, 230)
    triangle(x, y - 35, x, y - 25, x + 30, y - 32);
fill(0)

}

function draw() {
  background(220);
  generateTerrain();
    }

//use function keyPressed() to change shape of rectangles, smoother or steep.
  function keyPressed(){
if(keyCode === LEFT_ARROW){
rectWidth += 1;
}
if(keyCode === RIGHT_ARROW){
rectWidth -= 1;
}
if(rectWidth < 1){
rectWidth = 1;
}
if(rectWidth > 100){
rectWidth = 100;

}
}

