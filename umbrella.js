class Umbrella{
    constructor(x, y){
        var options = {
            'isStatic':true
        }
        this.width=51;
        this.height=30;
        //pc - the document says load an image
        this.image=loadImage("images/walking_1.png");
        //this.scale=0.5;  - scale does not work in the matter.js
        this.body=Bodies.circle(x, y, 150,options);
    /* x and y position is there as a part of the body itself
        this.x=x;
        this.y=y;
*/
        World.add(world, this.body);




    }



    display(){
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rectMode(CENTER);
        imageMode(CENTER);
        //pc
        image(this.image, this.body.position.x, this.body.position.y, 300, 300);
        //pop();
    }
}