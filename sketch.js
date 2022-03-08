const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,p1,p2,l1,l2,l3,l4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,120,70,70);

    p1= new Pig(810,350)
    p2= new Pig(810,220)
    
    l1= new Log(810,260,300,PI/2)
    l2= new Log(810,180,300,PI/2)
    l3= new Log(760,120,150,PI/7)
    l4= new Log(870,120,150,-PI/7)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    p1.display();
    p2.display();
    l1.display();
    l2.display();
    l3.display();
    l4.display();
    ground.display();
}