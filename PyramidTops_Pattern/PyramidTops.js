vertice = 50; //half of square width 
gapBetweenCenters = 100;

colors1 = [{r : 255, g : 255, b : 255}, //0 white
{r : 206, g : 60, b : 99}, //1 pink
{r : 251, g : 233, b : 183}, //2 cream
{r : 4, g :  185, b : 176}, //3 teal
{r : 92, g :  40, b : 52} //4 brown
];

colors2 = [{r : 54, g : 0, b : 61}, //dark purple
{r : 111, g : 0, b : 73}, //mauve
{r : 255, g : 74, b : 87}, //salmon
{r : 255, g : 145, b : 86} //tangerine sort of
]; 

colors3 = [{r : 67, g : 70, b : 98}, //dark blue
{r : 255, g : 255, b : 255}, //white
{r : 206, g : 60, b : 99}, //pink
{r : 4, g :  185, b : 176}, //teal
];



function setup() 
{
  createCanvas(600, 600);
  strokeWeight(1);
  noLoop();
}


function draw() 
{
  for (let i = 50; i < width + 1; i += gapBetweenCenters)
  {
    for (let j = 50; j < height + 1; j += gapBetweenCenters)
    {
      pyramid(i, j);
    }
  }
}


function pyramid(centerX, centerY)
{
  push();
  translate(centerX, centerY);
  
  let ptX = 0;
  let ptY = 0;
  
  let rand = random(colors3);
  
  stroke(rand.r, rand.g, rand.b);
  fill(rand.r, rand.g, rand.b);
  triangle(-vertice, -vertice, vertice, -vertice, ptX, ptY); //top triangle

  let rand1 = random(colors3);
  
  stroke(rand1.r, rand1.g, rand1.b);
  fill(rand1.r, rand1.g, rand1.b); 
  triangle(vertice, -vertice, vertice, vertice, ptX, ptY); //right triangle

  let rand2 = random(colors3);
  
  stroke(rand2.r, rand2.g, rand2.b);
  fill(rand2.r, rand2.g, rand2.b);
  triangle(-vertice, vertice, vertice, vertice, ptX, ptY); //bottom triangle

  let rand3 = random(colors3);
  
  stroke(rand3.r, rand3.g, rand3.b);
  fill(rand3.r, rand3.g, rand3.b);
  triangle(-vertice, vertice, -vertice, -vertice, ptX, ptY); //left triangle
  
  pop();
}
