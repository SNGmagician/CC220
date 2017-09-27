var mover;
// Shark
var Sx = 100;
var Sdx = 2;
var Sy = 100;
var Sdy = 1;
var Srot = 0;
// Fish
var FxI = 100;
var Fdx = 2;
var FyI = 100;
var Fdy = 1;
// var Fvelx = 1;
// var Fvely = 1;
// var Frot = 0;
var Fish = [];
var Fcol = {
  r: 255,
  g: 145,
  b: 0
};

function setup() {

  createCanvas(windowWidth, windowHeight);
  mover = new Mover();



  Fcol.r = random(75, 255);
  Fcol.g = random(75, 255);
  Fcol.b = random(75, 150);
  for (var i = 0; i < 60; i++) {
    Fish.push(new fish(random(0, width), random(0, height)));
  }
}

function draw() {
  background(12, 101, 166);
  mover.update();
  mover.display();

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

  if (Sdx <= 0) {
    Srot = PI;
  } else {
    Srot = 0;
  }

  push();
  translate(Sx, Sy);
  rotate(Srot);
  shark();
  pop();

  // Fish
  // fish.vel = {
  //   x: random(-2, 2),
  //   y: random(-2, 2)
  // };
  for (var i = 0; i < 60; i++) {
    Fish[i].display(Fcol.r, Fcol.g, Fcol.b);
    Fish[i].move(random(-3,3),random(-3,3));

  }

  function shark() {
    fill(120, 120, 120);
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
  this.pos = {
    x: FxI,
    y: FyI
  };

  // this.vel = {
  //   x: random(-2,2),
  //   y: random(-2,2)
  //
  // };

}
fish.prototype.display = function(r, g, b) {
  push();
  fill(r, g, b);
  translate(this.pos.x, this.pos.y);
  ellipse(0, 0, 20, 20);
  pop();
};

fish.prototype.move = function(Fvelx,Fvely) {
  if (this.pos.x >= width) {

    Fvelx = -100;
    console.log("BOUNCE");

  } else if (this.pos.x <= 0) {

    Fvelx = 100;
    console.log("BOUNCE");
  }
  if (this.pos.y >= height) {

    Fvely = -100;
    console.log("BOUNCE");

  } else if (this.pos.y <= 0) {

  Fvely = 100;
    console.log("BOUNCE");

  }

  if ((dist(this.pos.x, this.pos.y, Sx, Sy) <= 100) && (this.pos.y - Sy <= this.pos.x - Sx)) {
    Fvelx = 10;
    console.log("RUN");
  } else if ((dist(this.pos.x, this.pos.y, Sx, Sy) <= 100) && (this.pos.y - Sy >= this.pos.x - Sx)){
    Fvely = 10;
  } else if ((dist(this.pos.x, this.pos.y, Sx, Sy) <= 100) && (this.pos.y - Sy <= this.pos.x - Sx)) {

  }

  this.pos.x += Fvelx;
  this.pos.y += Fvely;
};






function Mover() {
    this.loc = createVector(width/2,height/2);

    this.velocity = createVector(0,0);

    this.acc = createVector(0,0);



}

Mover.prototype.display = function() {
    text(this.acc, 10, 10);

    push();
    translate(this.loc.x, this.loc.y);

    triangle(-10,-10,10,-10,0,10);
    pop();

};

Mover.prototype.update = function() {

    this.shark = createVector(Sx,Sy);
if (dist(this.loc.x, this.loc.y, Sx, Sy) < 100) {

    this.acc = p5.Vector.sub(this.shark, this.loc);
    // this.acc.normalize();
  }else if (dist(this.loc.x, this.loc.y, Sx, Sy) < 150) {
    this.velocity = createVector(0,0);
  }else if (dist(this.loc.x, this.loc.y, Sx, Sy) >150) {
    this.acc.rotate(random(0,TWO_PI));
  }
    this.acc.setMag(0.02);
    this.acc.rotate(PI);




    this.velocity.add(this.acc);

    // limit the max velocity
    this.velocity.limit(10);

    this.loc.add(this.velocity);

    this.checks();
};

Mover.prototype.checks = function() {

    if (this.loc.x > width) {
        this.loc.x = 0;
    } else if (this.loc.x < 0) {
        this.loc.x = width-1;
    }

    if (this.loc.y > height) {
        this.loc.y = 0;
    } else if (this.loc.y < 0) {
        this.loc.y = height-1;
    }

    if (this.velocity.mag() > 19) {
        this.acc.rotate(PI);
    }

};
