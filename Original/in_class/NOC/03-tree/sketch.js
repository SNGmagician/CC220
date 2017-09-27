var noise_seed = 0.10;

var count = 10;

var min_length;

function setup(){
  createCanvas(500, 500);
  background(255);
}

function draw(){
  background(255);
  strokeWeight(2);
  drawTree(width / 2, height, height / 4, PI / 2);
  min_length = width / 50;
}



function drawTree(x, y, length, angle){
  x2 = x - length * cos(angle);
  y2 = y - length * sin(angle);

  if(length > min_length * 2) {
    stroke(222, 185, 135); // 树干
  } else {
    stroke(167, 202, 165); // 树叶
  }

  line(x, y, x2, y2);
  length /= 1.414; // 黄金分割

  noise_seed += 0.0001;
  count++;
  if(length > min_length) {
    // right
    drawTree(x2, y2, length, angle + noise(noise_seed) * 0.7 + PI / 4);
    // left
    drawTree(x2, y2, length, angle + noise(noise_seed) * 0.7 - PI / 4);
  }
}
