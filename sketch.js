let angle = 0;
let w = 25;

function setup(){
  createCanvas(400,400,WEBGL);
}

function draw(){
  background(0)
  
  rectMode(CENTER);

  let offset = 0;
  for (let x = 0; x< width; x+=w){
    let a = angle +offset;
    let h = map(sin(a), -1,1,0,100);
    fill(255);
    rect(x-width/2 +w,0,w-2,h);
    offset += 0.1;
  }
  angle+= 0.1;
}