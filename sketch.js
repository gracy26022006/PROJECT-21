var bullet ;
var wall ;
var speed  ; 
var weight ; 
var thickness ;

function setup() {
  createCanvas(1600,400);

  speed  = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet  = createSprite(50,200,50,50);
  wall = createSprite(1500,200,thickness,height/2);
  
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed ;
}

function draw() {
  background("black");

if (collide(bullet,wall))
{
  bullet.velocityX = 0 ;
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness) ;

  if(damage > 10)
  {
    wall.shapeColor = "red" ;
  }

  if(damage < 10)
  {
    wall.shapecolor = "green" ;
  }
}

  drawSprites();
}


function collide() {
  bulletRightEdge = bullet.x + bullet.width ;
  wallLeftEdge    = wall.x + wall.width ;

  if(bulletRightEdge >= wallLeftEdge){
    return true  ;
  }
  return false ;
}