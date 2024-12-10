let mm;

let amp;
let vol;
let button;

let jumpV;

let slider;
let sliderRate;

let img;
let img2;


let mm2;

let amp2;
let vol2;
let button2;

let jumpV2;

let slider2;
let sliderRate2;

function preload() {
  soundFormats("mp3");
  mm = loadSound("strategy.mp3");
  mm2 = loadSound("TickTack.mp3");
}


function setup() {
  img2 = loadImage("stage.PNG");
  img = loadImage("twice.png");
  
  
  createCanvas(640, 640);
  
  amp = new p5.Amplitude();
  vol = 0.5;
  button = createButton("PLAY");
  button.mousePressed(playMusic);
  
  buttonPause = createButton("PAUSE");
  buttonPause.mousePressed(pauseMusic);
  
  buttonJump = createButton("<<");
  buttonJump.mousePressed(jumpSong2);  
  buttonJump = createButton(">>");
  buttonJump.mousePressed(jumpSong);
  jumpV = 0;
  
  slider = createSlider(0, 2, 0.5, 0.1);
  sliderRate = createSlider(0, 2, 1, 0.1);
  
  amp2 = new p5.Amplitude();
  vol2 = 0.5;
  button2 = createButton("PLAY");
  button2.mousePressed(playMusic2);
  
  buttonPause = createButton("PAUSE");
  buttonPause.mousePressed(pauseMusic2);
  
  buttonJump = createButton("<<");
  buttonJump.mousePressed(jumpSong4);  
  buttonJump = createButton(">>");
  buttonJump.mousePressed(jumpSong3);
  jumpV2 = 0;
  
  slider2 = createSlider(0, 2, 0.5, 0.1);
  sliderRate2 = createSlider(0, 2, 1, 0.1);

}

function draw() {
  image(img2, 0, 0, 640, 640);
  
  mm.setVolume(vol);
  vol = slider.value();
  mm.rate(sliderRate.value());
  
  mm2.setVolume(vol2);
  vol2 = slider2.value();
  mm2.rate(sliderRate2.value());
  
  image(img, 150+amp.getLevel()*300, 0, 279, 652);
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

function playMusic2() {
  if (!mm2.isPlaying()) {
    mm2.play();
    button2.html("STOP");
  } else {
    mm2.stop();
    button2.html("PLAY");
  }
}

function pauseMusic() {
  if (!mm.isPlaying()) {

  } else {
    mm.pause();
    button.html("PLAY");
  }
}

function pauseMusic2() {
  if (!mm2.isPlaying()) {

  } else {
    mm2.pause();
    button2.html("PLAY");
  }
}


function jumpSong() {
  jumpV = jumpV + 17.3424;
  if(jumpV + 17.3424 >= 173.424){
    jumpV = 173.423;
  }
  mm.jump(jumpV);
}
function jumpSong2() {
  jumpV = jumpV - 17.3424;
  if(jumpV <= 17.3424){
    jumpV = 0;
  }
  mm.jump(jumpV);
}

function jumpSong3() {
  jumpV = jumpV + 17.3424;
  if(jumpV + 17.3424 >= 173.424){
    jumpV = 173.423;
  }
  mm2.jump(jumpV);
}
function jumpSong4() {
  jumpV = jumpV - 17.3424;
  if(jumpV <= 17.3424){
    jumpV = 0;
  }
  mm2.jump(jumpV);
}