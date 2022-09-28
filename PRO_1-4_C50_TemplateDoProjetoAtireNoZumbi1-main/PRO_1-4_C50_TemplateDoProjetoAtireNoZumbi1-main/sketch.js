var bg,bgImg;
var player, shooterImg, shooter_shooting, shooterImg1;
var monster, monsterImg;


function preload(){
  
  shooterImg1 = loadImage("assets/Kstop-removebg-preview.png")
  shooterImg = loadAnimation("assets/K1-removebg-preview.png", "assets/K2-removebg-preview.png", "assets/K3-removebg-preview.png", "assets/K4-removebg-preview.png", "assets/K5-removebg-preview.png", "assets/K6-removebg-preview.png", "assets/K7-removebg-preview.png", "assets/K8-removebg-preview.png", "assets/K9-removebg-preview.png", "assets/K10-removebg-preview.png" )
  shooter_shooting = loadImage("assets/Kattack-removebg-preview.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage("parado" ,shooterImg1)
  player.addAnimation("andando" ,shooterImg)
  player.addImage("atirando", shooter_shooting)
  player.scale = 3.5
 
  player.debug = true
  //player.debug = false
  //player.Debug =false
  //Player.debug = true

  //player.Collider("rectagle",0,0,300,300)
  //player.setcollider("rectangle",0,0)
  player.setCollider("rectangle",0,0,20,20)
  //player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)
  if(keyDown("UP_ARROW")||touches.length>0){
    player.changeAnimation("andando" ,shooterImg)
    player.y = player.y-30
    
  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.changeAnimation("andando" ,shooterImg)
    player.y = player.y+30
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.changeAnimation("andando" ,shooterImg)
    player.x = player.x+30
    }

     if(keyDown("LEFT_ARROW")||touches.length>0){
      player.changeAnimation("andando" ,shooterImg)
      player.x = player.x-30
  }

  



//libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada
  if(keyWentDown("space")){
  
    //player.addImage(shooter_shooting)
    player.changeAnimation("atirando", shooter_shooting)
  
  }

//player goes back to original standing image once we stop pressing the space bar
  else if(keyDown("space")){
  //player.addImage( shooter_shooting )
  //player.addImage()
  player.changeAnimation("parado" ,shooterImg1)
  //player.addImage(shooter_1.png)
  }

drawSprites();

}
