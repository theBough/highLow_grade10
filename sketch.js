//Variables
let myInput, 
    myButton,
    answer = "nothing yet",
    randomNumber,
    feedback = "I will say too high or too low",
    img;

function setup() {
  createCanvas(300, 300);
  inputStuff()
  makeRandomNumber();
  buttonStuff();
  console.log(randomNumber);
  //the green part should be the name of your picture
  img = loadImage("download__1_-removebg-preview.png")
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
  text(feedback,50,200);
  pop();
  pictureStuff();
  
}//end draw
//--------------------------------------------------------------
function pictureStuff(){
  //you may have to change these values. 
  //to make your picture fit
  img.resize(75,75)
  image(img,200,200);
}
function makeRect(){
  push()
  
  fill('#0077b6')//this colour of the rectangle
  stroke('white')//the colour of the border
  rect(20,20,width-40,height-40,20)//x,y,width,height
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
  if(isNaN(answer)){
    feedback = "Please enter Numbers only"
    return;
  }
  //feedback = answer < randomNumber ? "too Low":"too high";
  
  if(answer < randomNumber){
    feedback = "Too Low"
  }else if(answer > randomNumber){
    feedback = "Too high"
  }else{
    feedback = "You got it!!!!!!!"
  }//end if

}//end getAnswer
