function setup()
{
  //createCanvas(1200, 600);
  createCanvas(windowWidth, windowHeight);
  
  background(135, 206, 250, 120);

  translate(width*0.25, height*0.25);
  
  var x1,x2,y1,y2, x11, x22, y11, y22;

  strokeWeight(10);
  noFill();   
  push();
  colorMode(RGB, 10);

  rotate(radians(10));
  
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 5; j++) {
        stroke(i, j, 255);
      
        translate(i, -j);

        //x1 = 250;
        x1 = -100;
        //y1 = 1000;
        y1 = 1000;
        //x11 = 300;
        x11 = 700;
        //y11 = -150;
        y11 = 0;
        x2 = -200;
        y2 = 250;
        x22 = -300;
        y22 = -150;
       
      
       
        beginShape();
          vertex(x1, y1);
          bezierVertex(x11,y11, x22, y22, x2, y2); 
       endShape();

       
     }
   }
    pop();
    
    push();
  colorMode(RGB, 10);

  rotate(radians(10));
  
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 5; j++) {
        stroke(i, j, 255);
      
        translate(i, -j);
        x1 = -200;
          y1 = 250;
          x2 = 900;
           y2 = 100;
           x11 = -150;
           y11 = height + 50;
          
          beginShape();
            vertex(x1, y1);
            quadraticVertex(x11, y11, x2, y2); 
          endShape();
        }

      }

        colorMode(RGB, 255);
        stroke(80);
        strokeWeight(2);
      for (var i = 0; i < 10; i++) {
      
        translate(-i , i + 2);
          x1 = -200 - i * 18;
          y1 = 250 - i * 10;
          x2 = 900;
          y2 = 100;
          x11 = -150;
          y11 = height + 50;
        
        beginShape();
          vertex(x1 - 100, height);
          vertex(x1, y1);   
          quadraticVertex(x11, y11, x2, y2);     
        endShape();

        line(x2 - 500 - i * 2 , y2 + 240, x2 - 500 - i * 2, height + 200);
        line(x2 - 300 - i * 2 , y2 + 160, x2 - 300 - i * 2, height + 200);
       
      }
      pop();

  push();
  strokeWeight(1);

  scale(0.7);
  //rotate(radians(-10));

  rotate(radians(45));
  colorMode(RGB, 255);
    for (var i = 0; i < 7; i++) {
      
        translate(i+50, -40);
        rotate(radians(i));

        fill(34,140,34, 10);
        stroke(255,255,0,10);
        rect(60, -120, 110, 40);
        ellipse(90,-120, 20,20);
        ellipse(140, -120, 20,20);

        fill(34,140,34, 50);
        stroke(255,255,0,50);
        rect(120, -120, 110, 40);
        ellipse(110, -120, 20,20);
        ellipse(100, -120, 20,20);

        fill(34, 140,34, 100);
        stroke(255,255,0, 100);
        rect(140, -120, 110, 40);
        ellipse(130, -120, 20,20);
        ellipse(180, -120, 20,20);

        fill(34,140,34,150);
        stroke(255,255,0, 150);
        rect(120, -120, 110, 40);
        ellipse(150, -120, 20,20);
        ellipse(200, -120, 20,20);
        
        fill(34,140,34,200);
        stroke(255,255,0,200);
        rect(140, -120, 110, 40);
        ellipse(170, -120, 20,20);
        ellipse(210, -120, 20,20);

        fill(34,140,34,255);
        stroke(255,255,0,255);
        rect(180, -120, 110, 40);
        ellipse(210, -120, 20,20);
        ellipse(260, -120, 20,20);
      
    }
  pop();


  noLoop();
}