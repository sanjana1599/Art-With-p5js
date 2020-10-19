class RandomMover
{
  constructor(cX, cY)
  {
    this.cX = cX;
    this.cY = cY;
    this.xpos = 0;
    this.ypos = 0;   
    
    this.px = this.xpos;
    this.py = this.ypos;
    
    this.velx = random(-2, 2); 
    this.vely = random(-5, -0.2); 
    
    this.startHue = 290; 
    this.n = 0;
  }
  
  
  move()
  {
    this.velocity();
    
    push();
    translate(this.cX, this.cY);
    
    this.xpos += this.velx;
    this.ypos += this.vely;
    
    this.drawLine();
    
    pop();
  }
  
  
  drawLine()
  {
    line(this.xpos, this.ypos, this.px, this.py);
    this.px = this.xpos;
    this.py = this.ypos;
  }
  
  
  isOut()
  {
    return (this.xpos < -this.cX || this.xpos > this.cX || this.ypos < -this.cY || this.ypos > this.cY);
  }
  
  
  velocity()
  { 
    let r = 0.8; //random value
    
    this.velx += map(noise(this.xpos * 0.04 * r, this.ypos * 0.04 * r, millis() * 0.0001), 0, 1, -5, 5); 
    this.vely -= map(abs((noise(this.ypos * 0.01, this.xpos * 0.01, millis() * 0.0001))), 0, 1, -1, 1); 
    //0,2 shoots it straight up, so need a neg number in the range too
  }
  
  show()
  {
    strokeWeight(1); 
    stroke(random(this.startHue, this.startHue + 100), 70, 100, 25);
    this.n++;
  }
}
