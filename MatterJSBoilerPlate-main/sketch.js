
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola
var chao
 //function preload() 
var PAREDE1
var PAREDE2



function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;
  var options = {
   restitution: 1.9,
	//FrictionAir: 0.9,
  density: 0.01, 
}	
  var opitioms = {
   isStatic: true
}
  



//Create the Bodies Here.
 bola = Bodies.circle(120,50,30,options)
 World.add(world,bola)
	
 chao = Bodies.rectangle(400,700,800,1,opitioms)
 World.add(world,chao)
 
 PAREDE1 = Bodies.rectangle(450,670,10,50,opitioms)
 World.add(world,PAREDE1)
 
 PAREDE2 = Bodies.rectangle(550,670,10,50,opitioms)
 World.add(world,PAREDE2)
 
 Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x, bola.position.y, 30)
  drawSprites();
  rect(chao.position.x,chao.position.y,800,10)
  rect( PAREDE1.position.x, PAREDE1.position.y,10,50)
  rect( PAREDE2.position.x, PAREDE2.position.y,10,50)
}



// criar os outros dois rects para as paredes da lixeira
function keyPressed(){
 if(keyCode == UP_ARROW){
  Body.applyForce(bola, bola.position,{x:0.2,y:-0.2})


}
}
// faz a bolinha pular