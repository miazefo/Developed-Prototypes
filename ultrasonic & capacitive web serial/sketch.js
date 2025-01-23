let port; 
let connectBtn;
//let touchData = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //background("white");
  port = createSerial();

  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  
  let sonar = port.readUntil("\n");
  let touchData = port.readUntil("\n");

  if(sonar>95){
    background("white");
  }
  if (sonar > 70 && sonar <= 95 ){
    background("yellow");
  }
  if (sonar > 30 && sonar <= 70){
    background("green");
  }
  if (sonar > 0 && sonar <=30){
    background("red");
  }

// if (touchData === TRUE){
//   ellipse(200,200,200);
// }
 
  console.log(sonar);
  console.log(touchData);
 }

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 115200);
  } else {
    port.close();
  }
}