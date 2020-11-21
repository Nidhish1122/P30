const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,10);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);

  drawSprites();
  ground.display();

  if(frameCount % 50 === 0){
    particles.push(new Particle(random(200,300),-10,10));
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var a = 0; a < particles.length; a++){
    particles[a].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

}