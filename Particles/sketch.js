/* For Monday; Create a Particle Emitter class and array */


var particle;
var ps = [];
var loc;
var vel;


function setup() {
    createCanvas( windowWidth, windowHeight );

    loc = createVector( mouseX,mouseY );
    vel = createVector( 0, 0 );

}


function draw() {
    background( 0 );

    // var acc = createVector( 0.001, -0.01 );
    // vel.add(acc);
    // loc.add(vel);

    var pvel = createVector( random(-1, 1), random(-1, 1) );
    pvel.add(vel);

    ps.push( new Particle( loc, pvel ) );

    for (var i = 0; i < ps.length; i++) {
        var dead;
        dead = ps[i].frame();
        if( dead ) {
            ps.splice(i, 1);
        }
    }
    text( ps.length, 10, 10 );
}
