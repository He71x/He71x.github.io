// Interactive Scene Assignment
// Amaan Rehman
// 2/11/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);

}

//Create functions for objects and background
function grass(){
  noStroke();
  fill("Green");
  rect(0, 700, 950, 400); 
}



function colors1() {
  noStroke();
  fill("navy");
  rect(0, 0, 950, 120);
  

}

function colors2() {
  noStroke();
  fill("blue");
  rect(0, 100, 950, 120);

}

  function colors3() {
    noStroke();
    fill("lightblue");
    rect(0, 200, 950, 120);

}
function clouds1() {
noStroke();
fill("grey");
rect(30, 20, 550, 50, 200);

}


  function draw() {
  background(10, 196, 224);
  grass();
  colors1();
  colors2();
  colors3();
  sun();
  clouds1();

  }




















