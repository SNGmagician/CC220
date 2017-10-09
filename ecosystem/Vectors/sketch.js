var mover;
// Shark
var Sa;
var Sx = 100;
var Sdx = 2;
var Sy = 100;
var Sdy = 1;
var Srot = 0;
// Fish
var Fa;
var FxI = 100;
var Fdx = 2;
var FyI = 100;
var Fdy = 1;
var Fish = [];
var Fcol = {
  r: 255,
  g: 145,
  b: 0
};

function setup() {

  createCanvas(windowWidth, windowHeight);
  Sdx = random(0.75, 2);
  Sdy = random(0.5, 2);

  Fcol.r = random(75, 255);
  Fcol.g = random(75, 255);
  Fcol.b = random(75, 150);
  for (var i = 0; i < 250; i++) {
    Fish.push(new fish(random(0, width), random(0, height)));
  }
}

function draw() {
  background(12, 101, 166);
  // fish.update();
  // fish.display();

  // Shark
  Sx = Sx + Sdx;
  Sy = Sy + Sdy;



  if (Sx >= width) {
    Sdx = Sdx * (-1);
  } else if (Sx <= 0) {
    Sdx = Sdx * (-1);
  }
  if (Sy >= height) {
    Sdy = Sdy * (-1);
  } else if (Sy <= 0) {
    Sdy = Sdy * (-1);
  }

  // if (Sdx <= 0) {
  //   Srot = PI;
  // } else {
  //   Srot = 0;
  // }

  push();
  translate(Sx, Sy);
  // rotate(Srot);
  shark();
  pop();

  for (var i = 0; i < 250; i++) {
    Fish[i].display(Fcol.r, Fcol.g, Fcol.b);
    Fish[i].move(random(-3, 3), random(-3, 3));
  }

  function shark() {
    fill(120, 120, 120);
    Sa = atan2(Sdy, Sdx);
    rotate(Sa);
    push();
    noStroke();
    ellipse(0, 0, 80, 50);
    rect(0, -25, -25, 50);
    triangle(-25, 20, 5, 20, -15, 60);
    triangle(-25, -20, 5, -20, -15, -60);
    triangle(-25, -25, -25, 25, -200, 0);
    pop();
    ellipse(-30, 0, 40, 5);

  }

}

function fish(FxI, FyI) {
  this.loc = {
    x: FxI,
    y: FyI
  };

  this.loc = createVector(this.loc.x, this.loc.y);

  this.velocity = createVector(0, 0);

  this.acc = createVector(random(-1, 1), random(-1, 1));
}
fish.prototype.display = function(r, g, b) {
  push();
  noStroke();
  fill(r, g, b);
  translate(this.loc.x, this.loc.y);
  if (this.velocity.mag() > 0) {
    rotate(this.velocity.heading() + HALF_PI);
  }
  triangle(-10, 0, 10, 0, 0, 20);
  triangle(-10, 1, 10, 1, 0, -20);
  pop();
};

fish.prototype.move = function() {
  this.shark = createVector(Sx, Sy);
  if (dist(this.loc.x, this.loc.y, Sx, Sy) > 180) {
    this.acc = createVector(random(-1, 1), random(-1, 1));
  } else if (dist(this.loc.x, this.loc.y, Sx, Sy) < 150) {
    this.acc = p5.Vector.sub(this.shark, this.loc);
    // this.acc.normalize();
  } else if (dist(this.loc.x, this.loc.y, Sx, Sy) < 175) {
    this.velocity = createVector(0, 0);
  }
  this.acc.setMag(0.05);
  this.acc.rotate(PI);




  this.velocity.add(this.acc);

  // limit the max velocity
  this.velocity.limit(5);

  this.loc.add(this.velocity);

  this.checks();

};

fish.prototype.checks = function() {

  if (this.loc.x > width) {
    this.loc.x = 0;
  } else if (this.loc.x < 0) {
    this.loc.x = width - 1;
  }

  if (this.loc.y > height) {
    this.loc.y = 0;
  } else if (this.loc.y < 0) {
    this.loc.y = height - 1;
  }

  if (this.velocity.mag() > 19) {
    this.acc.rotate(PI);
  }

};
