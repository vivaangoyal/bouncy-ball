var ball,ballimg,paddle,paddleimg;
function preload() {
  ballimg = loadImage("ball.png")
  paddleimg = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(40,200,20,20)
  ball.addImage("ball",ballimg)
  ball.velocityX =9;
  
  paddle = createSprite(380,200,20,20)
  paddle.addImage("paddle",paddleimg)
}

function draw() {
  background(205,153,0);
 edges = createEdgeSprites(); 
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(paddle,randomVelocity);
  paddle.collide(edges[3]);
  paddle.collide(edges[2]);
  if(keyDown(UP_ARROW))
  {
     paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
ball.velocityY=random(-9,9);

}

