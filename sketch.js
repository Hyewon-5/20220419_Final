let mm;
//let mm2;

let amp;
let vol;
let button;

let jumpV;

let slider;
let sliderPan;
let sliderRate;

let img;
let img2;


let mm2;

let amp2;
let vol2;
let button2;

let jumpV2;

let slider2;
let sliderPan2;
let sliderRate2;

// let img3;
// let img4;


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
  
  
  amp2 = new p5.Amplitude(); //2번째 노래
  vol2 = 0.5;
  button2 = createButton("PLAY");
  button2.mousePressed(playMusic);
  
  buttonPause2 = createButton("PAUSE");
  buttonPause2.mousePressed(pauseMusic);
  
  buttonJump2 = createButton("<<");
  buttonJump2.mousePressed(jumpSong2);  
  buttonJump2 = createButton(">>");
  buttonJump2.mousePressed(jumpSong);
  jumpV2 = 0;
  
  slider2 = createSlider(0, 2, 0.5, 0.1);
  sliderRate2 = createSlider(0, 2, 1, 0.1);

}

function draw() {
  image(img2, 0, 0, 640, 640);
  //img2 = loadImage("stage.PNG");
 // background(220);
  
  mm.setVolume(vol);
  vol = slider.value();
  mm.rate(sliderRate.value());
  
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
function jumpSong2() {
  jumpV = jumpV - 17.3424;
  if(jumpV <= 17.3424){
    jumpV = 0;
  }
  mm.jump(jumpV);
}


