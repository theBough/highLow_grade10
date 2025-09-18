//Variables
let myInput, 
    myButton,
    answer = "nothing yet",
    randomNumber;

function setup() {
  createCanvas(300, 300);
  inputStuff()
  makeRandomNumber();
  buttonStuff()
  console.log(randomNumber)
}//end setup
function draw() {
  background("#1B263B");
  makeRect();
  fill("#E0E1DD");
  textSize(28);
  text("High Low", 50, 50);
  push();
  textSize(18);
  text("make a guess", 50, 100);
  text(answer,50,200);
  pop();
  
}//end draw
//--------------------------------------------------------------
function makeRect(){
  push()
  
  fill('#0077b6')//this colour of the rectangle
  stroke('white')//the colour of the border
  rect(20,20,width-40,height-40)//x,y,width,height
  pop()
}//end makeRect
function inputStuff(){
   myInput = createInput();
  myInput.position(50, 120);
}//end inputStuff
function makeRandomNumber(){
  randomNumber = Math.random()
  randomNumber = randomNumber * 100
  randomNumber  =Math.ceil(randomNumber)
}//end makeRandomNumber
function buttonStuff(){
  myButton = createButton("guess");
  myButton.position(50, 140);
  myButton.mousePressed(getAnswer);
}//end buttonStuff
function getAnswer() {
  answer = myInput.value();
  console.log(answer)
}//end getAnswer
