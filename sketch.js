const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball,block,holder,ground,slingshot;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  ball=createSprite(200,300,20,20);
 ground =createSprite(400,400,800,20);
  block=createSprite(600,150,20,20);
  holder=createSprite(600,200,50,10);
  slingshot=createSprite( ball.body,{x:200, y:300});
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ball.display();
  ground.display();
  block.display();
  holder.display();
  slingshot.display();
  
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(ball.body);
    }
}