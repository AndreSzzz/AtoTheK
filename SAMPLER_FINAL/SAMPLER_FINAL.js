var multiplier = 0.1;
var song;

function preload() {
    font = loadFont('data/Reverto.otf');
    song = loadSound ('data/Ambience.mp3');
     }
  
     /*This piece of code was collected from p5.js.org/examples, 
    in order to learn how to manipulate sound*/
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(188, 2, 2);
  } else {
    song.play();
    background(164, 6, 209);
  }
}
              
function keyPressed() {
   clear();
  background(0,50);
  textFont(font); 
  textSize(400);
  text(key, height/1, width/3.5);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
          
 /*This code has been taken from The Coding Train's "Steering Behaviours" video.
 It has been altered and adpated to my font*/
    // Retrieve text points
    points = font.textToPoints('Reverto', height/2.5, width/3.5, 400, {
        sampleFactor: 0.1,
      
    });
}

// called every frame
function draw() {
    var trail = map(mouseY, 0, height, 1, 10);
    fill(0, trail);
    rect(0, 0, width, height);

    noStroke();
    for(let i= 0; i < points.length; i++) {
        // Set color
        fill(153, 102, 255);

        // Get locations
        var p = points[i];
        amt = map(mouseX, 0, width, 0, 80);
        var nX = noise(p.x + p.y + (frameCount * multiplier));
        var locX = map(nX, 0, 1, -amt, amt);
        var nY = noise(p.x + p.y + 2 + (frameCount * multiplier));
        var locY = map(nY, 0, 1, -amt, amt);
        // create ellipse
        ellipse(p.x + locX, p.y + locY, 2, 2);
    }
}
