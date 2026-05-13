//Child Class number 1 - circle
class CircleObject extends AnimatedObject{
    constructor(x,y){
        super(x,y);//run parent class constructor and also add on to 
        //what was in parent class
        this.size = random(20,40);
    }


   // no mention of move()... we get an extact copy
   //of move() from parent class

   display(){ //function overide;copies overtpop of parent
    //version

    if(dist(this.x,this.y,mouseX,mouseY)<this.size/2){
        fill(255,0,0)
    }
    else{
        fill(255);

        circle(this.x,this.y,this.size);
    }
   }

}