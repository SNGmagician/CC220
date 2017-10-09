function Particle( loc, vel ) {
    this.loc = loc.copy();
    this.vel = vel.copy();
    this.speedLimit = 100;
    this.acc = createVector( 0, 0.1 );
    this.size = 20;
    // in seconds
    this.lifespan = 1.5;


    // initial calc
    this.lifespan = frameRate() * this.lifespan;
    this.timeAlive = this.lifespan;
}

/**
 * calls all other function for this particle obj
 *
 */
Particle.prototype.frame = function(){
    this.update();
    this.display();
    return this.isDead();
};


/**
 * display the particle
 *
 */
Particle.prototype.display = function(){

    var alp = map(this.timeAlive, 0, this.lifespan, 0, 200 );

    noStroke();
    fill( 255, 226, 31, alp );

    ellipse( this.loc.x, this.loc.y, this.size );
};


/**
 * update the particle pos and data
 *
 */
Particle.prototype.update = function(){

    this.vel.add(this.acc);
    this.vel.limit(this.speedLimit);
    this.loc.add(this.vel);

    this.timeAlive--;
};

Particle.prototype.isDead = function(){
    if (this.timeAlive < 0) {
        return true;
    } else {
        return false;
    }
};
