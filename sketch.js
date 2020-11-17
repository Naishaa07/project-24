
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, db1, db2, db3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,690,1600,20);
	paper = new Paper(50,675,15);
	db1 = new dustbin(1300,670,200,20);
	db2 = new dustbin(1190,630,20,100);
	db3 = new dustbin(1410,630,20, 100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  db1.display();
  db3.display();
  db2.display();
  //drawSprites();
 keypressed();
}
function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85});
		
	}


}



