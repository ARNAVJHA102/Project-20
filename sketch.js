function setup() {
  createCanvas(800*2,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,200);
  speed = random(55,90);
  car.velocityX = speed;
  weight = random(400,1500);
}

function draw() {
  background(0); 
  if(wall.x-car.x<car.width/2+wall.width/2) {
    car.velocityX = 0;
    d = (0.5*speed*speed*weight)/22500
    if(d<100){
      car.shapeColor = "green";
    }

    else if(d>=100 && d<=180) {
      car.shapeColor = "yellow";
    }

    else {
    car.shapeColor = "red";
    }
  } 
  drawSprites();
}