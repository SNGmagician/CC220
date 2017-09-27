
var ball_x;
var ball_y;

function setup(){
    createCanvas(windowWidth,windowHeight);
    // background('blue');

    ball_x = width / 2;
    ball_y = height / 2;
}

function draw(){
    background('white');
    ellipse(ball_x, ball_y, 5, 5);

    // ball_x = ball_x + floor(random(-1, 2));
    // ball_y = ball_y + floor(random(-1, 2));
    ball_x = ball_x + random( [-10, 0, 10]);
    ball_y = ball_y + random( [-10, 0, 10]);

}
