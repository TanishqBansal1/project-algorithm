var  box1 , box2, box3, box4 ;

function setup(){
  createCanvas(600,600);

  box1=createSprite(300,300,50,150);
  box1.shapeColor= "blue";
  box1.debug=true;

  box2=createSprite(200,100,100,100);
  box2.shapeColor="red";
  box2.debug=true;

  box3=createSprite(300,500,50,100);
  box3.shapeColor="green";
  box3.debug=true;

  box4=createSprite(400,50,60,100);
  box4.shapeColor="orange";
  box4.debug=true;
}

function draw(){
  background("black");

  box2.y=World.mouseY;
  box2.x=World.mouseX;

if(touch(box1,box2)){

  box1.x=random(50,550);
  box1.y=random(50,550);
}

if(touch(box3,box2)){

  box3.shapeColor="white";
  
}
else{
  box3.shapeColor="green";
}

if(touch(box4,box2)){
  background("pink");
}

else{
  background(0);
}
  drawSprites();
}



