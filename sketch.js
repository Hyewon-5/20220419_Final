let mm;
//let mm2;

let amp;
let vol;
let button;

let jumpV;


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
  
  buttonPause = createButton("PAUSE");
  buttonPause.mousePressed(pauseMusic);
  
  buttonJump = createButton(">>");
  buttonJump.mousePressed(jumpSong);
  jumpV = 0;

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

function pauseMusic() {
  if (!mm.isPlaying()) {

  } else {
    mm.pause();
    button.html("PLAY");
  }
}

function jumpSong() {
  jumpV = jumpV + 17.3424;
  if(jumpV + 17.3424 >= 173.424){
    jumpV = 173.423;
  }
  mm.jump(jumpV);
}