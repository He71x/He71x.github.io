// Cars Cars Cars!
// Amaan Rehman
// 3/27/26


//Lock in

let eastbound = [];
let westbound = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 20; i++){
    let y = random(height/2, height-40);
    eastbound.push(new Vehicle())
  }

}
  
function drawRoad(){

}



function draw() {
  background(220);
  drawRoad()
}













