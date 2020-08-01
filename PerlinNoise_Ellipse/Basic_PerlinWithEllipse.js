xoff = 0;
yoff = 10000;
roff = 1000000;



function setup() 
{
  createCanvas(600, 600);
  noFill();
  stroke(218, 145, 0, 50); //mustard 
  background (28, 43, 77); //dark blue
}


function draw() 
{
  let r = map(noise(roff), 0, 1, 50, width/2); //make r a noise val btwn 50 and width/2 ie max diameter is width
  let px = map(noise(xoff), 0, 1, r, width - 200); //make ellipse x pos a noise val btwn rad and width - rad 
  let py = map(noise(yoff), 0, 1, r, height - 200); //make r a noise val btwn 0 and width/2 ie max diameter is width
  
  ellipse(px, py, r * 2, r * 2);
  
  xoff += 0.01;
  yoff += 0.01;
  roff += 0.01;
}
