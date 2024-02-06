var host = '127.0.0.1:8888';
var personOrNot


function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  

  
  // connect to server...
  socket = new WebSocket('ws://' + host);
  socket.onopen = openHandler;
  socket.onmessage = messageHandler;
  
}

function openHandler() {
  console.log("Connected to socket server at " + host);
}

function messageHandler(event) {
  var msg = event.data; // read data from the onmessage event
  personOrNot = msg // converts received message to a note value
  console.log(personOrNot);
  
}


function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  //filter(INVERT);




//   if (personOrNot == 1){
//     image(capture, 0, 0, 320, 240);
//   } else {
//     capture.hide();
//   }
 }

