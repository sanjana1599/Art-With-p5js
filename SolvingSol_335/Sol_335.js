/*On four black walls, white vertical parallel lines, and in the center
of the walls, eight geometric figures (including cross, X) 
within which are white horizontal parallel lines. The vertical lines 
do not enter the figures.

Wall Drawing #335 (May 1980)
Sol Lewitt*/


startX = 75;
startY = 75;
w = 200;
h = 200;

cX = 425;
cY = 425;
r = 100;
gap = 10; //diameter / 20

ang = 0;


function setup() 
{
  createCanvas(600, 600);
  strokeWeight(2);
  noFill();
  angleMode(DEGREES);
  frameRate(60);
}

function draw() 
{
  background(162, 0, 93); //purple
  noStroke();
  
  //Rectangle
  if (frameCount % 60 < 30) 
  {
    rectDraw();
  }
  
  else 
  {
    rectDrawVertical();
  }
  
  //Circle
  circleDraw();
  
  //Wall
  stroke(235, 47, 111); //pink 
  for (let i = 5; i < width; i += gap)
  {
    if (i <= cX - r || i >= cX + r) //all pts of wall excluding circle
    {
      if  (i > startX && i < startX + w) //rect part
      {
        wallOutsideRect(i); //i is local var, so have to carry it to function
      }
      else
      {
        line(i, 0, i, height); //non rect part
      }
    }
    else 
    {
      wallOutsideCircle();
    }
  }
}



function rectDraw()
{
  for (let i = startY; i < startY + h + 1; i += gap)
  {
    stroke(255); 
    line(startX, i, startX + w, i);
  }
}


function rectDrawVertical()
{
  for (let i = startX; i < startX + w + 1; i += gap)
  {
    stroke(255);
    line(i, startY, i, startY + h);
  }
}


function circleDraw()
{
  push();
  translate(cX, cY);
  rotate(ang % 360);
  
  for (let i = gap - 1; i > -gap; i --) //i ranging from 10 to -10 //-1 bc point was coming at 90deg, dist not long enough for line
  {
    stroke(255);
    let y = i * gap; 
    let theta = 2 * acos(y / r); //formula to find theta using y
    let x = r * sin(theta/2); //find x using theta

    line(x, y, -x, y);
  }
  
  ang++;
  pop();
}


function wallOutsideRect(i)
{
  line(i, 0, i, startY -2); //-2 bc pink line coming ontop of white line ie startY, (2) bc strokeWeight
  line(i, startY + h +2, i, height); //bypass the rectangle
}


function wallOutsideCircle()
{
  push();
  translate(cX, cY);
  
  for (let i = gap; i > -gap - 1; i --)
  { 
    let x = i * gap; 
    let theta = 2 * acos(x / r); //formula to find theta using x
    let y = r * sin(theta/2); //find y using theta
 
    line(-x, -height, -x, -y -2);
    line(-x, height, -x, y +2);
  }
  
  pop();
}
