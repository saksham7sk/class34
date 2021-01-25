class Ball {
    constructor(x, y, radius) {
      var options = {
         frictionAir:0.005, density:1   
      }
      this.body = Bodies.circle(x, y, 60, options)
      this.radius = 60;
      
      World.add(world, this.body);
      
    }
    display() {
      push();
      translate(this.body.position.x, this.body.position.y)
      ellipseMode(RADIUS)
      stroke("white");
      fill("red");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  
  
  };
  