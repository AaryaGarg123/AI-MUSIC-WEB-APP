song = "";
song1 = "";

function preload() {
    song = loadSong("music.mp3");
    song1 = loadSong("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = craeteCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function sound() {
    song.sound();
    song1.sound();
}