function setup()
{
  createCanvas(1200, 600);

  var bkg = loadImage('bkg.png');
  bkg.resize(width, height);
  
  background(135, 206, 250);
  background(bkg);

  translate(width*0.25, height*0.25);

  

  //triangle(0, height, width, 0, width, height);
  
  var x1,x2,y1,y2, x11,x22,y11,y22;
 
  // scale(0.9);
  // translate(width*0.25, height*0.4);
  // rotate(radians(-10));

  strokeWeight(10);
  noFill();

  push();
  colorMode(RGB, 10);

  //scale(0.9);
  //translate(width*0.25, height*0.25);
  rotate(radians(-10));
  
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 5; j++) {
        stroke(i, j, 255);
      
        translate(i, -j);

        x1 = 300;
        y1 = 1000;
        x11 = 300;
        y11 = -150;
        x2 = -250;
        y2 = 150;
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

  //scale(0.9);
  //translate(width*0.25, height*0.25);
  rotate(radians(-10));
  
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 5; j++) {
        stroke(i, j, 255);
      
        translate(i, -j);
        x1 = -250;
          y1 = 150;
          x2 = 800;
           y2 = 10;
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
      for (var i = 0; i < 20; i++) {
      for (var j = 0; j < 1; j++) {
        //stroke(i, j, 255);
      
        translate(i , j + 30);
        x1 = -250;
          y1 = 150;
          x2 = 800;
           y2 = 10;
           x11 = -150;
           y11 = height + 50;
          
         beginShape();
            vertex(x1, height);
            vertex(x1, y1);
           
             quadraticVertex(x11, y11, x2, y2);
             vertex(0, height);   
           endShape();

        
          line(x1,y1, 0, height);
         }

        }
        pop();

    


  push();
  strokeWeight(1);

  scale(0.7);
  rotate(radians(-10));

  rotate(radians(45));
  colorMode(RGB, 255);
    for (var i = 0; i < 7; i++) {
      
        translate(i+50, -40);
        rotate(radians(i));

        fill(34,140,34, 10);
        stroke(255,255,0,10);
        rect(-50, 20, 110, 40);
        ellipse(-20,20, 20,20);
        ellipse(30,20, 20,20);

        fill(34,140,34, 50);
        stroke(255,255,0,50);
        rect(-30, 20, 110, 40);
        ellipse(0, 20, 20,20);
        ellipse(50,20, 20,20);

        fill(34,140,34, 100);
        stroke(255,255,0, 100);
        rect(-10, 20, 110, 40);
        ellipse(20, 20, 20,20);
        ellipse(70, 20, 20,20);

        fill(34,140,34,150);
        stroke(255,255,0, 150);
        rect(10, 20, 110, 40);
        ellipse(40, 20, 20,20);
        ellipse(90, 20, 20,20);
        
        fill(34,140,34,200);
        stroke(255,255,0,200);
        rect(30, 20, 110, 40);
        ellipse(60, 20, 20,20);
        ellipse(110,20, 20,20);

        fill(34,140,34,255);
        stroke(255,255,0,255);
        rect(50, 20, 110, 40);
        ellipse(80, 20, 20,20);
        ellipse(130, 20, 20,20);
      
    }
  pop();


  noLoop();
}