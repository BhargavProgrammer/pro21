/*
We are using matter.js lib

1. create phy engine
2. create a world
3. create a bodies

var--stores a value, and that value will vary from time to time

const--stores a value, but it will not change


*/
//giving nick name-- nameSpacing
const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const World = Matter.World;

var myEng;
var myWorld;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  myEng = Engine.create();
  myWorld= myEng.world;

  var options ={
    isStatic:true
  }
  ground = Bodies.rectangle(5, 380, 800,20,options);
  World.add(myWorld, ground);

  var options1 = {
    restitution: 1.2
    //isStatic: true
  }
  ball = Bodies.circle(400,100,40, options1);
  World.add(myWorld, ball);
  console.log(ball);

}

function draw() {
  background("pink");  

  Engine.update(myEng);

  rectMode(CENTER);
  //rect(400, 200, 50, 50);
  rect(ground.position.x, ground.position.y, 800,20);
  //ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 40,40)
  //drawSprites();
}