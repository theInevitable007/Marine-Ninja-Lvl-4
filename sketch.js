var diver;
var bg;
var plasticBags_img, plasticBags;
var plasticBottles_img, plasticBottles;
var plasticCan, plasticCan_img;
var plasticwaste;
var plasticWasteGroup;

var bomb, bomb_img;
var bombSound;

var diver, diver_img;
var staticDiver, staticDiver_img;

var octopus, octopus_img;
var nemo, nemo_img;
var angelFish, angelFish_img;

var life1, life2, life3, life4, life5;
var life1_img, life2_img, lif3_img, life4_img;

var introBg, introBg_img;

var flippedDiverStatic, flippedDiver_img;

var gameState = "instructions";

var count = 0;

var scoreText = 0;
var score, score_img;

var marineNinja, marineNinja_img;

var howToPlay, howToPlay_img;
var instructions, instructions_img;

var playButton, playButton_img
var  BookInstructionButton, BookImstructionButton_img;

var playText, playText_img;


var winText, winText_img;
var loseText, loseText_img;

var tempbg;

var mineGroup;

var gameSound;
var winSound;

var jelly1, jelly1_img;
var jelly2, jelly2_img;

var urchin, urchin_img;

var mine1, mine1_img;
var mine2, mine2_img;

var shark, shark_img;

var touchedMines = 0;

function preload(){
  bg = loadImage('images/Cave1.png');

  plasticBags_img = loadImage('images/plasticbottle1.png');
  plasticBottles_img = loadImage('images/plasticbottle.png'); 

  playText_img = loadImage('images/PLAYTEXT.png');
  BookInstructionButton_img = loadImage('images/BookInstructionsText.png');
  introBg_img = loadImage('images/INTROBG.png');

  score_img = loadImage('images/SCOREBOARD.png');

  marineNinja_img = loadImage('images/MARINENINJALOGO.png');

  howToPlay_img = loadImage('images/HOWTOPLAYLVL1FINAL.png');
  instructions_img = loadImage('images/Level3Instructions.png');

  diver_img = loadAnimation('images/diverImg1.png','images/diverImg2.png','images/DiverImg3.png','images/DiverImg4.png','images/DiverImg5.png','images/DiverImg6.png','images/DiverImg7.png','images/DiverImg8.png')
  staticDiver_img = loadImage('images/DiverImg4.png');
  
  flippedDiver_img = loadAnimation('images/flippedDiver1.png','images/flippedDiver2.png','images/flippedDiver3.png','images/flippedDiver4.png','images/flippedDiver5.png','images/flippedDiver6.png','images/flippedDiver7.png','images/flippedDiver8.png');
  flippedDiverStatic = loadImage('images/flippedDiver1.png');

  life1_img = loadImage('images/fish1.png');
  life2_img = loadImage('images/fish2.png');
  life3_img = loadImage('images/fish3.png');
  life4_img = loadImage('images/fish4.png');
  life5_img = loadImage('images/fish5.png');

  bomb_img = loadImage('images/bomb.png'); 
  bombSound = loadSound('Sounds/Bomb.wav');

  octopus_img = loadImage('images/Octopus.png');
  nemo_img = loadImage('images/clownfish.png');

  playButton_img = loadImage('images/PLAYBUTTON.png');

  angelFish_img = loadImage('images/angelfish.png');

  winText_img = loadImage('images/setFinal.png');
  loseText_img = loadImage('images/RELOAD.png');

  tempbg = loadImage('images/IntroBackgroundTemp.jpg');

  gameSound = loadSound('Sounds/gameSoundTrial.mp3');
  winSound = loadSound('Sounds/Win.mp3');

  jelly1_img = loadImage('images/jellyfish1.png');
  jelly2_img = loadImage('images/jellyfish2.png');

  shark_img = loadImage('images/Shark1.png');

  urchin_img = loadImage('images/Urchin.png');

  mine1_img = loadImage('images/Mine1.png');
  mine2_img = loadImage('images/Mine2.png');
 

}
function setup() {

  
  //createCanvas(1200,310);  
 createCanvas(windowWidth, windowHeight);

   octopus = createSprite(280,250);
   octopus.addImage(octopus_img);
   octopus.scale = 0.5;
   octopus.visible = false; 
  

   diver = createSprite(80,150);
   diver.addAnimation("diversfirstimg",staticDiver_img);
   diver.scale = 0.35;

   life1 = createSprite(1105,50);
   life1.addImage(life1_img);
   life1.scale = 0.5;

   life2 = createSprite(1040,50);
   life2.addImage(life2_img);
   life2.scale = 0.5;

   life3 = createSprite(975,50);
   life3.addImage(life3_img);
   life3.scale = 0.5;

   life4 = createSprite(910,50);
   life4.addImage(life4_img);
   life4.scale =0.5;

   life5 = createSprite(845,50);
   life5.addImage(life5_img)
   life5.scale = 0.5;

   diver.addAnimation("diverMoving",diver_img);
   diver.addAnimation("flippedDiver",flippedDiver_img);
   diver.addAnimation("flippedDiverInStatic",flippedDiverStatic)

   plasticWasteGroup = new Group();
   mineGroup = new Group();

   
 //introBg = createSprite(600,150);
  introBg = createSprite(windowWidth, windowHeight);
  introBg.addImage(bg);
  //introBg.scale = 0.075
  introBg.visible = false;

  marineNinja = createSprite(950,370);
  marineNinja.addImage(marineNinja_img);
  marineNinja.scale = 0.75;
  marineNinja.visible = false;

  howToPlay = createSprite(1000,155);
  howToPlay.addImage(howToPlay_img);
  howToPlay.scale = 0.5;
  howToPlay.visible = false;

  instructions = createSprite(1400,385);
  instructions.addImage(instructions_img);
  instructions.scale = 1.25;
  instructions.visible = false;

  playButton = createSprite(700,350);
  playButton.addImage(playButton_img);
  playButton.scale = 0.75;
  playButton.visible = false;   
  
  BookInstructionButton = createSprite(1400,350);
  BookInstructionButton.addImage(BookInstructionButton_img);
  BookInstructionButton.scale = 0.5;
  BookInstructionButton.visible = false;
  
  playText = createSprite(660,415);
  playText.addImage(playText_img);
  playText.scale = 0.5;
  playText.visible = false;

  score = createSprite(150,100);
  score.addImage(score_img);
  score.scale = 0.5;
  score.visible = false;

  winText = createSprite(600,150);
  winText.addImage(winText_img);
  winText.scale = 0.55;
  winText.visible = false;
   
  loseText = createSprite(600,150);
  loseText.addImage(loseText_img);
  loseText.scale = 0.55;
  loseText.visible = false;


  gameSound.loop();
  gameSound.play();

}

function draw(){
//  StartIntroSong();


  //background(tempbg);

  if(gameState === "play"){
    background(bg)
  
  if(frameCount > 100){
   spawnUrchins();
    
  }
   howToPlay.visible = false;

   playButton.visible = false;
   BookInstructionButton.visible = false;

   playText.visible = false;
   //score.visible = true;
   instructions.visible = false;

   if(keyWentDown(RIGHT_ARROW)){
     diver.changeAnimation("diverMoving",diver_img);
     diver.velocityX = 4;
   }
   if(keyWentUp(RIGHT_ARROW)){
     diver.changeAnimation("diversfirstimg",staticDiver_img);
     diver.velocityX = 0;
   }
   if(keyWentDown(DOWN_ARROW)){
    diver.changeAnimation("diverMoving",diver_img);
    diver.velocityY = 4;
  }
  if(keyWentUp(DOWN_ARROW)){
    diver.changeAnimation("diversfirstimg",staticDiver_img);
    diver.velocityY = 0;
  }
  if(keyWentDown(UP_ARROW)){
    diver.changeAnimation("diverMoving",diver_img);
    diver.velocityY = -4;
  }
  if(keyWentUp(UP_ARROW)){
    diver.changeAnimation("diversfirstimg",staticDiver_img);
    diver.velocityY = 0;
  }
  if(keyWentDown(LEFT_ARROW)){
    diver.changeAnimation("flippedDiver",flippedDiver_img);   
    diver.velocityX = -4
  }
  if(keyWentUp(LEFT_ARROW)){
    diver.changeAnimation("flippedDiverInStatic",flippedDiverStatic);
    diver.velocityX = 0;
  }
  

   if(count === 3){
     life1.destroy();
   }
    if(count === 6){
     life2.destroy();
   }
    if(count === 9){
     life3.destroy();

     plasticWasteGroup.destroyEach();
     mineGroup.destroyEach();
     diver.visible = false;

     loseText.visible = true;
   }
   
  }//gameState play ends here
  
  //bombing the plastics
  for(var i = 0; i < plasticWasteGroup.length; i++){
    if(plasticWasteGroup.get(i).y >= 696){
      plasticWasteGroup.get(i).addImage(bomb_img);
      plasticWasteGroup.get(i).scale = 0.1;
      plasticWasteGroup.get(i).velocityY = 0;
     
      if(frameCount % 50 === 0 && plasticWasteGroup.get(i).y >= 696){
        count++
        bombSound.play();
        plasticWasteGroup.get(i).destroy();

      }      
    }
    
    if(diver.isTouching(mineGroup.get(i))){
      mineGroup.get(i).destroy();
     touchedMines = touchedMines + 3;
    }
    if(touchedMines === 3){
      life1.destroy();
    }
    if(touchedMines === 6){
      life2.destroy();
    }
    if(touchedMines === 9){
      life3.destroy();
    }
    if(touchedMines === 12){
      life4.destroy();
    }
    if(touchedMines === 15){
      life5.destroy();
      gameState = 'END';
    }
  
   }//for loop ends here and bombing the plastics too

   
   //gameStates start

   if(gameState === "play"){
    
    background(bg);
    
    fill("white");
    textSize(50);
    //text(scoreText,217,80);

    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
    life4.visible = true;
    life5.visible = true;    
    
   } 
   
   //win
   if(diver.x >=1800){
    winText.visible = true;
    gameState = "WIN";
   }
   
if(gameState === "WIN"){
  button = createButton('LEVEL 4');
    button.position(300,300);
    button.mousePressed(greet);  
  
  plasticWasteGroup.destroyEach();
  mineGroup.destroyEach();
  diver.visible = false;
  winSound.play();
  noLoop();
  //gameSound.pause();

}
//lose
if(gameState === "END"){
  plasticWasteGroup.destroyEach();
  mineGroup.destroyEach();
  diver.visible = false;
  //score.visible = false;
  loseText.visible = true;
}


//intro gameStates
  if(gameState === "instructions"){
    background(tempbg);
    diver.visible = false;
    howToPlay.visible = true;
   BookInstructionButton.visible = true;
   playButton.visible = true;
   playText.visible = true;
     playButton.x = 550;
     playText.x = 510;
     BookInstructionButton.visible = false;
     instructions.visible = true;
    

    if(mousePressedOver(playButton)){
      gameState = "play";
      playButton.visible = false;
      playText.visible = false;
      introBg.visible = false;
      diver.visible = true;
    }
    
      
    }
    fill("white");
    text(mouseX + ":" + mouseY, 600,150);
    drawSprites();

    
  }//function Draw ends here
  
//spawning plastics
/*
function spawnPlasticWaste(){
  if(frameCount % 50 === 0 && diver.x <= 160){
    var rand = Math.round(random(1,2));
    var plasticwaste = createSprite(random(320,520), random(-5,-15));
    switch(rand){
      case 1: plasticwaste.addImage(plasticBags_img);
     plasticwaste.scale = 0.03
      break;

      case 2: plasticwaste.addImage(plasticBottles_img);
      plasticwaste.scale = 0.1
      break;

      default:
        break;
      
    }
    plasticWasteGroup.add(plasticwaste);
    plasticwaste.velocityY = 1 + scoreText/25; 
  }

  if(frameCount % 40 === 0 && diver.x > 200 && diver.x < 320 ){
    var rand = Math.round(random(1,2));
    var plasticwaste = createSprite(random(320,480), random(-5,-15));
    switch(rand){
      case 1: plasticwaste.addImage(plasticBags_img);
     plasticwaste.scale = 0.03;
      break;

      case 2: plasticwaste.addImage(plasticBottles_img);
      plasticwaste.scale = 0.1;
      break;

      default:
        break;
      
    }
    plasticWasteGroup.add(plasticwaste);
    plasticwaste.velocityY = 1 + scoreText/25; 
    
  }
  if(frameCount % 40 === 0 && diver.x > 320 && diver.x < 480 ){
    var rand = Math.round(random(1,2));
    var plasticwaste = createSprite(random(480,640), random(-5,-15));
    switch(rand){
      case 1: plasticwaste.addImage(plasticBags_img);
     plasticwaste.scale = 0.03;
      break;

      case 2: plasticwaste.addImage(plasticBottles_img);
      plasticwaste.scale = 0.1;
      break;

      default:
        break;
      
    }
    plasticWasteGroup.add(plasticwaste);
    plasticwaste.velocityY = 1 + scoreText/25; 
    
  }
  if(frameCount % 40 === 0 && diver.x > 640 && diver.x < 800 ){
    var rand = Math.round(random(1,2));
    var plasticwaste = createSprite(random(680,800), random(-5,-15));
    switch(rand){
      case 1: plasticwaste.addImage(plasticBags_img);
     plasticwaste.scale = 0.03;
      break;

      case 2: plasticwaste.addImage(plasticBottles_img);
      plasticwaste.scale = 0.1;
      break;

      default:
        break;
      
    }
    plasticWasteGroup.add(plasticwaste);
    plasticwaste.velocityY = 1 + scoreText/25; 
    
  }

}
//spawning fish
function spawnFish(){
if(frameCount % 100 === 0){
  var rand = Math.round(random(1,6));
var fish = createSprite(random(1830,1700),random(100,450));

  switch(rand){
    case 1: fish.addImage(nemo_img);
    fish.mirrorX(fish.mirrorX()* -1);
    fish.scale = 0.8;
    break;

    case 2: fish.addImage(angelFish_img);
    fish.scale = 0.5;

    case 3: fish.addImage(shark_img);
    fish.scale = 0.2;
    break;

    case 4: fish.addImage(jelly2_img);
    fish.scale = 0.3;
    break;

    case 5: fish.addImage(jelly1_img);
    fish.scale = 0.3;
    break;

    default:
      break;
  }
  fish.velocityX = -5;
  fish.life = 500;
  fishGroup.add(fish);
  }
 }

 function spawnUrchins(){
  if(frameCount % 100 === 0){
    var rand = Math.round(random(1,2));
  var fish = createSprite(random(50,920),random(1850,930));
  
    switch(rand){
      case 1: fish.addImage(urchin_img);
      fish.scale = 0.25;
      break;
  
      case 2: fish.addImage(urchin_img);
      fish.scale = 0.25;
      break;
  
      default:
        break;
    }
    fish.velocityY = -5;
    fish.rotateToDirection = true;
    fish.lifetime = 1500;
    fishGroup.add(fish);
    }
   }
 //restart game
 function restart(){
   if(keyCode === UP_ARROW){

      gameState = "play";
      diver.visible = true;
      score.visible = true;
   }
 }
 */
  
   function spawnUrchins(){
    if(frameCount % 100 === 0){
      var rand = Math.round(random(1,2));
    var mine = createSprite(random(50,920),random(1850,930));
    
      switch(rand){
        case 1: mine.addImage(mine1_img);
        mine.scale = 0.5;
        break;
    
        case 2: mine.addImage(mine2_img);
        mine.scale = 0.5;
        break;
    
        default:
          break;
      }
      mine.velocityY = -5;
      mine.rotateToDirection = true;
      mine.lifetime = 1500;
      mineGroup.add(mine);
      }
     }

 //resize  the window screen to match the different phone, tab or PC sizes...
 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
