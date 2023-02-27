
console.log('LINK UP')


function setup() {
  createCanvas(500, 700);
}

function draw() {
  background(20);
  let faceCol = color(140,70,200)
  let eyebrowCol = color(255,255,255)
  let missingNoseCol = color(20,20,20)

  
  push();
    translate(250,400)
    fill(faceCol)
    ellipse(0,0,275,290);

    //eyebrow
    beginShape();
      noFill()
      stroke(eyebrowCol)
      strokeWeight(3)
      arc(-50,-50,90,45,PI, -0.2)
    endShape();


    // nose
    beginShape()
        stroke(missingNoseCol)
        vertex(0,-20)
        bezier(0,-20,-70,7,-40,50,-10,40)
    endShape()

  pop();

};
