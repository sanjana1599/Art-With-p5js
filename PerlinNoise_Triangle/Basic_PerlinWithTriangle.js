axoff = 0;
ayoff = 1000;
bxoff = 10000;
byoff = 100000;
cxoff = 1000000;
cyoff = 10000000;
aoff = 1000000000;

function setup() 
{
  createCanvas(600, 600);
  angleMode(DEGREES);
  noFill();
  background(0, 48, 30); //dark green
  stroke(218, 145, 0, 50); //mustard 
}


function draw() 
{ 
  let pointAX = map(noise(axoff), 0, 1, 0, width/2);
  let pointAY = map(noise(ayoff), 0, 1, -width/2, 0);
  let pointBX = map(noise(bxoff), 0, 1, 0, width/2);
  let pointBY = map(noise(byoff), 0, 1, 0, width/2);
  let pointCX = map(noise(cxoff), 0, 1, -width/2, 0);
  let pointCY = map(noise(cyoff), 0, 1, 0, width/2);
  
  let ang = map(noise(aoff), 0, 1, 0, 360);

  translate(width/2, height/2); 
  rotate(ang);
  triangle(pointAX, pointAY, pointBX, pointBY, pointCX, pointCY);
  
  axoff += 0.01;
  ayoff += 0.01;
  bxoff += 0.005;
  byoff += 0.005;
  cxoff += 0.005;
  cyoff += 0.005;
  
  aoff += 0.01;
}
