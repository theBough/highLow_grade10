function setup() {
  createCanvas(300, 300);
}

function draw() {
  background('#1B263B');
  fill('#E0E1DD')
  text("High Low",50,50)
  push()
    textSize(18)
    text("make a guess",50,100)
  pop()
}
