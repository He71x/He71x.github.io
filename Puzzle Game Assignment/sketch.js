// Puzzle game assignment
// Amaan Rehman
// 4/16/26


let grid = [
  [0, 0, 0, 255, 0, 255],
  [255, 0, 255, 0, 255, 0],
  [0, 0, 0, 0, 0, 255],
  [255, 255, 255, 255, 255, 0],
  [0, 255, 0, 0, 0, 255]
];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 100;

function setup() {
  createCanvas(cols * tileSize, rows * tileSize);
  randomizeGrid();
}


function draw() {
  background(200);
renderGrid();
drawOverlay();



textSize(20);
fill(25, 255, 0)
text(getCurrentX() + "," + getCurrentY(), mouseX, mouseY);

if(checkWin()){
  textSize(40);
  fill(25, 255, 0);
  textAlign(CENTER, CENTER);
  text("YOU WIN!", width/2, height/2);
}
}

function flip(x,y){
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}
function mousePressed(){
  //shift click change
  
if (mouseX < width && mouseY < height){

    let x = getCurrentX();
    let y = getCurrentY();
  

      
      rect(x * tileSize, y * tileSize, tileSize);
      

    if(keyIsDown(SHIFT)){   
  flip(x, y);
    }
    else{
      flip(x,y);
    
  // IF THEY EXIST
  //FLIP THE CARDINAL(NSEW) neighbours
  if(x-1 >= 0) flip(x-1, y);  //LEFT
    if(x+1 < cols) flip(x+1, y);
  
   
    if(y-1 >= 0) flip(x, y-1);  //UP
  if(y+1 < rows) flip(x, y + 1);
}
}


}


function checkWin(){
  //add "you win!" after all tiles are complete
  let first = grid[0][0];
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      if(grid[y][x] != first){
        return false;

      }
    }
  }
return true;
}

function drawOverlay(){
let x = getCurrentX();
let y = getCurrentY();

fill(0, 255, 255, 130);

if(keyIsDown(SHIFT)){
  rect(x * tileSize, y * tileSize, tileSize);
}
else{

rect(x * tileSize, y * tileSize, tileSize);

if(x-1 >= 0) rect((x-1) * tileSize, y * tileSize, tileSize);  
  if(x+1 < cols) rect((x+1) * tileSize, y * tileSize, tileSize);  
  
   
    if(y-1 >= 0) rect(x * tileSize, (y-1) * tileSize, tileSize);
  if(y+1 < rows) rect(x * tileSize, (y+1) * tileSize, tileSize);

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
      
function randomizeGrid(){
   for(let y = 0; y < rows; y++){  
    for(let x = 0; x < cols; x ++){ 
      if(random(1) < 0.5){
        grid[y][x] = 255;
      }
      else{
        grid[y][x] = 0;
      }
}
   }
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

