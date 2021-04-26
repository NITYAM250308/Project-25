class Paper {
    constructor(x, y, radius) {
      var options = {
         isStatic: false,
         'restitution':0.3,
         'friction':0.5,
         'density':1.2
      }
      this.body = Bodies.circle(50,650, radius, options);
      this.image=loadImage("images/paper.png")
      this.radius= radius
      World.add(world, this.body);
     
    }
    display(){
      
      ellipseMode(RADIUS);
      fill("white");
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,60,60);
    }
  };
  