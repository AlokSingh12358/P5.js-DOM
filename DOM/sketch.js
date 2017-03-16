var input;
var button;
var slider;
var paragraph;
var canv;
var x=0;
var r1=0;
var y=0;
var txtc="Your Name";
var bcolor=(100,100,100);
var b1color=(250,250,250);
function setup() {
  canv=createCanvas(200,200);
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canv.position(x,y);
  input=createInput('Your Name');
  button=createButton('Change Ellipse Color');
  paragraph=createP('Click on this paragraph');
  slider=createSlider(0,200,100);
  canv.mousePressed(ccc);
  button.mousePressed(ccb);
  paragraph.mousePressed(ccpt);
}
function ccc()
{
  bcolor=color(random(100,250),random(100,250),random(100,250));
}
function ccb()
{
    b1color=color(random(80,250),random(80,250),random(80,250));
}
function ccpt()
{
  paragraph.style('color','blue');
  paragraph.style('font-size','30px');
  paragraph.style('background-color','yellow');
}
function draw() 
{
 x = (windowWidth - width) / 2;
 y = (windowHeight - height) / 2;
 canv.position(x,y);
 input.position(10,10);
 button.position(10,80);
 slider.position(10,150);
 paragraph.position(10,230);
 background(bcolor);
 strokeWeight(10);
 fill(b1color);
 ellipse(100,100,slider.value(),slider.value());
 fill(256);
 txtc=input.value();
 textSize(13);
 strokeWeight(3);
 text("press on canvas to change color",5,170);
 textSize(20);
 strokeWeight(30);
 text(txtc,50,50);

}