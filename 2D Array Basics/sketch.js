//2D ARRAYS
// AMAAN REHMAN
// 4/15/26

// 0 --> black  255 -> white
//gridd 6 x 5


let grid = [
  [0, 0, 0, 255, 0, 255],
  [255, 0, 255, 0, 255, 0],
  [0, 0, 0, 0, 0, 255],
  [255, 255, 255, 255, 255, 0],
  [0, 255, 0, 0, 0, 255]
];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;

function setup() {
  createCanvas(cols * tileSize, rows * tileSize);
}


function draw() {
  background(200);
renderGrid();
textSize(20);
fill(255, 255, 0)
text(getCurrentX() + "," + getCurrentY(), mouseX, mouseY);
}

function flip(x,y){
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}
function mousePressed(){
  //ONLY DO FLIP IF MOUSE IN CANVAS
  if(mouseX < width && mouseY < height){

    let x = getCurrentX();
    let y = getCurrentY();
    //ALWAYS:

  flip(x, y);

  // IF THEY EXIST
  //FLIP THE CARDINAL(NSEW) neighbours
  if(x-1 >= 0) flip(x-1, y);  //LEFT
  if(y-1 >= 0) flip(x, y-1);  //UP
}

}

function getCurrentX(){
//DETERMINE THE CURRENT OF X
  let constrainedX = constrain(mouseX, 0, width - 1);
  return floor(constrainedX / tileSize);

  }
  
  function getCurrentY(){
    //DETERMINE THE CURRENT OF Y
      let constrainedY = constrain(mouseY, 0, height - 1);
      return floor(constrainedY / tileSize);
    
      }
      


function renderGrid(){
  //interpret data stored in 2D array grid
  //and draw matrix of squares to reflect.
  for(let y = 0; y < rows; y++){  //y: 0 1 2 3 4
    for(let x = 0; x < cols; x ++){  //x: 0 1 2 3 4 5
      let fillColor = grid[y][x]
      fill(fillColor);
rect(x * tileSize, y * tileSize, tileSize);
    }
  }
}


















