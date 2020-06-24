var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 //creating a box
	 
	 var boxRight_options={
		 isStatic:true
	 }

	boxRight= Bodies.rectangle(500,610,20,100,boxRight_options);
	World.add(world,boxRight); 

	 var boxLeft_options={
		isStatic:true
	}

	boxLeft= Bodies.rectangle(300,610,20,100,boxLeft_options);
	World.add(world,boxLeft); 

	var boxBottom_options = {
		isStatic:true
	}

	boxBottom = Bodies.rectangle(400,650,100,10, boxBottom_options);
	World.add(world,boxBottom);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  fill(255,0,0);
  stroke(255,0,0);
  rect(boxRight.position.x, boxRight.position.y , 20, 100);
  rect(boxLeft.position.x,boxLeft.position.y, 20,100);
  rect(boxBottom.position.x,boxBottom.position.y, 200,20);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



