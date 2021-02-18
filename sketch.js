var cat,catImg,catImg2,catImg3,catImg4,cat_running;
var mouse,mouseImg,mouseImg2,mouseImg3,mouseImg4;
var backgroundImg;

function preload() {
    catImg=loadAnimation("cat1.png");
    catImg4=loadAnimation("cat4.png");
    mouseImg=loadAnimation("mouse1.png");
    mouseImg4=loadAnimation("mouse4.png");
    backgroundImg=loadImage("garden.png");
    cat_running=loadAnimation("cat2.png","cat3.png");
    mouse_teasing=loadAnimation("mouse2.png", "mouse3.png" );
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(700,500,30,30);
    cat.addAnimation("catSleeping",catImg);
    //cat.changeAnimation("catSleeping");
    cat.scale=0.1;
    mouse=createSprite(250,500,20,20);
    mouse.addAnimation("mouseStanding",mouseImg);
    //mouse.changeAnimation("mouseStanding");
    mouse.scale=0.1;

}

function draw() {

    background(backgroundImg);
    
    collisionDetection();
    drawSprites();
}


function keyPressed(){

  if(keyCode=== LEFT_ARROW){
    cat.velocityX= -5;
    cat.addAnimation("catRunning",cat_running);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTeasing",mouse_teasing);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
      
      
  }
}
function collisionDetection(){
    if(cat.x-mouse.x <(cat.width/2+mouse.width/2)){
        cat.addAnimation("catLastImage", catImg4);
        cat.velocityX=0;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg4);
        mouse.changeAnimation("mouseLastImage");
    }
}