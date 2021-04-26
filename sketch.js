
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var binImage,binImage
function preload() {
	binImage=loadImage("images/dustbingreen.png");
}
function setup() {
	createCanvas(690, 688);


	engine = Engine.create();
	world = engine.world;

	bin=createSprite(600,575,100,50);
	bin.addImage(binImage);
	bin.scale=0.45

	//Create the Bodies Here.
	ground=new Ground(400,680,800,20);
	paper=new Paper(100,600,10);

	rightSide=new Dustbin(664,585,20,170);
	leftSide=new Dustbin(534,585,20,170);
	bottom=new Dustbin(600,660,125,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0,255,255);
  

  paper.display();

  ground.display();

  bottom.display();
  rightSide.display();
  leftSide.display();

  bin.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:12, y: -18})
	}
}



