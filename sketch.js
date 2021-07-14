const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 const Body = Matter.Body
 
 var backgroundImg
  var snow, snow2
  var engine,world;

 
  

 function preload () {
  backgroundImg = loadImage("snow3.jpg");

}




function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;
  
   snow = new Snow(400,100,30);
   

   Engine.run(engine);
}

function draw() {
  background(backgroundImg);  

  snow.display();

  drawSprites();
}