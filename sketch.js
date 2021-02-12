  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,ball
function setup() {
  createCanvas(400,400);
 engine=Engine.create()
 world=engine.world
 var ground_properties ={
  isStatic: true
}

ground=Bodies.rectangle(0,390,200,20,ground_properties)
World.add(world,ground)
console.log(ground)
}

function draw() {
  Engine.update(engine);
  background("black");  
  rect(ground.position.x,ground.position.y,400,20);
  rectMode(CENTER)

}