/*Wall Drawing #797 (1995)
Sol Lewitt

The first drafter has a black marker and makes an irregular horizontal line near the top of the wall. 
Then the second drafter tries to copy it (without touching it) using a red marker. 
The third drafter does the same, using a yellow marker. The fourth drafter does the same using a blue marker. 
Then the second drafter followed by the third and fourth copies the last line drawn until the bottom of the wall is reached.*/



order =  [{r : 232, g : 43, b : 43}, //red
{r : 247, g : 242, b : 29}, //yellow
{r : 1, g : 138, b : 230}]; //blue

jumps = [];
a = 0;
a1 = 0;
b = 0;
xoff = 0;

xIncr = 5;
arrLength = 140;



function setup() 
{
  createCanvas(800, 500);
  strokeWeight(4);
  strokeCap(BEVEL);
  strokeJoin(ROUND);
  noFill();
  noLoop();
  
  for (let i = 0; i < arrLength; i ++)
  {
    jumps.push(map(noise(xoff), 0, 1, -20, 20)); //noise values translated to between -20, 20
    xoff += 0.3; //smoothness of bumps 
  }
}



function draw() 
{
  background(255);
  
  //First black line
  stroke(0);
  beginShape();
  for (let x = 0; x < width + 20; x += xIncr) //bumps in line
  {
    vertex(x, 20 + jumps[a % arrLength]);
    a++;
  }
  endShape();
  
  //Rest of the lines
  for (let y = 26; y < height - 15; y += 6)
  {
    a1 = 0;
    stroke(order[b % 3].r, order[b % 3].g, order[b % 3].b);
    
    beginShape();
    for (let z = 0; z < width + 20; z += xIncr) //bumps in line
    {
      vertex(z, y + jumps[a1 % arrLength]);
      a1++;
    }
    endShape();
    
    b++;
  }
}
