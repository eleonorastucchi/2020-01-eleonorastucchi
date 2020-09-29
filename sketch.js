function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
createCanvas(1000,1000);
background("#568EA6");
angleMode(DEGREES);
}

function draw() {
  // put drawing code here
push();
stroke(lerpColor(color("#568EA6"),color("white"),frameCount/120));
fill(lerpColor(color("#568EA6"),color("white"),frameCount/120));
translate(0,frameCount*8.26);
translate(width/2,0);
ellipse(0,0,20);
pop();

push();
stroke(lerpColor(color("white"),color("#305F72"),frameCount/120));
fill(lerpColor(color("white"),color("#305F72"),frameCount/120));
translate(150,150);
rotate(frameCount*3);
translate(50,0);
ellipse(0,0,80);
pop();

push();
stroke(lerpColor(color("#305F72"),color("white"),frameCount/120));
fill(lerpColor(color("#305F72"),color("white"),frameCount/120));
translate(850,850);
rotate(frameCount*3);
translate(50,0);
ellipse(0,0,80);
pop();


push();
stroke(lerpColor(color("#F18C8E"),color("F0B7A4"),frameCount/120));
noFill();
translate(width/2,height/2);
rotate(frameCount*3);
translate(50,0);
triangle(30, 75, 58, 20, 86, 75);

stroke(lerpColor(color("#FF9966"),color("#F1D1B5"),frameCount/120));
noFill();
translate(100,0);
rect(50,50,100,100);
pop();

  if(frameCount==120) {
    noLoop();
  }

}
