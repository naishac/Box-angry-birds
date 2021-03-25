const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(950,540,50,50);
    box2 = new Box(1140,540,50,50);
    box3 = new Box(950,480,50,50);
    box4 = new Box(1140,480,50,50);
    box5 = new Box(1045,400,50,50);

    ground = new Ground (600,580,1200,18);

    pig1 = new Pig (1045,540);
    pig2 = new Pig (1045,460);

    log1 = new Log (1045,510,240,PI/2);
    log2 = new Log (1045,430,240,PI/2);
    log3 = new Log (1000,420,130,PI/7);
    log4 = new Log (1100,420,130,-PI/7);

    bird = new Bird (300, 240);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}