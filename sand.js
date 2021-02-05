class Sand {
    constructor(x, y) {
      var options = {
        'restitution':1.0,
        'friction':5.0,
        'density':1.4

      }
      this.body = Bodies.circle(x, y, 6,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(4);
      stroke("green");
      fill("blue");
      //circleMode(CENTER);
      circle(0,0,90);
      pop();
    }
  };
  