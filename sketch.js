var pc,pci,p1,p2;

function preload(){
pci=loadImage("Untitled.png")
bgi=loadImage("sprite_0.png")
obstacle1=loadImage("bapu ji.png");
obstacle2=loadImage("Iyer.png");
obstacle3=loadImage("bhide.png")
obstacle4=loadImage("sundar.png")
perk1=loadImage("babita.png");
perk2=loadImage("jalebi.png");

}




function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.addImage(bgi)
  bg.scale=15;
  bg.velocityY=3
  pc=createSprite(displayWidth/2,displayHeight-200,50,50)
  pc.addImage("jethalal",pci)
  pc.scale=0.35;
  pc.velocityX=0
  pc.setCollider("rectangle",0,0,500,400)
  pc.velocityX=0
  
 
}
          
 

function draw() {
  background(225)
 spawnObstacles();
 perks();

  if(bg.y>350){
    bg.y=250;
  }
 
if(keyDown("LEFT_ARROW")){
    pc.x-=50;
}
if(keyDown("RIGHT_ARROW")){
    pc.x+=50;
}
if(pc.x>displayWidth-100){
  pc.x=displayWidth-125;
}
if(pc.x<displayWidth-1300){
  pc.x=displayWidth-1300;}
 drawSprites(); 
}

function spawnObstacles(){
  if(frameCount % 150 === 0) {
    var obstacle = createSprite(random(displayWidth/2-100,displayHeight/2-500),-165,10,40);
    //obstacle.debug = true;
    obstacle.velocityY = 6
    obstacle.scale=0.4
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      default: break;
    }
}
}
function perks(){
if(frameCount % 150 === 0) {
  var perk = createSprite(random(displayWidth/2-100,displayHeight/2-500),165,10,40);
  //obstacle.debug = true;
  perk.velocityY = 6
  perk.scale=0.3
  //generate random perks
  var ran = Math.round(random(1,2));
  switch(ran) {
    case 1: perk.addImage(perk1);
            break;
    case 2: perk.addImage(perk2);
            break;
    default: break;
  }
}
}
//-(6 + 3*score/100);