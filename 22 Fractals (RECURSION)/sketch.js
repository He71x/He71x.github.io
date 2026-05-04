// recursion
// Amaan Rehman
// 4/29/26



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //centerCircle(mouseX, mouseY, width/2, height/2, 400);
  //circleFractal(mouseX, mouseY,width/2, height/2, 700);
luckySquare(width/2, height/2, 700)
}
function luckySquare(x,y,s){
  rectMode(CENTER); noFill();

  if(s > 10){
    let r = map(x,0,width,0, 255);
    let g = map(y,0,height,0, 255);
    let b = map(x,0,width,255, 0);
    fill(r, g, b)

    if(dist(x,y,mouseX,mouseY) <= s/2){
    strokeWeight(5);
  }
    else{
      strokeWeight(2);
    }
    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(0, 0, s);
    pop();
    square(x,y,s);
    luckySquare(x - s/2, y - s/2, s* 0.45)
    luckySquare(x + s/2, y - s/2, s* 0.45)
    luckySquare(x - s/2, y + s/2, s* 0.45)
    luckySquare(x + s/2, y + s/2, s* 0.45)
  }
  
}

function circleFractal(x,y,d){
  noFill();
  if(d > 10){


  circle(x,y,d);
  circleFractal(x - d / 2, y, d/2);
  circleFractal(x + d / 2, y, d/2);
  circleFractal(x,y, d/2, d/2);
  circleFractal(x + d / 2, y, d/2);
  circleFractal(x , y - d/2, d/2);
}
}

 function centerCircle(x, y, d){
//   //recursively draw concentric circles
  //base case... implicit

  if(d > 10){
//     //recursive case
   circle(x,y,d);
    centerCircle(x,y,d * 0.99);
  }

//   //if the recursive case is skipped,
//   //we unravel one level (base case)
 }


