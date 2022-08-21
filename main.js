music = "";
music2 = "";

function preload(){
    music = loadSound("music.mp3")
    music2 = loadsound("music2.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
canvas.position(500,225);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,600,500)
}