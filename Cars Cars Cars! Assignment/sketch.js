// Cars Cars Cars!
// Amaan Rehman
// 3/27/26


//Lock in

let eastbound = [];
let westbound = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

//   for(let i = 0; i < 20; i++){
//     let x = random(height/2, height - 40);
//     eastbound.push(new Vehicle(1, random(width)));
//  }

 }
  
function drawRoad(){
fill(0);
rect(0, 330, 1000, 300);
stroke(255);

strokeWeight(4);

for(let x = 0; x < width; x += 45){
  line(x, width/2, x + 21, width/2)
}
}



function draw() {
  background(250);
  drawRoad();
}













