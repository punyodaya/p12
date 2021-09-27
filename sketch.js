var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rand = Math.round(random(1,2));

  if (frameCount % 80 == 0){
    if (rand == 1){
      createApples();
    }
    else{
      createLeaves();
    }
  }
  
  drawSprites();
}
function createApples(){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale=0.05
  apple.velocityY = 2
  apple.lifetime = 200
}
function createLeaves(){
  leaves=createSprite(random(50,350),40,10,10)
  leaves.addImage(leavesImg)
  leaves.scale=0.05
  leaves.velocityY = 2
  leaves.lifetime = 200
}