const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
const Constraints = Matter.Constraints;

var canvas;
var walking;
var manNUmbrella;

//pc
var drops = [];   //document says drops to pushed in an array
var engine;
var world
var maxDrops = 100; 

var drop ;
var thunder1 ;
var thunder2 ;
var  thunder3;
var thunder4 ;

function preload(){
  thunder1 = loadImage("images/1.png");
  thunder2 = loadImage("images/2.png");
  thunder3 = loadImage("images/3.png");
  thunder4 = loadImage("images/4.png");
}

function setup(){
    canvas = createCanvas(1000, 550);
    engine = Engine.create();
    world = engine.world;

   manNUmbrella = new Umbrella(250, 300);
   // manNUmbrella.scale=0.1;
   for(var j =0; j<= maxDrops; j++){
   drops.push(new Drops(Math.round(random(10,990)),Math.round(random(0,50)))   );  //can use same value as given in the document
   }
    Engine.run(engine);
}

function draw(){ 
    background("black");
    //  drops.update;
   manNUmbrella.display();
     //below code given in the document itself:
     for(var j =0; j<= maxDrops; j++){
     
      drops[j].display();
     drops[j].update();
   
     }
     createThunder();
     drawSprites();
}   

//pc  - function is same as the spawn obstacles function of trex game
function createThunder(){
  
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
        thunder.lifetime = 20;
    }

}

