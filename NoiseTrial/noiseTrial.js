let gap = 50;

let bgCol = [
{r : 0, g : 27, b : 46}, //oxford blue
{r : 69, g : 5, b : 12}, //deep red
{r : 45, g : 17, b : 21}, //dark sienna
]; 

let col = [
{r : 0, g : 76, b : 96}, //midnight eagle green
{r : 160, g : 14, b : 7}, //red
{r : 101, g : 37, b : 71}, //mauve
]; 

let colNum = 0;



function setup()
{
	createCanvas(600, 600);
	background(bgCol[colNum].r, bgCol[colNum].g, bgCol[colNum].b);
	strokeWeight(2);

	//Noisy Cloud Texture
	// for (let i = gap; i < width - gap; i += 1)
	// {
	// 	for (let j = gap; j < height - gap; j += 1)
	// 	{
	// 		let colr = map(noise(i/100, j/100), 0, 1, 0, 255);
	// 		stroke(100, colr, 200);
	// 		fill(100, colr, 200);
	// 		ellipse(i, j, 4, 4);			
	// 	}
	// }

	//Stripes
	for (let i = gap; i < width - gap; i += 3)
	{
		for (let j = gap; j < height - gap; j += 1)
		{
			// noStroke();
			// fill(200, 45, 150);
			// ellipse(i, j, 2, 2);

			let i2 = i + map(noise(j/80, i/80), 0, 1, -50, 50);
			let j2 = j + map(noise(i/80, j/80), 0, 1, -50, 50); 
			noStroke();
			fill(col[colNum].r, col[colNum].g, col[colNum].b);
			ellipse(i2, j2, 1, 1);
		}
	}
}


function keyPressed()
{
	if (keyCode == ENTER)
	{
		saveFrames('out', 'png');
	}
}


function draw()
{

}