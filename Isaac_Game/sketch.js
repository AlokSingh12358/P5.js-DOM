var animal=[];
var isaac;
var x=300;
var y=300;
var tear=[];
var cont;
function setup() 
{
  createCanvas(600,600);
}



function keyPressed() 
{
  if (keyCode == 87||keyCode ==83 ||keyCode ==65 ||keyCode ==68 ) 
  {
  	tear.push(new bubble(keyCode));
  }

  return false; // prevent default
}
function bubble(c)
{
	this.x=x;
	this.y=y;
	this.move=function ()
	{
		 if(c==87)
		 this.y-=2;
		 else if(c==83)
		 this.y+=2;
		 else if(c==65)
		 this.x-=2;
		 else if(c==68)
		 this.x+=2;
	}
	this.display=function()
	{
		ellipse(this.x,this.y,20,20);
	}
}

function draw() 
{
	 background(200);
	 if(keyIsDown(UP_ARROW))
	 y--;
	 if(keyIsDown(DOWN_ARROW))
	 y++;
	 if(keyIsDown(LEFT_ARROW))
	 x--;
	 if(keyIsDown(RIGHT_ARROW))
	 x++;
	 fill(30,90,180);
  isaac=ellipse(x,y,50,50);
  fill(120);
  ellipse(x-9,y-9,10,10);
  ellipse(x+9,y-9,10,10);
  line(x-10,y+8,x+10,y+8);
  fill(90,180,80)
  for(var i=0;i<tear.length;i++)
  {
  	tear[i].move();
  	tear[i].display();
  }
  
}