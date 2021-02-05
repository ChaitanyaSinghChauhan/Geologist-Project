
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,stone2,stone3,stone4,stone5, stone6, stone7, stone8, stone9,stone10;
var ground, sand,stone11,stone12,stone13,sand2;

function setup() {
	createCanvas(800, 1200);
	background("pink");

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400,350,150,50);
	sand = new Sand(800,300);
	stone = new Stone(400,230,50,50);
	ground = new Ground(300,700,1200,25);
	stone2 = new Stone(300,200,50,50);
	stone3 = new Stone(450,200,20,20);
	stone4 = new Stone(400,200,20,20);
	stone5 = new Stone(500,200,20,20);
	stone6 = new Stone(300,200,20,20);
	stone7 = new Stone(250,200,20,20);
	stone8 = new Stone(550,200,20,20);
	stone9 = new Stone(620,200,20,20);
	stone10 = new Stone(630,200,20,20);
	stone11 = new Stone(580,200,20,20);
	stone12 = new Stone(630,200,20,20);
	stone13 = new Stone(570,200,20,20);
	stone14 = new Stone(570,200,50,50);
	stone15 = new Stone(550,200,50,50);
	stone16 = new Stone(540,200,50,50);
	sand = new Sand(100,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 // stone.display();
 ground.display();
  
  sand.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  stone6.display();
  stone7.display();
  stone8.display();
  stone9.display();
  stone10.display();
  stone11.display();
  stone12.display();
  stone13.display();
  //stone14.display();
  stone15.display(); 
  stone16.display();
  hammer.display();
  drawSprites();
 
}



