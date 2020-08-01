aoff = 0;

w = 200; 
h = 350;

function setup() 
{
  createCanvas(600, 600);
  background(104, 3, 0); //blood red
  stroke(218, 145, 0, 50); //mustard 
  noFill();
  rectMode(CENTER);
  angleMode(DEGREES);
}


function draw() 
{
  let angle = map(noise(aoff), 0, 1, 0, 360);
  
  push();
  translate(width/2, height/2);
  rotate(angle);
  rect(0, 0, w, h);
  pop();

  aoff += 0.01;
}
