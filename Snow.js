class Snow {
    constructor(x,y){
        var options = {
            isStatic: false,
            friction: 0.1
        }
        this.radius = 5;
        this.snow = Bodies.circle(x,y,this.radius,options);
        World.add(world, this.snow);
        
    }

    update() {

        if (this.snow.position.y > height) {

            Matter.Body.setPosition(this.snow, {x: random(0, 700), y: random(0,200)});

        }

    }

    display(){

        var pos = this.snow.position;
        imageMode(CENTER);
        ellipseMode(CENTER);
        fill("darkblue");
        ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}