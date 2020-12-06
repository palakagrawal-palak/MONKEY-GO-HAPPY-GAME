
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstaclesGroup;
var score;
var survivalTime=0;


function preload(){
  monkey_running =            loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
    createCanvas(600,400);
  //creating monkey 
  monkey=createSprite(80,315,20,20);
  monkey.addImage("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX =-4; 
  ground.x = ground.width/2;
  console.log(ground.x)
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {

  background(255);
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY =-12;
  }
  monkey.velocityY= monkey.velocityY+0.8;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacle();
  drawSprites();
}

function spawnFood(){
  if (frameCount%80===0){
    banana=createSprite(600,250,40,10);
    banana.y=random(120,200);
    banana.addImage(bananaImage)
    banana.velocityX = -5;
    banana.setLifetime= 250;
    banana.scale = 0.1;
    
    bananaGroup.add(banana);
  }
  
}

function spawnObstacle(){
  if (frameCount%250===0){
  obstacle = createSprite(530,300,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -5;
  obstacle.setLifetime = 150;
  obstacle.scale =0.3;  
  obstacleGroup.add(obstacle);  
  }
}

