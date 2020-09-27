
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,dustbin1,ground1;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//ground = new Ground(600,height,1200,20);

	ball1=new ball(200,620,40);
    dustbin1=new dustbin(1200,650);
	ground1=new ground(width/2,670,width,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  
  ground1.display();
  ball1.display();
  dustbin1.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
		//Matter.Body.setStatic(ball1,false);
	}
}


