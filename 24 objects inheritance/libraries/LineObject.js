//Child Class number 2 - Line
class LineObject extends AnimatedObject{
    constructor(){
        super(random(width), random(height));
    }
    move(){ //combo overide, built on parent
        super.move() //runs parent move()
        this.x -+ 20;
        if(this.x < 0) this.x = width;
        
    }
    display(){ //full override, no ref to parent
        if(mouseIsPressed){
            strokeWeight(12);

        }
        else{
            strokeWeight(2)
            line(this.x, this.y, this.x + 25, this.y);
        }


    }
}