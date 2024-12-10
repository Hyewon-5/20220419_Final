let mm;
//let mm2;

let amp;
let vol;
let button;

function preload() {
  soundFormats("mp3");
  mm = loadSound("strategy.mp3");
//  mm2 = loadSound("TickTack.mp3");
}


function setup() {
  createCanvas(640, 640);
  
  amp = new p5.Amplitude();
  vol = 0.5;
  button = createButton("PLAY");
  button.mousePressed(playMusic);
}

function draw() {
  background(220);
}

function playMusic() {
  if (!mm.isPlaying()) {
    mm.play();
    button.html("STOP");
  } else {
    mm.stop();
    button.html("PLAY");
  }
}