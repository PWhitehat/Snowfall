const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bgimg, boy, boyimg,snow, snowimg;

function preload() {

  bgimg = loadImage("snow1.png");
  boyimg = loadImage("boy.gif");
  snowimg = loadImage("snow4.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  boy = createSprite(400, 200, 50, 50);
  boy.addImage(boyimg);
  boy.scale = 0.1;

}

function createSnow() {

  snow = createSprite(random(0,700), random(0, 200));
  snow.addImage(snowimg);
  snow.scale = 0.2;
  snow.velocityY = 5;
  snow.lifetime = 200;

}

function draw() {

  if (frameCount % 25 === 0) {

    createSnow();

  }

  background(bgimg);
  
  drawSprites();

}