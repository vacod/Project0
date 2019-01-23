// Project0: This code enerates a custom (non-moving) shape
// inspired by the words “steep and fast”

// Author: Valerie Baker
// Date : 01/23/19

// This is a drawn picture of a roller coaster created with 
// a combination of shapes made of bezier, quadratic and regular 
// vertices. 
// The drawing uses the 'translate' command to create the image
// thickness with different shades / gradients.

function setup()
{
  //createCanvas(1200, 600);
  // Window size is defined by the 'body' <style>
  createCanvas(windowWidth, windowHeight); 
  background(135, 206, 250, 120);
  translate(width*0.25, height*0.25);
  
  var x1,x2,y1,y2, x11, x22, y11, y22;

  // Roller coaster loop

  strokeWeight(10);
  noFill();   
  push();
  colorMode(RGB, 10);
  rotate(radians(10));
  
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 5; j++) {
      stroke(i, j, 255);   
      translate(i, -j);
      x1 = -100;
      y1 = 1000;
      x11 = 700;
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
    
  // Roller coaster slide

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

  // Roller coaster support rails

  colorMode(RGB, 255);
  stroke(80);
  strokeWeight(2);
  for (var i = 0; i < 10; i++) {
    translate(-i , i);
      x1 = -200 - i * 18;
      y1 = 250 - i * 10;
      x2 = 900;
      y2 = 100;
      x11 = -150;
      y11 = height + 50;
    
    // Curved rails with support
    beginShape();
      vertex(x1 - 100, height);
      vertex(x1, y1);   
      quadraticVertex(x11, y11, x2, y2);     
    endShape();

    // Support rails
    line(x2 - 700 , y2 + 320, x2 - 700, height + 200);
    line(x2 - 300 - i * 2 , y2 + 160, x2 - 300 - i * 2, height + 200);  
  }

  // Horizontal rails
  rotate(radians(-10));
  line(-width * 2, height - 150 , 1200, height - 150);
  line(-width * 2, height - 170 , 1200, height - 170);
  line(-width * 2, height - 190 , 1200, height - 190);
  line(-width * 2, height - 210 , 1200, height - 210);
  pop();

  // Riding cars with alpha changes to simulate movement
  push();
  strokeWeight(1);
  scale(0.7);
  rotate(radians(60));
  colorMode(RGB, 255);
  for (var i = 0; i < 7; i++) {
    
    translate(i + 50, -40);
    rotate(radians(i));

    fill(34,140,34, 10);  // almost translucid green
    stroke(255,255,0,10);
    rect(0, -60, 110, 40);
    ellipse(30, -60, 20,20);
    ellipse(80, -60, 20,20);

    fill(34,140,34, 50);
    stroke(255,255,0,50);
    rect(20, -60, 110, 40);
    ellipse(50, -60, 20,20);
    ellipse(100, -60, 20,20);

    fill(34, 140,34, 100);  // semi translucid green
    stroke(255,255,0, 100);
    rect(40, -60, 110, 40);
    ellipse(70, -60, 20,20);
    ellipse(120, -60, 20,20);

    fill(34,140,34,150);
    stroke(255,255,0, 150);
    rect(60, -60, 110, 40);
    ellipse(90, -60, 20,20);
    ellipse(140, -60, 20,20);
    
    fill(34,140,34,200);
    stroke(255,255,0,200);
    rect(80, -60, 110, 40);
    ellipse(110, -60, 20,20);
    ellipse(160, -60, 20,20);

    fill(34,140,34,255);      // green color
    stroke(255,255,0,255);
    rect(100, -60, 110, 40);
    ellipse(130, -60, 20,20);
    ellipse(180, -60, 20,20); 
  }
  pop();

  noLoop();
}