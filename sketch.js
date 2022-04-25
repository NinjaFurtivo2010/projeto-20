
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  
var ball
var retangulo
var quadrado
var plane

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
    
var plane_option ={

isStatic : true

}

var ball_options = {
    restitution: 0.5,
	friction:0.02,
	frictionAir:0
}
var quadrado_options ={
 restitution: 0.7,
 friction:0.01,
 frictionAir:0.1
}
var retangulo_options ={
   restitution:0.01,
   friction:1,
   frictionAir:0.3
}

//Crie os Corpos Aqui.
     ball = Bodies.circle(220,50,50,ball_options)
    World.add(world,ball)
	
	quadrado = Bodies.rectangle(110,50,50,50,quadrado_options)
	World.add(world,quadrado)
	
	retangulo = Bodies.rectangle(350,50,80,50,retangulo_options)
	World.add(world,retangulo)
	
	plane = Bodies.rectangle(400,699,700,10,plane_option)
	World.add(world,plane)
	Engine.run(engine);

}

function draw() {
background("green")

rectMode(CENTER);
  
ellipse(ball.position.x,ball.position.y,50)

rect(quadrado.position.x,quadrado.position.y,50,50)

rect(retangulo.position.x,retangulo.position.y,80,50)

rect(plane.position.x,plane.position.y,880,10)
}



