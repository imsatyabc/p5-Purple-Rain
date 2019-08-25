splashes = []
var cloudSVG

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(230, 230, 250)
  for (i = 0; i <= 2; i++) {
    splash = new Splash(Math.random() * 4, Math.random() * window.innerWidth)
    splashes.push(splash);
  }
  splashes.forEach((splash, index) => {
    splash.draw();
    splash.process()
    if (splash.y > window.innerHeight) {
      splashes.splice(index, 1);
    }
  });

}

function Splash(mode, x) {
  this.mode = mode
  this.x = x
  this.y = 0
  this.width = mode * Math.floor(1 + Math.random() * 2)
  this.height = mode * (2 + Math.floor(8 + Math.random() * 6))
  this.speed = mode * 6


  this.draw = function () {
    strokeWeight(0)
    fill(138, 43, 226)
    rect(this.x, this.y, this.width, this.height, 20)
  }

  this.process = function () {
    this.y += this.speed;
  }
}