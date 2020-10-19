class KochLine //Each KochLine object has a start point A and end point E //these points are PVector objects
{
  constructor(start, end)
  {
    this.a = start; 
    this.e = end;
  }
  
  generate()
  {
    let children = []; //will have 4 line objects
    
    let v = p5.Vector.sub(this.e, this.a); //end-start=length of line
    v.div(3); //v is now 1/3 length of line
    
    //line ab - [0]
    let b = p5.Vector.add(this.a, v); //start + 1/3 of line (i.e. v)
    children[0] = new KochLine(this.a, b);
    
    //line cd - [2] //d needs to be defined before c, cause v is gonna be rotated after this to find c
    let d = p5.Vector.sub(this.e, v); //basically end - 1/3 of line (v)
    
    //line bc - [1]
    v.rotate(-PI/3); //60 deg to get to point c
    let c = p5.Vector.add(b, v);
    children[1] = new KochLine(b, c);
    
    children[2] = new KochLine(c, d); //this line has to be after c is defined, so can't be with //line cd part
    
    //line de - [3]
    children[3] = new KochLine(d, this.e);
    
    return children;
  }
  
  show()
  {
    let r = random();
    if (r < 0.5)
    {
      stroke(52, 138, 167); //deep blue
    }
    else
    {
      stroke(255, 166, 48); //yellow
    }
    strokeWeight(2);
    line(this.a.x, this.a.y, this.e.x, this.e.y);
  }
}
