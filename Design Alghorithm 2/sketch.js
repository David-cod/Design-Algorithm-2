var movingRectangle,fixedRectangle,fixedRectangle1,fixedRectangle2,fixedRectangle3,fixedRectangle4;
function setup() {
  createCanvas(1200,1200);
  movingRectangle=createSprite(600,200,100,30);
  movingRectangle.shapeColor="green";

  fixedRectangle=createSprite(100,200,30,100);
  fixedRectangle.shapeColor="green";
  fixedRectangle1=createSprite(260,200,50,100);
  fixedRectangle1.shapeColor="green";
  fixedRectangle2=createSprite(320,200,50,100);
  fixedRectangle2.shapeColor="green";
  fixedRectangle3=createSprite(380,200,50,100);
  fixedRectangle3.shapeColor="green";
  fixedRectangle4=createSprite(440,200,50,100);
  fixedRectangle4.shapeColor="green";

}

function draw() {
  background(0);  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  if(isTouching(movingRectangle,fixedRectangle2)){
    fixedRectangle2.shapeColor="red";
    movingRectangle.shapeColor="red";
    


  } else{
    fixedRectangle2.shapeColor="green";
    movingRectangle.shapeColor="green";


  }
  


  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.width/2+object1.width/2
    && object2.y-object1.y<object2.width/2+object1.width/2
  ){ 
return true;
  }else{
    return false;


  }




}