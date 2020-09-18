const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var gameState;
var baseGround;
var Score;
var backImg;
var backImg2;
var _,__;

function preload(){
  changeBackground();
}

function setup() {
  createCanvas(1200,400);

  Score=0;
  fill("red");
  textSize(32)
  _="stop pirating code";
  __="go write your own";


  engine = Engine.create();
  world = engine.world;

  brick1= new Brick (700,270,50,50);
  brick2= new Brick (620,270,50,50);
  brick3= new Brick (660,220,50,50);
  ball1= new Ball(220,200);
 
  console.log(_);
  console.log(__);

  ground_bottom= new Ground (650,300,200,10);
  //ground_top=new Ground()

  chain1=new Chain(ball1.body,{x:200,y:200});
  
  gameState=1;
  baseGround=new Ground(600,380,1200,10);

}

function draw() {
  if(backImg){
    background(backImg);
}

  textSize(25);
  fill("black")
  text("score :- " + Score,50,130);

  Engine.update(engine);

  ground_bottom.display();
  brick1.display();
  brick2.display();
  brick3.display();
  chain1.display();
  ball1.display();
  baseGround.display();

  brick1.score();
  brick2.score();
  brick3.score();

  //console.log(gameState);
  
  
  
  drawSprites();
  textSize(25);
  fill("black");
  //stroke(0);
  text("tower seige - by AMEYA : ",50,50);
  text("Press space to have another chance",50,350);

}
function mouseDragged(){
  if(gameState===1){
  Matter.Body.setPosition(ball1.body,{x:mouseX+50,y:mouseY});
}
}
function mouseReleased(){
  if(gameState===1){
  chain1.fly();
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball1.body,{x:220,y:200})
    chain1.attach(ball1.body);
    ball1.velocityX=0;
    ball1.velocityY=0;
  }
}

async function changeBackground(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var jResp= await response.json();
  var dt=jResp.datetime;
  //console.log(dt);
  var hour=dt.slice(11,13);       
  //console.log(hour);
 if(hour>=6 && hour<=19){
     backImg2="morning.jpg";
 }else  {
    backImg2="night.jpg";
 }
 backImg=loadImage(backImg2);
}

