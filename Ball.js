class Ball{
    constructor(x, y) {
      var options = {
          'restitution':2,
          'friction':9.0,
          'density':1.0,
          'gravity':-100000000.0
      }
      this.body = Bodies.rectangle(x, y,30,30, options);
      this.width = 30;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("cyan");
      stroke("cyan");
      strokeWeight(9);
      ellipse(0, 0, this.width);
      pop();
    }
  };