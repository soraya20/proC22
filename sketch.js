const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var rect1;
var ground;
var ball;
function setup()


{   var canvas=createCanvas(400,400);
    
    
    engine=Engine.create();
    world=engine.world;

    //console.log(Matter);

var rectoption={
isStatic:true
}
var groundoption={
  isStatic:true
  }
  var balloption={
    restitution:.8
  }
    rect1=Bodies.rectangle(200,100,50,50,rectoption);
    World.add(world,rect1);
    
    ground=Bodies.rectangle(200,height-10,400,20,groundoption);
    World.add(world,ground);
    
    ball=Bodies.circle(100,100,50,balloption);
    World.add(world,ball);

    console.log(rect1);
    console.log("position x is:",ground.position.x);
    console.log("position y is:",ground.position.y);

   


}
function draw(){
background("red");
Engine.update(engine);
rectMode(CENTER);
rect(rect1.position.x,rect1.position.y,50,50);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);
}