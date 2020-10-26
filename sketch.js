
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var r1,r2,r3;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.`
	r1=new dust(400 , 650 , 200 , 20);
	r2=new dust(300 , 610 , 20 , 100);
	r3=new dust(500 , 610 , 20 , 100);

	ball=new paper(100,200)

	ground = createSprite(680 ,680, 1600 , 10, {isStatic:true});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  r1.display();
  r2.display();
  r3.display();
  ball.display();

  if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }

}



