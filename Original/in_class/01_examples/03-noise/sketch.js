function setup() {
	createCanvas(windowWidth,windowHeight);
}

var t = 0;
var tDelta = 0.02;
var x = 0;
var xDelta = 0.5;


function draw() {
	var n = noise(t);
	// var n = random(0, 1);
	var y = map(n,0,1,0,height);

	stroke(127);
	ellipse(x,y,5,5);


	// Counter Point of Pure Noise
	// var rand_y = random();
	// rand_y = map(rand_y,0,1,0,height);
	// stroke(52);
	// ellipse(x,rand_y,5,5);

	t += tDelta;
	x = x+xDelta;

	if (x>width || x < 0) {
		stroke(random(0,256),random(0,256),random(0,256));

		xDelta = xDelta * -1;
		x = x + xDelta;
	}

	console.log(x, xDelta);

}
