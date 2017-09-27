
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var noiseSize = 5;
var zInc = 0.05;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  noStroke();

}

var z = 1;
function draw() {
    background('blue');

    var x1, y1;
    var n;
    var pixelAlphaVal;

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          //   map pixel values to lower numbers
            x1 = map(x, 0, width, 0, noiseSize);
            y1 = map(y, 0, height, 0, noiseSize);

            // Get the ALPHA value of a pixel.
            n = noise(x1,y1,z);
            pixelAlphaVal = floor(map(n, 0, 0.5, 0, 256));

            set(x,y,[0,0,255,pixelAlphaVal]);

          //   console.log(x, y, pixelAlphaVal);


        }
    }
    updatePixels();

    z += zInc;


}
