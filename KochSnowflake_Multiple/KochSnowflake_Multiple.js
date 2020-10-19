lines = []; //to keep track of /current/ KochLine objects
distFromBottom = 180;
distFromSide = 100;

colors = [{r : 27, g : 153, b : 139},
];

function setup() 
{
  createCanvas(600, 600);
  frameRate(2);
  
  let h = sin(radians(60)) * distFromSide; //altitude of equilateral triangle=sin(60)*hypotenuse (ie distFromSide)
  
  for (let i = 1; i < 5; i++) 
  {
    startKochOutward(distFromSide * i, height - distFromBottom, distFromSide * (i+1), height - distFromBottom); //level 1
    startKochOutward(distFromSide * i, height - distFromBottom - h*2, distFromSide * (i+1), height - distFromBottom - h*2); //level 3
  }
  
  for (let i = 1; i < 4; i++) 
  {
    startKochOutward((distFromSide*i) + (distFromSide/2), height - distFromBottom + h, (distFromSide*(i+1)) + (distFromSide/2), height - distFromBottom + h); //level 0
    startKochOutward((distFromSide*i) + (distFromSide/2), height - distFromBottom - h, (distFromSide*(i+1)) + (distFromSide/2), height - distFromBottom - h); //level 2
    startKochOutward((distFromSide*i) + (distFromSide/2), height - distFromBottom - h*3, (distFromSide*(i+1)) + (distFromSide/2), height - distFromBottom - h*3); //level 4
  }
  
  //capturer.start(); 
  //draw();
}


function startKochOutward(x1, y1, x2, y2)
{
  //Correct Koch
  let start = createVector(x1, y1);
  let end = createVector(x2, y2);
  
  let len = p5.Vector.dist(start, end);
  let h = -((sqrt(3) / 2) * len);
  let middle = createVector((x1 + x2)/2, y1 + h);
  
  lines.push(new KochLine(end, start)); //first KochLine object
  lines.push(new KochLine(start, middle));
  lines.push(new KochLine(middle, end)); //if you switch 1st,2nd parameter curve forms wrong way-inward
}


function startKochInward()
{
  //Inward Koch - Fascinating!
  let start1 = createVector(distFromSide, height - distFromBottom);
  let end1 = createVector(width - distFromSide, height - distFromBottom);
  
  let len1 = p5.Vector.dist(start1, end1);
  let h1 = -((sqrt(3) / 2) * len1);
  let middle1 = createVector(width/2, (height - distFromBottom) + h1);
  
  lines.push(new KochLine(start1, end1)); //first KochLine object
  lines.push(new KochLine(end1, middle1));
  lines.push(new KochLine(middle1, start1)); //if you switch 1st,2nd parameter curve forms wrong way-inward
}


function draw() 
{
  background(240);
  
  for (let l of lines)
  {
    l.show();
  }
  
  //capturer.capture(document.getElementById('defaultCanvas0'));
  
  //if (frameCount > 800) 
  //{
  //  console.log('finished');
  //  capturer.stop();
  //  capturer.save();
  //  noLoop();
  //}
}


function mousePressed() //every mouse press, generate next iteration
{
  let next = [];
  
  for (let l of lines) //for all KochLine objects in list
  {
    let children = l.generate();
    
    for (let c of children)
    {
      next.push(c);
    }
  }
  //what was previously in lines has now become koch curves, so erase 
  //lines and put only the newest generated smaller and increased no. of 
  //lines into it (ie. next is put into lines)
  lines = next;  
}


function keyPressed()
{
  if (keyCode == ENTER)
  {
    saveFrames('out', 'png');
  }
}
