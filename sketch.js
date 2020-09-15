const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird;
var pig;
var log;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    bird=new Bird(100,100)
    pig=new Pig(200,200)
    pig1=new Pig(200,350)
    //pig2=new Pig(200,380)
log1=new Log(200,360,300,PI/2)
log2=new Log(200,310,300,PI/2)
log3=new Log(200,260,300,PI/2)
log4=new Log(120,200,130,PI/7)
log5=new Log(290,210,100,-PI/7)
    box1 = new Box(90,330,50,50);
    box2 = new Box(310,330,50,50);
    box3 = new Box(90,270,50,50);
    box4 = new Box(310,270,50,50);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig.display();
    log1.display();
    log2.display();
    pig1.display();
    box3.display();
    box4.display();
    log3.display();
    log4.display();
    log5.display();
    //pig2.display();
}