function setup() {
  createCanvas(400, 400);
    background(0);

}

function draw() {
  //background(0);
  fill(0,255,255);
  stroke(0,255,0);
  if(mouseIsPressed)
    circle(mouseX, mouseY, 20);  
}
