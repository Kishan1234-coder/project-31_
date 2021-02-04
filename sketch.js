const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thunder,thunder1;
 var thunder2;
 var thunder3;
 var maxDrops = 100;


function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
}

function setup(){
    var canvas = createCanvas(600,1100);
    engine = Engine.create();
    world = engine.world;

    drop = new drops(350,50,5);
    boy = new Boy(150,250,500);

    for(var i=0; i<maxDrops; i++){
        drop.push(new drops(random(0,400, random(0,400))));
    }
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    drop.display();
    boy.display();
   

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            default: break;
        }
        thunder.scale = random(0.3,0.6);fhbj
    }
}   



