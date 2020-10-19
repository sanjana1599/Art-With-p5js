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
    
    this.startHue = 290; //purple hue //250 //110 //290
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
    //switched x,y of noise val, otherwise x, y vals of both xpos, ypos would be same, would move in diagonals
    //this.velx -= map(noise(this.xpos * 0.005, this.ypos * 0.005, millis() * 0.001), 0, 1, -1, 1);
    //this.vely += map(noise(this.ypos * 0.001, this.xpos * 0.001, millis() * 0.001), 0, 1, -1, 1);
    
    let r = 0.8; //random value
    
    //from the glowing walker tutorial
    this.velx += map(noise(this.xpos * 0.04 * r, this.ypos * 0.04 * r, millis() * 0.0001), 0, 1, -5, 5); 
    this.vely -= map(abs((noise(this.ypos * 0.01, this.xpos * 0.01, millis() * 0.0001))), 0, 1, -1, 1); 
    //0,2 shoots it straight up, so need a neg number in the range too
  }
  
  show()
  {
    strokeWeight(1);
    
    //stroke(this.hues[this.n % this.hues.length], this.saturations[this.n % this.saturations.length], 100, 30);   
    //stroke(this.hues[this.n % this.hues.length], 60, 100, 25); //no need to change saturation really
    
    stroke(random(this.startHue, this.startHue + 100), 70, 100, 25);
    this.n++;
  }
}
