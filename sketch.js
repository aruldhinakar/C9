var box;
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,20,20)

}

function draw() 
{
  background("black");
if (keyDown("right"))
{
  box.x = box.x +5;
}

drawSprites();

}




