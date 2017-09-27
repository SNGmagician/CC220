
var ball_x;
var ball_y;
var x_delta;

function setup(){
    createCanvas(windowWidth,windowHeight);
    // background('blue');

    ball_x = width / 2;
    ball_y = height / 2;
}

function draw(){
    // background('white');
    ellipse(ball_x, ball_y, 5, 5);


    // 50% that the ball moves left
    // 25% that the ball moved right or none at all
    var lat = random();
    if (lat < 0.2) {
        x_delta = -10;
    } else if (lat >= 0.2 && lat < 0.8) {
        x_delta = 0;
    } else if (lat >= 0.8) {
        x_delta = 10;
    }

    // ball_x = ball_x + floor(random(-1, 2));
    // ball_y = ball_y + floor(random(-1, 2));
    ball_x = ball_x + x_delta;
    ball_y = ball_y + random( [-10, 0, 10]);

}
