var mySong, amplitude;

function preload() {
    mySong = loadSound('assets/massiveAttackAngel.mp3');
}

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    mySong.play();

    amplitude = new p5.Amplitude();
}

function draw() {
    background(5);

    noFill();
    stroke(255);

    var level = amplitude.getLevel();

    var vol = map(level, 0,1,0,10);

    beginShape();
    for (var x=0; x < width; x++){
        var nx = map(x,0,width,0,vol);
        var y = height * noise(nx);
        vertex(x, y);
    }
    endShape();
}