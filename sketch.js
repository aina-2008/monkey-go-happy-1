var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var score;
var survivalTime=0;
function preload() {
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
 
ground=createSprite(400,350,900,10);
ground.velocityX=-20;
ground.x=ground.width/2;
console.log(ground.x);

 

  
  
obstacleGroup = new Group();
bananaGroup = new Group();


}


function draw() {
background(255);
  
if(ground.x>0) {
 ground.x=ground.width/2; 
}

if(keyDown("space")) {
monkey.velocityY=-12;
}

monkey.velocityY=monkey.velocityY+0.8;
  
monkey.collide(ground);
SpawnBanana();
SpawnObstacle();
  

  
  
drawSprites();
//texts
stroke("white");
textSize(20);
fill("white");
text("Score:"+500,50);

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime,100,50);

}

function SpawnBanana() {
if(World.frameCount%80===0) {
    banana=createSprite(600,Math.round(random(150,200)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-8;
    banana.setLifetime=150;
    banana.scale=0.1
   bananaGroup.add(banana);
  }  
  
  
}

function SpawnObstacle() {
if(World.frameCount%200===0) {
    obstacle=createSprite(600,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.setLifetime=150;
    obstacle.scale=0.1;
   obstacleGroup.add(obstacle);
  }  
   
  
}


