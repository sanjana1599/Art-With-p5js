side = 50;

colors = [{r : 54, g : 0, b : 61}, //dark purple
{r : 111, g : 0, b : 73}, //mauve
{r : 255, g : 74, b : 87}, //salmon
];

colors1 = [{r : 247, g : 222, b : 103}, //yellow
{r : 182, g : 218, b : 156},
{r : 82, g : 156, b : 133},
];

points = [{x : 0, y : 0},
{x : 0, y : side},
{x : side, y : 0},
{x : side, y : side},
];


function setup() 
{
  createCanvas(600, 600);
  strokeWeight(1);
  background(255);
  noLoop();
}


function draw() 
{
  for (let yDirection = 0; yDirection < height; yDirection += side)
  {
    for(let xDirection = 0; xDirection < width; xDirection += side)
    {
      triangles(xDirection, yDirection);
    }
  }  
}


function triangles(xDirection, yDirection)
{
  push();
  translate(xDirection, yDirection);
  
  pointsCopy = [];
  for (let elem = 0; elem < points.length; elem ++)
  {
    pointsCopy.push(points[elem]);
  }
  
  //Pick 3 distinct points from 4 points of square
  let pickArray = [];
  for (let i = 0; i < 3; i ++)
  {
    let pick = random(pointsCopy);
    let ind = pointsCopy.indexOf(pick);
    pointsCopy.splice(ind, 1);
    pickArray.push(pick);
  }
  
  let rand = random(colors); //or colors1
  stroke(rand.r, rand.g, rand.b);
  fill(rand.r, rand.g, rand.b);
  triangle(pickArray[0].x, pickArray[0].y, pickArray[1].x, pickArray[1].y, pickArray[2].x, pickArray[2].y);
  
  pop();
}
