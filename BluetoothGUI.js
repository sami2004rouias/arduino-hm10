/*  
 * Bluetooth Test - Processing Side (In Chrome)
 * Arduino to HM10 module to Google Chrome
 * https://www.amazon.com/gp/product/B06WGZB2N4/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1
 * 
 * p5.ble.js
 https://yining1023.github.io/p5ble-website/
 
 * kevin darrah
 * 
 * Twitter: https://twitter.com/KDcircuits
 * For inquiries or design services:
 * https://www.kdcircuits.com
 * 
 * License?  Do whatever you want with this code - it's just a sample
 */
 
 //globals
let blueToothCharacteristic;//this is a blu
let receivedValue = "";

let blueTooth;
let isConnected = false;


var millisecondTimerStart;





function setup() {

  createCanvas(windowWidth, windowHeight);
  
  
  // Create a p5ble class
  console.log("setting up");
  blueTooth = new p5ble();
  document.getElementById('up').addEventListener('click', startUP);
  document.getElementById('led').addEventListener('click', LED);
  document.getElementById('stop').addEventListener('click', STOP);
  document.getElementById('down').addEventListener('click', startDOWN);
  
  document.querySelector('#connect').onclick = connectToBle;
  
  
  function startUP() {
    sendData("U");
    console.log("UP pressed");
  }
  function STOP() {
    sendData("S");
    console.log("UP pressed");
  }
  function startDOWN() {
    sendData("D");
    console.log("DOWN pressed");
  }

  function LED() {
    sendData("L");
    console.log("Button released");
  }
}


function draw() {
  drawScreen();
}

