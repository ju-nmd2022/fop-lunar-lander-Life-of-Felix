
console.log('LINK UP')




  
  function setup() {
    createCanvas(500, 700);
    frameRate(60);
  }
  // Fall total speed
  let fallTot = 0
  // acceleration total
  let accTot = 0.1

  let won = 0
  let smileStart = 0
  let smileEnd = 0

  function draw() {
    background(20);
    let faceCol = color(140,70,200)
    let eyebrowCol = color(255,255,255)
    let missingNoseCol = color(20,20,20)

    
    push();
      translate(250,400)
      fill(faceCol)
      ellipse(0,0,275,290);


      //Body
      beginShape();
        stroke(0)
        vertex(-250, 300);
        vertex(-250, 240);
        bezierVertex(-250, 240, 0, 60, 250,240);

        vertex(250, 240)
        vertex(250, 300)
      endShape(CLOSE);

      //eyebrow left
      beginShape();
        noFill()
        stroke(eyebrowCol)
        strokeWeight(3)
        arc(-65,-50,90,45,PI, -0.2,)
      endShape();

      //eyebrow right
      beginShape();
        noFill()
        stroke(eyebrowCol)
        strokeWeight(3)
        arc(65,-50,90,45,PI+0.2, 0)
      endShape();


      
      // nose
      function noseMaker(x1,y1,col){
        translate(x1,y1)
        beginShape();
          fill(0,0,0,0)
          stroke(col);
          vertex(x1,y1);
          bezier(x1,y1,x1-40,y1+20,x1-40,y1+70,x1+10,y1+40);
        endShape();
      }

      // Smile
      function smile(smS,smE){
        beginShape();
          fill(0,0,0,0)
          arc(0,40,200,170,smS,smE)
        endShape();
      };

      function redoText(inText){
        beginShape();
          fill(eyebrowCol)
          textAlign(CENTER);
          textFont('Verdana',70)
          text(inText, 0, -250);
        endShape();
      }
      
      if(accTot < 0.1 && accTot > -0.1 && -200+fallTot >-5 &&-200+fallTot <5 ){
        won = 1
        fallTot =200
        smile(smileStart,smileEnd);
        if(smileStart < 0.3){
          smileStart += 0.1
        }
        if(smileEnd <PI -0.3){
          smileEnd += 0.1
        }
        redoText('Redo?')
      };
      
      if(won === 0 ){
        if (fallTot<350){
        fallTot += 0.2*accTot
        accTot += 0.3
        }else{
          fallTot = 0
          accTot = 0.1
        }
        if (keyIsPressed && keyCode === UP_ARROW) {
          accTot -= 1
        }
      }
      
      
      
      
  
      
      noseMaker(0,0,missingNoseCol)
      noseMaker(0,-200+fallTot,eyebrowCol)


      

      

      

    pop();

  };
