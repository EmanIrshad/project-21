
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine, world;

var ball, ground, rightWall;
var radius =40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}
	

	//Create the Bodies Here.
    ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world, ball);

	ground1 = new Ground(width/2,670,width,20);
	leftWall = new Ground(1100, 600, 20, 120);
	rightWall = new Ground(1350, 600, 20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, radius, radius);
  ground1.display();
  leftWall.display();
  rightWall.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85});
	}
}



