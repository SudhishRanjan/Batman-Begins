const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var drops=[]
var thunderImg,thunder

function preload(){
    thunderImg=loadImage("4.png")
}

function setup(){
    createCanvas(400,700)
    thunder=createSprite(150,0)
    thunder.addImage(thunderImg)
    thunderImg.scale=(0.1)
   engine=Engine.create()
   world=engine.world
   umbralla1=new umbralla(200,500)
    if(frameCount%150==0){
        for(var i=0;i<100;i++){
            drops.push(new drop(random(0,400),random(0,400)))
        }
        
    }
}
    
    


function draw(){
    background("black")
    umbralla1.display()
    for(var i=0;i<100;i++){
        drops[i].display()
        
    }
    drawSprites()
}   

