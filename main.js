omi = "";
town = "";

function preload(){
    omi = loadSound("cheerleader.mp3");
    town = loadSound("disney.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO)
    video.size(600, 500);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}