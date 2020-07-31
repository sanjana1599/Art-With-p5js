//"Vertical lines, not straight, not touching, covering the wall evenly."
// Wall Drawing #46 (1970)
//Sol Lewitt

yIncr = 6;
gap = 12;
xoff = 0;

colors = [{r : 186, g : 76, b : 74}, //dark red 0
{r : 71, g : 82, b : 128}, //dark blue 1
{r : 40, g : 128, b : 110}, //seaweed 2
{r : 156, g : 255, b : 235}, //cyan 3
{r : 206, g : 255, b : 31}, //lime 4 
{r : 223, g : 255, b : 107}, //light lime 5
{r : 255, g : 255, b : 200}, //light red 6
{r : 219, g : 226, b : 255}, //light blue 7
{r : 128, g : 209, b : 193}, //cyan green 8
{r : 103, g : 128, b : 15}, //dark green 9
{r : 68, g : 189, b : 144}, //ocean green 10
{r : 248, g : 144, b : 68}, //orange 11
{r : 162, g : 0, b : 93}, //purple 12
{r : 69, g : 28, b : 25} //dark brown 13
];

function setup() 
{
  createCanvas(800, 500);
  stroke(colors[11].r, colors[11].g, colors[11].b);
  strokeWeight(2);
  strokeJoin(ROUND);
  noFill();
}


function draw()
{
  background(colors[13].r, colors[13].g, colors[13].b);
  for ( let x = 15; x < width - 5; x += gap)
  {
    beginShape();
    for (let y = 0; y < height + 20; y += yIncr) //bumps in line
    {
      vertex(x + map(noise(xoff), 0, 1, -5, 5), y);
      xoff += 0.3; //smoothness of bumps 
    }
    endShape();
  }
  noLoop();
  //saveFrames('output', 'png');
}
