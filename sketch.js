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

  touch(box3,box2);
  touch(box4, box2);

  drawSprites();
}

function touch(ob1 , ob2){
  
  if(ob1.x - ob2.x <= (ob1.width + ob2.width )/2 && 
     ob2.x - ob1.x <= (ob1.width + ob2.width )/2 &&
     ob1.y - ob2.y <= (ob1.height + ob2.height )/2 &&
     ob2.y - ob1.y <= (ob1.height + ob2.height )/2){

    ob1.shapeColor="yellow" ; 
    ob2.shapeColor="yellow" ; 
  }

  else{

    ob1.shapeColor="blue";
    ob2.shapeColor="red";
  }

}

