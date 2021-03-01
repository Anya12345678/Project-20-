var cat, catLying, catWalking, catSitting

var mouse, mouseCheese, mouseHands, mouseThumbs, mouseInvestigate  

var garden, gardenImage 


function preload() {
    gardenImage = loadImage("./images/garden.png");   
    catLying = loadImage("./images/cat1.png");
    catWalking = loadImage("./images/cat2.png","./images/cat3.png");
    catSitting = loadImage("./images/cat4.png");
    mouseCheese = loadImage("./images/mouse1.png");
    mouseHands = loadImage("./images/mouse2.png");  
    mouseThumbs = loadImage("./images/mouse3.png");
    mouseInvestigate = loadImage("./images/mouse4.png");  
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500,400);
    garden.addImage("garden",gardenImage);

    cat = createSprite(650,625,50,50 )
    cat.addImage("cat",catSitting);
    cat.scale = 0.175

    mouse = createSprite(150,625,50,50 )
    mouse.addImage("mouse",mouseThumbs)
    mouse.scale = 0.175
}

function draw() {
    
    background(111);

    if (cat.x - mouse.x < mouse.width/2 + cat.width/2 && 
        mouse.x - cat.x < mouse.width/2 + cat.width/2 &&){
            cat.velocityX = 0
            cat.changeAnimation("catSitting")
            mouse.changeAnimation("mouseInvestigate")
      } else {
        cat.velocityX = -5
      }


    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5
        cat.addAnimation("cat", catWalking)
        cat.changeAnimation("catWalking")
    }
}