rad = 50;

colors = [{r : 64, g : 62, b : 102}, //dark blue
{r : 241, g : 220, b : 178}, //wheat
{r : 187, g : 68, b : 102}, //pinkish
];

colors1 = [{r : 247, g : 222, b : 103}, //yellow
{r : 182, g : 218, b : 156}, //green
{r : 82, g : 156, b : 133}, //green2
];

colors2 = [{r : 1, g : 17, b : 68}, //darker blue 
{r : 246, g : 214, b : 191}, //peach
{r : 177, g : 202, b : 199}, //pastel
{r : 49, g : 143, b : 181}, //cobalt
{r : 4, g : 80, b : 130}, //dark blue
];

angles = [{start : 0, stop : 90},
{start : 90, stop : 180},
{start : 180, stop : -90},
{start : -90, stop : 0},
];

function setup() 
{
  createCanvas(600, 600);
  angleMode(DEGREES);
  noLoop();
}


function draw() 
{ 
  for (let yDirection = 0; yDirection < height; yDirection += rad)
  {
    for(let xDirection = 0; xDirection < width; xDirection += rad)
    {
      let randC = random(colors3);
      noStroke();
      fill(randC.r, randC.g, randC.b);
      rect(xDirection, yDirection, rad, rad);
      
      let points = [{x : xDirection, y : yDirection, start : 0, stop : 90}, 
      {x : xDirection + rad, y : yDirection, start : 90, stop : 180}, 
      {x : xDirection, y : yDirection + rad, start : -90, stop : 0}, 
      {x : xDirection + rad, y : yDirection + rad, start : 180, stop : -90},];
      
      let pick = random(points);
      quartArcs(pick.x, pick.y, pick.start, pick.stop);
    }
  } 
}


function quartArcs(centerX, centerY, start, stop)
{
  push();
  translate(centerX, centerY);
  
  let rand = random(colors3);
  noStroke();
  fill(rand.r, rand.g, rand.b);
  
  let rand1 = random(angles);
  arc(0, 0, rad * 2, rad * 2, start, stop);
  
  pop();
}
