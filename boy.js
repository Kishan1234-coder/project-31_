class Boy{
    constructor(x,y,diameter){
         var options  = {
          isStatic : true,
         restitution : 1,
          friction : 0.1,
          density : 1.0
         }
         this.body = Bodies.circle(x,y,diameter,options)
         this.diameter = diameter;
         this.image = loadImage("Walking Frame/walking_1.png");

         World.add(world , this.body);
        }

        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            //ellipseMode(RADIUS);
            //fill("blue");
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,300,300);
            //ellipse(0,0,this.diameter);
            pop();
        }
    }