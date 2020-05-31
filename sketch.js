const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onsling";

function preload() {
    backgroundImg = loadImage("sprites/bg.jpg");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    shoot = new Taehyung(200,50);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    aim1 = new Jungkook(810, 350);
    aim2 = new Jungkook(810, 220);
    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);   
    slingshot = new SlingShot(shoot.body,{x:200, y:50});
}
function draw(){
    background(backgroundImg);
    Engine.update(engine);

    shoot.display();
    box1.display();
    box2.display();
    ground.display();
    aim1.display();
    log1.display();
    box3.display();
    box4.display();
    aim2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    platform.display();
    slingshot.display();    
}
function mouseDragged(){
    if(gameState == "onsling"){
      Matter.Body.setPosition(shoot.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased(){
    gameState = "launched";
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(shoot.body);
    }
}