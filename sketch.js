const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,600,70,70);
    box2 = new Box(1000,600,70,70);
    pig1=new Pig(1100,600);
    log1=new Log(1100,530,300,PI/2)
    ground = new Ground(width/2,height,width,20)
    box3 = new Box(1200,500,70,70);
    box4 = new Box(1000,500,70,70);
    pig2=new Pig(1100,500);
    log2=new Log(1100,430,300,PI/2);
    box5=new Box(1100,400,70,70);
    log3=new Log(1150,330,150,-PI/7);
    log4=new Log(1050,330,150,PI/7);
    bird=new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    bird.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    ground.display();
}