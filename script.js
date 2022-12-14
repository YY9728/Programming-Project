// You can create custom variables here
let shapeColor = 0;
let yPosCircle = 150;
let xPosSquare = 50;
let moveAmount = 0;


/* 
EVERYTHING in the SETUP() function only happens once when the page is first loaded.
This is also an example of a multiline comment. Single Line comments start with //
*/
function setup() {
  createCanvas(500,600);
  //below is anther example that creates a canvas the heigth and width of the browser window
  //createCanvas(windowWidth, windowHeight);

  //setting the background
  background('lightblue');
}

/*
All of the code inside of the DRAW() function runs multiple times per second (usually 60 times per second on most computers).
*/
function draw() {
  //putting the backround function here means there is a fresh screen drawn each time. This is needed if you want to make things look like they're moving across the screen
  background('lightblue'); 
  
  fill('red');
  // this draws a circle 25 pixels across at the location of the mouse.
  circle(mouseX, mouseY, 25);


  // create a text and set font size
  textSize(13);
  text('Move the square left and right with the a and d keys',50,75);
  text('Move the pink ball up and down with the w and s keys',50,50);

  //set the fill color using the shapeColor variable
  fill(shapeColor);
  circle(150,350,75);



  // MOVE square With a and d keys
    if((keyIsPressed == true) && (key=='a')){
    moveAmount = -5; //negative number moves to left
  }else if((keyIsPressed == true) && (key=='d')){
    moveAmount = 5; //positive number moves to right
  }else{
    moveAmount= 0;
  }
  //update the xPosSquare by moveamount (adds or subtracts)
  xPosSquare = xPosSquare + moveAmount;

  
  // MOVE circle With w and s keys
  if((keyIsPressed == true) && (key=='w')){
    moveAmount = -5; //negative number moves up
  }else if((keyIsPressed == true) && (key=='s')){
    moveAmount = 5; //positive number moves down
  }else{
    moveAmount= 0;
  }
//update the yPosCircle by moveamount (adds or subtracts)
  yPosCircle = yPosCircle + moveAmount;
  
  //Circle
  fill('pink')
  circle(250,yPosCircle,90);
  
  //Square
  fill('lightyellow');
  square(xPosSquare,180,100);

}//end draw

//RESPOND to the MOUSE MOVING
function mouseMoved(){
 // This changes the color value when the mouse moves
  shapeColor= shapeColor+2;
}

  //respond to mouse clicked (anywhere on canvas)
function mouseClicked(){
  shapeColor = 0;
}