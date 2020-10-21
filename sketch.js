var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boundary1,boundary2,boundary3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
    
	boundary1 = createSprite(400,660,200,20);
    boundary2 = createSprite(310,612,20,100);
	boundary3 = createSprite(490,612,20,100);   

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;      
   
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	console.log(packageBody);
	Engine.run(engine);          

}

function draw() {
  rectMode(CENTER);   
  background(0);

  Engine.update(engine);
  
  boundary1.shapeColor = "red";
  boundary2.shapeColor = "red";
  boundary3.shapeColor = "red";

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y       

  boundary1.display();
  boundary2.display();
  boundary3.display();
  
 drawSprites();
 }

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody, false)
  }
 }