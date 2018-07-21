var newC = false;
var previous;
var current;
var nut;
var circles;
var heldPoint;
var speed;

function setup() 
{
  createCanvas(640, 480);
  background(51);
  
  current = createVector(0,0);
  previous = createVector(0,0);
  circles = [];
  heldPoint = [];
  nut = [];
}


function mouseClicked()
{
	circles.push([mouseX, mouseY]);
	heldPoint = [mouseX, mouseY];
	newC = true;
}



function seed(x, y)
{
	this.x = x;
	this.y = y;
	this.diameter = 80;
	this.speed = .6;
	
	this.move = function()
	{
		//console.log(this.y);
		this.y += this.speed;
	};
	
	this.display = function()
	{
		fill(188, 30, 120);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		//console.log('present');
	};
}


function draw() 
{
	background(51);
	fill(255);
/* 	if (circles[0] != null){
		circles[0].move();
		circles[0].display();
	}
 */
	for(var k = 0; k<circles.length; k++)
	{
		nut[k] = new seed(circles[k][0], circles[k][1]);
	}
/* 	for(var i = 0; i<7; i++)
	{
		if(newC == true)
		{
			console.log('hi');
			circles[i] = new seed(heldPoint[0], heldPoint[1]);
		}
		//circles.push(mouseX, mouseY)
		newC = false;
	}
 */	
	
	nut.forEach(nut => 
	{
		nut.display();
		nut.move();
	});
}