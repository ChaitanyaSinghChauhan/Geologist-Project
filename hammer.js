class Hammer {
    constructor(x, y, width, height) {
      var options = {
        'density':1.0,
        'friction':1.0,
        'restitution':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.image = loadImage("Screenshot (30).png");
      //this.image.scale = 2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("green");
      fill("lime");
     // imageMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  