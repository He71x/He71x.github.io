// Interactive Scene Assignment
// Amaan Rehman
// 2/11/26
//
// Grass place.

 function setup() { 
  createCanvas(windowWidth, windowHeight); }


  let r = 10;
  let g = 196;
  let b = 224;


  let changedColor = true;

  let sunColor = "yellow";

  let value = 0;

let sunx = 50;
let suny = 50;

let originalx = 50;
let originaly = 50;
//Variable for changing background state with a middle mouse click.
let currentBack = 0;

 //Create functions for objects and background function 
 //able to change grass visibility
 function grass(){ 
  strokeWeight(6)
  if(value === 0){
    fill("blue");
  } else{
      fill("green");


  rect(0, 700, 950, 400);
 }
 }

 function mouseClicked() {
if(value === 0){
value = 255;
}else {
  value = 0
}

}
 
 
 function clouds() {
   noStroke(); 
   fill("grey"); 
   rect(30, 20, 550, 50, 200);
   rect(530, 150, 550, 50, 20)
   } 
//Able to move sun with key 'f' and 'm'
   function sun() {
      noStroke();
      fill(sunColor)
      circle(sunx, suny, 250) 
   }



 function word() {
  fill("lightgreen")
text('Amaan', 900, 10 )

}


//Used to move character(shapes) with mouse movement
function character() {
  fill("red")
square(mouseX, mouseY, 90, 20, 70, 20, 110);
fill("yellow")

circle(mouseX + 20, mouseY + 29, 25)
circle(mouseX + 45, mouseY + 20, 25)


}

//Function for trees
function object() {
  fill("brown")
  rect(15, 700, 55, -230);
  rect(880, 700, 55, -230);

  fill("green")
   square(30, 440, 55, 10);
   square(3, 440, 55, 10);
   square(30, 470, 70, 10);

  square(830, 480, 55, 10);
   square(850, 440, 55, 10);
  square(877, 440, 55, 10);


}
//s to switch between colors
function keyPressed() {
if(key === 's'){
    if(changedColor === false) {

      sunColor = "orange";
      changedColor = true;

}
    else{
      sunColor = "yellow"
      changedColor = false
    }
    }//Now to move position of the sun with key 'f'
    if(key === 'f') {
      sunx = random(300, 400, 500);
      suny = random(100, 200, 300);
    }
else if(key === 'm'){
sunx = originalx;
suny = originaly;


}


}
//Use middle mouse button to change background color.
function mousePressed() {
  if(mouseButton === CENTER) {
    currentBack = (currentBack + 1) % 4;


  }
}

function colorBackground() {
  if(currentBack === 0){
      background(10, 196, 224);   //original blue
  }
else if(currentBack === 1){
  background(0, 255, 0);    //green
}
else if(currentBack === 2) {
  background(128, 0, 128);  //purple
}
else if(currentBack === 3){
  background(255, 255, 0);  //Yellow
}


}


 function draw() { 
  background(r, g, b);
  colorBackground();
   grass(); 

     sun();
    clouds(); 


    word();
    object();
    character();
    
  }

  

  




















