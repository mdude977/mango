
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	mango1 = new Mango(1250,332,50);
	mango2 = new Mango(1000,420,68);
	mango3 = new Mango(1070,278,70);
	mango4 = new Mango(1180,195,60);
	mango5 = new Mango(1150,390,65);
	mango6 = new Mango(1300,300,75);
	mango7 = new Mango(1270,200,55);
	tree = new Tree(1200,500,700)
	ground = new Ground();
	boy = new Boy(240,700,250,600);
	stone = new Stone(170,570,50)
	Chain = new chain(stone.body,{x: 300, y:625});
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  boy.display();
 stone.display();
 Chain.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 


}

function detectCollision(lstone,lmango){
	sPos = lstone.body.position
	mPos = lmango.body.position
	var distance = dist(sPos.x,sPos.y,mPos.x,mPos.y);
	if(distance <= lstone.r + lmango.r)
	{
	  Matter.Body.setStatic(lmango.body,false);
	}
 
 }
 
 function mouseDragged(){
   Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY});
   Matter.Body.setStatic(stone.body,false);
 }
 
 function mouseReleased(){
	 Chain.fly();
 }
 
 function keyPressed(){
   if(keyCode === 32){
	 Matter.Body.setPosition(stone.body,{x:158 , y:627});
	 Chain.attach(stone.body);
	 Matter.Body.setStatic(stone.body,true);
   }
 }



