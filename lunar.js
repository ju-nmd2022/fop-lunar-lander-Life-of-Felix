function setup() {
    createCanvas(500, 700);
    frameRate(60);
    background(20);
    
}
  // Fall total speed
  let fallTot = 0
  // acceleration total
  let accTot = 0.1

  let pauseStatus = 0
  let smileStart = 0
  let smileEnd = 0

  let noseCol = 20
  flipNoseCol = 1

  startScreen = true

  function draw() {
    let faceCol = color(140,70,200)
    let gameWhite = color(255,255,255)
    let missingNoseCol = color(20,20,20)

    if(startScreen === true){
      push();
      // Start button
      beginShape();
      fill(255)
      textAlign(CENTER);
      textFont('Verdana',70)
      text('Start', 255,130);
      textStyle(NORMAL);
      endShape();

      if(mouseX < 350 && mouseX > 170 && mouseY < 130 && mouseY > 70 && mouseIsPressed === true){
        erase();
        startScreen = false
      }

  
        //Game name
        beginShape();
          fill(noseCol)
          textAlign(CENTER);
          textFont('Times New Roman',70)
          text('Nose', 255,530);
          
          noseCol +=1*flipNoseCol
          if(noseCol===255){
            flipNoseCol = -1
          }if(noseCol === 20){
            flipNoseCol = 1
          }
          
        endShape();
        pop();
    }else{

    
    
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
        stroke(gameWhite)
        strokeWeight(3)
        arc(-65,-50,90,45,PI, -0.2,)
      endShape();

      //eyebrow right
      beginShape();
        noFill()
        stroke(gameWhite)
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

      function redoText(inText,maxMouseX,minMouseX,maxMouseY,minMouseY){
        beginShape();
          fill(gameWhite)
          textAlign(CENTER);
          textFont('Verdana',70)
          text(inText, 0, -250);
        endShape();
        if(mouseX < maxMouseX && mouseX > minMouseX && mouseY < maxMouseY && mouseY > minMouseY && mouseIsPressed === true){
          fallTot = 0
          accTot = 0.1
          pauseStatus = 0
        }

      }
      
      if(accTot < 0.1 && accTot > -0.1 && -200+fallTot >-5 &&-200+fallTot <5 ){
        pauseStatus = 1
        fallTot =200
        smile(smileStart,smileEnd);
        if(smileStart < 0.3){
          smileStart += 0.1
        }
        if(smileEnd <PI -0.3){
          smileEnd += 0.1
        }
        redoText('Redo?',350,140,150,95)
      };
      if(mouseIsPressed === true){
        console.log(mouseX)
      }
      if(pauseStatus === 0 ){
        if (fallTot<350){
        fallTot += 0.2*accTot
        accTot += 0.3
        }else{
          redoText('Retry',350,155,165,95)
        }
        if (keyIsPressed && keyCode === UP_ARROW) {
          accTot -= 1
        }
      }


      noseMaker(0,0,missingNoseCol)
      noseMaker(0,-200+fallTot,gameWhite)

    pop();

  };
  }
  // function draw(){
  //   if(mouseIsPressed === true){
  //     console.clear()
  //     console.log(mouseX + 'x')
  //     console.log(mouseY + 'Y')
      
  //   }
    
  //   // Start button
  //   beginShape();
  //     fill(255)
  //     textAlign(CENTER);
  //     textFont('Verdana',70)
  //     text('Start', 255,130);
  //     textStyle(NORMAL);
  //   endShape();

  //   if(mouseX < 350 && mouseX > 170 && mouseY < 130 && mouseY > 70 && mouseIsPressed === true){
  //     startScreen = fa
  //   }

    
  //   //Game name
  //   beginShape();
  //     fill(noseCol)
  //     textAlign(CENTER);
  //     textFont('Times New Roman',70)
  //     text('Nose', 255,530);
      
  //     noseCol +=1*flipNoseCol
  //     if(noseCol===255){
  //       flipNoseCol = -1
  //     }if(noseCol === 20){
  //       flipNoseCol = 1
  //     }
      
  //   endShape();
    
  // }
