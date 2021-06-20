class Box{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
    ;
     
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("black")
      strokeWeight(3)
      rect( 0, 0, 50,50);
      pop();
    }
}