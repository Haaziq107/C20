var fixdrec,movingrec


function setup() {
  createCanvas(800,400);
  fixdrec=createSprite(400, 200, 50, 50);
  fixdrec.shapeColor="green";
  movingrec=createSprite(100,100,80,80);
  movingrec.shapeColor="green";
}

function draw() {
  background(0);
  movingrec.x=World.mouseX;
  movingrec.y=World.mouseY;

  if(movingrec.x-fixdrec.x<movingrec.width/2+fixdrec.width/2 &&
    (fixdrec.x-movingrec.x<movingrec.width/2+fixdrec.width/2)&&
    (movingrec.y-fixdrec.y<movingrec.height/2+fixdrec.height/2)&&
    (fixdrec.y-movingrec.y<movingrec.height/2+fixdrec.height/2)){
     fixdrec.shapeColor="red";
     movingrec.shapeColor="red";

  }else{
    fixdrec.shapeColor="green";
    movingrec.shapeColor="green";
  }
  
  drawSprites();
}