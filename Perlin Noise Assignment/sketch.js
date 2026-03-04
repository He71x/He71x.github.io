// Perlin Noise Project
// Amaan Rehman
// 3/4/26

//Make terrains


let rectWidth = 15;



function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(100);
}

function generateTerrain() {
  //USE A LOOP TO PUT A NUMBER
  //Side of side rectangles
  //random height
  for(let x = 0; x < width; x+= rectWidth){
    //random height
    let rectHeight = random(0, height * 0.73);

    rect(x, height, rectWidth, -rectHeight);
  }



}




function draw() {
  //background(220);
  //generateTerrain();
  //frameRate(10);

  let noiseLevel = 1000;
  let noiseScale = 0.02;


  let x = frameCount;
  let nx = noiseScale * x;

  let y = noiseLevel * noise(nx);

  line(x, y, x ,height);

  
}
