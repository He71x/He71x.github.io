// Interactive Scene Assignment
// Amaan Rehman
// 2/11/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

 function setup() { 
  createCanvas(windowWidth, windowHeight); }


  let r = 10;
  let g = 196;
  let b = 224;


  let changedColor = true;

  let sunColor = "yellow";

 


  let value = 0;

 //Create functions for objects and background function 
 
 function grass(){ 
 noStroke();
  if(value === 0){
    fill("green");
  } else{
      fill("brown");


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
 
 
 function clouds() {
   noStroke(); 
   fill("grey"); 
   rect(30, 20, 550, 50, 200);
   } 

   function sun() {
      noStroke();
      fill(sunColor)
      circle(50, 50, 250)

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


function object() {
  fill("brown")
  rect(15, 700, 55, -230);
  rect(880, 700, 55, -230)

  

}
//Swtitch between pressing s and another key, for example like s and d repeatedly.
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
    }









}




 
 function draw() { 
  background(r, g, b);
   grass(); 
   colors1();
    colors2(); 
    colors3();
     sun();
    clouds(); 
    word();
    object();
    character();
    keyPressed();
  }

  

  




















