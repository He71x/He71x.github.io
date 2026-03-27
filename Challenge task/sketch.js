// Challenge Task
// Amaan Rehman
// 3/23/26
//

let items = [];
let provinces = new Map();
let currentProv = "SK";

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 20; i++){
    items.push;
    x = random(60, width - 60);
    y = random(height);
    speedY = random(1, 3);


    basePrice = random(10, 100);
     name = "item" + i
  }

     provinces.set("SK", {tax: 1.11});
     provinces.set("AB", {tax: 1.05});
     provinces.set("ON", {tax: 1.13});
}


function keyPressed(){
if(keyPressed == '1'){


  


}


}

function draw() {
  background(220);
  let rules = provinces.get(currentProv);
  for(let items of items){
    items.y += items.x, items.y, 60, 40
    rect(items)
  }
}
