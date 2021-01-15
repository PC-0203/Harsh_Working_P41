class Drops{
    constructor(x ,y){
        var options = {
            'restitution': 0.25,
            'friction': 1.0,
            'density': 1.0
        }

        this.body=Bodies.circle(x, y, 4, options);
        //pc
        this.radius = 4;   //no major logical impact from this line of code
        World.add(world, this.body);

    }

    display(){
        push();
        stroke("lightblue");
        fill("lightblue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }

    //pc        
    update(){
        if(this.body.position.y>= 550){
            Matter.Body.setPosition(this.body, {x:random(0,900), y:random(0,250)});
        }
    }

   
};