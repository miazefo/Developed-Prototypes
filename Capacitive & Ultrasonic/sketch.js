let port;
let str;
let connectBtn;
let numInputs = 4; //max number of inputs. Change if needed
let values = []; //the list of all your data (physical sensor input)
let d1,d2,d3,d4;

function preload() {
  //preload large images or soundfiles
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(220);
  port = createSerial();
  // any other ports can be opened via a dialog after
  // user interaction (see connectBtnClick below)
  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(10, 20);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  background(0);
  str = port.readUntil("\n"); //read until new line marker
  if(str){
  //receive multiple data streams
  values = int(split(str, ",")); // Split each data string using ' ' as a delimiter/marker and parse to int
  let data = values;
  console.log("values: "+values)//print out each value
  
  for (let i = 0; i < values.length; i++) { //iterate through the list of data
    if (i < numInputs) { //if there are x amount of data
      //display the data
      //text(values[i], 10 + i * 50, height - 20);

      //here is an example of how to access each item of data
      d1 = data[0]; //first item in the list
      d2 = data[1];
      d3 = data[2];
      d4 = data[3];

      console.log(d1);
      console.log(d2);
      console.log(d3);
      console.log(d4);

      // if(d4>95){
      //   background("white");
      // }
      // if (d4 > 70 && d4 <= 95 ){
      //   background("yellow");
      // }
      // if (d4 > 30 && d4 <= 70){
      //   background("green");
      // }
      // if (d4 > 0 && d4 <=30){
      //   background("red");
      // }

      // strokeWeight(d4);
      // stroke("black");
      // circle(200,200,d1);
      // circle(200,200,d2);
      // circle(200,200,d3);
      // ellipse(width / 2, height / 2, d1);
      // ellipse(width / 2, height / 2, d2);
      // ellipse(width / 2, height / 2, d3);
      
      //circle(200,200,d4);

      //if(d1<=600){
        stroke("pink");
        strokeWeight(d4+1);
        noFill();
        circle(800,400,d1);
      //}
      //if(d2<=600){
        stroke("lightyellow");
        strokeWeight(d4+1);
        noFill();
        circle(800,400,d2);
      //}
      //if(d3<=600){
        stroke("lightblue");
        strokeWeight(d4+1);
        noFill();
        circle(800,400,d3);
      //}
    }
  }
}

  // changes button label based on connection status
  if (!port.opened()) {
    connectBtn.html("Connect to Arduino");
  } else {
    connectBtn.html("Disconnect");
  }
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open("Arduino", 115200);
  } else {
    port.close();
  }
}
