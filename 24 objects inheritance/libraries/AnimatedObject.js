//parent class
class AnimatedObject{
    //constructor
    constructor(x,y){
      this.x = x; this.y = y;
      this.size = 20;
    }
    
    //class methods
    move(){ //add wiggle effect
      this.x += random(-2,2);
      this.y += random(-2, 2);
    
    }
    
    display(){
      strokeWeight(this.size);
      point(this.x, this.y);
    }
}