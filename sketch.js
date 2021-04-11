const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var poly;

function preload (){
  poly=loadImage("polygon.png")
}

function setup() {
  createCanvas(1500,600);
  engine=Engine.create();
  world=engine.world
  //createSprite(400, 200, 50, 50);
  ground2=new Ground(595,400,225,20);
  ground1=new Ground(900,300,190,20);
  ground3=new Ground(600,590,1500,20);
    // 1st pyramid , base
  box1=new Box(510,375,30,40);
  box2=new Box(540,375,30,40);
  box3=new Box(570,375,30,40);
  box4=new Box(600,375,30,40);
  box5=new Box(630,375,30,40);
  box6=new Box(650,375,30,40);
  box7=new Box(685,375,30,40);
// second
  box8=new Box(540,330,30,40);
  box9=new Box(570,330,30,40);
  box10=new Box(600,330,30,40);
  box11=new Box(630,330,30,40);
  box12=new Box(650,330,30,40);
// third
   box13=new Box(570,290,30,40);
   box14=new Box(600,290,30,40);
   box15=new Box(625,290,30,40);
// last
   box16=new Box(600,250,30,40);

   // 2st pyramid , base
   box1p=new Box(850,270,30,40);
  box2p=new Box(870,270,30,40);
  box3p=new Box(905,270,30,40);
  box4p=new Box(930,270,30,40);
  box5p=new Box(940,270,30,40);
  //second
  box6p=new Box(870,260,30,40);
  box7p=new Box(905,260,30,40);
  box8p=new Box(930,260,30,40);
  //third
  box9p=new Box(905,250,30,40);

  
 
 
  //  // third
  //  box17=new Box(900,215,30,40);
 

    ball=Bodies.circle(172,321,20);
   World.add(world,ball);
   sling1=new SlingShot(this.ball,{x:168,y:321});
//    var options = {
//     bodyA: bodyA,
//     pointB: pointB,
//     stiffness: 0.04,
//     length: 10
// }
//    this.sling = Constraint.create(options);
//         World.add(world, this.sling);
//     }
  
//     fly(){
//         this.sling.bodyA=null;
    }
   




function draw() {
  background("black");  
  Engine.update(engine)
imageMode(CENTER)
image(poly,ball.position.x,ball.position.y,40,40);
ground1.display();
ground2.display();
ground3.display();
fill(73,233,255);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill(255,184,206);
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill(103,255,211);
box13.display();
box14.display();
box15.display();
fill(102,102,102);
box16.display();

fill(73,233,255);
box1p.display();
box2p.display();
box3p.display();
box4p.display();
box5p.display();
fill(255,184,206);
box6p.display();
box7p.display();
box8p.display();
fill(102,102,102);
box9p.display();

sling1.display();


}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling1.fly();
}