px = 300;
py = 550;

colors = [{r : 0, g : 134, b : 129}, //tealish
{r : 16, g : 206, b : 193}, //turquoise
{r : 125, g : 46, b : 104}, //purple
{r : 255, g : 204, b : 27}, //sunglow yellow
{r : 208, g : 46, b : 104}, //pinkish
{r : 0, g : 156,b : 129}, //another greenish teal
];



function setup() 
{
  createCanvas(600, 600);
  background(240);
}


function draw() 
{
  //Version 1 - Normal
  //sierpinski(300, 50, 50, 550, 550, 550, 2);
  
  //Version 2 - Glitchy Mix
  sierpinski(300, 50, 50, 550, 550, 550, 3); 
  sierpinski(50, 50, 550, 50, 300, 550, 4); 
}


function sierpinski(x1, y1, x2, y2, x3, y3, ind)
{  
  strokeWeight(3);
  
  for (let i = 0; i < 10; i++) //5000 for fnctn call in setup
  {
    let r = floor(random(3));
    stroke(colors[ind].r, colors[ind].g, colors[ind].b, 160); //alpha for version 1=100
    
    if (r == 0) //Point 1
    {
      let nx = (px + x1) / 2;
      let ny = (py + y1) / 2;
      
      point(nx, ny);
      
      px = nx;
      py = ny;
    }
    
    if (r == 1) //Point 2
    {
      let nx = (px + x2) / 2;
      let ny = (py + y2) / 2;
      
      point(nx, ny);
      
      px = nx;
      py = ny;
    }
    
    if (r == 2) //Point 3
    {
      let nx = (px + x3) / 2;
      let ny = (py + y3) / 2;
      
      point(nx, ny);
      
      px = nx;
      py = ny;
    }
  }
}
