var background1,backgroundImage;
var snowGroup, snowImage;

function preload(){

  backgroundImage=loadImage("snow1.jpg");
  snowImage=loadImage("snow5.webp");
  



}

function setup(){
  createCanvas(windowWidth,windowHeight);

  cloudsGroup = new Group();

}
function draw(){
  background(backgroundImage)

  spawnSnow();
  drawSprites();
}
function spawnSnow(){
if (frameCount % 5 === 0) {
  var snow = createSprite(random(1,3000),0, 10, 10);
 // snow.y = Math.round(random(10,10));
  snow.addImage(snowImage);
  snow.scale=0.1;
  snow.velocityY = 10;
  
  
}
}
