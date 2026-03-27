// BOOK OBJECT STUFF IDK
// AMAAN REHMAN
// 3/24/26
//

let myBook; //CANT INTI OBJECTS HERE

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 TEXT", "AMAAN", 
  1234567891011, "Leatherbound", 500,
  width * 0.3);
}




function draw() {
  background(220);
  myBook.display();
}

class Book{
//1. CONSTRUCTER
constructor(title, author, isbn, cover, pages, x){
this.title = title;
this.author = author;
this.isbn = isbn;
this.cover = cover;
this.pages = pages;
this.x = x;

}




//2. Class Methods
//SINCE WE ARE IN CLASS, WE OMIT
//FUNCTION KEYWORD
display(){
  rectMode(CENTER); textAlign(CENTER, CENTER);
  textSize(30);

  //set fill color based on covertype
  switch(this.cover){
    case "softcover":
    fill("green"); break;
    case "hardcover":
    fill("blue"); break;
    case "leatherbound":
      fill(red); break;
  }

//NOW DRAW BOOK
push();
translate(this.x, height/2);
rect(this.x, height/2, this.pages/10, 500);
fill("black");
text(this.title[0], 0, -50);  
pop();
}
}
























