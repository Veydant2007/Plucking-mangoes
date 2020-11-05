
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage = loadImage(Plucking+mangoes/boy.png)
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = bodies.rectangle(x,y)
	image(boyImage,140,550)
	stone = new stone(200,500)
tree = new tree (width/2,height/2)
mango1 = new mango(600,300)
mango1 = new mango(600,400)
mango1 = new mango(650,430)
mango1 = new mango(600,470)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function detectCollision(){
	if(isTouching(stone,mango1||mango2||mango3||mango4)){
		mango.isStatic = false
	}
}


