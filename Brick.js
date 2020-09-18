class Brick{
  constructor(x, y, width, height) {
    var options = {
        'restitution':1,
        'friction':2,
        'density':0.8
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("cyan");
    strokeWeight(3);
    stroke("cyan");
    rect(0, 0, this.width, this.height);
    pop();
    }else{
      World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
    }
  }
  score() {
    if(this.Visiblity<0 && this.Visiblity>-105){
      Score++;
    }  
  }
  
};