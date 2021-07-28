var surfer, surfer_running, surfer_collided;
var road, path, sides, coin_Image;
var mouseX;
function preload(){
  //pre-load images
  surfer_running = loadAnimation("Runner-1.png","Runner-2.png");
  road = loadImage("path.png");
  coin_Image = loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,0,400,400);
  path.addImage(road);
  surfer=createSprite(200,350,50,50);
  surfer.addAnimation("running",surfer_running);
  surfer.scale= 0.06;
  //coin = createSprite(randomNumber(65,335),(randomNumber(0,400)),20,20);
  //coin.addImage(coin_Image)
}

function draw() {
  background("black");
drawSprites();
path.velocityY=5;
console.log(path.y)
if(path.y>=500){
  path.y=0
}
surfer.x=mouseX
if (surfer.x>=340){
  surfer.x=320
}
if (surfer.x<=60){
  surfer.x=80
}
}
