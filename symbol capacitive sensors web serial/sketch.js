let port; 
let connectBtn;
let filteredData1 = 0;
let filteredData2 = 0;
let filteredData3 = 0;
let val = 0;
let myVal = 0;
let myVal2 = 0;


function setup() {
  createCanvas(windowWidth,windowHeight);

  port = createSerial();

  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);

}

function draw() {
  background("black");
 
  let filteredData1 = port.readUntil("\n"); //read each line
  let filteredData2 = port.readUntil("\n"); 
  let filteredData3 = port.readUntil("\n");

  if (filteredData1.length > 0) {
   val = filteredData1; 
   // Update circle size with new value
   textSize(40);
   fill("#C70039");
   text(val, 20, 100);
  }

  stroke("#C70039");
  noFill();
  circle(600, 400, val);

   if (filteredData2.length > 0) {
    myVal = filteredData2; 
    // Update circle size with new value
    textSize(40);
    fill("blue");
    text(myVal, 20, 150); 
   }
   stroke("blue");
   noFill();
   circle(600,400,myVal);
  
   if(filteredData3.length >0){
    myVal2 = filteredData3;
    textSize(40);
    fill("yellow");
    text(myVal2, 20, 200); 
   }
   
   stroke("yellow");
   noFill();
   ellipse(600,400,myVal2);

   console.log(filteredData1);
   console.log(filteredData2);
   console.log(filteredData3);
 }

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}