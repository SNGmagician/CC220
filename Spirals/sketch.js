/* FREAKING AWESOME! */


var objs = [];
var delay = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');

  objs.push(
    new Spiral(width / 2, height / 2, 12, 128, 'clockwise', 'rgba(255, 0, 0, 0.69)', 'rgba(0, 0, 255, 0.76)')
  );



  // objs.push(
  //     new Spiral( 3*width/4, height/2, 10, 64, 'counter', 'rgba(52, 221, 170, 0.69)' )
  // );
}

function draw() {

  for (var i = 0; i < objs.length; i++) {
    objs[i].frame();
  }
noStroke();
fill(0, 0, 0);
ellipse(width/2, height/2, 35);

}




function Spiral(x, y, diam, rot_delta, dir, color1, color2) {
  this.pos = {
    r1: 0,
    r2: 0,
    theta1: 0,
    theta2: 0
  };
  this.loc1 = createVector(x, y);
  this.loc2 = createVector(x, y);
  this.cart = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  };
  this.diam = diam;
  this.delta = rot_delta;
  this.dir = dir;
  this.color1 = color1;
  this.color2 = color2;
}

Spiral.prototype.frame = function() {
  this.update();
  this.display();
};


Spiral.prototype.update = function() {
  this.cart.x1 = this.pos.r1 * cos(this.pos.theta1);
  this.cart.y1 = this.pos.r1 * sin(this.pos.theta1);

  this.pos.r1 += (this.diam * 2) / (this.delta * 2);

  if (frameCount > delay) {

  this.cart.x2 = (this.pos.r2 - this.diam) * cos(this.pos.theta2);
  this.cart.y2 = (this.pos.r2 - this.diam) * sin(this.pos.theta2);

  this.pos.r2 += (this.diam * 2) / (this.delta * 2);
}

  if (this.dir == 'clockwise') {
    this.pos.theta1 += PI / this.delta;
    this.pos.theta2 += PI / this.delta;
  } else {
    this.pos.theta1 -= PI / this.delta;
    this.pos.theta2 -= PI / this.delta;
  }

};

Spiral.prototype.display = function() {
  push();

  translate(this.loc1.x, this.loc1.y);
  // line( 0, 0, cart_coor.x, cart_coor.y );
  noStroke();
  fill(this.color1);
  ellipse(this.cart.x1, this.cart.y1, this.diam);
  pop();

  push();
  translate(this.loc2.x, this.loc2.y);
noStroke();
  if (frameCount > delay) {
    fill(this.color2);
    ellipse(this.cart.x2, this.cart.y2, this.diam);
  }

  pop();
};
