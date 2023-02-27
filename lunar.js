
console.log('LINK UP')

function setup() {
  createCanvas(500, 700);
}

function draw() {
  background(220);
  
  
  push();
    translate(250,400)
    ellipse(0,0,275,290);
    fill(100,70,200)
    beginShape();
      noFill()
      strokeWeight(3)
      arc(-50,-70,80,50,PI, 0)
    endShape();

  pop();

};
