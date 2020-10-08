
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roofObject=new Roof(220,250,150,20);

   bobObject1=new BOB(200,300);
   bobObject2=new BOB(210,300);
   bobObject3=new BOB(220,300);
   bobObject4=new BOB(230,300);
   bobObject5=new BOB(240,300);

   rope=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);

    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope.display();
  
  drawSprites();
 
}



